import React from "react";

//function Nav() {
const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="About-Modal">
      <div className="About-Modal-content">
        <div className="About-Modal-header">
          <h4 className="About-Modal-title">About</h4>
        </div>
        <div className="About-Modal-body">Geo-Vermonter Information</div>
        <div className="About-Modal-footer">
          <button className="About-button">Close</button>
        </div>
      </div>
    </div>
    //  <div className="High-Score-Modal">
    //     <div className="High-Score-Modal-Content">
    //       <div className="High-Score-Modal-header">
    //         <h4 className="High-Score-Modal-title">High-Score</h4>
    //       </div>
    //       <div className="High-Score-Modal-body">
    //         This is High-Score content
    //       </div>
    //       <div className="High-Score-Modal-footer">
    //         <button className="High-Score-button">Close</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="Rules-Modal">
    //     <div className="Rules-Modal-Content">
    //       <div className="Rules-Modal-header">
    //         <h4 className="Rules-Modal-title">Rules</h4>
    //       </div>
    //       <div className="Rules-Modal-body">This is Rules content</div>
    //       <div className="Rules-Modal-footer">
    //         <button className="Rules-button">Close</button>
    //       </div>
    //     </div>
    //   </div>
  );
};
export default Modal;
