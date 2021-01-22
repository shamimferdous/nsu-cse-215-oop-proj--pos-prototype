import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from '../config/axios';

//icons
import { GiAnchor } from 'react-icons/gi'
import { GiAirplaneDeparture, GiTakeMyMoney } from 'react-icons/gi';
import { MdAirplanemodeInactive } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FaUserCircle, FaUserFriends, FaUserSecret } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineNotification } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgMathPercent } from 'react-icons/cg';

const Layout = (props) => {

    useEffect(() => {

        axios.get('/characters').then(response => {
            console.log(response.data);
        });

    }, []);

    return (
        <>
            <div className="main">
                <div className="sidebar">
                    <div className="sidebar__top">
                        <span>Binary Pos</span>
                    </div>
                    <div className="sidebar__middle">
                        <ul>
                            <Link to="/"><li style={{ color: '#0094FF' }}><GiAnchor size={20} /> Landing</li></Link>
                            <Link to="/"><li><GiAirplaneDeparture size={20} /> Bookings</li></Link>
                            <Link to="/"><li><MdAirplanemodeInactive size={20} /> Cancellations</li></Link>
                            <Link to="/"><li><RiMoneyDollarCircleFill size={20} /> Transactions</li></Link>
                            <Link to="/"><li><FaUserFriends size={20} /> Customers</li></Link>
                            <Link to="/"><li><FaUserSecret size={20} /> Agents</li></Link>
                        </ul>
                    </div>
                    <div className="sidebar__bottom">
                        <div className="user-box">
                            <FaUserCircle size={40} />
                            <div style={{ marginLeft: '2rem' }} className="icon-text">
                                <AiOutlineSetting style={{ marginRight: '.5rem' }} size={20} />
                                <span>Shamim Ferdous</span>
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