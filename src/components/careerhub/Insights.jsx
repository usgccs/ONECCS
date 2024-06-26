import ImageCarouselCH from "./ImageCarouselCH";

const Insights = () => {
    const images = [
        { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719420125/Untitled_5_mdmys5.png" } } },
        { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719420125/PFf8iVCyomgcUT5LtBcYvv1BtKlugSlGqPILP8xMndzuY4KjPX81gHb9ui4M9ve_kvlfco.png" } } },
        { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719420125/9k6MEXpBc0re1WCGZyfVMTFny2LwFH7UzPfPnAbsvQ4EbIO_5BvUMpK2I1UcyC4_py47ri.png" } } },
        { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719420125/e0LTfURNiFRnsQRg7maPJOuSeRcemPIjWl8NRRbBYbkFw48qrQKSE85M7WgPfPV5z47K_gkfaf5.png" } } },
        { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719420125/N73YomO0xOGX6FyNhXx_T_sbG3ZAi74q8k3N5zTOucZUgWXbBfS37WyDQfSlq88_nfobrc.png" } } },
        { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719420125/0oSjyV0JlzRDcz5XMQ_EAe_ocNNeSl_QMqZs763BzShebo3OxFFDvPxfmDDkQmk_nru2dj.png" } } },
        { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719420125/iey_wRs019KWCTlpPGRF6wJrIRf_79HXabnBGq5kT9IhLjgvx45XyxQy5oGJvwPzVZbnlRBunH4WuP_bshiyv.png" } } },
        { fields: { file: { url: "https://res.cloudinary.com/dnlrbmzns/image/upload/v1719420124/XAFCV5gensmNuiRicMnlzKvbMvnvdTT0OsGb3CEr_2uALB2GkBDTdNxFIAFOPSipC6_rqpzfy.png" } } },
      ];
    
      return (
        <div>
          <ImageCarouselCH images={images} />
        </div>
      );
}   

export default Insights;