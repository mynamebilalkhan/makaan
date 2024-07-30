import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const navigateResults = () => {
    const queryParams = new URLSearchParams({
      search: searchQuery,
      category: category,
      location: location,
    }).toString();

    navigate(`/listing?${queryParams}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);
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
                    />
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select border-0 py-3"
                      defaultValue=""
                      name="type"
                      onChange={handleTypeChange}
                    >
                      <option value="">Property Type</option>
                      <option value="1">Property Type 1</option>
                      <option value="2">Property Type 2</option>
                      <option value="3">Property Type 3</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select border-0 py-3"
                      defaultValue=""
                      name="location"
                      onChange={handleLocationChange}
                    >
                      <option value="">Location</option>
                      <option value="1">Location 1</option>
                      <option value="2">Location 2</option>
                      <option value="3">Location 3</option>
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
