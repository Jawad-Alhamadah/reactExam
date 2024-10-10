import React from 'react'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Navbar from '../components/Navbar';
function Signup() {
    let nav = useNavigate()
let [password,setPassword] = React.useState("")
let [rePassword,setRePassword] = React.useState("")

let [username,setusername] = React.useState("")
let [reUsername,setReUsername] = React.useState("")

let [email,setEmail] = React.useState("")
let [reemail,setReEmail] = React.useState("")


    function inputEmail(event){ setEmail(event.target.value) }
    function inputReEmail(event){ setReEmail(event.target.value) }
    function inputUsername(event){ setusername(event.target.value) }
    function inputReUsername(event){ setReUsername(event.target.value) }
    function inputPassword(event){ setPassword(event.target.value) }
    function inputRePassword(event){ setRePassword(event.target.value) }

    function changeLogin(event){

    }
    function handleLogin (){
        //https://mockapi.io/projects/66e8028eb17821a9d9daf073
    }
   
    function handleSignUp(){
       

        let isEmpty = rePassword.length<=0 || password.length<=0 || username.length<=0 || reUsername.length<=0 ||
        email.length<=0 ||reemail.length<=0 
         
        if (isEmpty) return toast.error("Some Fields are empty")
        if (rePassword!== password) return toast.error("Passwords don't match")
        if (username!== reUsername) return toast.error("usernames don't match")
        if (email!== reemail) return toast.error("emails don't match")


        axios.post("https://66e8028eb17821a9d9daf072.mockapi.io/users/user",{
            username:username,
            password:password,
            email:email
        }).then(res=>{
            localStorage.setItem("username",username)
            localStorage.setItem("id",res.data.id)
            nav("/books")

        })
    }

    return (
        <div className='w-screen h-screen bg-[#ebcf9e] flex justify-center items-center'>
            <ToastContainer />
            <div className='  w-[20em] border-2 border-green-600 flex flex-col space-y-3 p-4 '>
                 <h1 className='text-2xl'>Signup</h1>
                 <label htmlFor="">Email: </label>
                <input  onChange={inputEmail} type="text" />
                <label htmlFor="">Repeat Email: </label>
                <input  onChange={inputReEmail} type="text" />

                <label htmlFor=""> username: </label>
                <input  onChange={inputUsername} type="text" />
                <label htmlFor="">Repeat username: </label>
                <input  onChange={inputReUsername} type="text" />
                <label htmlFor="">password : </label>
                <input  onChange={inputPassword} type="text" />
                <label htmlFor="">Repeat password: </label>
                <input  onChange={inputRePassword} type="text" />
    
                <button onClick={handleSignUp} className='bg-green-400'>SignUp</button>
            </div>
          
        </div>
      )
 }


export default Signup


