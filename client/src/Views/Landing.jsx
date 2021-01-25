import React, { useEffect, useState } from 'react';

//importing all components
import Layout from '../Components/Layout';
import {
    Row,
    Col,
} from 'antd';
import { GiFullPizza } from 'react-icons/gi';
import { AiFillDelete } from 'react-icons/ai'
import { FaCashRegister } from 'react-icons/fa';
import { FaPizzaSlice } from 'react-icons/fa';
import { GrRestaurant } from 'react-icons/gr';
import { RiRestaurantFill } from 'react-icons/ri';
import { SiCodechef } from 'react-icons/si';

const Landing = (props) => {
    return (
        <Layout>

            <Row gutter={[20, 20]}>
                <Col span={6}>
                    <div onClick={() => props.history.push('/items')} className="cardx cardxx">
                        <FaPizzaSlice size={60} />
                        <span>Create New Item</span>
                    </div>
                </Col>
                <Col span={6}>
                    <div onClick={() => props.history.push('/items')} className="cardx cardxx">
                        <GiFullPizza size={60} />
                        <span>Manage All Items</span>
                    </div>
                </Col>
                <Col span={6}>
                    <div onClick={() => props.history.push('/orders')} className="cardx cardxx">
                        <SiCodechef size={60} />
                        <span>Create New Order</span>
                    </div>
                </Col>
                <Col span={6}>
                    <div onClick={() => props.history.push('/orders')} className="cardx cardxx">
                        <RiRestaurantFill size={60} />
                        <span>Manage All Orders</span>
                    </div>
                </Col>

            </Row>

        </Layout>
    );
};

export default Landing;