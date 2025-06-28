import { Button, DatePicker, Form, Input, Select } from "antd";
import "./index.scss";
import FormItem from "antd/es/form/FormItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
// npm i dayjs

function Register() {
  const navigate = useNavigate();

  const handleRegister = async (values: { dateOfBirth: dayjs.ConfigType }) => {
    const formaterValues = {
      ...values,
      dateOfBirth: values.dateOfBirth
        ? dayjs(values.dateOfBirth).toISOString
        : null,
    };
    try {
      const responce = await axios.post(
        "https://bookingpod.azurewebsites.net/api/v1/authentication/register",
        formaterValues
      );
      console.log(responce.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="container_left">
        <img src="https://cdn.worldvectorlogo.com/logos/img-1.svg" alt="" />
      </div>
      <div className="container_right">
        <h2>Login</h2>
        <Form name="register" onFinish={handleRegister} className="form">
          <FormItem
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Pls input your First Name" }]}
          >
            <Input placeholder="Vui long nhap First Name tai day" />
          </FormItem>
          <FormItem
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Pls input your Last Name" }]}
          >
            <Input placeholder="Vui long nhap Last Name tai day" />
          </FormItem>
          <FormItem
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Pls select your gender" }]}
          >
            <Select>
              <Select.Option value={1}>Male</Select.Option>
              <Select.Option value={2}>Female</Select.Option>
              <Select.Option value={0}>Other</Select.Option>
            </Select>
          </FormItem>
          <FormItem
            label="Date of birthday"
            name="dateOfBirth"
            rules={[
              { required: true, message: "Pls select your Date of birthday" },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </FormItem>
          <FormItem
            label="Address"
            name="address"
            rules={[{ required: true, message: "Pls input your address" }]}
          >
            <Input placeholder="Vui long nhap address tai day" />
          </FormItem>
          <FormItem
            label="Phone"
            name="phoneNumber"
            rules={[{ required: true, message: "Pls input your phone" }]}
          >
            <Input placeholder="Vui long nhap phone tai day" />
          </FormItem>
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
          <FormItem
            label="Comfirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: "Pls input your Comfirm Password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  } else
                    return Promise.reject(
                      "Password and Confirm Password must be the same"
                    );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Vui long nhap Comfirm Password tai day" />
          </FormItem>
          <div className="button">
            <Button className="bt-login" type="primary" htmlType="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
