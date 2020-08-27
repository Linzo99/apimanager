import React from 'react';
import { useStateValue } from '../stateProvider/StateProvider';
import { actionTypes } from '../stateProvider/reducer';

export const colors={
    'GET':'green-text',
    'POST':'blue-text',
    'DELETE':'red-text'
}

const CollapsibleItem = ({name, content}) => {
    return(
        <li>
            <div className={`collapsible-header ${name && colors[name]} grey lighten-4`}>
                <span>{name}</span>
            </div>
            <div className="collapsible-body">
                {content && content.map(cont => (
                    <Item key={cont.id} item={cont}/>
                ))}
            </div>
            
        </li>
    )
}

const Item = ({item}) =>{
    const {dispatch} = useStateValue()
    const handleClick = (e)=>{
        e.preventDefault()
        dispatch({
            type:actionTypes.SET_INFO,
            value:item
        })
    }
    return(
        <div className="item" onClick={(e)=>handleClick(e)}>
            <span className={`type ${colors[item.type]}`}>{item.type}</span>
            <a href="#info" className="overview grey-text text-darken-2">{item.overview}</a>
        </div>
    )
}



export default CollapsibleItem;
