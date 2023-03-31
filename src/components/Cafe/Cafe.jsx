import React, { useEffect, useState } from 'react';
import './Cafe.css';
import Blogs from '../Blogs/Blogs';

const Cafe = () => {
    const[blogs,setBlogs ] = useState([]);
    useEffect(()=>{
        fetch('../../../public/fakedata.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

// return part start here..........
    return (
        <div className='cafe-container'>
            <div className='Blogs-container'>
                {
                    blogs.map(blog => <Blogs key={blog.id}
                      blog={blog}
                    ></Blogs>)
                }
            </div>
            <div className='cart-container'>

            </div>
        </div>
    );
};

export default Cafe;