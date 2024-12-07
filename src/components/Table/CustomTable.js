import React, { useEffect } from 'react';
import { Avatar, createMuiTheme, MuiThemeProvider, TextField, Typography } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { REACT_APP_IMG_ROUTE, REACT_APP_WHOS_API } from '../../constants/constants';

let theme = (bgcolor , color) =>
    createMuiTheme({
        overrides: {
            
              MUIDataTableHeadCell: {
                fixedHeader: {
                    backgroundColor: bgcolor          
                 }
              },
            MUIDataTableToolbar: {
                root : {
                    backgroundColor: bgcolor  ,
                    
                },
                left: {
                    flex: 'none',
                    color : color,
                
                }
            },
        },
    });
    
const CustomTable = props => {
    const { data, fields, onDelete, color , bgcolor ,...others } = props;
    
    const columns = [
        {
            name: "#",
            options : {
                customBodyRender: place => {
                    if (place === 1) 
                    return <Avatar style = {{ fontSize : '14px',backgroundColor: 'gold'}}>{place}</Avatar>
                if (place === 2)
                    return <Avatar style = {{ fontSize : '14px',backgroundColor: 'silver'}}>{place}</Avatar>
                if (place === 3)
                    return <Avatar style = {{ fontSize : '14px',backgroundColor: '#cd7f32' }}>{place}</Avatar>
                else
                    return <Avatar style = {{ fontSize : '14px',backgroundColor: '#2b2b2b' }}>{place}</Avatar>
                  }
            }
        },
        {
            name: "Username",
        },
        {
            name: "",
            options: {
                customBodyRender: (usernameImg) => {
                  return ( <Avatar src={usernameImg?.includes("https") ? usernameImg :REACT_APP_WHOS_API + REACT_APP_IMG_ROUTE + usernameImg}  />)
                }
            }
        },
        {
            name: "Result",
        },
        {
            name: "Time",
            options: {
                customBodyRender: time => {
                  return ( <div>{new Date(time).toLocaleDateString()}</div>)
                }
            }
        },
    ]

    const options = {
        filter: true,
        filterType: "dropdown",
        selectableRows: 'none',
        responsive : 'vertical',
        tableBodyHeight : '600px',
    };

    const rowsData = () => {
        return data.map((element , index) => {
            const { username, img, highScore } = element._id;
            return [index+1 ,username, img, highScore.result, highScore.time]
        });
    }
    

    return (
        <React.Fragment>
            <MuiThemeProvider theme={theme(bgcolor,color)}>
                <MUIDataTable
                    title="Table"
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