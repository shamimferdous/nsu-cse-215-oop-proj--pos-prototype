import React from 'react';

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

const Landing = () => {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    //defining onFinishHandler function
    const onFinishHandler = (value) => {
        console.log(value);
    }
    return (
        <Layout>

            <Row>
                <Col span={12}></Col>
                <Col span={12}>
                    <div className="cardx">
                        <Form
                            {...layout}
                            layout="horizontal"
                            onFinish={onFinishHandler}
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
                                <Input type="number" />
                            </Form.Item>


                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>


                        </Form>
                    </div>
                </Col>
            </Row>

        </Layout>
    );
};

export default Landing;