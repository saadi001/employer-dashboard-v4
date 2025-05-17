import { Document, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  return (
    <div className="w-full border">
      <Document
        file={
          "https://drive.google.com/file/d/1PdwumSX7c_R6vDbN1mGLYfvGS_pyIvoY/preview"
        }
      ></Document>
      {/* <iframe
        src="https://drive.google.com/file/d/1PdwumSX7c_R6vDbN1mGLYfvGS_pyIvoY/preview"
        frameborder="0"
        className="w-full h-80"
      ></iframe> */}
    </div>
  );
};

export default Resume;
