import React, { useRef, useState } from 'react';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  currentImage?: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, currentImage, className = '' }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('请选择图片文件');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      onImageUpload(imageUrl);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative w-full h-full border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300
          ${isDragging 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-slate-300 hover:border-blue-400 hover:bg-slate-50'
          }
          ${isUploading ? 'pointer-events-none' : ''}
        `}
      >
        {currentImage && !isUploading ? (
          <img 
            src={currentImage} 
            alt="Uploaded" 
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            {isUploading ? (
              <>
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                <span className="text-xs text-slate-500">上传中...</span>
              </>
            ) : (
              <>
                <i className="fas fa-cloud-upload-alt text-2xl text-slate-400 mb-2"></i>
                <span className="text-xs text-slate-500 text-center">
                  点击或拖拽上传照片<br/>
                  <span className="text-[10px] text-slate-400">支持 JPG、PNG 格式</span>
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;