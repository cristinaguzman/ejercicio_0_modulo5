import React from "react";
import { Doctor } from "../interfaces/Doctor";

const DoctorCard: React.FC<Doctor> = ({ id, name, specialty, isAvailable }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{name}</h3>
      <p>Especialidad: {specialty}</p>
      <p>Disponibilidad: {isAvailable ? "Sí" : "No"}</p>
    </div>
  );
};

export default DoctorCard;
