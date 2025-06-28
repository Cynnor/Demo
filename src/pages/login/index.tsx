import { Button, Form, Input } from "antd";
import "./index.scss";
import FormItem from "antd/es/form/FormItem";
import { useNavigate } from "react-router-dom";
import Register from "../register";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="container_left">
        <img src="https://cdn.worldvectorlogo.com/logos/img-1.svg" alt="" />
      </div>
      <div className="container_right">
        <h2>Login</h2>
        <Form className="form">
          <FormItem
            label="Email"
            name="email"
            rules={[{ required: true, message: "Pls input your email" }]}
          >
            <Input placeholder="Vui long nhap Email tai day" />
          </FormItem>
          <FormItem
            label="Password"
            name="password"
            rules={[{ required: true, message: "Pls input your email" }]}
          >
            <Input.Password placeholder="Vui long nhap Password tai day" />
          </FormItem>
          <div className="button">
            <Button className="bt-login" type="primary" htmlType="submit">
              Login
            </Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
