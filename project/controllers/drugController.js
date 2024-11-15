import Drug from "../models/drugs.js";
import parseCSV from "../utils/csvParser.js";

export const addDrug = async (req, res) => {
  console.log(req.body);
  try {
    const drug = new Drug(req.body);
    await drug.save();
    res
      .status(201)
      .json({ message: "Drug data added successfully", data: drug });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Drug data insertion failed", error: error.message });
  }
};

export const bulkUpload = async (req, res) => {
  try {
    // Ensure the file is present in the request
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("Uploaded file details:", req.file); // Check the file

    const filePath = req.file.path; // Path to the uploaded file

    // Parse CSV and store data in the database
    const drugs = await parseCSV(filePath); // Assuming parseCSV correctly parses the CSV

    // Insert drugs into the database
    await Drug.insertMany(drugs);

    res.json({ message: "Bulk upload successful" });
  } catch (error) {
    console.error("Bulk upload failed:", error);
    res
      .status(500)
      .json({ message: "Bulk upload failed", error: error.message });
  }
};
