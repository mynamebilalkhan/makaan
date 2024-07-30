const ContactDetails = () => {
  return (
    <>
      <div className="row gy-4">
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
          <div className="bg-light rounded p-3">
            <div
              className="d-flex align-items-center bg-white rounded p-3"
              style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
            >
              <div
                className="icon me-3"
                style={{ width: "45px", height: "45px" }}
              >
                <i className="fa fa-map-marker-alt text-primary"></i>
              </div>
              <span>123 Street, New York, USA</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
          <div className="bg-light rounded p-3">
            <div
              className="d-flex align-items-center bg-white rounded p-3"
              style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
            >
              <div
                className="icon me-3"
                style={{ width: "45px", height: "45px" }}
              >
                <i className="fa fa-envelope-open text-primary"></i>
              </div>
              <span>info@example.com</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
          <div className="bg-light rounded p-3">
            <div
              className="d-flex align-items-center bg-white rounded p-3"
              style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
            >
              <div
                className="icon me-3"
                style={{ width: "45px", height: "45px" }}
              >
                <i className="fa fa-phone-alt text-primary"></i>
              </div>
              <span>+012 345 6789</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
