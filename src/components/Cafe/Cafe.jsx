import React, { useEffect, useState } from 'react';
import './Cafe.css';
import Blogs from '../Blogs/Blogs';
import Cart from '../Cart/Cart';

const Cafe = () => {
    const[blogs,setBlogs ] = useState([]);
    const[cart, setCart] = useState([]);
    const[bookmarks, setBookmarks] = useState([]);

    useEffect(()=>{
        fetch('../../../public/fakedata.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
 // handleMarkAsRead function work.....
 const handleMarkAsRead = (blog) =>{
   const newCart = [...cart, blog];
   setCart(newCart);
}
 // bookmark work function or .....
const handleBookmark = (item) =>{
    const newBookmarks = [...bookmarks, item];
    setBookmarks(newBookmarks)
} 
// return part start here..........
    return (
        <div className='cafe-container'>
            <div className='Blogs-container'>
                {
                    blogs.map(blog => <Blogs key={blog.id}
                      blog={blog}
                      handleMarkAsRead={handleMarkAsRead}
                      handleBookmark={handleBookmark}
                    ></Blogs>)
                }
            </div>
            <div className='cart-container'>
                 <Cart
                  cart={cart}
                  bookmarks={bookmarks}
                 ></Cart>
            </div>
        </div>
    );
};

export default Cafe;