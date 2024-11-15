// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DrugForm() {
  const navigate = useNavigate();
  const [drugData, setDrugData] = useState({
    drug_name: "",
    active_ingredient: "",
    strength: "",
    dosage_form_route: "",
    marketing_status: "",
    te_code: "",
    rld: "",
    rs: "",
  });

  const handleChange = (e) => {
    setDrugData({ ...drugData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/drug", drugData, {
        withCredentials: true,
      });
      alert("Drug data submitted successfully");
      navigate("/drug-table");
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Failed to submit drug data");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white shadow-lg rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Drug Data Upload
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="drug_name"
            value={drugData.drug_name}
            onChange={handleChange}
            placeholder="Drug Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none text-gray-700"
            required
          />
          <input
            type="text"
            name="active_ingredient"
            value={drugData.active_ingredient}
            onChange={handleChange}
            placeholder="Active Ingredient"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none text-gray-700"
            required
          />
          <input
            type="number"
            name="strength"
            value={drugData.strength}
            onChange={handleChange}
            placeholder="Strength"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none text-gray-700"
            required
          />
          <input
            type="text"
            name="dosage_form_route"
            value={drugData.dosage_form_route}
            onChange={handleChange}
            placeholder="Dosage Form/Route"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none text-gray-700"
            required
          />
          <input
            type="text"
            name="marketing_status"
            value={drugData.marketing_status}
            onChange={handleChange}
            placeholder="Marketing Status"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none text-gray-700"
            required
          />
          <input
            type="text"
            name="te_code"
            value={drugData.te_code}
            onChange={handleChange}
            placeholder="TE Code"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none text-gray-700"
            required
          />
          <input
            type="text"
            name="rld"
            value={drugData.rld}
            onChange={handleChange}
            placeholder="RLD"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none text-gray-700"
            required
          />
          <input
            type="text"
            name="rs"
            value={drugData.rs}
            onChange={handleChange}
            placeholder="RS"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none text-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
        >
          Submit Data
        </button>
      </form>
    </div>
  );
}

export default DrugForm;
