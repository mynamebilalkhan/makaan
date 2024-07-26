import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState();
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.log("No Records Found", error);
        setTestimonials([]);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Our Clients Say!</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <OwlCarousel
            className="owl-carousel testimonial-carousel wow fadeInUp"
            items={2}
            autoplay
            smartSpeed={1000}
            dots={false}
            loop
            nav
            navText={[
              '<i class="bi bi-arrow-left"></i>',
              '<i class="bi bi-arrow-right"></i>',
            ]}
          >
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-item bg-light rounded p-3"
              >
                <div className="bg-white border rounded p-4">
                  <p>{testimonial.text}</p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded"
                      src={`public/assets/img/${testimonial.image}`}
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="ps-3">
                      <h6 className="fw-bold mb-1">{testimonial.client}</h6>
                      <small>{testimonial.designation}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
