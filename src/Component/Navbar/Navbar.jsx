import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex my-auto justify-around p-4 mb-10'>
            <div className='my-auto'>
                <h1 className='text-2xl font-extrabold'>ZAYAN ACADEMY</h1>
            </div>
            <div className='my-auto '>
                <ul className='flex gap-5 '>
                    <NavLink>
                        <li className='text-lg font-medium hover:text-orange-600 hover:duration-300
                        '>Home</li>
                    </NavLink>
                    <NavLink>
                        <li className='text-lg font-medium hover:text-orange-600 hover:duration-300
                        '>Assignments</li>
                    </NavLink>
                    <NavLink>
                        <li className='text-lg font-medium hover:text-orange-600 hover:duration-300
                        '>Why we use this</li>
                    </NavLink>
                    <NavLink>
                        <li className='text-lg font-medium hover:text-orange-600 hover:duration-300
                        '>About Us</li>
                    </NavLink>
                </ul>
            </div>
            <button className="btn my-auto bg-purple-800 text-white font-semibold ">Log In</button>
            
        </div>
    );
}

export default Navbar;
