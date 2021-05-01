import React, { createContext, useState } from 'react';
import { createMuiTheme, FormControlLabel, MenuItem, MuiThemeProvider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, withStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';

// const TableHeader = withStyles(theme => ({
//     root: {
//         backgroundColor: '#2b2b2b'
//     }
// }))(TableHead)

// const TableHeaderCell = withStyles(theme => ({
//     root: {
//         color: 'white',
//         fontWeight: 'bold'
//     }
// }))(TableCell)

let theme = (bgcolor , color) =>
    createMuiTheme({
        overrides: {
            
            MUIDataTableBodyCell: {
                root: {

                }
            },

              MUIDataTableHeadCell: {
                fixedHeader: {
                    backgroundColor: bgcolor          
                 }
              },
              MuiButton :{
                  label : {
                      color : color
                  }
              },
            MUIDataTableToolbar: {
                root : {
                    backgroundColor: bgcolor  ,
                    color : color,
                },
                left: {
                    flex: 'none',
                }
            },
        },
    });
    
const CustomTable = props => {
    const { data, fields, onDelete, color , bgcolor ,...others } = props;

    const columns = [
        {
            name: "id",
        },
        {
            name: "question",
            options: {
                customBodyRender: value => {
                  return ( <bdi style={{fontWeight:'bold'}}>{value}</bdi>)
                }
            }
        },
        {
            name: "type",
        },
        {
            name: "answers",
        },
    ]

    const options = {
        filter: true,
        filterType: "dropdown",
        selectableRows: 'none',
        responsive : 'vertical',
        tableBodyHeight : '400px',
    };

    const rowsData = () => {
        return data.map((element) => {
            const { _id, question, type, answers } = element;
            return [_id, question, type, answers]
        });
    }
    

    // const rowsData = () => {
    //     return data.map((value,key)=>{
    //             const {_id , question , type , answers } = value;
    //             return (
    //                 <TableRow key = {key}>
    //                     <TableCell>{_id}</TableCell>
    //                     <TableCell>{question}</TableCell>
    //                     <TableCell>{type}</TableCell>
    //                     <TableCell>{answers}</TableCell>
    //                     <TableCell>
    //                         <button onClick={()=>onDelete(_id)}>Delete</button>
    //                     </TableCell>
    //                 </TableRow>
    //             )
    //     })
    // }
    // const fieldsData = () => {
    //     return fields.map((field, key) => {
    //         return <TableHeaderCell key={key}>{field}</TableHeaderCell>
    //     })
    // }

    return (
        // <TableContainer component={Paper}>
        //     <Table aria-label="simple_table">
        //         <TableHeader>
        //             <TableRow>
        //                 {fieldsData()}
        //             </TableRow>
        //         </TableHeader>
        //         <TableBody>
        //              {rowsData()}
        //         </TableBody>
        //     </Table>
        // </TableContainer>
        <React.Fragment>
            {/* <FormControl>
            <InputLabel id="demo-simple-select-label">Responsive Option</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={responsive}
                style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
                onChange={(e) => setResponsive(e.target.value)}
            >
                <MenuItem value={"vertical"}>vertical</MenuItem>
                <MenuItem value={"standard"}>standard</MenuItem>
                <MenuItem value={"simple"}>simple</MenuItem>
    
                <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
                <MenuItem value={"scrollMaxHeight"}>
                scrollMaxHeight (deprecated)
                </MenuItem>
                <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
            </Select>
            </FormControl>
            <FormControl>
            <InputLabel id="demo-simple-select-label">Table Body Height</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tableBodyHeight}
                style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
                onChange={(e) => setTableBodyHeight(e.target.value)}
            >
                <MenuItem value={""}>[blank]</MenuItem>
                <MenuItem value={"400px"}>400px</MenuItem>
                <MenuItem value={"800px"}>800px</MenuItem>
                <MenuItem value={"100%"}>100%</MenuItem>
            </Select>
            </FormControl> */}
            <MuiThemeProvider theme={theme(bgcolor,color)}>
                <MUIDataTable
                    title="Questions"
                    data={rowsData()}
                    columns={columns}
                    options={options}
                />
            </MuiThemeProvider>

        </React.Fragment>
    );
}
CustomTable.defaultProps = {
    bgcolor : 'white',
    color : '#2b2b2b'
}
export default CustomTable;