import React from 'react';

function Navbar () {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container navbar-content">
            <a className="navbar-brand mr-5" href="/">Préstamos González</a>
            </div>
            <form action="" method="POST">
            <div class="md-form mt-0">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Buscar</button>
            </form>
        </nav>
    );
            
      
}



export default Navbar;