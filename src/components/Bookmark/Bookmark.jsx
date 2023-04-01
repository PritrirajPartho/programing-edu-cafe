import React from 'react';
import './Bookmark.css';

const Bookmark = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div >
            {
                bookmarks.map(bookmark=> <h2 className='bookmark'>{bookmark.blog_title}!</h2>)
            }
        </div>
    );
};

export default Bookmark;