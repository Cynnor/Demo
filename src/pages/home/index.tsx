import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Popconfirm,
  Table,
  Upload,
  type GetProp,
  type UploadFile,
  type UploadProps,
} from "antd";
import "./index.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import FormItem from "antd/es/form/FormItem";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

// npm i axios
// entity
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

function Home() {
  const [dataSource, setDataSource] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [form] = Form.useForm();
  const [editRecord, setEditRecord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  //   const dataSource = [
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
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => <Image src={image} width={150} />,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (id, record) => (
        <>
          <Button style={{ marginRight: 8 }} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Delete this task?"
            description="Are you sure to delete this task?"
            onConfirm={() => handleDelete(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  // post   : create
  // put    : updata data
  // get    : get data from database
  // delete : delete data
  // patch  : updata but only 1 truong`
  async function fetchData() {
    const response = await axios.get(
      "https://685aa8dc9f6ef9611157511f.mockapi.io/apidemo"
    );
    console.log(response.data);
    setDataSource(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // style 1
  const handleSumit = async (values = {}) => {
    let imageURL = values.image;
    if (values.image?.file?.originFileObj) {
      imageURL = await uploadFile(values.image?.file?.originFileObj);
    } else if (values.image?.url) {
      imageUrl = values.image.url;
    }
    const newValues = { ...values, image: imageUrl };

    if (editRecord) {
      const response = await axios.put(
        `https://685aa8dc9f6ef9611157511f.mockapi.io/apidemo/${editRecord.id}`,
        newValues
      );
      console.log("update data", response.data);
      const updateData = dataSource.map((item) =>
        item.id === editRecord.id ? { ...response.data, ...newValues } : item
      );
      setDataSource(updateData);
    } else {
      const url = await uploadFile(values.image?.file?.originFileObj);
      values.image = url;
      await axios.post(
        "https://685aa8dc9f6ef9611157511f.mockapi.io/apidemo",
        values
      );
      setDataSource([...dataSource, response.data]);
    }
    form.resetFields();
    setIsShowModal(false);
    setEditRecord(null);
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleEdit = (record) => {
    setIsShowModal(true);
    form.setFieldsValue(record);
    setEditRecord(record);
    setFileList([
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: record.image,
      },
    ]);
  };

  // style 2
  const handleDelete = async (id) => {
    await axios.delete(
      `https://685aa8dc9f6ef9611157511f.mockapi.io/apidemo/${id}`
    );
    const newData = dataSource.filter((Item) => Item.id !== id);
    setDataSource(newData);
  };

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  function handleOpenModal() {
    setIsShowModal(true);
  }

  function handleCloseModal() {
    setIsShowModal(false);
  }

  function handleOk() {
    form.submit();
  }

  return (
    <div>
      <Button type="primary" onClick={handleOpenModal}>
        Add Data
      </Button>
      <Table dataSource={dataSource} columns={columns} />;
      <Modal
        title="Data"
        open={isShowModal}
        onCancel={handleCloseModal}
        onOk={handleOk}
      >
        <Form form={form} onFinish={handleSumit}>
          <FormItem
            name={"name"}
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </FormItem>
          <FormItem
            name={"age"}
            label="Age"
            rules={[{ required: true, message: "Please input your age!" }]}
          >
            <Input placeholder="Age" />
          </FormItem>
          <FormItem
            name={"address"}
            label="Address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input placeholder="Address" />
          </FormItem>
          <FormItem
            name={"image"}
            label="Imgae"
            rules={[{ required: true, message: "Please input your image!" }]}
          >
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </FormItem>
        </Form>
      </Modal>
      <Image
        wrapperStyle={{ display: "none" }}
        preview={{
          visible: previewOpen,
          onVisibleChange: (visible) => setPreviewOpen(visible),
          afterOpenChange: (visible) => !visible && setPreviewImage(""),
        }}
        src={previewImage}
      />
    </div>
  );
}

export default Home;
