import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function SingleBook() {
    let { id, catagory } = useParams()
    let [book, setBook] = useState()
    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${catagory}.json?api-key=rTm235XV8QmDlOJGhO8FsE8XGSKMPmz5`)
            .then(res => {
                let filter = res.data.results.books.filter(e => e.primary_isbn10 === id)
                setBook(filter[0])
            })
    }, [])

    return (
        <div className='flex justify-center mt-12'>
<div className='w-[20em] shadow-lg bg-[#ecd4ab]'>
           {book && <div>
            <img src={book.book_image} alt="" className='w-[100%]' />
            <h1 className='font-bold text-lg p-3 text-green-700' >{book.title}</h1>
    
            <h1 className='italic p-3 text-green-700'> by: {book.author}</h1>
            <a href={book.buy_links[0].url}> Buy Now!</a>


           </div> }
           
        </div>

        </div>
        
    )
}

export default SingleBook
