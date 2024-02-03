const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const BUCKET = process.env.AWS_BUCKET_NAME;
const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadFileOnS3 = multer({
  storage: multerS3({
    s3: s3,
    // acl: "public-read",
    bucket: BUCKET,
    key: async function (req, file, cb) {
      // console.log(file, "uploadFileOnS3");
      const newFilename = "images/" + Date.now() + "-" + file.originalname; // Set a new filename
      cb(null, newFilename);
    },
  }),
  fileFilter,
});

// Delete file from S3
const deleteFileFromS3 = async (key) => {
  const params = {
    Bucket: BUCKET,
    Key: key,
  };

  try {
    return await s3.deleteObject(params).promise();
    console.log("File deleted successfully from S3");
  } catch (err) {
    console.error("Error deleting file from S3:", err);
  }
};

// Get file from S3
const getFileFromS3 = async (key) => {
  const params = {
    Bucket: BUCKET,
    Key: key,
  };

  try {
    const data = await s3.getObject(params).promise();
    return data;
  } catch (err) {
    console.error("Error getting file from S3:", err);
    throw err;
  }
};

module.exports = {
  uploadFileOnS3,
  deleteFileFromS3,
  getFileFromS3,
};
