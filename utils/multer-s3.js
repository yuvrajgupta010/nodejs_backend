const {
  S3Client,
  DeleteObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const BUCKET = process.env.AWS_BUCKET_NAME;

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
    return await s3.send(new DeleteObjectCommand(params));
  } catch (err) {
    console.error("Error deleting file from S3:", err);
  }
};

// Get file from S3 (note: in SDK v3, data.Body is a stream, not a Buffer)
const getFileFromS3 = async (key) => {
  const params = {
    Bucket: BUCKET,
    Key: key,
  };

  try {
    const data = await s3.send(new GetObjectCommand(params));
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
