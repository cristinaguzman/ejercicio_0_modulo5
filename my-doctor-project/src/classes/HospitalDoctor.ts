import { Doctor } from "../interfaces/Doctor";

export class HospitalDoctor implements Doctor {
  id: number;
  name: string;
  specialty: string;
  isAvailable: boolean;

  constructor(id: number, name: string, specialty: string, isAvailable: boolean) {
    this.id = id;
    this.name = name;
    this.specialty = specialty;
    this.isAvailable = isAvailable;
  }

  getDetails(): string {
    return `ID: ${this.id}, Nombre: ${this.name}, Especialidad: ${this.specialty}, Disponible: ${this.isAvailable}`;
  }

  updateSpecialty(newSpecialty: string): void {
    this.specialty = newSpecialty;
  }
}
