"use client";

import { useState } from "react";
import { storage } from "../../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [branch, setBranch] = useState("");
  const [tracking, setTracking] = useState("");
  const [url, setUrl] = useState("");

  const upload = async () => {
    if (!file || !branch || tracking.length !== 12) {
      alert("กรอกข้อมูลให้ครบ และเลขพัสดุ 12 หลัก");
      return;
    }

    const fileRef = ref(storage, `${branch}/${tracking}-${file.name}`);
    await uploadBytes(fileRef, file);

    const downloadURL = await getDownloadURL(fileRef);
    setUrl(downloadURL);
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Area Baifern – Upload Center</h2>

      <select onChange={(e) => setBranch(e.target.value)}>
        <option value="">เลือกสาขา</option>
        <option value="BangkokNoi03">Bangkok Noi03</option>
        <option value="ChomThong09">Chom thong09</option>
        <option value="ThungKru04">Thung kru04</option>
      </select>

      <br /><br />

      <input
        placeholder="เลขพัสดุ 12 หลัก"
        onChange={(e) => setTracking(e.target.value)}
      />

      <br /><br />

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <br /><br />

      <button onClick={upload}>Upload</button>

      {url && (
        <p>
          Uploaded: <a href={url} target="_blank">{url}</a>
        </p>
      )}
    </div>
  );
}
