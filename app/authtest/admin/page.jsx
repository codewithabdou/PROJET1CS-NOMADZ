"use client";
import { signIn,useSession,signOut } from "next-auth/react";
import React, { useState } from "react";

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {data: session, loading} = useSession();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await signIn('credentials', {
        email,
        password,
        redirect: false // Prevent NextAuth.js from redirecting automatically
      });
  
      if (result?.error) {
        // Handle authentication error
        console.error(result.error);
      }
    }

    if(session) {
      //  signOut()
        return(<h1>Hello</h1>)
      }
      else
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default Admin