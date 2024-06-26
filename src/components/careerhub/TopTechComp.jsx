// import ImageCarousel from "../imageCarousel/ImageCarousel";
import ImageCarouselCH from "./ImageCarouselCH";

const TopTechComp = () => {
  const images = [
    { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719416025/microsoft_hsoz4b.jpg" } } },
    { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719416025/Oracle-Logo_o3yuum.png" } } },
    { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719416025/hp_dd4w8i.png" } } },
    { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719416025/fujitsu_b7mfrd.png" } } },
    { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719416025/concentrix_a0kzz7.png" } } },
    { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719416024/ibm_ny19nx.png" } } },
  ];

  return (
    <div>
      <ImageCarouselCH images={images} />
    </div>
  );
};

export default TopTechComp;
