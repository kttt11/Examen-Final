import cors from 'cors';
import multer from 'multer';
import * as dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import axios from 'axios';
import * as path from 'path';
import * as fs from 'fs';
const pdfjsLib = require('pdfjs-dist');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 9004;

// Verifica si existe la carpeta uploads
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (fileExtension === '.pdf') {
      callback(null, true);
    } else {
      callback(new Error('Solo se permiten archivos PDF.'));
    }
  },
}).single('file');

const GEMINI_API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

app.post('/upload', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Error en la subida del archivo:', err);
      return res.status(400).send('Error en la subida del archivo.');
    }

    try {
      const pdfBuffer = fs.readFileSync(req.file.path);
      const pdf = await pdfjsLib.getDocument({ data: pdfBuffer }).promise;

      let texto = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        texto += textContent.items.map((item) => item.str).join('');
      }

      const response = await axios.post(GEMINI_API_ENDPOINT, {
        contents: [
          {
            parts: [{ text: `${req.body.question}\n\n${texto}` }],
          },
        ],
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        res.json({ result: response.data });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error al procesar el archivo:', error);
      res.status(500).send('Error al procesar el archivo.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});
