import { useEffect, useState } from "react";

const AgentsListing = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await fetch("/api/agents");
        const data = await res.json();
        setAgents(data);
      } catch (error) {
        console.log("No Record Found");
        setAgents([]);
      }
    };
    fetchAgents();
  }, []);

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Property Agents</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            {agents.map((agent) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={agent.id}
              >
                <div className="team-item rounded overflow-hidden">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src={`public/assets/img/${agent.image}`}
                      alt={`Agent ${agent.name}`}
                    />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      <a className="btn btn-square mx-1" href={agent.social.fb}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square mx-1" href={agent.social.x}>
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square mx-1" href={agent.social.in}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">{agent.name}</h5>
                    <small>{agent.designation}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentsListing;
