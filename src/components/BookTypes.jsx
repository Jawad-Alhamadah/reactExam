import React, { useEffect } from 'react'
import axios from 'axios'
function BookTypes() {
    let [bookType,setBookType]=React.useState([])
 useEffect(()=>{
    axios.get("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=rTm235XV8QmDlOJGhO8FsE8XGSKMPmz5")
    .then(res =>{
        
        setBookType(res.data.results)
    },[])
 })
  return (
     <div className='flex flex-col justify-center mt-2 w-[40%]'>
            <label for="books">Pick a book type:</label>
            <select id="books" name="books" className='text-sm'>
                {bookType&&bookType.map((type,index)=> <option key={index} value={type.list_name}>{type.display_name}</option>)}
     
            </select>
        </div>
  )
}

export default BookTypes
