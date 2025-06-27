import "./index.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="footer_basic">
        <p>Bạn có câu hỏi? Liên hệ với chúng tôi</p>
      </div>
      <div className="footer_answer">
        <ul>
          <li>
            Câu hỏi thường gặp <br></br>
            Quan hệ với nhà đầu tư <br></br>
            Quyền riêng tư <br></br>
            Kiểm tra tốc độ 
          </li>
          <li>
            Trung tâm trợ giúp <br></br>
            Việc làm <br></br>
            Tùy chọn cookie <br></br>
            Thông báo pháp lý 
          </li>
          <li>
            Tài khoản <br></br>
            Các cách xem <br></br>
            Thông tin doanh nghiệp <br></br>
            Chỉ có trên Netfilx 
          </li>
          <li>
            Trung tâm đa phương tiện <br></br>
            Điều khoản sử dụng <br></br>
            Liên hệ với chúng tôi
          </li>
        </ul>
      </div>
      <div className="footer_basic">
        <p>Netflix VietNam</p>
      </div>
      <div className="footer_basic1">
        <p>Trang này được Google reCAPTCHA bảo vệ 
          để đảm bảo bạn không phải là robot. </p>
        <a href="">Tìm hiểu thêm.</a>
      </div>
    </div>
  )
}

export default Footer