import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Badge
} from 'reactstrap';
import './styles.css';

import {AiOutlineShoppingCart} from 'react-icons/ai';

function Header() {

  return (
          <div >
      <Navbar color="dark" className='header'>
       
        <NavbarBrand href="/" className='text-white'>Add To Cart</NavbarBrand>
            <NavItem>
              <NavLink href="/" className='text-white'>Home</NavLink>
            </NavItem>
    
 
          <NavbarText><AiOutlineShoppingCart className='cart' /><Badge>
      0
    </Badge></NavbarText>
        
      </Navbar>
    </div>
  );
}

export default Header;