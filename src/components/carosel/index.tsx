import "./index.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// swiperjs để autoplay img 

function Carosel() {
  return (
        <div className="carosel-container">
      <Swiper 
      autoplay={{ delay:2500, disableOnInteraction: false}}
      navigation={true} 
      modules={[Navigation, Autoplay]} 
      className="carosel">
        <SwiperSlide>
            <img className="img" src="https://simg.zalopay.com.vn/zlp-website/assets/phim_han_quoc_30_260f584c77.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className="img" src="https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/phim-tinh-cam-han-quoc-1.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className="img" src="https://www.didongmy.com/vnt_upload/news/03_2025/top-phim-han-quoc-hay-phai-long-co-nang-phu-thuy-didongmy.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className="img" src="https://thienvu.com.vn/image/catalog/image2/tin-tuc/tong-hop-50-bo-phim-ngon-tinh-han-quoc-hay-nhat/phim-han-quoc-hay-love-next-door.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className="img" src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/165597/Originals/phim-tinh-cam-han-quoc-hay-nhat-14-min.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className="img" src="https://phunuvietnam.mediacdn.vn/179072216278405120/2023/12/4/5-17016800073362866771-1701694363102-17016943639121034826469.jpg"></img>
            </SwiperSlide>
      </Swiper>
    </div>)
}

export default Carosel