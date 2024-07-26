import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PropertyTypes = () => {
  const [propertyTypes, setPropertyTypes] = useState([]);

  useEffect(() => {
    async function fetchPropertyData() {
      const apiUrl = "/api/properties"; // Replace with the actual API URL

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
        const propertyTypeArray = Object.entries(typeCounts).map(
          ([name, { count, icon }]) => ({
            name,
            count,
            icon,
          })
        );

        setPropertyTypes(propertyTypeArray);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    }

    fetchPropertyData();
  }, []);

  return (
    <>
      {/* <!-- Category Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Property Types</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            {propertyTypes.map((type) => (
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={type.name}
              >
                <Link
                  to={`/type/${type.name}`}
                  className="cat-item d-block bg-light text-center rounded p-3"
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src={`public/assets/img/${type.icon}`}
                        alt="Icon"
                      />
                    </div>
                    <h6 style={{ textTransform: "capitalize" }}>{type.name}</h6>
                    <span>{type.count} Properties</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Category End --> */}
    </>
  );
};

export default PropertyTypes;
