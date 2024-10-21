import React from "react";

const ImageUploader = ({ onImageUpload }) => {
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.includes('image')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageUpload(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/png" onChange={handleImageChange} />
        </div>
    );
};

export default ImageUploader;