import Bookmark from "../Bookmark/Bookmark";
import './Cart.css';

const Cart = ({cart, bookmarks}) => {
    // spent time on read show....
    let totalMinCount = 0;
    for(const blog of cart){
       totalMinCount = totalMinCount + blog.read_time;
    }
    return (
        <div>
             <div className="spent-time">
                <p>Spent time on read : {totalMinCount}  min</p>
             </div>
             <div>
                 <Bookmark bookmarks={bookmarks}></Bookmark>
             </div>
        </div>
    );
};

export default Cart;