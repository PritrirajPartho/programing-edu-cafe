import React from 'react';

const Blogs = (props) => {
    const{id, author, cover_img, person_img, blog_title, publish_date, hashtag} = props.blog;
    return (
        <div>
            <p>{author}</p>
        </div>
    );
};

export default Blogs;