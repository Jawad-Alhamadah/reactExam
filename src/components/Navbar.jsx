import React from 'react'
import BookTypes from './BookTypes'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Navbar(props) {
    let [search, setSearch] = React.useState("")
 let navigate =   useNavigate()
    function handleSearchChange(event) {
        setSearch(event.target.value)

    }
    function getSearchValue() {
        console.log("hi")
        axios.get("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=rTm235XV8QmDlOJGhO8FsE8XGSKMPmz5")
            .then(res => {
                let found =false
                // setTypes(res.data.results.lists)
                let filtered = res.data.results.lists.map(list => list.books.map(book=>{
                 book.title.toLowerCase()===search.toLowerCase() ? found=book :""
                
                }))
                props.setBooks([found])
            })
    }

    function getAll(){
        props.getTypes()
    }
    return (
        <div className=' flex fixed top-0 bg-[#e7cb99] w-[100%] '>
            {/* <BookTypes></BookTypes> */}
            <button  onClick={()=>getAll()} className=' bg-[#2e8b70] p-2 flex justify-center items-center'>Books</button>

            {
                localStorage.getItem("username")? 
                <button  onClick={()=>{
                    localStorage.clear()
                    navigate("/books")
                }} className='mx-2 bg-[#2e8b70] p-2 flex justify-center items-center'>logout</button>
                :
                <button  onClick={()=>navigate("/login")} className=' bg-[#2e8b70] mx-2 p-2 flex justify-center items-center'>login</button>


            }

            <div className='ml-auto flex justify-end p-5'>
            {localStorage.getItem("username") && <div className='p-2 '>
                        {localStorage.getItem("username")}
                    </div>}
                <input onChange={handleSearchChange} className='max-sm:w-[60%] ' />
            
                
                {/* <button className='bg-[#5d81c5] p-2' onClick={getAll}>reset</button> */}
                <button  onClick={getSearchValue} className=' bg-[#2e8b70] p-2'>Search</button>
                
            </div>
        </div>
    )
}

export default Navbar
