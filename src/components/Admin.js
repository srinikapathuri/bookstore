import React, { useState } from 'react';
import { API, Storage } from 'aws-amplify';

function Admin() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const { key } = await Storage.put(file.name, file);
    await API.post('bookstoreapi', '/books', {
      body: { title, pdfKey: key },
    });
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload Book</button>
    </div>
  );
}

export default Admin;
