import BannerInner from "../components/BannerInner";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import MapAddress from "../components/MapAddress";
import PropertySearch from "../components/PropertySearch";

const Contact = () => {
  return (
    <>
      <BannerInner title="Contact Us" />
      <PropertySearch />
      {/* <!-- Contact Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Contact Us</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <ContactDetails />
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <MapAddress />
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <p className="mb-4">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.{" "}
                  <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
};

export default Contact;
