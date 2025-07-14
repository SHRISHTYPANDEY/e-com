const cloudinary = require('cloudinary').v2;
const multer = require('multer');
cloudinary.config({
    cloud_name: "dyx0q6zqw",
    api_key: "719961415188929",
    api_secret: "_kG3T5n7NUlEM7yrd9iYTBe7u1U"
});
const storage = new multer.memoryStorage();
async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file,{
        resource_type: "auto",
    });
    return result;
    
}
const upload = multer({storage});
module.exports = {
  upload,
  imageUploadUtil,
};
