import { useEffect } from "react";
import SlideShow from "../components/SlideShow";
import { testimonials } from "../data/data.js";

export default function Testimonial() {
  useEffect(() => {
    testimonials;
  }, []);

  return (
    <section className="testimonial">
      <h2 className="testimonial-title">Témoignages</h2>
      <SlideShow testimonials={testimonials} />
    </section>
  );
}
