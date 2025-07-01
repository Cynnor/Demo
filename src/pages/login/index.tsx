import { Button, Form, Input } from "antd";
import "./index.scss";
import FormItem from "antd/es/form/FormItem";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { User } from "../../models/user";
import api from "../../config/api";

function Login() {
  const navigate = useNavigate();
  const handelLogin = async (values: User) => {
    try {
      const responce = await api.post("authentication/login", values);
      localStorage.setItem("accessToken", responce.data.data.accessToken);
      toast.success("Login successfull");
      console.log(responce.data.data.accessToken);
      navigate("/");
    } catch (error) {
      console.log("Login failed", error);
      toast.error("Login failed. Please check your credentials");
    }
  };
  return (
    <div className="container">
      <div className="container_left">
        <img src="https://cdn.worldvectorlogo.com/logos/img-1.svg" alt="" />
      </div>
      <div className="container_right">
        <h2>Login</h2>
        <Form className="form" onFinish={handelLogin}>
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
