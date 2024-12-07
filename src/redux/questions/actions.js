import { REACT_APP_WHOS_API } from "../../constants/constants"
import fetchData from "../../services/fetchData"

const addNewQuestion = (question) => {
    return async (dispatch) => {
        const options = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(question)
        }
        await fetchData(`${REACT_APP_WHOS_API}/api/questions/post-question` , options)
        return;
    }
}
export {
    addNewQuestion,
}