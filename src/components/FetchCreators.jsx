// import React, { useState, useEffect } from "react";

// const FetchCreators = () => {
//   const [global, setGlobal] = useState("");
//   const [count, setCount] = useState(" ");
//   const [creators, setCreators] = useState([]);

//   useEffect(() => {
//     fetch(
//       ""
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.data.results);
//         // console.log(data.data.total);
//         // console.log(data.data.count);
//         setCreators(data.data.results);
//         setCount(data.data.count);
//         setGlobal(data.data.total);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

//   return (
//     <div className="text-white">
//       <div className="container-fluid h1 py-3 mt-4 border bg-black text-center text-uppercase">
//         Creators Collection
//       </div>

//       <div className="container mt-2 py-3 bg-dark ">
//         <h3 className="text-muted ">
//           Total Creators <p className="mx-2 text-danger">{global}</p>
//         </h3>
//         <h4 className="text-muted">
//           Total Displayed <p className="mx-2 text-danger">{count}</p>
//         </h4>
//       </div>

//       <div className="row">
//         {creators.map((c) => {
//           return (
//             <div className="col-lg-4 col-md-6 col-xs-6">
//               <div className="border border-danger card my-3 bg-dark">
//                 <div key={c.id} className="p-2 my-3">
//                   <h4 className="card-header text-center text-danger py-3">
//                     {c.fullName}
//                   </h4>
//                   <img
//                     src={c.thumbnail.path + "/standard_fantastic.jpg"}
//                     className="card-img-top"
//                     alt="...img"
//                   />
//                   <div className="card-body my-2">
//                     {/* <span class="border-bottom border-white">
//
//                     <p className="card-text ">{HTMLReactParser(c.description)}</p>
//                   </span> */}
//                     {/*
//                     <p>URL type : {c.urls[0].type}</p>
//                     <p>Modified : {c.modified}</p>
//                     <p>thumbnail.path {c.thumbnail.path}</p>
//                     */}
//                   </div>

//                   <ul className="list-group list-group-flush ">
//                     <li className="list-group-item bg-dark text-muted">
//                       ID : {c.id}
//                     </li>
//                     <li className="list-group-item bg-dark text-white">
//                       Stories : {c.stories["available"]}
//                     </li>
//                     <li className="list-group-item bg-dark text-white">
//                       Series : {c.series["available"]}
//                     </li>
//                     <li className="list-group-item bg-dark text-white">
//                       Comics : {c.comics["available"]}
//                     </li>

//                     <li className="list-group-item bg-dark text-white">
//                       Events : {c.events["available"]}
//                     </li>
//                   </ul>

//                   <div className="card-body text-end">
//                     <a
//                       href={c.urls[0].url}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="btn btn-outline-danger"
//                     >
//                       Learn More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FetchCreators;
