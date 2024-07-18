import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: AVTR1,
    name: "Bruce Banner",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumendserunt cumque iusto beatae ratione, dolorem aliquid, quam quiaporro minus sed vero quas nam quidem, facilis pariatur iste laborum error.",
  },
  {
    id: 2,
    image: AVTR2,
    name: "Bruce Wayne",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumendserunt cumque iusto beatae ratione, dolorem aliquid, quam quiaporro minus sed vero quas nam quidem, facilis pariatur iste laborum error.",
  },
  {
    id: 3,
    image: AVTR3,
    name: "Diana Prince",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumendserunt cumque iusto beatae ratione, dolorem aliquid, quam quiaporro minus sed vero quas nam quidem, facilis pariatur iste laborum error.",
  },
  {
    id: 4,
    image: AVTR4,
    name: "Natasha Romanoff",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumendserunt cumque iusto beatae ratione, dolorem aliquid, quam quiaporro minus sed vero quas nam quidem, facilis pariatur iste laborum error.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ image, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt="AVTR1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
