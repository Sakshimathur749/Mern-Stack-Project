import React from 'react';
import '../App.css';
import "../index-CNfx030l.css";
import './MediaQuerie.css'
import RAS from '../assets/RAS.png'
import SRK from '../assets/SRK.png'
import Shyambagti from '../assets/ShyamBagti.png'
import GlobalMeded from '../assets/GlobalMeded.png'
import Meridianguru from '../assets/Meridianguru.png'
import BollywoodPathshala from '../assets/BollywoodPathshala.png'
import LoanBuddha from '../assets/Loan-Buddha.png'
import Heal from '../assets/Heal.png'
import KusumBhandari from '../assets/Kusum-bhandari.png'
import Meenabardia from '../assets/Meena-bardia.png'
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
                      <a href="https://shyambhakti.com/">
                        <img src={Shyambagti} alt="Shyam Bhakti" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="">
                        <img src={SRK} alt="SRK Spices" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="">
                        <img src={GlobalMeded} alt="Global Meded" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="http://meridianguru.in/">
                        <img src={Meridianguru} alt="Meridian Guru" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="http://bollywoodkipathshala.com/">
                        <img src={BollywoodPathshala} alt="Bollywood Pathshala" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://loanbuddha.co.in/">
                        <img src={LoanBuddha} alt="Loan Buddha" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://healsociety.in/">
                        <img src={Heal} alt="Heal" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://kusumbhandari.in/">
                        <img src={KusumBhandari} alt="Kusum Bhandari" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://meenabardia.com/">
                        <img src={Meenabardia} alt="Meena Bardia" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <a href="https://irtdisabled.org/">
                        <img src={IRT} alt="IRT" />
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