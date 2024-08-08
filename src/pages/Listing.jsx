import { useEffect, useState } from "react";
import BannerInner from "../components/BannerInner";
import PropertySearch from "../components/PropertySearch";
import { Link, useLocation } from "react-router-dom";

const Listing = () => {
  const [properties, setProperties] = useState([]);
  const location = useLocation();

  const [searchData, setSearchData] = useState("");
  const [typeData, setTypeData] = useState("");
  const [cityData, setCityData] = useState("");

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      const queryParams = new URLSearchParams(location.search);
      const search = queryParams.get("search") || "";
      const type = queryParams.get("type") || "";
      const locationParam = queryParams.get("location") || "";

      setSearchData(search);
      setTypeData(type);
      setCityData(locationParam);

      try {
        const res = await fetch("/api/properties");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();

        // Client-side filtering if API doesn't support filtering
        const filteredProperties = data.filter((property) => {
          const matchesSearch = search
            ? property.title.toLowerCase().includes(search.toLowerCase()) ||
              property.description.toLowerCase().includes(search.toLowerCase())
            : true;

          const matchesType = type ? property.type.name === type : true;
          const matchesLocation = locationParam
            ? property.city === locationParam
            : true;

          return matchesSearch && matchesType && matchesLocation;
        });

        setProperties(filteredProperties);
      } catch (error) {
        console.error("Error fetching filtered properties:", error);
        setProperties([]); // Clear properties in case of error
      }
    };

    fetchFilteredProperties();
  }, [location.search]);

  return (
    <>
      <BannerInner title="Properties" />
      <PropertySearch
        searchData={searchData}
        typeData={typeData}
        cityData={cityData}
      />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {properties.length > 0 ? (
              properties.map((property, index) => (
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={index}
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
                      <Link
                        className="d-block h5 mb-2"
                        to={`/property/${property.id}`}
                      >
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
              ))
            ) : (
              <p>No properties found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
