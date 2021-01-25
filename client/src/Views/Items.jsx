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
    message,
    Table
} from 'antd';
import { GiFoodTruck, GiHamburger } from 'react-icons/gi';
import { AiFillDelete } from 'react-icons/ai'
import { FaCashRegister } from 'react-icons/fa';
import axios from '../config/axios';

const Items = () => {

    const [totalBill, setTotalBill] = useState(0);
    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState(null);

    useEffect(() => {
        axios.get('/items/').then(response => {
            setItems(response.data);
        });
    }, [refresh]);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    //defining deleteHandler function
    const deleteHandler = (id) => {
        axios.delete(`/items/${id}`).then(response => {
            console.log(response.data);
            setRefresh(Math.random());
            message.warning('Item deleted successfully');
        })
    }


    //defining onFinishHandler function
    const onFinishOrderHandler = (value) => {
        console.log(value.order);

        let payload = {
            tableNo: value.order.tableNo,
            waiter: value.order.waiter,
            items: value.order.items.join(),
            totalAmount: totalBill,
            paid: value.order.paid,
            paymentMethod: value.order.paymentMethod
        }

        axios.post('/orders/', payload).then(response => {
            console.log(response.data);
            setRefresh(Math.random());
            message.success('Order created successfully');
        })
    }

    //defining onFinishItemHandler function
    const onFinishItemHandler = (value) => {
        console.log(value);
        axios.post('/items/', value.item).then(response => {
            console.log(response);
            setRefresh(Math.random());
            message.success('Item created successfully!');
        })
    }

    //defining itemOnChangeHandler function
    const itemOnChangeHandler = (value) => {
        //let arr = value.split('-');
        //console.log(arr[0]);
        // console.log(value);
        let bill = 0;
        for (let i = 0; i < value.length; i++) {
            let arr = value[0].split('-');
            bill = bill + parseInt(arr[1]);
        }

        console.log(bill);
        setTotalBill(bill);
    }




    //Table setup
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Unit',
            key: 'unit',
            dataIndex: 'unit',
        },
        {
            title: 'Unit Price',
            key: 'unitPrice',
            dataIndex: 'unitPrice',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <AiFillDelete style={{ cursor: 'pointer' }} onClick={() => deleteHandler(record.id)} size={20} color={'red'} />
            )
        },


    ];

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
                            onFinish={onFinishItemHandler}
                        >

                            {/* Name */}
                            <Form.Item name={['item', 'name']} rules={[{ required: true }]} label="Enter item name">
                                <Input />
                            </Form.Item>

                            {/* Category */}
                            <Form.Item name={['item', 'category']} rules={[{ required: true }]} label="Select Item Category">
                                <Select>
                                    <Select.Option value="Appetizers">Appetizers</Select.Option>
                                    <Select.Option value="Drinks">Drinks</Select.Option>
                                    <Select.Option value="Burgers">Burgers</Select.Option>
                                    <Select.Option value="Platters">Platters</Select.Option>
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
                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                    <Col span={24}>
                                        <Button style={{ width: '100%' }} danger type="primary" htmlType="submit">
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
                            All Items
                        </span>

                        <Table columns={columns} dataSource={items} />
                    </div>
                </Col>
            </Row>

        </Layout>
    );
};

export default Items;