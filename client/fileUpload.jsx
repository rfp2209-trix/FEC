import React, { useState } from 'react';
import axios from 'axios';

function FileUpload({ stateUpdaterFn }) {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set('key', 'd5fb38617606dfa02d3dcb667039d4ec');
    data.append('image', selectedFile);
    console.log('DATA: ', data);
    axios({
      method: 'POST',
      url: 'https://api.imgbb.com/1/upload',
      data,
    })
      .then((result) => {
        setUploadSuccess(true);
        console.log('result: ', result.data.data.url);
        stateUpdaterFn(result.data.data.url);
      })
      .catch((err) => {
        console.log('failed: ', err);
      });
  };

  return (
    <>
      <br />
      <div>
        <input type="file" name="file" onChange={changeHandler} />
        <button
          type="submit"
          onClick={(e) => {
            handleSubmission(e);
          }}
        >
          Confirm Photo
        </button>
      </div>
      <div>
        { isFilePicked ? (
          <div>
            {`Filename: ${selectedFile.name} | Filetype: ${selectedFile.type} | Size in bytes: ${selectedFile.size}`}
          </div>
        ) : null}
        { uploadSuccess ? (<span>Successfully Uploaded!</span>) : null }
      </div>
    </>
  );
}

export default FileUpload;
