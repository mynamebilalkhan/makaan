import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PropertySearch = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState(props?.typeData || "");
  const [location, setLocation] = useState(props?.cityData || "");
  const [propertyTypes, setPropertyTypes] = useState([]);
  const navigate = useNavigate();

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/properties");
        const data = await res.json();
        let citiesData = data.map((property) => property.city);

        setCities([...new Set(citiesData)]);
      } catch (error) {
        console.log("Error Fetching Records", error);
        setCities([]);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    async function fetchPropertyData() {
      const apiUrl = "/api/properties";

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Process the data to count occurrences of each property type
        const typeCounts = data.reduce((acc, property) => {
          const typeName = property.type.name;
          if (acc[typeName]) {
            acc[typeName].count += 1;
          } else {
            acc[typeName] = { count: 1, icon: property.type.icon };
          }
          return acc;
        }, {});

        // Convert the processed data to an array
        const propertyTypeArray = Object.entries(typeCounts).map(([name]) => ({
          name,
        }));

        setPropertyTypes(propertyTypeArray);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    }

    fetchPropertyData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const navigateResults = () => {
    const queryParams = new URLSearchParams({
      search: searchQuery,
      type: type,
      location: location,
    }).toString();

    navigate(`/listing?${queryParams}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigateResults();
  };

  return (
    <>
      <div
        className="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: "35px" }}
      >
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Search Keyword"
                      name="keyword"
                      onChange={handleSearchChange}
                      defaultValue={props?.searchData}
                    />
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select border-0 py-3"
                      value={type || props?.typeData}
                      // value={props?.typeData || ""}
                      name="type"
                      onChange={handleTypeChange}
                    >
                      <option value="">Property Types</option>
                      {propertyTypes.map((type, index) => (
                        <option
                          key={index}
                          value={type.name}
                          style={{ textTransform: "capitalize" }}
                        >
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select border-0 py-3"
                      value={location || props?.cityData}
                      // value={props?.cityData || ""}
                      name="location"
                      onChange={handleLocationChange}
                    >
                      <option value="">Location</option>
                      {cities.map((city, index) => (
                        <option
                          key={index}
                          value={city}
                          style={{ textTransform: "capitalize" }}
                        >
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-dark border-0 w-100 py-3">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PropertySearch;
