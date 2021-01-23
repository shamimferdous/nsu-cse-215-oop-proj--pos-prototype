import Layout from '../Components/Layout';
import { Col, Row, Table, Tag, Space } from 'antd';
import { useEffect, useState } from 'react';
import axios from '../config/axios';
import { GiFoodTruck, GiHamburger } from 'react-icons/gi';
import { AiFillDelete } from 'react-icons/ai'


const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/orders/').then(response => {
      setOrders(response.data);
    });
  }, []);

  //defining deleteHandler function
  const deleteHandler = (id) => {
    console.log(id);
  }


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
    },
    {
      title: 'Payment Method',
      key: 'paymentMethod',
      dataIndex: 'paymentMethod',
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
    <>
      <Layout>
        <Row>
          <Col span={24} >
            <div className="cardx">
              <span style={{ marginTop: '2rem' }} className="the-title">
                <GiFoodTruck size={25} />
                            Displaying All Orders
                </span>
              <Table columns={columns} dataSource={orders} />
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Orders;