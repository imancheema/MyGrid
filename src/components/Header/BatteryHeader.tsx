import "./BatteryHeader.css";
import React, { useState, useEffect } from "react";
import { Battery } from "../../models/battery";
import {
  deleteBattery,
  updateBattery,
} from "../../frontend-services/dashboard.service";

interface IBatteryHeader {
  battery: Battery;
}

const BatteryHeader = ({ battery }: IBatteryHeader) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedBattery, setEditedBattery] = useState<Battery>({ ...battery });

  useEffect(() => {
    if (isEditModalOpen) {
      setEditedBattery({ ...battery });
    }
  }, [isEditModalOpen, battery]);

  const removeBattery = async () => {
    await deleteBattery(battery.batteryId);
    location.reload();
  };

  const handleEditBattery = async () => {
    await updateBattery(editedBattery);
    location.reload(); // Consider a better way to update UI after edit
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
    setEditedBattery({ ...battery });
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedBattery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="battery-info">
      <div>
        <h3>{battery.name}</h3>
        {battery.type ? <p>Type: {battery.type}</p> : null}
        {battery.description ? <p>Description: {battery.description}</p> : null}
      </div>
      <div className="battery-buttons">
        <button className="edit-button" onClick={openEditModal}>
          Edit
        </button>
        <button className="delete-button" onClick={removeBattery}>
          Delete
        </button>
      </div>
      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className={`edit-modal ${isEditModalOpen ? "show" : ""}`}>
            <h2>Edit Battery</h2>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={editedBattery.name}
              onChange={handleInputChange}
            />
            <label>Type:</label>
            <input
              type="text"
              name="type"
              value={editedBattery.type || ""}
              onChange={handleInputChange}
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={editedBattery.description || ""}
              onChange={handleInputChange}
            />
            <div className="modal-buttons">
              <button onClick={handleEditBattery}>Save</button>
              <button onClick={closeEditModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BatteryHeader;
