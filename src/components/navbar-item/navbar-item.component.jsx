import React from 'react';
import styles from './navbar-item.module.css';
import {NavBarItem} from "./navbar-item.styles"

const NavItem = ({children }) => {
  return <NavBarItem>{children}</NavBarItem>
};

export default NavItem;
