import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase-utils';

import { ReactComponent as Logo } from '../../assests/crown.svg';

import './header.style.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {!currentUser ? 
      (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )
      :(
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) 
      
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);