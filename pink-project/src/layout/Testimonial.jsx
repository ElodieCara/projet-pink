import { useEffect } from "react";
import SlideShow from "../components/SlideShow";
import { testimonials } from "../data/data.js";

export default function Testimonial() {
  useEffect(() => {
    testimonials;
  }, []);

  return (
    <div className="testimonial">
      <h2 className="testimonial-title">Témoignagnes</h2>
      <div className="testimonial__container">
        <SlideShow testimonials={testimonials} />
      </div>
    </div>
  );
}
