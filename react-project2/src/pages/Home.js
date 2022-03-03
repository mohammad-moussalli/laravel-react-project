import ImageCarousel from "../components/Carousel";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div className="ContactUs">
      <div className="contact">
      <ContactUs />
      </div>
      <div className="imagecarousel">
        <ImageCarousel />
      </div>   
    </div>
  );
}
export default Home;