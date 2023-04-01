import React from 'react';
import './Bookmark.css';

const Bookmark = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div>
            <h3>bookmark:{bookmarks.length}</h3>
        </div>
    );
};

export default Bookmark;