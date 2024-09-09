import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Iloq.scss";

const IloqHeader = () => {
  return (
    <div className="iloq-header">
      <Toolbar>
        <div>
          <Typography variant="h6" className="header-title">
            TCO Calculator
          </Typography>
          <span className="header-box">Fill in the white fields</span>
        </div>
      </Toolbar>
    </div>
  );
};

export default IloqHeader;
