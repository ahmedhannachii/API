import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';


const UserList = () => {
 const [data, setData] = useState( [] );
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get(
       "https://jsonplaceholder.typicode.com/users"
     );
     setData(result.data);
   };
   fetchData();
 }, []);
 console.log(data,"test");
 return (
   <ul>
   <p>La liste des noms</p>
   {data.map(item => (
     <>
    <li key={item.id}></li>
    <li style={{color:"red"}} username={item.name}></li>
     </>
  ))}

   </ul>
 );
}

UserList.propTypes = {
  data: PropTypes.array
}

export default UserList;