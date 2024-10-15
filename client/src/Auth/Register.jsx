import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import registerImage from '../assets/register.jpeg';
import userSignup from '../../hook/userSignup';

const Register = () => {

    const { loading, error, registerUser } = userSignup();


    const handleRegister = (values) => {
        // Your registration logic here
        registerUser(values)
    }


    return (
        <Card className='form-contianer'>
            <Flex gap="large" align="center">
                {/* form */}
                <Flex vertical flex={1}>
                    <Typography.Title level={3} strong className='title'>
                        create an account
                    </Typography.Title>
                    <Typography.Text type='secondary' strong className='slogan'>
                        Join for exclusive access!
                    </Typography.Text>
                    <Form layout="vertical" onFinish={handleRegister} autoComplete='off'>
                        <Form.Item label='Full Name' name='name' rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}>
                            <Input size="large" placeholder='Enter your full name' />
                        </Form.Item>
                        <Form.Item label='Email' name='email' rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: 'email',
                                message: 'The input is not valid Email!',

                            }
                        ]}>
                            <Input size="large" placeholder='Enter your email' />
                        </Form.Item>


                        <Form.Item
                            label='Password'
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}>
                            <Input.Password size="large" placeholder='Enter your password' />
                        </Form.Item>
                        <Form.Item
                            label='Password'
                            name='passwordConfirm'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Confirm password!',
                                },
                            ]}>
                            <Input.Password size="large" placeholder='Re-enter your password' />
                        </Form.Item>

                        {
                            error
                            &&
                            <Alert
                                description={error}
                                type='error'
                                showIcon
                                closable
                                className='alert'
                            />
                        }

                        <Form.Item>
                            <Button
                                type={`${loading ? '' : 'primary'}`}
                                htmlType="submit"
                                size="large"
                                className="btn" >
                                {loading ? <Spin /> : 'Create Account'}
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Button size="large" className='btn'>
                                <Link to='/login'>
                                        Sign In
                                </Link>
                            </Button>
                        </Form.Item>

                    </Form>
                </Flex>

                {/* Image */}
                <Flex flex={1} className='auth-Image'>
                    <img src={registerImage} className="signIn-Image" />
                </Flex>
            </Flex>
        </Card>
    )
}

export default Register;
