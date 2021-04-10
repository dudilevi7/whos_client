import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import CustomTable from "../../components/Table/CustomTable"
import './DashboardContainer.css'
import axios from "axios";

const DashboardContainer = props => {

    const [data, setData] = useState([]);
    const [file, setFile] = useState();
    useEffect(() => {
        setData(props.data)
    }, [props.data])

    const onDelete = id => {
        const updatedData = data.filter(ques => ques._id !== id)
        setData(updatedData);
    }
    const onUpdate = id => {
        const updatedIndex = data.findIndex(elem => elem._id === id);
        const element = { _id: 'update!', username: 'test', Type: 'test' }
        const updatedArray = [...data];
        updatedArray[updatedIndex] = element;
        setData(updatedArray)
    }
    const onAdd = () => {
        const element = { _id: 'test', username: 'test', Type: 'test' }
        const updatedArray = [...data].concat(element);
        setData(updatedArray)
    }
    const fileHandler = event => {
        const file = event.target.files[0];
        setFile(file);
    }
    const sendImage = () => {
        const obj = {username : 'lior',password : '12321', highScore : {result : '107'}}
        const json = JSON.stringify(obj);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('restData', json);

        axios.post("http://localhost:3001/user/register", formData)
            .then(response => console.log(response))
            .catch(err => console.log(err)) //err message is err.response.data
    }
    return (
        <div className="dashContainer">
            <h1 className="title"> WHOS THAT FAMOUS</h1>
            <Button className="mblock" onClick={onAdd}>Add Ques</Button>
            {data.length > 0 && <CustomTable fields={props.fields} data={data} onDelete={onDelete} />}
            <form action="#">
                <div className="imgUpd">
                    <input type="file" onChange={fileHandler} id="file" accept="image/*" />
                </div>
            </form>
            <Button onClick={sendImage}>Upload Image</Button>
        </div>
    )
}
export default DashboardContainer;