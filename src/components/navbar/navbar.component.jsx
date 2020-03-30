import React from 'react';
import styles from './navbar.module.css';
import NavItem from '../navbar-item/navbar-item.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { ReactComponent as ShopCart } from '../../assets/shopping-bag.svg';
import { NavBarContainer, MainNavBar, NavBarUl } from './navbar.styles';

const NavBar = () => {
  return (
    <NavBarContainer>
      <MainNavBar>
        <div>
          <Logo />
        </div>
        <NavBarUl>
          <NavItem>Shop</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>Sign in</NavItem>
          <NavItem>
            <ShopCart
              style={{ height: '24px', width: '24px', marginop: '5px' }}
            ></ShopCart>
          </NavItem>

          {/* <ShopCart/> */}
        </NavBarUl>
      </MainNavBar>
    </NavBarContainer>
  );
};

export default NavBar;
