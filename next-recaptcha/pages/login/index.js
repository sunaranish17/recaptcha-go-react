import { Button, Form, Input } from "antd";
import React from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { RecaptchaComponent } from "../../recaptcha";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();

    return (
        <div style={{ maxWidth: "400px", width: "100%", margin: '0 auto', marginTop: "120px" }}>
            <Form onFinish={onFinishHandler}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input type={'email'} onChange={(e) => setEmail(e.target.value)} value={email} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password onChange={(e) => setPassword(e.target.password)} value={password} />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Login
                </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RecaptchaComponent(Login)