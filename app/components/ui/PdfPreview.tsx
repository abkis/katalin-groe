import React from 'react';

interface PDFPreviewProps {
  src: string; // Path to the PDF file
  width?: string | number; // Optional width
  height?: string | number; // Optional height
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ src, width = '100%', height = '600px' }) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{
        border: 'none',
      }}
      title="PDF Preview"
    />
  );
};

export default PDFPreview;
