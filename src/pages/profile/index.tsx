import { Button } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className="profile">
      <h1>My Profile</h1>
      <Button danger onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;
