export const initialState = {
    info:JSON.parse(localStorage.getItem('info')),
    reqType: 'GET'
}

export const actionTypes = {
    SET_INFO:'SET_INFO',
    SET_TYPE: 'SET_TYPE'
}

const reducer = (state=initialState, action) => {

    switch(action.type){
        case actionTypes.SET_INFO:
            localStorage.setItem('info', JSON.stringify(action.value))
            return {
                ...state,
                info:action.value
            }
        case actionTypes.SET_TYPE:
            return{
                ...state,
                reqType:action.value
            }
        default:
            return state
    }
}

export default reducer