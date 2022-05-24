import React from "react";
import "./header.scss";

type props = {
  accountName: string;
};

const Header = ({ accountName }: props) => {
  return (
    <header className='account__meta'>
      <a
        href='/'
        className='profile'
        style={{ backgroundImage: `url(/assets/avatar.svg)` }}
      >
        <span>아바타</span>
      </a>
      <h2 className='account__title'>{accountName}</h2>
      <div className='header__icons'>
        <img src='/assets/simple_pay_icon.svg' alt='simplePayIcon' />
        <img src='/assets/search_icon.svg' alt='searchIcon' />
      </div>
    </header>
  );
};

export default Header;
