import React from 'react';

const Cart = ({cart}) => {
    let totalMinCount = 0;
    for(const blog of cart){
       totalMinCount = totalMinCount + blog.read_time;
    }
    return (
        <div>
             <div>
                <p>Spent time on read :{totalMinCount}min</p>
                <h1>selcom:{cart.length}</h1>
             </div>
             <div>
                 
             </div>
        </div>
    );
};

export default Cart;