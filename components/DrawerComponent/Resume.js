// "use client";

// import workerSrc from "pdfjs-dist/build/pdf.worker.entry";
// import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// const Resume = () => {
//   const [numPages, setNumPages] = useState(0);
//   const fileUrl =
//     "https://drive.google.com/file/d/1zt7O3EkAzoFdslUypYgbNUgYsYPvtj63/view";

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };
//   return (
//     <div className="w-full flex flex-col items-center text-sm text-textColor    ">
//       <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
//         {Array.from(new Array(numPages), (_, index) => (
//           <Page key={`page_${index + 1}`} pageNumber={index + 1} width={800} />
//         ))}
//       </Document>
//     </div>
//   );
// };

// export default Resume;

const Resume = () => {
  return <div>resume</div>;
};

export default Resume;
