// import React, { useState, useEffect } from "react";
// import NasaCard from "./NasaApod";
// import Axios from "axios";

// export default function NasaApod() {
//   const [space, setSpace] = useState([]);

//   useEffect(() => {
//     Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
//       .then(response => {
//         const space = response.data;
//         console.log(space);
//         setSpace(space);
//       })
//       .catch(error => {
//         console.log("The data was not returned", error);
//       });
//   }, []);

//   return (
//     <div className="container">
//       {space.map(space => {
//         return (
//           <NasaCard
//             key={space.id}
//             copyright={space.copyright}
//             date={space.date}
//             explanation={space.explanation}
//             imgUrl={space.url}
//           />
//         );
//       })}
//     </div>
//   );
// }
