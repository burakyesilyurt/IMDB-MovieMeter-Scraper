// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import './App.css';

        // // make sure to uncomment server on the vite.config.js 
//  const axiosConfig = {
//      headers: {
//      'content-Type': 'text/plain',
//      "Accept": "/",
//      },
//      credentials: "same-origin"
//      };
  
  
//  const fetchimdb = async() => {
//      const response = await axios.get("/api/chart/moviemeter/",axiosConfig)
//      const textName = await response.data
//      const parser = new DOMParser()
//      const doc = await parser.parseFromString(textName, "text/html") 
//      console.log(doc)
//       doc.querySelectorAll(".ipc-metadata-list.ipc-metadata-list--dividers-between.sc-3f13560f-0.sTTRj.compact-list-view.ipc-metadata-list--base")
//  }

// function App() {
//     useEffect(() => {
//          fetchimdb()
//     },[])
//   return (
//     <>
//         Data Here
//     </>
//   )
// }

// export default App
