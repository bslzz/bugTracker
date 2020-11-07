import React from 'react';
import { Link } from "react-router-dom";


const Logo = () => {
    return (
      <div>
        <Link to="/" className="navbar-logo-mobile">
          BUGGY
        </Link>
      </div>
    );
}

export default Logo;

