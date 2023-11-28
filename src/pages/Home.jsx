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
      <main id="main">
        <Gallery id="gallery" />
        <Testimonial id="testimonial" />
        <Reservation id="reservation" />
        <Subscribe id="subscribe" />
      </main>
      <Footer />
    </>
  );
}
