import { Typography } from "@mui/material";
import SwiperComponent from "./Swiper";

const Review = () => {
  return (
    <div className="space-y-5">
      <Typography variant="h3"
      textAlign='center'
      >
        Our User Say
      </Typography>
      <SwiperComponent/>
    </div>
  );
};

export default Review;