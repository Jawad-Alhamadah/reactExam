import React from 'react'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Navbar from '../components/Navbar';
function Signup() {
    let nav = useNavigate()
let [password,setPassword] = React.useState("")

let [username,setusername] = React.useState("")

let [email,setEmail] = React.useState("")


    function inputEmail(event){ setEmail(event.target.value) }

    function inputUsername(event){ setusername(event.target.value) }

    function inputPassword(event){ setPassword(event.target.value) }


    function changeLogin(event){

    }
    function handleLogin (){
        //https://mockapi.io/projects/66e8028eb17821a9d9daf073
    }
   
    function handleSignUp(){
       

        let isEmpty = password.length<=0 || username.length<=0 
         
        if (isEmpty) return toast.error("Some Fields are empty")


        axios.get("https://66e8028eb17821a9d9daf072.mockapi.io/users/user?username="+username).then(res=>{
  
           if (res.data[0].password ===password){
            localStorage.setItem("username",username)
            localStorage.setItem("id",res.data[0].id)

            nav("/books")
           }
           else {
            toast.error("incorrect login")
           }
        })
    }

    return (
        
        <div className='w-screen h-screen bg-[#ebcf9e] flex justify-center items-center'>
            <ToastContainer />
            <div className='  w-[20em] border-2 border-green-600 flex flex-col space-y-3 p-4 '>
                 <h1 className='text-2xl'>login</h1>
                <label htmlFor=""> username: </label>
                <input  onChange={inputUsername} type="text" />
                <label htmlFor="">password : </label>
                <input  onChange={inputPassword} type="text" />
    
                <button onClick={handleSignUp} className='bg-green-400'>Login</button>
                <button onClick={()=>nav("/signup")} className='bg-green-400'>Signup</button>
            </div>
          
        </div>
      )
 }


export default Signup


