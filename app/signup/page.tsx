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

         <h1 className="text-5xl font-bold text-white "> SIGNUP PAGE</h1>
         <hr />
         <label htmlFor = "username">username</label>
         <input 
                type="text" 
                id="username"
                value={user.username}
                onChange={(e) => setuser({...user,username:e.target.value})}
                placeholder="username"
                />

      </div>
      )
}