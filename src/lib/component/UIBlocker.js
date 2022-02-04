import React, { Fragment, useEffect, useState } from "react";

export default function UIBlocker(props) {
  const [height, setHeight] = useState(0),
    [width, setWidth] = useState(0);
  const heightHandler = () => {
    const heightDiv = document.getElementById("ui-blocker-container");
    setHeight(heightDiv.scrollHeight);
    setWidth(heightDiv.scrollWidth);
  };
  useEffect(() => {
    heightHandler();
  }, [props]);
  return (
    <Fragment>
      <div className="ui-blocker-container" id="ui-blocker-container">
        {props.children}
      </div>
      {props.visible && (
        <div className="ui-blocker" style={{ height: height, width: width }}>
          <div className="ui-blocker-spinner"></div>
          {props.message && <span>{props.message}</span>}
        </div>
      )}
    </Fragment>
  );
}
