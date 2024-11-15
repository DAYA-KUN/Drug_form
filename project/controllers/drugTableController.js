import Drug from "../models/drugs.js"; // Adjust the path to your Drug model

// Controller to fetch drug data for the table
export const getDrugTableData = async (req, res) => {
  try {
    const drugs = await Drug.find(); // Fetch all drug records from the database
    res.status(200).json({ success: true, data: drugs });
  } catch (error) {
    console.error("Error fetching drug table data:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch drug data" });
  }
};
