import { useState, useCallback, useEffect } from 'react';
import { FaCloudUploadAlt, FaTrash, FaCheckCircle, FaSpinner } from 'react-icons/fa';

/**
 * Compress and resize image before storing
 * Returns a base64 data URL
 */
function compressImage(file, maxWidth = 800, quality = 0.6) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Resize if larger than maxWidth
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to JPEG base64 with compression
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ImageUploader({ storagePath, currentUrl, onUploadComplete, label = 'Upload Image', className = '' }) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentUrl || null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  // Sync preview with currentUrl prop when it changes
  useEffect(() => {
    if (currentUrl && !uploading) {
      setPreview(currentUrl);
    }
  }, [currentUrl]);

  const handleUpload = useCallback(async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('File too large. Max 10MB allowed.');
      return;
    }
    setError('');
    setDone(false);
    setUploading(true);

    try {
      // Compress and resize the image
      const dataUrl = await compressImage(file, 800, 0.6);
      
      setPreview(dataUrl);
      setUploading(false);
      setDone(true);
      setTimeout(() => setDone(false), 3000);
      
      // Pass the base64 data URL to the parent component
      if (onUploadComplete) onUploadComplete(dataUrl);
    } catch (err) {
      console.error('Image processing error:', err);
      setUploading(false);
      setError('Failed to process image. Please try again.');
    }
  }, [onUploadComplete]);

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
    setDone(false);
    setError('');
    if (onUploadComplete) onUploadComplete('');
  };

  return (
    <div className={className}>
      {label && <label className="text-[#45ADFF] text-sm font-medium mb-3 block">{label}</label>}

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-3 text-red-400 text-sm">
          ❌ {error}
        </div>
      )}

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
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center">
                <FaSpinner className="animate-spin text-[#45ADFF] mx-auto mb-2" size={28} />
                <p className="text-white text-sm">Processing...</p>
              </div>
            </div>
          )}
          {done && (
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
          <p className="text-white/20 text-xs mt-1">PNG, JPG, WEBP up to 10MB</p>
        </div>
      )}
    </div>
  );
}
