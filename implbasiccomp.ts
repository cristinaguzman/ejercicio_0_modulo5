import React from "react";

interface DoctorProps {
  id: number;
  name: string;
  specialty: string;
  isAvailable: boolean;
}

const DoctorCard: React.FC<DoctorProps> = ({ id, name, specialty, isAvailable }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Especialidad: {specialty}</p>
      <p>Disponibilidad: {isAvailable ? "Sí" : "No"}</p>
    </div>
  );
};

// Ejemplo de uso
const App: React.FC = () => {
  const doctor = {
    id: 1,
    name: "Dra. Rodríguez",
    specialty: "Dermatología",
    isAvailable: true,
  };

  return <DoctorCard {...doctor} />;
};

export default App;
