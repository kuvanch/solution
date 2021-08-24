import axios from "axios"
import { Dispatch } from "redux"
import { fetchData, fetchDataError, fetchDataSuccess } from "../reducers/dataReducer"


export const dataAction = () => {
    return async (dispatch:Dispatch) => {
        try {
            dispatch(fetchData())
            await axios({
                method: 'GET',
                url: 'https://solution-fund.com/api/trader/getAll/dummy',
                headers: { 
                  "Content-type": "application/json",
                  "Authorization": "Bearer OudDwOorhDOBpLZpxjnekDOEnkfTqHGU"
                }
              }).then(res => dispatch(fetchDataSuccess(res.data.traders)))
        } catch (error) {
            dispatch(fetchDataError())
        }
    }
}