import cloudinary from "cloudinary";
import multer from "multer";
import dotenv from "dotenv";


dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error("Missing Cloudinary API key in environment");
}


const storage=new multer.memoryStorage();

 const imageUploadUtils=async(file)=>{
    const result= await cloudinary.uploader.upload(file,{
 resource_type: "auto",    
})
return result;
}
 export const upload=multer({storage});  

export default imageUploadUtils ;




