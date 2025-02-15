const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const streamify = require('streamifier');

require('dotenv').config();
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Multer setup using memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  try{
    if(!req.file){
      return res.status(400).send('No file uploaded.');
    }

    //Function to handle stream upload to cloudinary
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream(
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
        streamify.createReadStream(fileBuffer).pipe(stream);
      });
    };
    //Call the streamUpload function
    const result = await streamUpload(req.file.buffer);

    //Return the image URL
    res.json({ image: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;