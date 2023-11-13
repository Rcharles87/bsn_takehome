import React from "react";
import "./Loading.css";
import { CircularProgress } from "@mui/material";

function Loading() {
  return (
    <div className="Loading">
      <div>
        <CircularProgress />
      </div>

      <h4>Loading...</h4>
    </div>
  );
}

export default Loading;
