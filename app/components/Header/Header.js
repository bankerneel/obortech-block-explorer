/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
// import { Avatar, TextField } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Select from 'react-select';
import { FiLogOut } from 'react-icons/fi';
// import logo from '../../assets/images/logo.png';
import Obortech from '../../assets/images/Obortech.png';
import {
  logoutRequest,
  resetApp,
  getChannelListRequest,
  // changeChannelRequest,
} from '../../store/actions';
import './Header.scss';

const Header = () => {
  // const [searchValue, setSeachValue] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const { channelList } = useSelector(state => state.channel);
  // const localCurrentChannel = localStorage.getItem('currentChannel');

  useEffect(() => {
    if (!channelList.length) {
      dispatch(getChannelListRequest());
    }
  }, []);

  // eslint-disable-next-line arrow-body-style
  // const channelListOptions = useMemo(() => {
  //   return channelList?.map(channelDetails => ({
  //     ...channelDetails,
  //     label: channelDetails.channelname,
  //     value: channelDetails.channelname,
  //   }));
  // }, [channelList]);

  // const handleChannelChange = useCallback(({ channel_genesis_hash }) => {
  //   dispatch(changeChannelRequest({ channelGenesis: channel_genesis_hash }));
  //   localStorage.setItem('currentChannel', channel_genesis_hash);
  // });

  // const getDefaultChannel = channelList.find(
  //   ({ channel_genesis_hash }) => localCurrentChannel === channel_genesis_hash,
  // );

  let body;
  let menu;
  // let menuItems;
  // let navContents;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    // menuItems = document.querySelectorAll('.nav__list-item');
    // navContents = document.querySelector('.nav__content');
    applyListeners();
  };

  const applyListeners = () => {
    // eslint-disable-next-line no-unused-expressions
    menu?.addEventListener('click', () => {
      toggleClass(body, 'nav-active');
    });
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else element.classList.add(stringClass);
  };

  useEffect(() => {
    init();
  }, []);

  const onLogoutClick = () => {
    handleDomManuplation();
    dispatch(logoutRequest());
    dispatch(resetApp());
    localStorage.clear();
    window.location.reload(false);
  };

  const handleDomManuplation = () => {
    body = document.querySelector('body');
    // navContents = document.querySelector('.nav__content');
    toggleClass(body, 'nav-active');
    // toggleClass(navContents, 'hide-nav-content');
  };

  const handleMenuClick = (route = '') => {
    handleDomManuplation();
    history.push(`/${route}`);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <div role="presentation" onClick={() => history.push('/')}>
          <img src={Obortech} alt="logo" style={{ zoom: 1.2 }} />
        </div>
      </h1>
      <div className="menu-icon" role="presentation" onClick={handleClick}>
        <span className="menu-icon__line menu-icon__line-left" />
        <span className="menu-icon__line" />
        <span className="menu-icon__line menu-icon__line-right" />
      </div>
      <ul className={active ? 'nav-menu active' : 'nav-menu'}>
        <li
          role="presentation"
          className="active"
          style={{
            borderBottom: '2px solid black',
          }}
          onClick={() => handleMenuClick()}
        >
          Dashboard
        </li>
        <li role="presentation" onClick={() => handleMenuClick('networks')}>
          Network
        </li>
        <li role="presentation" onClick={() => handleMenuClick('block')}>
          Blocks
        </li>
        <li role="presentation" onClick={() => handleMenuClick('transactions')}>
          Transactions
        </li>
        <li role="presentation" onClick={() => handleMenuClick('channels')}>
          Channel
        </li>
        <li
          role="presentation"
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => onLogoutClick()}
        >
          Logout
          <FiLogOut size={16} style={{ marginLeft: 6 }} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
