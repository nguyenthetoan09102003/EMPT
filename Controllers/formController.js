const Data = require('../Models/DataModel');

// Hiển thị form nhập liệu
exports.getForm = (req, res) => {
  res.render('form');
};

// Xử lý dữ liệu gửi từ form
exports.postForm = async (req, res) => {
  try {
    const { name, age, department } = req.body;
    const newData = new Data({ name, age, department });
    await newData.save();
    res.send('✅ Dữ liệu đã được lưu vào MongoDB Atlas');
  } catch (err) {
    console.error('❌ Lỗi khi lưu dữ liệu:', err);
    res.status(500).send('Lỗi khi lưu dữ liệu.');
  }
};
