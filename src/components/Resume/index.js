import './index.scss';
import { useState, useEffect } from 'react';
import resumePdf from "../../assets/Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        console.log(window.innerWidth);
      setWidth(window.innerWidth);
    }, []);

    return (
            <div className="container resume-page">
            <div className="resume">
                <Document file={resumePdf}>
                <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.9} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
            </div>
            </div>

    
    )
}
export default Resume