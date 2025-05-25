import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import articles from '../../datas/artilce.json';

const ArticleBlog = () => {
      if (articles === undefined) return null;

      return (
            <section>
                  <section className="container py-8">
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
                              {articles.map((article) => (
                                    <SwiperSlide key={article.id}>
                                          <article className="rounded-2xl shadow pb-4">
                                                <img
                                                      className="w-full h-56 rounded-t-2xl"
                                                      src={article.image}
                                                      alt={article.title}
                                                />
                                                <div className="flex justify-between">
                                                      <span className="flex gap-2 items-center p-2">
                                                            <i className="far fa-clock me text-orange-500"></i>
                                                            <p className="text-sm">
                                                                  {article.createdAt}
                                                            </p>
                                                      </span>
                                                      <span className="flex gap-2 items-center p-2">
                                                            <i className="fas fa-tag me text-orange-500"></i>
                                                            <p className="text-sm">
                                                                  {article.category}
                                                            </p>
                                                      </span>
                                                </div>

                                                <div className="px-2">
                                                      <a href="#">
                                                            {article.title.slice(0, 60)} ...
                                                      </a>
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
            </section>
      );
};

export default ArticleBlog;
