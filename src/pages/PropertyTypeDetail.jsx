import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerInner from "../components/BannerInner";
import PropertySearch from "../components/PropertySearch";
import ContactCertifiedAgent from "../components/ContactCertifiedAgent";

const PropertyTypeDetail = () => {
  const { type } = useParams();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const fetchPropertyType = async () => {
      try {
        const res = await fetch("/api/properties");
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.log("No Record Found", error);
        setProperties([]);
      }
    };
    fetchPropertyType();
  }, []);

  useEffect(() => {
    if (type) {
      const filtered = properties.filter(
        (property) => property.type.name === type
      );
      setFilteredProperties(filtered);
    } else {
      setFilteredProperties(properties);
    }
  }, [type, properties]);

  return (
    <>
      <BannerInner title={type} />
      <PropertySearch />
      {/* Property Type Listing Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">
              Property Type:
              <span style={{ textTransform: "capitalize" }}> {type}</span>
            </h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            {filteredProperties.map((filteredProperty) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={filteredProperty.id}
              >
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src={`/public/assets/img/${filteredProperty.image}`}
                        alt=""
                      />
                    </a>
                    <div
                      className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3"
                      style={{ textTransform: "capitalize" }}
                    >
                      For {filteredProperty.purpose}
                    </div>
                    <div
                      className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3"
                      style={{ textTransform: "capitalize" }}
                    >
                      {filteredProperty.type.name}
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">
                      {filteredProperty.price}
                    </h5>
                    <a className="d-block h5 mb-2" href="">
                      {filteredProperty.title}
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2"></i>
                      {filteredProperty.location}
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2"></i>
                      {filteredProperty.space}
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2"></i>
                      {filteredProperty.bed} Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2"></i>
                      {filteredProperty.bath} Bath
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Property Type Listing End */}
      <ContactCertifiedAgent />
    </>
  );
};

export default PropertyTypeDetail;
