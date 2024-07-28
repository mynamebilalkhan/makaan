import AgentsListing from "../components/AgentsListing";
import BannerInner from "../components/BannerInner";
import ContactCertifiedAgent from "../components/ContactCertifiedAgent";
import FeaturedPropertyListing from "../components/FeaturedPropertyListing";
import PerfectProperty from "../components/PerfectProperty";
import PropertySearch from "../components/PropertySearch";

const About = () => {
  return (
    <>
        <BannerInner title="About Us"/>
        <PropertySearch />
        <PerfectProperty />
        <ContactCertifiedAgent />
        <AgentsListing />
    </>
  )
}

export default About;