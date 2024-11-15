// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

function DrugTable() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/drugs", {
          withCredentials: true,
        });
        setDrugs(response.data);
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        alert("Failed to fetch drug data");
      }
    };

    fetchDrugs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl mb-4">Drug Data</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Drug Name</th>
            <th className="border border-gray-300 p-2">Active Ingredient</th>
            <th className="border border-gray-300 p-2">Strength</th>
            <th className="border border-gray-300 p-2">Dosage Form/Route</th>
            <th className="border border-gray-300 p-2">Marketing Status</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((drug, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{drug.drug_name}</td>
              <td className="border border-gray-300 p-2">{drug.active_ingredient}</td>
              <td className="border border-gray-300 p-2">{drug.strength}</td>
              <td className="border border-gray-300 p-2">{drug.dosage_form_route}</td>
              <td className="border border-gray-300 p-2">{drug.marketing_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DrugTable;
