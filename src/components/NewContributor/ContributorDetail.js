// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const ContributorDetail = () => {
//   const [person, setPerson] = useState([]);

//   const { id } = useParams();
//   // console.log('id=',id)

//   useEffect(() => {
//     const getData = async () => {
//       const result = await axios(`https://reqres.in/api/users/${id}`);
//       setPerson(result.data.data);
//     };
//     getData();
//   }, [id]);
//   // console.log(person)
//   return (
//     <div>
//       <p>Contributor Detail</p>
//       <div>
//         <img src={person.avatar} alt="avatar" />
//       </div>
//     </div>
//   );
// };

// export default ContributorDetail;
