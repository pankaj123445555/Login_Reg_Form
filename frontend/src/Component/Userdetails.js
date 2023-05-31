import React from 'react'
import { Table } from 'antd';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


  
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Dob', dataIndex: 'dob', key: 'dob' },
  ];


  

function Userdetails() {

    const[dataSource,setdataSource] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    const fetchData = async() => {
      try{
        const response = await axios.get('http://localhost:5000/api/users', {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });
        setdataSource(response.data);
        console.log(response.data);
      }
       catch(error)
       {
         console.log('error occured');
       }
    }

    useEffect(()=>{
     fetchData();
    },[])
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Userdetails
