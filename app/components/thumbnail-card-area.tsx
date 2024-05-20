import Grid from "@mui/material/Grid";
import { cardData } from "../const/card-data";
import ThumbnailCard from "./thumbnail-card";
import { Box } from "@mui/material";

const ThumbnailCardArea = () => {
  return (
    <Box px={{ xs: 2, md: 15 }} bgcolor={"#fff7f7"} mt={4}>
      <Grid container spacing={4} padding={3}>
        {cardData.map((data) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={data.number}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <ThumbnailCard
              title={data.title}
              imageSrc={data.imageSrc}
              number={data.number}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ThumbnailCardArea;
