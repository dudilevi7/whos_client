import { REACT_APP_WHOS_API } from "../../constants/constants"
import fetchData from "../../services/fetchData"

const updateUserResult = (userId, newResult) => {
    return async (dispatch) => {
        const options = {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, newResult })
        }
        const res = await fetchData(`${REACT_APP_WHOS_API}/api/stats` , options)
        return res;
    }
}
export {
    updateUserResult,
}