import React, { useEffect, useState } from 'react';

//importing all components
import Layout from '../Components/Layout';
import {
    Row,
    Col,
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { GiFoodTruck, GiHamburger } from 'react-icons/gi';
import { FaCashRegister } from 'react-icons/fa';
import axios from '../config/axios';

const Landing = () => {

    const [totalBill, setTotalBill] = useState(0);

    useEffect(()=>{
        axios.get('/items/').then(response=>{
            console.log(response.data);
        });
    }, []);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    //defining onFinishHandler function
    const onFinishOrderHandler = (value) => {
        console.log(value);
    }
    return (
        <Layout>

            <Row gutter={[20, 20]}>
                <Col span={12}>
                <div className="cardx">
                        <span className="the-title">
                            <GiHamburger size={25} />
                            Create New Item
                        </span>
                        <Form
                            {...layout}
                            layout="horizontal"
                            onFinish={onFinishOrderHandler}
                        >

                            {/* Name */}
                            <Form.Item name={['item', 'name']} rules={[{ required: true }]} label="Enter item name">
                                <Input />
                            </Form.Item>

                            {/* Category */}
                            <Form.Item name={['item', 'category']} rules={[{ required: true }]} label="Select Item Category">
                                <Select>
                                    <Select.Option value="1">1</Select.Option>
                                    <Select.Option value="2">2</Select.Option>
                                    <Select.Option value="3">3</Select.Option>
                                    <Select.Option value="4">4</Select.Option>
                                </Select>
                            </Form.Item>

                            {/* Unit */}
                            <Form.Item name={['item', 'unit']} rules={[{ required: true }]} label="Enter item unit">
                                <Input />
                            </Form.Item>

                            {/* Unit Price */}
                            <Form.Item name={['item', 'unitPrice']} rules={[{ required: true }]} label="Enter item unit price">
                                <Input />
                            </Form.Item>
        
                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                    <Row style={{display: 'flex', alignItems: 'center'}}>
                                        <Col span={24}>
                                            <Button style={{ width: '100%'}} danger type="primary" htmlType="submit">
                                                Create Item
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Item>
                        
                        </Form>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="cardx">
                        <span className="the-title">
                            <GiFoodTruck size={25} />
                            Create New Order
                        </span>
                        <Form
                            {...layout}
                            layout="horizontal"
                            onFinish={onFinishOrderHandler}
                        >

                            {/* Table No */}
                            <Form.Item name={['order', 'tableNo']} rules={[{ required: true }]} label="Select Table No">
                                <Select>
                                    <Select.Option value="1">1</Select.Option>
                                    <Select.Option value="2">2</Select.Option>
                                    <Select.Option value="3">3</Select.Option>
                                    <Select.Option value="4">4</Select.Option>
                                </Select>
                            </Form.Item>

                            {/* Waiter */}
                            <Form.Item name={['order', 'waiter']} rules={[{ required: true }]} label="Select Assigned Waiter">
                                <Select>
                                    <Select.Option value="Shamim Ferdous">Shamim Ferdous</Select.Option>
                                    <Select.Option value="Rayat Sayeb">Rayat Sayeb</Select.Option>
                                    <Select.Option value="Merilyn Dip Peris">Marilyn Dip Peris</Select.Option>
                                    <Select.Option value="Antara Labiba">Antara Labiba</Select.Option>
                                </Select>
                            </Form.Item>

                            {/* Items */}
                            <Form.Item name={['order', 'items']} rules={[{ required: true }]} label="Select Order Items">
                                <Select mode="multiple">
                                    <Select.Option value="Shamim Ferdous">Shamim Ferdous</Select.Option>
                                    <Select.Option value="Rayat Sayeb">Rayat Sayeb</Select.Option>
                                    <Select.Option value="Merilyn Dip Peris">Marilyn Dip Peris</Select.Option>
                                    <Select.Option value="Antara Labiba">Antara Labiba</Select.Option>
                                </Select>
                            </Form.Item>

                            {/* Paid */}
                            <Form.Item name={['order', 'paid']} label="Is Paid?">
                                <Switch />
                            </Form.Item>

                            <Form.Item name={['order', 'paymentMethod']} label="Payment Method" >
                                <Select>
                                    <Select.Option value="Cash">Cash</Select.Option>
                                    <Select.Option value="Card">Card</Select.Option>
                                    <Select.Option value="Bkash">Bkash</Select.Option>
                                </Select>
                            </Form.Item>


                            <div>
                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                    <Row style={{display: 'flex', alignItems: 'center'}}>
                                        <Col span={12}>
                                            <span className="total-bill">
                                                <FaCashRegister size={30} />
                                                {totalBill} BDT
                                            </span>
                                        </Col>
                                        <Col span={12}>
                                            <Button style={{width: '100%'}} type="primary" danger htmlType="submit">
                                                Create Order
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>

        </Layout>
    );
};

export default Landing;