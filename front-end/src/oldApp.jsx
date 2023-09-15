import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

// const axiosConfig = {
//     headers: {
//     'content-Type': 'text/plain',
//     "Accept": "/",
//     },
//     credentials: "same-origin"
//     };
  
  
// const fetchimdb = async() => {
//     const response = await axios.get("/api/chart/moviemeter/",axiosConfig)
//     const textName = await response.data
//     const parser = new DOMParser()
//     const doc = await parser.parseFromString(textName, "text/html") 
//     console.log(doc)
//     // doc.querySelectorAll(".ipc-metadata-list.ipc-metadata-list--dividers-between.sc-3f13560f-0.sTTRj.compact-list-view.ipc-metadata-list--base")
// }
 const fetchimdb = async() => {
    const data = await axios.get("src/file.html",{responseEncoding: "utf8"})
     const parser = new DOMParser()
     const doc = await parser.parseFromString(data.data, "text/html") 
     console.log(doc)
     const list = doc.querySelector('.ipc-metadata-list.ipc-metadata-list--dividers-between.sc-3f13560f-0.sTTRj.compact-list-view.ipc-metadata-list--base')
     const a = [...list.querySelectorAll("[data-testid='ratingGroup--container']>span")].map((list) => {
        return list.textContent
    })
    console.dir(a)
 }

function App() {
    useEffect(() => {
         fetchimdb()
    },[])
  return (
    <>
        Data
    </>
  )
}

export default App
