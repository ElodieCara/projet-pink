import { useState, useEffect } from "react";

import SlideShow from "../components/SlideShow";
import { testimonials } from "../data/data.js";

export default function Testimonial() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    setStory(testimonials);
  }, []);

  return (
    <div className="testimonial">
      <div className="testimonial-title">Témoignagnes</div>
      <div className="testimonial__container">
        <SlideShow
          photo={story[0].photo}
          name={story[0].name}
          date={story[0].date}
          title={story[0].title}
          content={story[0].content}
          testimonials={story}
        />
      </div>
    </div>
  );
}
