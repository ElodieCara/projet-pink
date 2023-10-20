import Footer from "../layout/Footer";
import Gallery from "../layout/Gallery";
import Header from "../layout/Header";
import Reservation from "../layout/Reservation";
import Subscribe from "../layout/Subscribe";
import Testimonial from "../layout/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Gallery />
      <Testimonial />
      <Reservation />
      <Subscribe />
      <Footer />
    </>
  );
}
