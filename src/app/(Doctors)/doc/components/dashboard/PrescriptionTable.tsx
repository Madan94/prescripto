import React, { useState } from "react";

const medicinesList = [
  "Paracetamol",
  "Amoxicillin",
  "Ibuprofen",
  "Metformin",
  "Aspirin",
  "Ciprofloxacin",
  "Cetirizine",
  "Azithromycin",
];
import WalletConnect from "@/app/providers";
import { Trash } from "lucide-react";
interface Prescription {
  name: string;
  quantity: string;
  shift: string;
  intake: number;
}

interface PrescriptionRow {
  phone: string;
  prescriptions: Prescription[];
  searchTerm: string;
}

export default function PrescriptionTable() {
  const [rows, setRows] = useState<PrescriptionRow[]>([
    {
      phone: "",
      prescriptions: [],
      searchTerm: "",
    },
  ]);

  const handleAddMedicine = (rowIndex: number, medicine: string) => {
    setRows((prev) => {
      const updated = [...prev];
      const exists = updated[rowIndex].prescriptions.some(
        (p) => p.name.toLowerCase() === medicine.toLowerCase()
      );
      if (!exists) {
        updated[rowIndex].prescriptions.push({
          name: medicine,
          quantity: "",
          shift: "Day",
          intake: 0,
        });
      }
      updated[rowIndex].searchTerm = "";
      return updated;
    });
  };

  const handlePrescriptionChange = (
    rowIndex: number,
    medIndex: number,
    field: keyof Prescription,
    value: string | number
  ) => {
    setRows((prev) => {
      const updated = [...prev];
      updated[rowIndex].prescriptions[medIndex] = {
        ...updated[rowIndex].prescriptions[medIndex],
        [field]: value,
      };
      return updated;
    });
  };

  const handleRemoveMedicine = (rowIndex: number, medIndex: number) => {
    setRows((prev) => {
      const updated = [...prev];
      updated[rowIndex].prescriptions = updated[rowIndex].prescriptions.filter(
        (_, i) => i !== medIndex
      );
      return updated;
    });
  };

  const handleChange = (
    rowIndex: number,
    field: keyof PrescriptionRow,
    value: string
  ) => {
    setRows((prev) => {
      const updated = [...prev];
      updated[rowIndex] = {
        ...updated[rowIndex],
        [field]: value,
      };
      return updated;
    });
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Patient Phone No</th>
            <th className="py-3 px-4 text-left">Prescription</th>
            <th className="py-3 px-4 text-left">Quantity</th>
            <th className="py-3 px-4 text-left">Shift</th>
            <th className="py-3 px-4 text-left">Intake</th>
            <th className="py-3 px-4 text-left">Sign Wallet</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const filteredMedicines = medicinesList.filter((med) =>
              med.toLowerCase().includes(row.searchTerm.toLowerCase())
            );

            return (
              <React.Fragment key={rowIndex}>
                {/* Main Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 align-top">
                    <input
                      type="number"
                      value={row.phone}
                      onChange={(e) =>
                        handleChange(rowIndex, "phone", e.target.value)
                      }
                      placeholder="Enter mobile number"
                      className="w-full border rounded px-2 py-1"
                      aria-label="Patient phone number"
                    />
                  </td>

                  {/* Prescription Search */}
                  <td className="py-2 px-4 align-top relative flex flex-col">
                    {row.searchTerm && (
                      <div className="bg-white border border-gray-300 rounded mb-1 max-h-28 overflow-y-auto z-10">
                        {filteredMedicines.length > 0 ? (
                          filteredMedicines.map((med) => (
                            <div
                              key={med}
                              onClick={() => handleAddMedicine(rowIndex, med)}
                              className="px-2 py-1 hover:bg-blue-100 cursor-pointer"
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") handleAddMedicine(rowIndex, med);
                              }}
                            >
                              {med}
                            </div>
                          ))
                        ) : (
                          <div className="px-2 py-1 text-gray-500 italic">
                            No medicines found
                          </div>
                        )}
                      </div>
                    )}
                    <input
                      type="text"
                      placeholder="Search medicine..."
                      value={row.searchTerm}
                      onChange={(e) =>
                        handleChange(rowIndex, "searchTerm", e.target.value)
                      }
                      className="w-full border rounded px-2 py-1"
                      aria-label="Search medicine"
                    />
                  </td>

                  <td></td>
                  <td></td>
                  <td></td>

                  <td className="py-2 px-4 align-top">
                    <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                      Sign Now
                    </button>
                  </td>
                </tr>

                {/* Medicine Rows */}
                {row.prescriptions.map((med, medIndex) => (
                  <tr
                    key={medIndex}
                    className="border-t border-gray-100 bg-gray-50"
                  >
                    <td></td>
                    <td className="py-2 px-4 flex items-center justify-between">
                      {med.name}
                      <button
                        onClick={() => handleRemoveMedicine(rowIndex, medIndex)}
                        className="text-red-500 text-sm hover:text-red-700"
                        aria-label={`Remove medicine ${med.name}`}
                      >
                        <Trash/>
                      </button>
                    </td>

                    <td className="py-2 px-4">
                      <input
                        type="number"
                        value={med.quantity}
                        onChange={(e) =>
                          handlePrescriptionChange(
                            rowIndex,
                            medIndex,
                            "quantity",
                            e.target.value
                          )
                        }
                        className="w-20 border rounded px-2 py-1"
                        aria-label={`Quantity for ${med.name}`}
                        placeholder="Qty"
                      />
                    </td>

                    <td className="py-2 px-4">
                      <select
                        value={med.shift}
                        onChange={(e) =>
                          handlePrescriptionChange(
                            rowIndex,
                            medIndex,
                            "shift",
                            e.target.value
                          )
                        }
                        className="border rounded px-2 py-1"
                        aria-label={`Shift for ${med.name}`}
                      >
                        <option>Day</option>
                        <option>Afternoon</option>
                        <option>Night</option>
                      </select>
                    </td>

                    <td className="py-2 px-4">
                      <select
                        value={med.intake}
                        onChange={(e) =>
                          handlePrescriptionChange(
                            rowIndex,
                            medIndex,
                            "intake",
                            parseInt(e.target.value)
                          )
                        }
                        className="border rounded px-2 py-1"
                        aria-label={`Intake timing for ${med.name}`}
                      >
                        <option value={0}>Before Food</option>
                        <option value={1}>After Food</option>
                      </select>
                    </td>
                    <td></td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
