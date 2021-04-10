import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const CustomTable = props => {
    const { data , fields , onDelete , ...others} = props;

    const [selectedField , setSelectedField ] = useState(null);

    const rowsData = () => {
        return data.map((value,key)=>{
                const {_id , question , type , answers } = value;
                return (
                    <tr key = {key}>
                        <td>{_id}</td>
                        <td>{question}</td>
                        <td>{type}</td>
                        <td>{answers}</td>
                        {/* <td><Button variant="warning" onClick={()=>onDelete(_id)}>Edit</Button></td> */}
                        <td><Button variant="danger" onClick={()=>onDelete(_id)}>Delete</Button></td>
                    </tr>
                )
        })
    }
    const fieldsData = () => {
        return fields.map((field,key)=>{
           return <th onClick={()=>setSelectedField(field)} style={field===selectedField ? {textDecoration:'underline 1px'} : null} key={key}>{field}</th>
        })
    }
    return (
        <Table responsive striped bordered hover {...others} >
            <thead>
                <tr>
                     {fieldsData()}
                </tr>
            </thead>
            <tbody>
                 {rowsData()}
            </tbody>
        </Table>
    );
}

export default CustomTable;