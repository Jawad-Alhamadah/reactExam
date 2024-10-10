import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Book from '../components/Book'
import Navbar from '../components/Navbar'
function Books() {
let [types,setTypes] =useState([])
let [books,setBooks] = useState([])
    useEffect(()=>{
        getTypes()
    },[])

    function getTypes(){
   
        axios.get("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=rTm235XV8QmDlOJGhO8FsE8XGSKMPmz5")
        .then(res=>{
         
            res.data.results.lists.map((type) =>
                type.books.map((book)=>{
                    setBooks((prev)=>[...prev,book])
            
                })    
                )
                   
                

      //  setTypes(res.data.results.lists)})
    })
}
  return (
    <div className='p-10 mt-16 flex flex-wrap gap-5 bg-[#134d4e] justify-center'>
        <Navbar getTypes={getTypes} setTypes={setTypes}  setBooks={setBooks}/>
          {
    books&& books.map((book,index)=>{
        return <Book key={index}
        image={book.book_image}
        title={book.title}
        author={book.author}
        id={books.primary_isbn10}
        catagory={books.list_name_encoded}
       
        >

            
        </Book>

    })    
  
            

        } 
     
    </div>
  )
}

export default Books
