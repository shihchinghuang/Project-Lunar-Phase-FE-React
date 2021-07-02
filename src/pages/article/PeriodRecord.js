import { useState, useEffect,useRef } from "react";
// import {API_GET_DATA} from '../../global/constants.js'


import React from "react";
import List from "../article/components/List.js";
import Edit from "../article/components/Edit.js";
import "./PeriodRecord.css";

export const API_HOST="http://localhost:3000"
export const API_GET_DATA=`${API_HOST}/posts/1`

async function fetchData(setData) {
 const res = await fetch(API_GET_DATA)
 const {data} = await res.json()
 setData(data)
}

async function fetchSetData(data) {
 await fetch(API_GET_DATA,{
     method: "PUT",
     headers: {
         'content-type': 'application/json'
     },
     body: JSON.stringify()
 })

}


const Home = () => {
  const [data, setData] = useState([]);
  const submittingStatus=useRef(false);
useEffect(()=>{
    if(!submittingStatus.current){
return
    }
fetchSetData(data).then(data=>submittingStatus.current = false)
  },[data])

  useEffect(()=>{
fetchData(setData)
  },[])

  return (
    <>
      <div className="app">
        <Edit add={setData} submittingStatus={submittingStatus}/>
        <List listData={data} deleteData={setData} submittingStatus={submittingStatus} />
      </div>
    </>
  );
};

export default Home;
