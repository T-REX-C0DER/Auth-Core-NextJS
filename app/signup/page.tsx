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
        <div className="flex">  
         <h1 className="text-5xl font-bold text-white "> SIGNUP PAGE</h1>
      </div>
      )
}