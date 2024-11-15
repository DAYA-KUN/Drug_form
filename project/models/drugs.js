
import mongoose from 'mongoose';

const drugSchema = new mongoose.Schema({
    drug_name: { type: String, required: true },
    active_ingredient: { type: String, required: true },
    strength: { type: Number, required: true },
    dosage_form_route: { type: String, required: true },
    marketing_status: { type: String, required: true },
    te_code: { type: String, required: true },
    rld: { type: String, required: true },
    rs: { type: String, required: true },
});

export default mongoose.model("Drug", drugSchema);
