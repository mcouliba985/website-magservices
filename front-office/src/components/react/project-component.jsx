// src/components/react/SwiperSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import projects from '../../datas/project.json';

const ProjectComponent = () => {
      return (
            <div className="w-full px-2 mx-auto">
                  <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                              delay: 5000,
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
                        {projects.slice(0, 8).map((project) => {
                              return (
                                    <SwiperSlide key={project.id}>
                                          <a href="/" className="p-4 shadow">
                                                <img
                                                      className="w-full max-h-40 pb-4 rounded-2xl"
                                                      src={project.image}
                                                      alt={project.title}
                                                />
                                          </a>
                                    </SwiperSlide>
                              );
                        })}
                  </Swiper>
            </div>
      );
};

export default ProjectComponent;
