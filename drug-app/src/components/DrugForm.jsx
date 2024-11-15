import React, { useState } from 'react';
import axios from 'axios';

function DrugForm() {
    const [drugData, setDrugData] = useState({
        drug_name: '',
        active_ingredient: '',
        strength: '',
        dosage_form_route: '',
        marketing_status: '',
        te_code: '',
        rld: '',
        rs: '',
    });

    const handleChange = (e) => {
        setDrugData({ ...drugData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/drug', drugData);
            alert('Drug data submitted successfully');
        } catch (error) {
            alert('Failed to submit drug data');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl mb-4">Drug Data Upload</h2>
            <input
                type="text"
                name="drug_name"
                value={drugData.drug_name}
                onChange={handleChange}
                placeholder="Drug Name"
                className="w-full p-2 mb-2"
                required
            />
            <input
                type="text"
                name="active_ingredient"
                value={drugData.active_ingredient}
                onChange={handleChange}
                placeholder="Active Ingredient"
                className="w-full p-2 mb-2"
                required
            />
            <input
                type="number"
                name="strength"
                value={drugData.strength}
                onChange={handleChange}
                placeholder="Strength"
                className="w-full p-2 mb-2"
                required
            />
            <input
                type="text"
                name="dosage_form_route"
                value={drugData.dosage_form_route}
                onChange={handleChange}
                placeholder="Dosage Form/Route"
                className="w-full p-2 mb-2"
                required
            />
            <input
                type="text"
                name="marketing_status"
                value={drugData.marketing_status}
                onChange={handleChange}
                placeholder="Marketing Status"
                className="w-full p-2 mb-2"
                required
            />
            <input
                type="text"
                name="te_code"
                value={drugData.te_code}
                onChange={handleChange}
                placeholder="TE Code"
                className="w-full p-2 mb-2"
                required
            />
            <input
                type="text"
                name="rld"
                value={drugData.rld}
                onChange={handleChange}
                placeholder="RLD"
                className="w-full p-2 mb-2"
                required
            />
            <input
                type="text"
                name="rs"
                value={drugData.rs}
                onChange={handleChange}
                placeholder="RS"
                className="w-full p-2 mb-2"
                required
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                Submit Data
            </button>
        </form>
    );
}

export default DrugForm;
