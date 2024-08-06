import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerInner from "../components/BannerInner";
import PropertySearch from "../components/PropertySearch";

const PropertyDetail = () => {
  const { id } = useParams();
  const [propertyDetail, setPropertyDetail] = useState();

  useEffect(() => {
    const fetchProperty = async () => {
      if (id) {
        try {
          const res = await fetch(`/api/properties?id=${id}`);
          const data = await res.json();
          setPropertyDetail(data[0]);
        } catch (error) {
          console.log("Error while fetching property details ", error);
        }
      }
    };

    fetchProperty();
  }, [id]);

  return (
    <>
      <BannerInner title="Hello World" />
      <PropertySearch />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h1>{propertyDetail?.title}</h1>
              <img
                src={`/assets/img/${propertyDetail?.image}`}
                className="img-fluid"
              />
              <p>{propertyDetail?.location}</p>
              <p>{propertyDetail?.space}</p>
              <p>{propertyDetail?.bed}</p>
              <p>{propertyDetail?.type?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
