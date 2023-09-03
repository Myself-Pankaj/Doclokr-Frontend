import React from "react";
import { useSelector } from "react-redux";
import {Viewer , Worker } from '@react-pdf-viewer/core'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import { LoaderIcon } from "react-hot-toast";

const FileFormat = () => {
  const { publicDoc } = useSelector((state) => state.docDetail);

  const url = `${Boolean(publicDoc?.images) && publicDoc.images[0].url}`;

  if (url.endsWith(".jpg") || url.endsWith(".png") || url.endsWith(".jpeg")) {
    return <img src={url} alt="media" />;
  } else if (url.endsWith(".pdf")) {
    return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">

        <Viewer fileUrl={url}/>;
      </Worker>
    );
  } else {
    return (<LoaderIcon/>);
  }
};

export default FileFormat;
