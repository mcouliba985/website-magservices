// src/components/react/SwiperSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import services from '../../datas/services.json';

const ServiceSlide = () => {
      return (
            <div className="w-full max-w-6xl mx-auto">
                  <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                        }}
                        breakpoints={{
                              640: { slidesPerView: 1 },
                              768: { slidesPerView: 2 },
                              1050: { slidesPerView: 3 },
                              1300: { slidesPerView: 4 },
                        }}
                        loop={true}
                        className="relative p-4"
                  >
                        {services.slice(0, 8).map((member) => {
                              return (
                                    <SwiperSlide key={member.id}>
                                          <div className="p-4">
                                                <img
                                                      className="w-full h-60 pb-4"
                                                      src={member.image}
                                                      alt=""
                                                />
                                                <h2 className="text-center pb-4 text-xl text-[#274BA1] font-bold">
                                                      {member.title}
                                                </h2>

                                                <p className="text-center text-base font-light">
                                                      {member.hook}
                                                </p>
                                          </div>
                                    </SwiperSlide>
                              );
                        })}
                  </Swiper>
            </div>
      );
};

export default ServiceSlide;
