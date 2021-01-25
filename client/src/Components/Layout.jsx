import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

//icons
import { GiAnchor } from 'react-icons/gi'
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineNotification } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgMathPercent } from 'react-icons/cg';
import { SiCodechef } from 'react-icons/si';
import { FaPizzaSlice } from 'react-icons/fa';

const Layout = (props) => {
    const location = useLocation();
    return (
        <>
            <div className="main">
                <div className="sidebar">
                    <div className="sidebar__top">
                        <span>Binary Pos</span>
                    </div>
                    <div className="sidebar__middle">
                        <ul>
                            <Link to="/"><li style={{ color: location.pathname === '/' ? '#0094FF' : '#fff' }}><GiAnchor size={20} /> POS Landing </li></Link>
                            <Link to="/orders"><li style={{ color: location.pathname === '/orders' ? '#0094FF' : '#fff' }} ><SiCodechef size={20} /> POS Orders</li></Link>
                            <Link to="/items"><li style={{ color: location.pathname === '/items' ? '#0094FF' : '#fff' }}><FaPizzaSlice size={20} /> POS Items</li></Link>
                        </ul>
                    </div>
                    <div className="sidebar__bottom">
                        <div className="user-box">
                            <FaUserCircle size={40} />
                            <div style={{ marginLeft: '2rem' }} className="icon-text">
                                <AiOutlineSetting style={{ marginRight: '.5rem' }} size={20} />
                                <span>Shamim Sayeb</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <header>
                        <form>
                            <input type="text" name="" placeholder="Search for Orders..." />
                            <button><BiSearch color="var(--color-grey-dark-1)" size={20} /></button>
                        </form>
                        <div className="round-bg-icon-box">
                            <div className="round-bg-icon">
                                <IoMdNotificationsOutline size={20} />
                            </div>
                            <div className="round-bg-icon">
                                <AiOutlineNotification size={20} />
                            </div>
                            <div className="round-bg-icon">
                                <CgMathPercent size={20} />
                            </div>
                            <div className="round-bg-icon">
                                <GiTakeMyMoney size={20} />
                            </div>
                        </div>
                    </header>
                    <div style={{ margin: '2rem' }} className="main-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;