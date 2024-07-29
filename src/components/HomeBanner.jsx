import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const imgSlides = ["/assets/img/carousel-1.jpg", "/assets/img/carousel-2.jpg"];

const HomeBanner = () => {
  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4">
              Find A <span className="text-primary">Perfect Home</span> To Live
              With Your Family
            </h1>
            <p className="animated fadeIn mb-4 pb-2">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary py-3 px-5 me-3 animated fadeIn"
            >
              Get Started
            </Link>
          </div>
          <div className="col-md-6 animated fadeIn">
            <OwlCarousel
              className="owl-carousel header-carousel"
              items={1}
              autoplay
              smartSpeed={1500}
              dots={false}
              loop
              nav
              navText={[
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>',
              ]}
            >
              {imgSlides.map((src, index) => (
                <div key={index} className="owl-carousel-item">
                  <img className="img-fluid" src={src} alt="HomeBannerImg" />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </>
  );
};

export default HomeBanner;
