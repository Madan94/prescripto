import React from "react";
import { User, Mail, Phone, Venus, Stethoscope } from "lucide-react"; 
interface Patient {
  name?: string;
  email?: string;
  mobile?: string;
  gender?: string;
  issues?: string;
}

interface PatientDetailsProps {
  status: string;
  patient: Patient | null;
}

export default function PatientDetails({ status, patient }: PatientDetailsProps) {
  if (status !== "success" || !patient) return null;

  return (
    <div className="w-full mx-auto mt-6 bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Patient Details</h2>
      <div className="flex p-6 flex-row justify-start items-center">
        <div className="flex flex-row gap-4 items-start justify-center pr-4 border-r border-gray-300">
            <div className="flex flex-row gap-4 items-center">
                <User className="text-blue-600" size={28} />
                <span className="font-semibold text-gray-800">{patient.name}</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <Mail className="text-blue-600" size={28} />
                <span className="font-semibold text-gray-700">{patient.email}</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <Phone className="text-blue-600" size={28} />
                <span className="font-semibold text-gray-700">{patient.mobile}</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <Venus className="text-blue-600" size={28} />
                <span className="font-semibold text-gray-700">{patient.gender}</span>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start">
                <Stethoscope className="text-blue-600" size={28} />
                <span className="font-semibold text-gray-700">{patient.issues}</span>
            </div>
        </div>
      </div>
    </div>
  );
}
