import FeaturedPropertyListing from "./FeaturedPropertyListing";
import ForRentPropertyListing from "./ForRentPropertyListing";
import ForSellPropertyListing from "./ForSellPropertyListing";

const PropertyListings = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Property Listing</h1>
                <p>
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit diam justo sed
                  rebum.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-primary active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    Featured
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    For Sell
                  </a>
                </li>
                <li className="nav-item me-0">
                  <a
                    className="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    For Rent
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <FeaturedPropertyListing />
                <div className="col-12 text-center">
                  <a className="btn btn-primary py-3 px-5" href="">
                    Browse More Property
                  </a>
                </div>
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                <ForSellPropertyListing />
                <div className="col-12 text-center">
                  <a className="btn btn-primary py-3 px-5" href="">
                    Browse More Property
                  </a>
                </div>
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <ForRentPropertyListing />
                <div className="col-12 text-center">
                  <a className="btn btn-primary py-3 px-5" href="">
                    Browse More Property
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyListings;
