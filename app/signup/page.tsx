"use client";
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { Axios } from "axios";



export default function SignupPage() {
    const [user,setuser] = React.useState({

        email:"",
        password:"",
        username:"",

    })

    const onSignup = async () => {

    }


    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">  

         <h1 className="text-5xl font-bold text-white "> SIGNUP PAGE</h1> <br />
         <hr />
         <label htmlFor = "username">username</label>
         <input 
                type="text" 
                id="username"
                value={user.username}
                onChange={(e) => setuser({...user,username:e.target.value})}
                placeholder="username"
                />
            <br />
        
         <label htmlFor = "email">email</label>
         <input 
                type="text" 
                id="email"
                value={user.email}
                onChange={(e) => setuser({...user,email:e.target.value})}
                placeholder="email"
                />
        
        <br /> 
        <label htmlFor = "password">password</label>
         <input 
                type="password" 
                id="password"
                value={user.password}
                onChange={(e) => setuser({...user,password:e.target.value})}
                placeholder="password"
                />

       <button onClick={onSignup}> 
        Signup Here
       </button>
       <Link href="/login"> Visit Login Page</Link>
       
      </div>
      )
}