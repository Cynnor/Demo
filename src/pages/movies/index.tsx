import { Button, Form, Input, Modal, Table } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import axios from 'axios';
import { useEffect, useState } from 'react'
import "./index.scss"

function Movies() {
    const[isSourceData, setIsSourceData] = useState([]);
    const[isShowModal1, setIsShowModal1] = useState(false);
    const[form1] = Form.useForm();

//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];
//     const dataSource = [
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Language',
    dataIndex: 'language',
    key: 'language',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
]
    async function fetchData() {
        const response = await axios.get(
            "https://685aa8dc9f6ef9611157511f.mockapi.io/Movies"
        );
        console.log(response.data);
        setIsSourceData(response.data); 
    }

    useEffect(()=>{
        fetchData();
    }, []);

    function handleOpenModel1() {
      setIsShowModal1(true);
    }

    function handleCloseModal1(){
      setIsShowModal1(false);
    }

    function handleOk1(){
      form1.submit();
    }

    async function handlSubmit1(values = {}){
      const reponse = await axios.post(
        "https://685aa8dc9f6ef9611157511f.mockapi.io/Movies",
        values
      )
      setIsSourceData([...isSourceData,reponse.data]);
      setIsShowModal1(false)
    }

  return (
    <div>
        <Button type='primary' onClick={handleOpenModel1}>
          Add Movie
          </Button>
        <Table dataSource={isSourceData} columns={columns} />;
        <Modal title="Movie" 
          open={isShowModal1} 
          onCancel={handleCloseModal1} 
          onOk={handleOk1}
          >
          <Form form={form1} onFinish={handlSubmit1}>
            <FormItem
            name={"name"}
            label="Name" 
            >
              <Input placeholder="Name"/>
            </FormItem>
          </Form>
          <Form>
            <FormItem
            name={"language"}
            label="Language" 
            >
              <Input placeholder="Language"/>
            </FormItem>
          </Form>
          <Form>
            <FormItem
            name={"time"}
            label="Time" 
            >
              <Input placeholder="Time"/>
            </FormItem>
          </Form>
        </Modal>

    </div>
  )
}

export default Movies