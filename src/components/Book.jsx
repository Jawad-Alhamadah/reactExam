import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Book(props) {
  let navigate = useNavigate()
  
    function handleFav(){

        axios.get("https://66e8028eb17821a9d9daf072.mockapi.io/users/user/"+localStorage.getItem("id")).then( res=>{
           
            console.log(res)
            axios.patch("https://66e8028eb17821a9d9daf072.mockapi.io/users/user/"+localStorage.getItem("id"),{
                fav_list:[ ...res.data.fav_list,props.id   ]
            })
    
        })
      
    }
  return (
    <div onClick={()=>navigate("/books/"+props.id+"/"+catagory)} className='cursor-pointer w-[15em] hover:border-8 hover:border-[#9ad650]  shadow-lg hover:scale-110 duration-200 bg-[#ecd4ab]'>
        <img src={props.image} alt="" className='w-[100%]' />
        <h1 className='font-bold text-lg p-3 text-green-700' >{props.title}</h1>
        <h1 className='italic p-3 text-green-700'> by: {props.author}</h1>

        {localStorage.getItem("id") &&
        <button onClick={handleFav}className='bg-orange'> Bookmark</button>
        }
        
      
    </div>
  )
}

export default Book
