import React from 'react';
import Link from 'react-router-dom';

const navbar = () => {
    return(
        <div>
            <ul className='nav'>
                <li>
                    <Link to ='/'>Home</Link> 
                </li>
                <li>
                    <Link to ='../pages/myProjects'>My Projects</Link>
                </li>
            </ul>
        </div>
    )
};

export default navbar;