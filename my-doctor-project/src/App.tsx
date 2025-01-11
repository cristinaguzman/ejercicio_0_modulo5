import React from "react";
import DoctorCard from "./components/DoctorCard";
import { HospitalDoctor } from "./classes/HospitalDoctor";

const App: React.FC = () => {
  // Crear instancias de la clase HospitalDoctor
  const doctors = [
    new HospitalDoctor(1, "Dra. Rodríguez", "Dermatología", true),
    new HospitalDoctor(2, "Dr. Pérez", "Cardiología", false),
    new HospitalDoctor(3, "Dra. Gómez", "Pediatría", true),
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Listado de Doctores</h1>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} {...doctor} />
      ))}
    </div>
  );
};

export default App;
