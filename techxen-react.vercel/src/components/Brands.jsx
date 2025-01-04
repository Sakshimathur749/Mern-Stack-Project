import React from 'react';
import '../App.css';
import "../index-CNfx030l.css";
import './MediaQuerie.css'
import RAS from '../assets/RAS.png'
import SRK from '../assets/SRK.png'
import SB from '../assets/SB.png'
import GM from '../assets/GM.png'
import MG from '../assets/MG.png'
import BP from '../assets/BP.png'
import LB from '../assets/Loan-Buddha.png'
import Heal from '../assets/Heal.png'
import KB from '../assets/Kusum-bhandari.png'
import MB from '../assets/Meena-bardia.png'
import IRT from '../assets/IRT.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination , Autoplay , Navigation} from 'swiper/modules';

const Brands = () => {
  const pagination = {
    clickable: true,
  };
    return (
      <div className="brands6 sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brands-area-all">
                <p> Trusted by Industry Leaders </p>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                    type: "bullets",
                    el: ".custom-pagination",
                    bulletClass: "custom-bullet",
                    bulletActiveClass: "custom-bullet-active",
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination,Autoplay, Navigation]}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 40 },
                    1024: { slidesPerView: 5, spaceBetween: 50 },
                    1200: { slidesPerView: 6, spaceBetween: 70 },
                  }}
                  className="myswipper"
                >
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={RAS} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={SB} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={SRK} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={GM} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={MG} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={BP} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={LB} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={Heal} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={KB} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={MB} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://rajasthanispices.com/">
                        <img src={IRT} alt="Rajasthan Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div
                  className="custom-pagination"
                  style={{ padding: "15px 0px" ,textAlign:'center' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Brands