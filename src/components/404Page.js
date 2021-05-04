import React from 'react'
import { Link } from 'react-router-dom'
//------------------------------ end of import --------------------------------//


//-------------------------Functions-------------------------------------------//


const NotFound = () => {
    return (
        <div className="default-page-container">
            <Link
                to="/"
                className="back-home">
            </Link>
            <h2>404 Page not found!</h2>
        </div>
    )
}


//-----------------------------------------------------------------------------//


export default NotFound