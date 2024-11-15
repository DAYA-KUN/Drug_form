import React, { useState } from 'react';
import axios from 'axios';

function CsvUploader() {
    const [csvData, setCsvData] = useState([]);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const parseCSV = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const text = event.target.result;
            const lines = text.split('\n');
            const result = lines.map((line, index) => {
                const [drug_name, active_ingredient, strength, dosage_form_route, marketing_status, te_code, rld, rs] = line.split(',');
                return { drug_name, active_ingredient, strength, dosage_form_route, marketing_status, te_code, rld, rs };
            }).filter((item) => item.drug_name); // Avoid empty lines
            setCsvData(result);
        };
        reader.readAsText(file);
    };

    const handleSubmit = async () => {
        if (!file) {
            alert("Please select a file to upload");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post('http://localhost:8000/api/bulk-upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }, withCredentials: true
            });

            alert(response.data.message); // Success message from backend
            setCsvData([]); // Clear CSV data preview after successful upload
        } catch (error) {
            alert('Failed to upload CSV data');
            console.error('Upload error:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl mb-4">Bulk CSV Upload</h2>
            <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="mb-4"
            />
            {file && (
                <button onClick={() => parseCSV(file)} className="bg-blue-500 text-white p-2 rounded mb-4">
                    Parse CSV
                </button>
            )}
            {csvData.length > 0 && (
                <div>
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border p-2">Drug Name</th>
                                <th className="border p-2">Active Ingredient</th>
                                <th className="border p-2">Strength</th>
                                <th className="border p-2">Dosage Form</th>
                                <th className="border p-2">Marketing Status</th>
                                <th className="border p-2">TE Code</th>
                                <th className="border p-2">RLD</th>
                                <th className="border p-2">RS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {csvData.map((item, index) => (
                                <tr key={index}>
                                    <td className="border p-2">{item.drug_name}</td>
                                    <td className="border p-2">{item.active_ingredient}</td>
                                    <td className="border p-2">{item.strength}</td>
                                    <td className="border p-2">{item.dosage_form_route}</td>
                                    <td className="border p-2">{item.marketing_status}</td>
                                    <td className="border p-2">{item.te_code}</td>
                                    <td className="border p-2">{item.rld}</td>
                                    <td className="border p-2">{item.rs}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        onClick={handleSubmit}
                        className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
                    >
                        Submit CSV Data
                    </button>
                </div>
            )}
        </div>
    );
}

export default CsvUploader;
