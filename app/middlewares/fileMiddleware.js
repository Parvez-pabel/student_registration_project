import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({

  destination: (req, file, cb)=>{
    cb(null,path.join(__dirname, '../../uploads/'));
    },
    filename:(req, file, cb)=>{
      const uniqueSuffix = Date.now()+ file.originalname;
      cb(null, uniqueSuffix);

    }

  });
export const upload = multer({storage:storage});

export default upload;

//delete file middleware

const deleteFile = (filename)=>{
  const filePath = path.join(__dirname, `../../uploads/${filename}`);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`File ${filename} deleted successfully`);
      
    } catch (error) {
      console.error(`Error deleting file ${filename}:`, error);

      
    }
    
  } else {
    console.log(`File ${filename} does not exist`);
    
  }
}

export { deleteFile };
