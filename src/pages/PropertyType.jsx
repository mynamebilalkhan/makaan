import BannerInner from "../components/BannerInner";
import PropertySearch from "../components/PropertySearch";
import PropertyTypes from "../components/PropertyTypes";

const PropertyType = () => {
  return (
    <>
        <BannerInner title="Property Type" />
        <PropertySearch />
        <PropertyTypes />
    </>
  )
}

export default PropertyType;