import React from 'react';
import person from '../../assets/person/person-2-min.jpg';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Programing Edu Cafe</h1>
            <img src={person} alt="" />
        </div>
    );
};

export default Navbar;