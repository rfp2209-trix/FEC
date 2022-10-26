require('dotenv').config();

const cl = new cloudinary.Cloudinary({ cloud_name: 'du2kw6xle', secure: true });

export CLOUDINARY_URL=`cloudinary://API_KEY:API_SECRET@CLOUD_NAME`

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function(error, result) {console.log(result); });