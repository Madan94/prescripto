'use client';
import { useEffect,useState } from "react";
import SearchPatient from "../dashboard/Searchpatient";
import PatientDetails from "../dashboard/PatientDetails";
import PrescriptionTable from "../dashboard/PrescriptionTable";
interface Patient {
  name: string;
  email: string;
  mobile: string;
  gender: string;
  issues: string;
}

export default function MobileNumberSearch() {
    const [status, setStatus] = useState<string>("");
    const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setStatus("success");
      setPatient({
        name: "John Doe",
        email: "john@example.com",
        mobile: "+91 9876543210",
        gender: "Male",
        issues: "Fever, headache"
      });
    }, 1000);
  }, []);
  return(
    <>
     <SearchPatient/>
     <PatientDetails status={status} patient={patient} />
     <PrescriptionTable/>
    </>
  );
}
