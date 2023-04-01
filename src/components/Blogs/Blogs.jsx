import React from 'react';
import { Icon } from '@iconify/react';
import './Blogs.css';

const Blogs = (props) => {
    const{id, author, cover_img, person_img, blog_title, publish_date, read_time , hashtag} = props.blog;
    const handleMarkAsRead = props.handleMarkAsRead;
    const handleBookmark = props.handleBookmark;
    return (
        <div className='Blog'>
            <section className='cover'>
                <img src={cover_img} alt="" />
            </section>
            <section className='middle-part'>
                <div className='author-info'>
                     <div>
                         <img src={person_img} alt="" />
                     </div>
                     <div className='general-info'>
                         <h4>{author}</h4>
                         <p>{publish_date}</p>
                     </div>
                </div>
                <div className='read-time'>
                    <p>{read_time}min</p>
                    <button onClick={() =>handleBookmark(props.blog)}>
                        <Icon className='btn-bookmark' icon="material-symbols:bookmark-outline-rounded"></Icon>
                    </button>
                </div>
            </section>
            <section className='last-part'>
                <h2>{blog_title}</h2>
                <p><span className='hastag-span'>{hashtag[0]}</span> {hashtag[1]}</p>
                <h5 onClick={() =>handleMarkAsRead(props.blog)}>Mark as Read</h5>
            </section>
        </div>
    );
};

export default Blogs;