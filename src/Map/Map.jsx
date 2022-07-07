import React from "react";
import GoogleMapReact from "google-map-react";
// import { useMediaQuery } from "@material-ui/core";
// import { LocationOnOutlinedIcon } from "@material-ui/icons";
// import { Rating } from "@material-ui/lab";
import useStyles from "./styles";

const GOOGLE_MAP_API = process.env.REACT_APP_GOOGLE_MAP_API;

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  console.log(GOOGLE_MAP_API);
  //   const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
