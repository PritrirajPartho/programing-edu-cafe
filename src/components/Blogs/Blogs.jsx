import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookAtlas} from '@fortawesome/free-solid-svg-icons'
import './Blogs.css';

const Blogs = (props) => {
    const{id, author, cover_img, person_img, blog_title, publish_date, read_time , hashtag} = props.blog;
    return (
        <div>
            <section className='cover'>
                <img src={cover_img} alt="" />
            </section>
            <section className='middle-part'>
                <div className='author-info'>
                     <div >
                         <img src={person_img} alt="" />
                     </div>
                     <div>
                         <h5>{author}</h5>
                         <p>{publish_date}</p>
                     </div>
                </div>
                <div>
                    <p>{read_time}min</p>
                    <button>
                       <FontAwesomeIcon icon={faBookAtlas} />
                    </button>
                </div>
            </section>
            <section></section>
        </div>
    );
};

export default Blogs;