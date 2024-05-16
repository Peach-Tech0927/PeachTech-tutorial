 import * as React from "react";
 import Grid from "@mui/material/Grid";
 import Card1 from "../components/card";


 const Showcard = () => {
   return (
     <Grid container spacing={3} padding={3} >
       {Array.from(Array(6)).map((_, index) => (
         <Grid item xs={2} sm={4} md={4} key={index}>
             <Card1 />
         </Grid>
       ))}
     </Grid>
   );
 };

 export default Showcard;
