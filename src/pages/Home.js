import React, { useEffect, useState } from 'react';
import ApiItem from '../components/ApiItem';
import { getApis } from '../services/Services'

const Home = ({params}) => {
    const [apis, setApis] = useState([])
    useEffect(()=>{
        getApis()
        .then(result => {
            const res = []
            result.docs.map(doc => (
                res.push({...doc.data(), id:doc.id})
            )
            )
            setApis(res)
        })
    },[])
    
    return(
        <div className="container main">
            <div className="row">
                { apis.map( api =>(
                    <ApiItem key={api.id} api={api}/>
                ))}
            </div>
        </div>
    )
}

export default Home;
