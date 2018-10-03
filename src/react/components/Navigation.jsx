import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/embedded">Embedded page</Link>
                </li>
                <li>
                    <Link to="/canvas">Canvas page</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;