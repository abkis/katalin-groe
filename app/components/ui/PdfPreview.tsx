import { Document, Page, pdfjs } from "react-pdf";

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfPreview = ({ file }: { file: string }) => {
    return (
        <div>
            <Document file={file}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default PdfPreview;
