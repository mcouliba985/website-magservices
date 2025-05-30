// src/components/react/SwiperSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import services from '../../datas/services.json';

const ServiceSlide = () => {
      return (
            <div className="w-full px-4  mx-auto">
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
                        {services.slice(0, 8).map((service) => {
                              return (
                                    <SwiperSlide key={service.id}>
                                          <a
                                                href={`/services/${service.slug}`}
                                                className="group block rounded-2xl p-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#274BA1]"
                                          >
                                                <img
                                                      src={service.image}
                                                      alt={service.title}
                                                      className="w-full h-60 object-cover rounded-xl mb-4 transition-opacity duration-500 ease-in-out group-hover:opacity-90"
                                                />
                                                <h2 className="text-center text-xl text-[#274BA1] font-bold mb-2 transition-colors duration-300 group-hover:text-[#1e3a8a]">
                                                      {service.title}
                                                </h2>
                                                <p className="text-center text-base font-light text-gray-700 transition-all duration-300 group-hover:text-gray-900">
                                                      {service.hook.slice(0, 120)}...
                                                </p>
                                          </a>
                                    </SwiperSlide>
                              );
                        })}
                  </Swiper>
            </div>
      );
};

export default ServiceSlide;
