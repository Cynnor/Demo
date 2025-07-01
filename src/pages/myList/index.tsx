import {
  HeartFilled,
  PlusOutlined,
  ReloadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.scss";
import Carosel from "../../components/carosel";

function MyList() {
  return (
    <div className="dashboard">
      <div className="dashboard_side">
        <div className="ds_menu">
          <div className="heading_menu">Quản lý tài khoản</div>
          <div className="menu_user">
            <a className="item" href="">
              <div className="line">
                <HeartFilled />
                <span>Yêu thích</span>
              </div>
            </a>
            <a className="item" href="">
              <div className="line">
                <PlusOutlined />
                <span>Danh sách</span>
              </div>
            </a>
            <a className="item" href="">
              <div className="line">
                <ReloadOutlined />
                <span>Xem tiếp</span>
              </div>
            </a>
            <a className="item" href="">
              <div className="line">
                <UserOutlined />
                <span>Tài khoản</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="dashboard_main">
        <div className="heading_main">Danh sách bạn đã xem</div>
        <div className="box">
          <Carosel></Carosel>
        </div>
      </div>
    </div>
  );
}

export default MyList;
