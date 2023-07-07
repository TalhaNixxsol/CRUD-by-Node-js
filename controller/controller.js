const createSchema = require("../model/model");

exports.create = async (req, res) => {
  try {
    console.log("create api hit...");
    const data = new createSchema({
      name: req.body.name,
      email: req.body.email,
    });
    console.log(data);
    if (data) {
      await data.save();
      res.status(200).json({
        message: "Data has been saved...",
      });
    } else {
      res.status(400).json({
        message: "Nothing to Save...",
      });
    }
  } catch (err) {
    // Add the 'err' parameter here
    res.status(400).send(err.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const name = req.query.name;
    const deleted = await createSchema.findOneAndDelete({ name });
    console.log(deleted);
    if (deleted == null) {
      res.status(404).json({
        message: "No Document found with the specific Name...",
      });
    } else {
      res.status(200).json({
        message: "Your data is deleted...",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "An error occurred",
      error: err.message,
    });
  }
};

exports.update = async (req, res) => {
  console.log("update api working....");
  const name = req.query.name;

  try {
    const updatedData = await createSchema.findOneAndUpdate(
      { name },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedData) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.json(updatedData);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.get = async (req, res) => {
  try {
    console.log("Get api working....");
    const data = await createSchema.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
