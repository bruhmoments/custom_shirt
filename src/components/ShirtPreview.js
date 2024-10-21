import React, { useState } from "react";
import Draggable from "react-draggable";

const ShirtPreview = ({ shirtImage, uploadedImage }) => {
    const [imageSize, setImageSize] = useState(100);
    const [isDragging, setIsDragging] = useState(false);

    const handleSizeChange = (event) => {
        setImageSize(event.target.value);
    }

    const handleDragStart = () => {
        setIsDragging(true);  // Set dragging state when drag starts
    };

    const handleDragStop = () => {
        setIsDragging(false);  // Reset dragging state when drag stops
    };

    return (
        <div style={{ position: 'relative', width: '400px', height: '500px', margin: 'auto' }}>
        <img src={shirtImage} alt="Shirt" style={{ width: '100%', height: '100%' }} />

        {uploadedImage && (
            <>
                <Draggable
                    bounds="parent"
                    onStart={handleDragStart}
                    onStop={handleDragStop}
                >
                <img
                    src={uploadedImage}
                    alt="Uploaded"
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        maxWidth: `${imageSize}px`, // Ukuran default, bisa diubah sesuai kebutuhan
                        maxHeight: `${imageSize}px`,
                        cursor: isDragging ? 'grabbing' : 'move',
                        userSelect: 'none'
                    }}
                />
                </Draggable>
            
                {/* Resize Slider */}
                <div style={{ marginTop: '20px' }}>
                <label>Resize Image: </label>
                <input
                type="range"
                min="50"
                max="300"
                value={imageSize}
                onChange={handleSizeChange}
                style={{ width: '200px' }}
                />
            </div>
            </>
        )}
        </div>
    );
};

export default ShirtPreview;