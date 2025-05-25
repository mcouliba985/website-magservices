import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../../styles/SpecialistsSlider.css';

const specialists = [
      {
            img: '/team/mohamed.jpg',
            name: 'Mohamed Coulibaly',
            role: 'CEO & full stack web / mobile',
      },
      { img: '/team/moussa-camara.jpeg', name: 'Moussa Camara', role: 'developpeur web' },
      { img: '/team/djibril-diarra.jpg', name: 'Djibril Diarra', role: 'developpeur web/mobile' },
      { img: '/team/aissata-aya-diallo.jpg', name: 'Aissata Aya Diallo', role: 'Développeuse' },
      { img: '/team/sadjo-diaoune.jpg', name: 'Sadjo Diaoune', role: 'Consultant & intervenant' },
      { img: '/team/namory-keita.jpg', name: 'Namory Keita', role: 'intervenant' },
];

export default function SpecialistsSlider() {
      const [centerIndex, setCenterIndex] = useState(2); // default center index

      return (
            <section className="py-8 px-4 text-center">
                  <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        centeredSlides={true}
                        onSlideChange={(swiper) => setCenterIndex(swiper.realIndex)}
                        breakpoints={{
                              0: { slidesPerView: 1 },
                              640: { slidesPerView: 3 },
                              1024: { slidesPerView: 5 },
                        }}
                        className="specialists-swiper w-full max-w-6xl mx-auto"
                  >
                        {specialists.map((person, index) => {
                              const total = specialists.length;
                              const distance = (index - centerIndex + total) % total;
                              let className = 'slide-small';
                              if (
                                    (distance === 1 && total >= 3) ||
                                    (distance === total - 1 && total >= 3)
                              )
                                    className = 'slide-medium';
                              else if (distance === 0) className = 'slide-large';

                              const isCenter = distance === 0;

                              return (
                                    <SwiperSlide key={index} className={`slide ${className}`}>
                                          <img
                                                src={person.img}
                                                alt={person.name}
                                                className="rounded-full object-cover mx-auto"
                                          />
                                          <div
                                                className={`slide-info ${
                                                      isCenter ? 'visible' : 'hidden'
                                                }`}
                                          >
                                                <h3 className="text-lg font-bold mt-3">
                                                      {person.name}
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                      {person.role}
                                                </p>
                                          </div>
                                    </SwiperSlide>
                              );
                        })}
                  </Swiper>
            </section>
      );
}
