import React from 'react'
import { Form, Input, Button, Checkbox, Row, Layout, Typography } from 'antd'
import { UserOutlined, LockOutlined, UnlockTwoTone } from '@ant-design/icons'
import { useLocalStorage } from '@/presentation/hooks'

type TFormLogin = {
  username: string
  password: string
  remember: boolean
}

const Login: React.FC = () => {
  const [, setAuth] = useLocalStorage<TFormLogin>('auth', { username: '', password: '', remember: true })
  const onFinish = (values: TFormLogin): void => setAuth(values)

  return (
        <Layout style={{ height: '100vh' }}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
                <Form
                    name="login"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Row justify="center" align="middle" style={{ marginBottom: 20 }}>
                        <Button shape="circle" icon={<UnlockTwoTone />} style={{ marginRight: 5 }} />
                        <Typography.Title type="secondary" level={4} style={{ marginBottom: 0 }}>Sign in</Typography.Title>
                    </Row>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a href="">
                            Forgot password
                        </a>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </Layout>
  )
}

export default Login
