import { useLocation } from "react-router-dom";
import BannerInner from "../components/BannerInner";
import PropertySearch from "../components/PropertySearch";
import { useEffect, useState } from "react";

const Listing = () => {
  const location = useLocation();
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQueryParam = queryParams.get("search") || "";
    const typeParam = queryParams.get("type") || "";
    const locationParam = queryParams.get("location") || "";
    fetchListings(searchQueryParam, typeParam, locationParam);
  }, [location.search]);

  const fetchListings = async (searchQueryParam, typeParam, locationParam) => {
    try {
      const res = await fetch(
        `/api/properties?search=${searchQueryParam}&location=${locationParam}&type=${typeParam}`
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      // Filter the data based on query params
      const filteredData = data.filter((item) => {
        return (
          (searchQueryParam
            ? item.title.toLowerCase().includes(searchQueryParam.toLowerCase())
            : true) && (typeParam ? item.type.name === typeParam : true)
        );
      });

      setListing(filteredData);
    } catch (error) {
      console.error("Failed to fetch listings", error);
    }
  };

  return (
    <>
      <BannerInner title="Properties" />
      <PropertySearch />
      <h1>Listing</h1>
      {listing.length > 0 ? (
        listing.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.location}</p>
            <p>{item.space}</p>
            <p>
              {item.bed} Beds, {item.bath} Baths
            </p>
            <p>{item.price}</p>
            <img src={item.image} alt={item.title} />
          </div>
        ))
      ) : (
        <p>No listings found</p>
      )}
    </>
  );
};

export default Listing;
