enum ActionType{
    FETCH_DATE = 'FETCH_DATE',
    FETCH_DATE_SUCCESS = 'FETCH_DATE_SUCCESS',
    FETCH_DATE_ERROR = 'FETCH_DATE_ERROR'
}
type stateType = {
    data: any[],
    isLoading: boolean,
    error: string | null
}
type dataActionType = {
    type: string,
    payload?: any
}
const initialState:stateType = {
    data: [],
    isLoading: false,
    error: ''
}

const dataReducer = ( state = initialState, action:dataActionType):stateType => {
    switch (action.type) {
        case ActionType.FETCH_DATE:
            return { isLoading: true, error: null, data: []}
        case ActionType.FETCH_DATE_SUCCESS:
            return { isLoading: false, error: null, data: action.payload}
        case ActionType.FETCH_DATE_ERROR:
            return { isLoading: false, error: 'Error', data: []}
        default:
           return state;
    }
}

export default dataReducer

export const fetchData = (payload?:any) => ({type:ActionType.FETCH_DATE,payload})
export const fetchDataSuccess = (payload?:any) => ({type:ActionType.FETCH_DATE_SUCCESS,payload})
export const fetchDataError = (payload?:any) => ({type:ActionType.FETCH_DATE_ERROR,payload})