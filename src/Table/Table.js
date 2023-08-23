import React, { useState } from "react";
import "./Table.css";
import { Modal } from "../Modal/Modal";
import { vehicles } from "../Data";

const Table = (props) => {
  const [inputBarValue, setInputBarValue] = useState("");
  const [addedData, setAddedData] = useState(vehicles);
  const [rowData, setRowData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const inputBarOnChangeHandler = (event) => {
    setInputBarValue(event.target.value);
  };
  const findClickHandler = () => {
    const vehicleData = addedData.filter(function (el) {
      return (
        el.name.toLowerCase().includes(inputBarValue) ||
        el.brandname.toLowerCase().includes(inputBarValue) ||
        el.motorbrand.toLowerCase().includes(inputBarValue) ||
        el.motormodel.toLowerCase().includes(inputBarValue)
      );
    });
    setAddedData(vehicleData);
  };
  const resetClickHandler = () => {
    setInputBarValue("");
    setAddedData(vehicles);
  };

  const rowClickHandler = (el) => {
    setRowData(el);
    setShowModal(!showModal);
  };
  console.log(rowData);

  const closeClickHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1 className="searchtext">Search</h1>
      <div className="searchSection">
        <input
          type="text"
          name="name"
          value={inputBarValue}
          onChange={inputBarOnChangeHandler}
        />
        <button onClick={findClickHandler}>Find 🔎</button>
        <button onClick={resetClickHandler}>Reset &#128260;</button>
      </div>

      <table>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Brand Name</th>
          <th>Motor Brand</th>
          <th>Motor model</th>
        </tr>
        {addedData.map((el) => {
          return (
            <tr
              key={el.sno}
              onClick={() => {
                rowClickHandler(el);
              }}
            >
              <td>{el.sno}</td>
              <td>{el.name}</td>
              <td>{el.brandname}</td>
              <td>{el.motorbrand}</td>
              <td>{el.motormodel}</td>
            </tr>
          );
        })}
      </table>
      {showModal ? (
        <Modal
          rowData={rowData}
          sno={rowData.sno}
          name={rowData.name}
          brandname={rowData.brandname}
          motorbrand={rowData.motorbrand}
          motormodel={rowData.motormodel}
          closeClickHandler={closeClickHandler}
        />
      ) : null}
    </div>
  );
};
export default Table;
