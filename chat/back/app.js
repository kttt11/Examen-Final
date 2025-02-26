{/*import axios from 'axios';
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import * as path from "path";
import * as fs from "fs";

export const process_doc = async (filename: string | undefined, question: string) => {
  try {
    const filePath = path.resolve(__dirname, '..', 'uploads', filename || '');
    if (!fs.existsSync(filePath)) {
      throw new Error(`El archivo ${filePath} no existe.`);
    }

    const loader = new PDFLoader(filePath, {
      splitPages: false,
    });

    const doc = await loader.load();
    const texto = doc.map(page => page.text).join('\n');

    const response = await axios.post('YOUR_GEMINI_API_ENDPOINT', {
      prompt: `${question}\n\nTexto del documento:\n${texto}`,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
      },
    });

    if (response.status === 200) {
      return response.data.result; // Ajusta según la estructura de respuesta de tu API
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error durante el procesamiento:', error);
    throw error;
  }
};}*/}
