export const initialState = {
    info:JSON.parse(localStorage.getItem('info'))
}

export const actionTypes = {
    SET_INFO:'SET_INFO'
}

const reducer = (state=initialState, action) => {

    switch(action.type){
        case actionTypes.SET_INFO:
            localStorage.setItem('info', JSON.stringify(action.value))
            return {
                ...state,
                info:action.value
            }
        default:
            return state
    }
}

export default reducer