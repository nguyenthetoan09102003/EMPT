const Checklist = require('../models/checklistModel');
exports.showForm = (req, res) => {
  res.render('form');
};

exports.saveData = async (req, res) => {
  try {
    const { machineName, comment } = req.body;
    const newItem = new Checklist({ machineName, comment });
    await newItem.save();
    res.send(`<h3>Saved successfully!</h3>
              <a href="/">Back to form</a>`);
  } catch (err) {
    res.status(500).send('Error saving data: ' + err.message);
  }
};
