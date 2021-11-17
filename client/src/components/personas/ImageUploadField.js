import React from "react";
import axios from "axios";

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL;
const unploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

const ImageUploadField = ({ handlePicChange, value }) => {
  const handleUpload = async (event) => {
    const data = new FormData();
    data.append("file", event.target.files[0]);
    data.append("upload_preset", unploadPreset);
    const res = await axios.post(uploadUrl, data);
    handlePicChange(res.data.url);
  };

  return (
    <div>
      {value ? (
        <div>
          <img src={value} alt="profile" />
        </div>
      ) : (
        <div className="mb-3">
          <label className="form-label">Profile Picture:</label>
          <input className="form-control" type="file" onChange={handleUpload} />
        </div>
      )}
    </div>
  );
};

export default ImageUploadField;
