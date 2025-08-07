import React, { useState, useRef, useCallback } from 'react';
import { Camera, Upload, X, Check, RotateCw, Move } from 'lucide-react';

const ProfilePictureUpload = ({ 
  currentImage, 
  onImageUpdate, 
  size = 100,
  showEditIcon = true 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [cropData, setCropData] = useState({
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
    setPreviewUrl(null);
    setCropData({ x: 0, y: 0, scale: 1, rotation: 0 });
    setImageLoaded(false);
  };

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setCropData({ x: 0, y: 0, scale: 1, rotation: 0 });
      setImageLoaded(false);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
    // Center the image
    if (imageRef.current && containerRef.current) {
      const img = imageRef.current;
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      
      setCropData(prev => ({
        ...prev,
        x: (containerRect.width - img.offsetWidth * prev.scale) / 2,
        y: (containerRect.height - img.offsetHeight * prev.scale) / 2
      }));
    }
  };

  const handleMouseDown = (e) => {
    if (!imageLoaded) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - cropData.x,
      y: e.clientY - cropData.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !imageLoaded) return;
    
    setCropData(prev => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScaleChange = (newScale) => {
    setCropData(prev => ({ ...prev, scale: Math.max(0.5, Math.min(3, newScale)) }));
  };

  const handleRotate = () => {
    setCropData(prev => ({ ...prev, rotation: (prev.rotation + 90) % 360 }));
  };

  const generateCroppedImage = async () => {
    if (!imageRef.current || !canvasRef.current) return null;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;
    
    // Set canvas size to desired output size
    canvas.width = 200;
    canvas.height = 200;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Create circular clipping path
    ctx.save();
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
    ctx.clip();
    
    // Calculate image position and size
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    ctx.translate(centerX, centerY);
    ctx.rotate((cropData.rotation * Math.PI) / 180);
    ctx.scale(cropData.scale, cropData.scale);
    
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    
    ctx.drawImage(
      img,
      -imgWidth / 2,
      -imgHeight / 2,
      imgWidth,
      imgHeight
    );
    
    ctx.restore();
    
    // Convert to blob
    return new Promise((resolve) => {
      canvas.toBlob(resolve, 'image/jpeg', 0.9);
    });
  };

  const handleSave = async () => {
    try {
      const blob = await generateCroppedImage();
      if (blob) {
        const url = URL.createObjectURL(blob);
        onImageUpdate(url, blob);
        closeModal();
      }
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Error processing image. Please try again.');
    }
  };

  const profileImageSrc = currentImage || `https://ui-avatars.com/api/?name=User&background=3b82f6&color=fff&size=${size}`;

  return (
    <>
      {/* Profile Picture Display */}
      <div className="relative inline-block">
        <div 
          className="relative rounded-full overflow-hidden border-3 border-white/30 cursor-pointer"
          style={{ width: size, height: size }}
          onClick={openModal}
        >
          <img
            src={profileImageSrc}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=User&background=3b82f6&color=fff&size=${size}`;
            }}
          />
          {showEditIcon && (
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
          )}
        </div>
        
        {showEditIcon && (
          <button
            onClick={openModal}
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
          >
            <Camera className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Edit Profile Picture</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {!selectedFile ? (
                /* File Selection */
                <div className="space-y-4">
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-colors cursor-pointer"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </div>
              ) : (
                /* Image Cropping */
                <div className="space-y-4">
                  {/* Preview Container */}
                  <div 
                    ref={containerRef}
                    className="relative w-64 h-64 mx-auto bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                  >
                    <img
                      ref={imageRef}
                      src={previewUrl}
                      alt="Preview"
                      className="absolute max-w-none"
                      onLoad={handleImageLoad}
                      style={{
                        transform: `translate(${cropData.x}px, ${cropData.y}px) scale(${cropData.scale}) rotate(${cropData.rotation}deg)`,
                        transformOrigin: 'center',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        transition: isDragging ? 'none' : 'transform 0.2s ease'
                      }}
                      draggable={false}
                    />
                  </div>

                  {/* Controls */}
                  {imageLoaded && (
                    <div className="space-y-3">
                      {/* Scale Control */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600 w-12">Zoom:</span>
                        <input
                          type="range"
                          min="0.5"
                          max="3"
                          step="0.1"
                          value={cropData.scale}
                          onChange={(e) => handleScaleChange(parseFloat(e.target.value))}
                          className="flex-1 accent-blue-600"
                        />
                        <span className="text-sm text-gray-500 w-8">{Math.round(cropData.scale * 100)}%</span>
                      </div>

                      {/* Rotate Button */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600 w-12">Rotate:</span>
                        <button
                          onClick={handleRotate}
                          className="flex items-center gap-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <RotateCw className="w-4 h-4" />
                          <span className="text-sm">90°</span>
                        </button>
                      </div>

                      {/* Drag Instruction */}
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Move className="w-4 h-4" />
                        <span>Drag to reposition</span>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Choose Different
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={!imageLoaded}
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hidden Canvas for Image Processing */}
          <canvas ref={canvasRef} className="hidden" />
        </div>
      )}
    </>
  );
};

export default ProfilePictureUpload;
