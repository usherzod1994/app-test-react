import React from "react";
import '../../styles/loader.less';

const CircularProgress = ({className}) => <div className={`loader ${className}`}>
  <div className="nnb-container">
    <div className="nnb-loading"><i/><i/><i/><i/></div>
  </div>

</div>;
export default CircularProgress;
