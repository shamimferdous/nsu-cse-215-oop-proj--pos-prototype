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

const Orders = () => {

    const [totalBill, setTotalBill] = useState(0);
    const [items, setItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [refresh, setRefresh] = useState(null);

    useEffect(() => {
        axios.get('/items/').then(response => {
            setItems(response.data);
        });
        axios.get('/orders/').then(response => {
            setOrders(response.data);
        });
    }, [refresh]);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    
  //Table setup
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Table',
      dataIndex: 'tableNo',
      key: 'tableNo',
    },
    {
      title: 'Waiter',
      dataIndex: 'waiter',
      key: 'waiter',
    },
    {
      title: 'Items',
      key: 'items',
      dataIndex: 'items',
    },
    {
      title: 'Amount',
      key: 'totalAmount',
      dataIndex: 'totalAmount',
    },
    {
      title: 'Paid',
      key: 'paid',
      dataIndex: 'paid',
      render: (text, record) => (
        <Switch checked={record.paid} />
      )
    },
    {
      title: 'Payment Method',
      key: 'paymentMethod',
      dataIndex: 'paymentMethod',
    },
  ]


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
    return (
        <Layout>

            <Row gutter={[20, 20]}>
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
                                <Select onChange={itemOnChangeHandler} mode="multiple">
                                    {
                                        items.map(item => {
                                            return <Select.Option key={item.id} value={`${item.name}-${item.unitPrice}`}>{item.name}</Select.Option>
                                        })
                                    }

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
                                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                                        <Col span={12}>
                                            <span className="total-bill">
                                                <FaCashRegister size={30} />
                                                {totalBill} BDT
                                            </span>
                                        </Col>
                                        <Col span={12}>
                                            <Button style={{ width: '100%' }} type="primary" danger htmlType="submit">
                                                Create Order
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="cardx">
                        <span className="the-title">
                            <GiHamburger size={25} />
                            All Orders
                        </span>
                        <Table columns={columns} dataSource={orders} />
                    </div>
                </Col>
            </Row>

        </Layout>
    );
};

export default Orders;