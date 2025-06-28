import Input from "antd/es/input/Input";
import "./index.scss";
import {
  BellOutlined,
  CloseOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header_left">
        <img
          style={{ width: "78px", height: "39px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <nav className="header_nar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/tvshow">TV Shows</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
            <li>
              <a href="/New&Popular">New&Popular</a>
            </li>
            <li>
              <a href="/MyList">My List</a>
            </li>
            <li>
              <a href="/Brown by Languages">Brown by Languages</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header_right">
        <li className="icon" onClick={() => setIsSearch(true)}>
          <SearchOutlined />
        </li>
        <li className="icon">
          <BellOutlined />
        </li>
        <li className="icon" onClick={() => navigate("/login")}>
          <UserOutlined />
        </li>
      </div>
      <div className={`header_search ${isSearch ? "active" : ""}`}>
        <Input className="input" placeholder="Search" />
        <CloseOutlined onClick={() => setIsSearch(false)} />
      </div>
    </header>
  );
}

export default Header;
