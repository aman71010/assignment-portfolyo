import { useSelector } from "react-redux";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const testimonials = useSelector(state => state.user.testimonials);
  const props = {
    loop: true,
    spaceBetween: 70,
    slidesPerView: 2,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      720: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
    },
  };
  return (
    <div className="section testimonials" id="section-testimonials">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Testimonials</div>
        </div>
        {/* testimonials items */}
        <div className="reviews-carousel">
          <Swiper {...props} className="swiper-container">
            <div className="swiper-wrapper">
              {testimonials.map(item => {
                return (
                  <SwiperSlide className="swiper-slide" key={item._id}>
                    <div className="reviews-item content-box">
                      <div className="image">
                        <img src={item.image.url} alt="testimonial-item-image" />
                      </div>
                      <div className="info">
                        <div className="name">{item.name}</div>
                        <div className="company">{item.position}</div>
                      </div>
                      <div className="text">
                        {item.review}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          {/* navigation */}
          <div className="swiper-nav">
            <a className="prev swiper-button-prev fas fa-long-arrow-alt-left" />
            <a className="next swiper-button-next fas fa-long-arrow-alt-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
