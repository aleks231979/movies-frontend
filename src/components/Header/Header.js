import './Header.css';

import React from "react";
import { useHistory } from "react-router-dom";

import HeaderLogoLink from './HeaderLogoLink/HeaderLogoLink';
import HeaderNotLogin from './HeaderNotLogin/HeaderNotLogin';
import HeaderLogin from './HeaderLogin/HeaderLogin';
import HeaderAuth from './HeaderAuth/HeaderAuth';

function Header({
  isLoggedIn,
  closeOpenMenu,
  isOpenMenu,
}) {
  const currentPath = useHistory().location.pathname;
  const isSignIn = currentPath === '/sign-in' || currentPath === '/sign-up';
  return (
    <>
      <section className={`header ${isSignIn ? 'header_auth' : ''}`}>
        <HeaderLogoLink />

        {!isLoggedIn && !isSignIn && <HeaderNotLogin />}

        {isLoggedIn && !isSignIn && <HeaderLogin
          closeOpenMenu={closeOpenMenu}
          isOpenMenu={isOpenMenu}
        />}

        {!isLoggedIn && isSignIn && <HeaderAuth
          currentPath={currentPath}
        />}
      </section>
    </>
  )
}

export default Header;