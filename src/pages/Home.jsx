//key rTm235XV8QmDlOJGhO8FsE8XGSKMPmz5

import React from 'react'
import Button from '../components/Button'
import BookTypes from '../components/BookTypes'
function Home() {
    return (
        <div className='flex'>
            <div className="text-center max-sm:w-[100%] w-[60%] relative text-white">

                <img src="/ebg1.jpg" alt="" className='-z-10 top-0 absolute w-[100%] h-[100vh] object-cover ' />
                <h1 className=' text-[#ebcf9e] max-sm:mt-20 mt-10 main-font text-center  p-5 text-2xl'>Explore our vast library of best selling books</h1>
            </div>

            <div className='text-[#965a1ac] max-sm:flex max-sm:w-[100%] max-sm:h-auto max-sm:fixed top-0 max-sm:space-y-0 space-y-5 justify-center items-center bg-[#e7cb99]  h-[100vh] flex max-sm:flex-row flex-col w-[40%]'>

                <Button link="login" text="Login"></Button>
                <Button link="/books" text="Books"></Button>
                <div className=' flex flex-col max-sm:ml-auto  rounded-xl overflow-hidden items-center justify-center'>

                    <div className='flex justify-end'>
                        <input className='py-2 max-sm:w-[60%] ' />
                        <button className='bg-[#2e8b70] p-2'>Search</button>
                    </div>


                    {/* <BookTypes></BookTypes> */}

                </div>

            </div>

        </div>
    )
}

export default Home
