"use client";

import React, { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";
import { randomInt } from "crypto";
import useStore from "./zastand";
import zustand from "zustand";
import { stringify } from "querystring";



const Display = () => {
  // const [selectedFile, setSelectedFile] = useState<any>(null);
  // const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  // const [res, setRes] = useState();



  const {
    selectedFile,
    setSelectedFile,
    imageDataUrl,
    setImageDataUrl,
    res,
    setRes,
  } = useStore();


  const handleFileChange = (event: any) => {
    const file = event.target.files[0] || null;
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImageDataUrl(reader.result as any);
      };
      reader.readAsDataURL(file);
    }
  };



useEffect(() => {
  // Check if selectedFile is null or undefined before proceeding
  if (!selectedFile) {
    console.log('No file selected');
    return; // Exit the effect early
  }


  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    
// console.log({formData: formData})
    try {
      const response = await fetch('http://localhost:8000/upload/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      console.log(data)

      setRes(data.field_values); // Store the result in Zustand
    } catch (error) {
      console.error(error);
    }
  };

  uploadFile();
}, [selectedFile,setRes]);



  const handleReset = () => {
    setImageDataUrl(null);
    setSelectedFile(null);
    setRes({});
  };

  return (
    <div className="h-full p-2 mr-10">
    <div className="rounded-2xl w-full">
      <div className="flex justify-center gap-10">
   
        <h2 className="text-center rounded-3xl shadow-slate-400 bg-white-500 text-black p-2 w-56">
          Uploaded Image
        </h2>
        {/* <div className="text-black">{res && res["name"]}</div> */}
        <button 
            className="text-black bg-slate-300 p-3 pl-4 pr-4 ml-4 rounded-3xl"
            onClick={handleReset}
          >
            Re-Select File
          </button>
          {/* {JSON.stringify(res)} */}
      </div>

      {!selectedFile && (
        <div
          className="upload-container"
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          <div className="upload-icon">☁️</div>
          <div>Upload a File</div>
          <div>Drag and drop files here</div>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      )}

      {selectedFile && (
        <div className="file-details">
          {imageDataUrl && (
            <TransformWrapper>
              <TransformComponent>
                <Image
                  src={imageDataUrl}
                  alt="Selected"
                  width={200}
                  height={50}
                  className="w-[400px] h-[550px] rounded"
                />
              </TransformComponent>
            </TransformWrapper>
          )}
          <p className="text-center text-black">File Name: {selectedFile.name}</p>
          <p className="text-center text-black">
            File Size: {(selectedFile.size / 1024).toFixed(2)} KB
          </p>
                    
        </div>
        )}

        <style jsx>{`
          .upload-container {
            border: 2px dashed #ccc;
            border-radius: 10px;
            width: 500px;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            color: #777;
            cursor: pointer;
            gap: 10px;
            margin: 30px auto;
            margin-left: 20px;
          }

          .upload-container:hover {
            background-color: #F1F1F1;
          }

          .upload-icon {
            font-size: 50px;
            margin-bottom: 10px;
          }

          .file-details {
            margin: 10px auto;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;
            width: fit-content;
            height: 100%;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Display;





  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://swapi.dev/api/people/' + getRandomInt(1, 10)
  //       );
  //       const result = await response.json();
  //       console.log('my res', result);
  //       setRes(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [selectedFile, setRes]);