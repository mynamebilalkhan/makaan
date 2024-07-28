import BannerInner from "../components/BannerInner";
import ContactCertifiedAgent from "../components/ContactCertifiedAgent";
import PropertyListing from "../components/PropertyListing";
import PropertySearch from "../components/PropertySearch";

const PropertyList = () => {
  return (
    <>
      <BannerInner title="Property List" />
      <PropertySearch />
      <PropertyListing />
      <ContactCertifiedAgent />
    </>
  )
}

export default PropertyList;