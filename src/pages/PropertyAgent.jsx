import AgentsListing from "../components/AgentsListing"
import BannerInner from "../components/BannerInner"
import ContactCertifiedAgent from "../components/ContactCertifiedAgent"
import PropertySearch from "../components/PropertySearch"

const PropertyAgent = () => {
  return (
    <>
        <BannerInner title="Property Agent" />
        <PropertySearch />
        <AgentsListing />
        <ContactCertifiedAgent />
    </>
  )
}

export default PropertyAgent