import React from 'react';

const dropdown = () => {
    return (
        <div className="dropdown">
            <a className="dropbtn">Routes</a>
            <ul className="dropdown-content">
                <li><a href="">Rila</a></li>
                <li><a href="">Pirin</a></li>
                <li><a href="">Stara Planina</a></li>
            </ul>
        </div>
    )
}

export default dropdown;