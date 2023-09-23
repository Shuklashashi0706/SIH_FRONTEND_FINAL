import React, { useCallback, useState } from "react";

const DocumentUpload = ({ isUserAuthenticated }) => {
  const [file, setFile] = useState(null);
  if (!isUserAuthenticated) {
    return <Navigate to="/" />;
  }
  const onDrop = useCallback((acceptedFiles) => {
    // Assuming only one file is selected
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Accept only image files
    multiple: false, // Allow only one file to be uploaded
  });

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image to upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("http://localhost:5170/api/user/uploadDoc", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully.");
        // Clear the selected file
        setFile(null);
      } else {
        alert("Error uploading image. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(
        "An error occurred while uploading the image. Please try again later."
      );
    }
  };

  return (
    <div className="bg-blue-200 p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Upload Document</h1>
      <div className="mb-4" {...getRootProps()}>
        <input {...getInputProps()} />
        {file ? (
          <p>Selected file: {file.name}</p>
        ) : (
          <p>Drag and drop an image here, or click to select one.</p>
        )}
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default DocumentUpload;
