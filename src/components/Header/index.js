import React from 'react';
import Nav from '../Nav';

const Header=({currentPage, handlePageChange}) => {
    return(
        <header className="header">
             <div></div>
             <Nav 
                handlePageChange={handlePageChange}
                currentPage={currentPage}
            />
        </header>
       
    )
}

export default Header;