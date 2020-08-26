import {db} from '../firbase'
import {auth} from '../firbase'

export const getApis = ()=>(

    db.collection('apis').get()
)

export const addApi = (name, desc) =>{
    db.collection('apis').doc(name)
    .set({nom:name, description:desc})
    .then(() => {
        alert("API AJOUTEE")
    })
    .catch(error => alert(error.message))
    
}

export const removeApi = (id)=>{
    db.collection('apis').doc(id).delete()
    .then(()=>alert("API SUPPRIMER"))
    .catch(error =>alert("ECHOUEE"))
}

export const logout = () => {
    auth.signOut()
    .then()
    .catch(error => console.log(error))
}

export const getCollections = async (id) =>{
    const ref = `apis/${id}/`
    const result = {
        GET: [],
        POST: [],
        DELETE: []
    }

    try{
        await db.collection(ref+"GET").get()
        .then(res =>(
            res.docs.map(doc => result.GET.push({id:doc.id, ...doc.data()}))
        ))
        await db.collection(ref+"POST").get()
        .then(res =>(
            res.docs.map(doc => result.POST.push({id:doc.id, ...doc.data()}))
        ))
        await db.collection(ref+"DELETE").get()
        .then(res =>(
            res.docs.map(doc => result.DELETE.push({id:doc.id, ...doc.data()}))
        ))
    }
    catch(error){
        console.log(error => console.log(error))
    }

    return result
}