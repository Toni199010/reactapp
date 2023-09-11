import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
const API = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [datas, setDatas] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0){
        setDatas(data);
      }
    } catch(e) {
      console.log('Error ', e);
    }
  }

  useEffect(()=>{
    fetchData(API)
  },[]);

  return (
    <div className="App">
      <DataTable value={datas} paginator rows={10} rowsPerPageOptions={[10,50,100]} totalRecords={datas.length}>
          <Column field="id" header="ID"/> 
          <Column field="userId" header="User Id"/>
          <Column field="title" header="Title"/>   
          <Column field="completed" header="Status"/> 
      </DataTable>
    </div>
  );
}

export default App;
