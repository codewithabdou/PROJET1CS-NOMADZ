"use client";

import axios from 'axios';
import { useSession,signIn,signOut } from "next-auth/react";

const Authtest = () => {

    const {data : session}  = useSession()

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // const formData = new FormData(formRef.current)
      var formData = new FormData(e.target);

      var siteId = formData.get("siteId");
      
      // Create JSON object
      var data = {
        "siteId": parseInt(siteId),
      };


      console.log(data)
      axios
        .post('../api/favoris', data)
        .then((response) => {
          console.log('Response:', response.data);
          // Handle the response as needed
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle the error as needed
        });
        
    };

    if (!session){
  return (
        <button onClick={()=> signIn('google')} >login</button>
  )
}
    else{
    console.log(session.accessToken)
  return (
    <div>
        <p>welcome {session.user.name}</p>
     <button onClick={()=> signOut()} >logout</button>
     <form onSubmit={handleSubmit}>
        <input type="number"  name="siteId"/>
        <input type="submit" />
     </form>
    </div>
     )
    }
};

export default Authtest;
