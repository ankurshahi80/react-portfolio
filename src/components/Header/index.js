import React from 'react';
import Nav from '../Nav';

const Header=({currentPage, handlePageChange}) => {
    return(
        <header>
             <h1>
                <a href="/">Ankur Shahi</a>
            </h1>
             <Nav 
                handlePageChange={handlePageChange}
                currentPage={currentPage}
            />
        </header>
       
    )
}

export default Header;