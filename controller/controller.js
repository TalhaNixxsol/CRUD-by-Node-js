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
    } catch (err) { // Add the 'err' parameter here
      res.status(400).send(err.message);
    }
  };
  
 exports.delete= async (req, res) => {
    try {
      const name = req.query.name;
      const deleted = await createSchema.findOneAndDelete({ name });
      console.log(deleted)
      if (deleted == null) {
        res.status(404).json({
          message: 'No Document found with the specific Name...',
        });
      } 
      else {
        res.status(200).json({
          message: 'Your data is deleted...',
        });
      }
    } 
    catch (err) {
      res.status(500).json({
        message: 'An error occurred',
        error: err.message,
      });
    }
  }
