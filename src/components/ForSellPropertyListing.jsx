import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ForSellPropertyListing = () => {
  const [forSell, setForSell] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          "/api/properties?sort=id&purpose=sell&_limit=6"
        );
        const data = await res.json();
        // Sort properties by id in descending order
        const sortedProperties = data.sort((a, b) => b.id - a.id);
        setForSell(sortedProperties);
      } catch (error) {
        console.log("Error fetching data ", error);
        setForSell([]);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      {forSell.map((property) => (
        <div
          className="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.1s"
          key={property.id}
        >
          <div className="property-item rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <Link to={`/property/${property.id}`}>
                <img
                  className="img-fluid"
                  src={`public/assets/img/${property.image}`}
                  alt=""
                />
              </Link>
              <div
                className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3"
                style={{ textTransform: "capitalize" }}
              >
                For {property.purpose}
              </div>
              <div
                className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3"
                style={{ textTransform: "capitalize" }}
              >
                {property.type.name}
              </div>
            </div>
            <div className="p-4 pb-0">
              <h5 className="text-primary mb-3">{property.price}</h5>
              <Link to={`/property/${property.id}`} className="d-block h5 mb-2">
                {property.title}
              </Link>
              <p>
                <i className="fa fa-map-marker-alt text-primary me-2"></i>
                {property.location}
              </p>
            </div>
            <div className="d-flex border-top">
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-ruler-combined text-primary me-2"></i>
                {property.space}
              </small>
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-bed text-primary me-2"></i>
                {property.bed} Bed
              </small>
              <small className="flex-fill text-center py-2">
                <i className="fa fa-bath text-primary me-2"></i>
                {property.bath} Bath
              </small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ForSellPropertyListing;
