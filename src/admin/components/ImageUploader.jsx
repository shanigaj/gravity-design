import { useState, useCallback } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import { FaCloudUploadAlt, FaTrash, FaCheckCircle } from 'react-icons/fa';

export default function ImageUploader({ storagePath, currentUrl, onUploadComplete, label = 'Upload Image', className = '' }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [preview, setPreview] = useState(currentUrl || null);
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = useCallback((file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Preview
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);

    // Upload to Firebase Storage
    const storageRef = ref(storage, `${storagePath}/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);
    setProgress(0);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.round(pct));
      },
      (error) => {
        console.error('Upload error:', error);
        setUploading(false);
        alert('Upload failed. Please try again.');
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUploading(false);
        setProgress(100);
        if (onUploadComplete) onUploadComplete(downloadURL);
      }
    );
  }, [storagePath, onUploadComplete]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer?.files?.[0];
    if (file) handleUpload(file);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
  };

  const handleRemove = () => {
    setPreview(null);
    setProgress(0);
    if (onUploadComplete) onUploadComplete('');
  };

  return (
    <div className={className}>
      {label && <label className="text-[#45ADFF] text-sm font-medium mb-3 block">{label}</label>}

      {preview ? (
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] group">
          <img src={preview} alt="Preview" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <label className="px-4 py-2 rounded-xl bg-[#45ADFF] text-white text-sm font-medium cursor-pointer hover:bg-[#3a9ae8] transition-colors">
              Replace
              <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
            </label>
            <button
              onClick={handleRemove}
              className="px-4 py-2 rounded-xl bg-red-500/80 text-white text-sm font-medium cursor-pointer hover:bg-red-500 transition-colors"
            >
              <FaTrash size={14} />
            </button>
          </div>
          {uploading && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-2">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#45ADFF] rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-white text-xs font-medium">{progress}%</span>
              </div>
            </div>
          )}
          {!uploading && progress === 100 && (
            <div className="absolute top-3 right-3">
              <FaCheckCircle className="text-green-400" size={20} />
            </div>
          )}
        </div>
      ) : (
        <div
          className={`relative rounded-2xl border-2 border-dashed transition-colors p-8 text-center cursor-pointer ${
            dragActive
              ? 'border-[#45ADFF] bg-[#45ADFF]/5'
              : 'border-white/10 hover:border-[#45ADFF]/40 bg-white/[0.02]'
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => document.getElementById(`file-${storagePath}`)?.click()}
        >
          <input
            id={`file-${storagePath}`}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <FaCloudUploadAlt className="mx-auto text-white/20 mb-3" size={40} />
          <p className="text-white/40 text-sm">Drag & drop or click to upload</p>
          <p className="text-white/20 text-xs mt-1">PNG, JPG, WEBP up to 5MB</p>
        </div>
      )}
    </div>
  );
}
