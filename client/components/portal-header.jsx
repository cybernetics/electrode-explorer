import React from "react";
import Config from "@walmart/electrode-ui-config";

const PortalHeader = (props) => {
  return (
    <div className="portal-header">
      <h1 className="portal-title">{Config.ui.meta.portalLogo ?
        <img src={Config.ui.meta.portalLogo}/> :
        Config.ui.meta.portalName}
      </h1>
    </div>
  );
};

export default PortalHeader;
