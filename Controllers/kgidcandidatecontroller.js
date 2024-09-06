const kgidSchema = require("../Modules/kgidcandidatemodule");
require("dotenv").config();
const secretKey = process.env.secretKey;
const jwt = require("jsonwebtoken");

const KGIDController = {};

KGIDController.loginKGID = async (req, res) => {
  const { KGID, phoneno } = req.body;
  try {
    const candidate = await kgidSchema.findOne({ KGID: KGID });
    if (!candidate) {
      return res.status(400).json({ error: "KGID does not exist" });
    }
    if (candidate.phoneno !== phoneno) {
      return res.status(400).json({ error: "Phone does not match the KGID" });
    }
    const idData = candidate.id;
    const token = await jwt.sign({ id: idData }, secretKey);

    const success = true;
    res.status(200).json({ success, token, candidate });
  } catch (err) {
    res.status(500).json({ error: "Login unsuccessful", message: err.message });
  }
};

KGIDController.updateKGID = async (req, res) => {
  const { KGID, gender, disability, ...updates } = req.body;

  if (!KGID) {
    return res.status(400).json({ message: "KGID is required" });
  }

  // Validate gender and disability values(optional)
  if (gender && !["Male", "Female", "Other"].includes(gender)) {
    return res.status(400).json({ message: "Invalid gender type" });
  }

  if (
    disability &&
    !["None", "Visual", "Hearing", "Mobility", "Other"].includes(disability)
  ) {
    return res.status(400).json({ message: "Invalid disability type" });
  }

  try {
    const updatedCandidate = await kgidSchema.findOneAndUpdate(
      { KGID: KGID },
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedCandidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json(updatedCandidate);
  } catch (error) {
    console.error("Error updating candidate:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { KGIDController };
