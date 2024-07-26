import AgentsListing from "../components/AgentsListing";
import ContactCertifiedAgent from "../components/ContactCertifiedAgent";
import HomeBanner from "../components/HomeBanner";
import PerfectProperty from "../components/PerfectProperty";
import PropertyListing from "../components/PropertyListing";
import PropertySearch from "../components/PropertySearch";
import PropertyTypes from "../components/PropertyTypes";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <>
      {/* <!-- Banner Start --> */}
      <HomeBanner />
      {/* <!-- Banner End --> */}

      {/* <!-- Search Start --> */}
      <PropertySearch />
      {/* <!-- Search End --> */}

      {/* <!-- Category Start --> */}
      <PropertyTypes />
      {/* <!-- Category End --> */}

      {/* <!-- About Start --> */}
      <PerfectProperty />
      {/* <!-- About End --> */}

      {/* <!-- Property List Start --> */}
      <PropertyListing />
      {/* <!-- Property List End --> */}

      {/* <!-- Call to Action Start --> */}
      <ContactCertifiedAgent />
      {/* <!-- Call to Action End --> */}

      {/* <!-- Team Start --> */}
      <AgentsListing />
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <Testimonials />
      {/* <!-- Testimonial End --> */}
    </>
  );
};

export default HomePage;
