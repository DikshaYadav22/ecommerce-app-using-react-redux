import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Badge,
  Card,
  CardTitle,
} from "reactstrap";
import "./styles.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);
  return (
    <div>
      <Navbar color="dark" className="header">
        <NavbarBrand href="/" className="text-white">
          Add To Cart
        </NavbarBrand>
        <NavItem>
          <NavLink href="/" className="text-white">
            Home
          </NavLink>
        </NavItem>

        <NavbarText>
          <Badge badgeContent={4} color="success">
            <AiOutlineShoppingCart
              className="cart"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          </Badge>
        </NavbarText>
      </Navbar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClose={handleClose}>
          <Card>
            <CardTitle>
              <h4 className="p-2">You have no items in the cart!</h4>
            </CardTitle>
          </Card>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
