import React, { useState, useEffect } from "react";

interface ImageUploadProps {
  onUpload?: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onUpload?.(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <input
        type="file"
        accept="image/*"
        aria-label="Upload image"
        onChange={handleFileChange}
      />
      {preview && (
        <img
          src={preview}
          alt="Preview uploaded"
          className="w-24 h-24 rounded object-cover"
        />
      )}
    </div>
  );
};

export default ImageUpload;
