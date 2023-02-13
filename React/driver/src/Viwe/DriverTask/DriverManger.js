import React, { useContext, useEffect, useState } from "react";
import Modal from "../../Componet/Modal";
import { DriverContex } from "../../Store/Context/DriverContex";
import DriverCodre from "./DriverCodre";
import DriverForm from "./DriverForm";
import DriverMeno from "./DriverMeno";

const DriverManger = () => {

  const { showModal,hideModal,restFormShow} = useContext(DriverContex);

  return (
    <div style={{padding:0}}>
      <div className="sa">
        <button onClick={restFormShow} className="btn warning">Click</button>
        <h3 className="titel" >Task Driver</h3>
        <Modal show={showModal} hide={hideModal} title="Driver Form">
          <DriverForm/>
        </Modal>
      </div>
      <DriverMeno/>
      <DriverCodre/>
    </div>
  );
};
export default DriverManger;
