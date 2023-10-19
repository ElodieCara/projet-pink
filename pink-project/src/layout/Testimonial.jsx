import { useEffect } from "react";
import SlideShow from "../components/SlideShow";
import { testimonials } from "../data/data.js";

export default function Testimonial() {
  useEffect(() => {
    testimonials;
  }, []);

  return (
    <div className="testimonial">
      <div className="testimonial-title">Témoignagnes</div>
      <div className="testimonial__container">
        <SlideShow testimonials={testimonials} />
      </div>
    </div>
  );
}
