interface Doctor {
    id: number;
    name: string;
    specialty: string;
    isAvailable: boolean;
  }
  
  const getDoctorInfo = (doctor: Doctor): string => {
    return `${doctor.name} es especialista en ${doctor.specialty}. Disponibilidad: ${doctor.isAvailable ? "Sí" : "No"}`;
  };
  
  // Ejemplo de uso
  const exampleDoctor: Doctor = {
    id: 1,
    name: "Dr. Pérez",
    specialty: "Cardiología",
    isAvailable: true,
  };
  
  console.log(getDoctorInfo(exampleDoctor));
  