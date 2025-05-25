import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react';
import testimonials from '../../datas/testimonial.json';

const TestimonialsComponent = () => {
      const [selectedTestimonial, setSelectedTestimonial] = useState(null);
      const [isClient, setIsClient] = useState(false);

      // On attend que le composant soit monté côté client
      useEffect(() => {
            setIsClient(true);
      }, []);

      if (!isClient) return null; // ou un Skeleton loader

      if (testimonials === undefined) return null;

      return (
            <section>
                  <section className="container">
                        <Swiper
                              modules={[Navigation, Autoplay]}
                              spaceBetween={20}
                              slidesPerView={1}
                              navigation={{
                                    nextEl: '.next-button',
                                    prevEl: '.prev-button',
                              }}
                              autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                              }}
                              breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                    1300: { slidesPerView: 4 },
                              }}
                              loop={true}
                              className="relative mt-5"
                        >
                              {testimonials.map((testimonial) => (
                                    <SwiperSlide key={testimonial.id}>
                                          <article className="testimonial-content rounded-2xl p-4">
                                                <p>
                                                      {testimonial.message.length > 250
                                                            ? `${testimonial.message.slice(
                                                                    0,
                                                                    testimonial.message.indexOf(
                                                                          ' ',
                                                                          250
                                                                    )
                                                              )}...`
                                                            : testimonial.message}
                                                </p>

                                                <button
                                                      className="see-more-btn"
                                                      onClick={() =>
                                                            setSelectedTestimonial(testimonial)
                                                      }
                                                >
                                                      Voir le plus
                                                </button>

                                                <div className="flex gap-4 mt-4 items-center absolute bottom-8">
                                                      <img
                                                            className="w-12 h-12 rounded-full"
                                                            src={testimonial.imagePath}
                                                            alt={testimonial.imageName}
                                                      />

                                                      <div>
                                                            <h2 className="uppercase font-bold font-nunito">
                                                                  {testimonial.fullName}
                                                            </h2>
                                                            <p>{testimonial.poste.slice(0, 25)}</p>
                                                      </div>
                                                </div>
                                          </article>
                                    </SwiperSlide>
                              ))}
                        </Swiper>

                        <div className="flex justify-center gap-6 my-6">
                              <button className="prev-button rounded-[64px] bg-[#274BA1] hover:bg-blue-300 text-white w-12 h-12 flex items-center justify-center">
                                    <i className="fas fa-arrow-left"></i>
                              </button>
                              <button className="next-button rounded-[64px] bg-black hover:bg-white hover:text-black text-white w-12 h-12 flex items-center justify-center">
                                    <i className="fas fa-arrow-right"></i>
                              </button>
                        </div>
                  </section>

                  {/* Modal affichant le commentaire complet */}
                  {selectedTestimonial && (
                        <div
                              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                              onClick={() => setSelectedTestimonial(null)}
                        >
                              <div
                                    className="bg-white rounded-xl p-6 max-w-lg w-full relative"
                                    onClick={(e) => e.stopPropagation()}
                              >
                                    <button
                                          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                                          onClick={() => setSelectedTestimonial(null)}
                                    >
                                          &times;
                                    </button>
                                    <h2 className="text-xl font-bold mb-2">
                                          {selectedTestimonial.fullName}
                                    </h2>
                                    <p className="text-gray-500 mb-1">
                                          {selectedTestimonial.poste}
                                    </p>
                                    <p className="text-gray-800">{selectedTestimonial.message}</p>
                              </div>
                        </div>
                  )}
            </section>
      );
};

export default TestimonialsComponent;
