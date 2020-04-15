import React from 'react'
import MaterialInport from '../materialUI'
import MaterialTable from 'material-table'
import  './Styles/test.css'
const MaterialUI = MaterialInport()

const Home = (props) => {
  return (
    <MaterialUI.Container maxWidth='75%'>
      <MaterialUI.Typography variant='h3' color='textPrimary' gutterBottom>
          Applicant information
      </MaterialUI.Typography>
      <div>
         <ApplicantTable applicants = {props.applicants}/>
      </div>
     
    </MaterialUI.Container>
  )
}

const ApplicantTable = (props)=>{
  const applicantsData = JSON.parse(JSON.stringify(props.applicants))

  const [state, setState] = React.useState({
    columns: [
      { title: 'FirstName', field: 'FirstName' },
      { title: 'MiddleName', field: 'MiddlenName' },
      { title: 'LastName', field: 'LastName' },
      { title: 'State', field: 'State' },
      { title: 'Email', field: 'Email' },
      { title: 'Resume', field: 'Resume' },
    ],
    data: applicantsData

  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      style = {{width: '100%',backgroundColor:'green', color: 'white'}}
      options={{
        width: 900,
        rowStyle: {
          backgroundColor: '#eee',
          color: 'black'
        },
        cellStyle: {
          width: 200,
          minWidth: 200
        },
        pageSize: 10
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
export default Home
