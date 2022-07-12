import React, { useEffect, useState } from "react";

export const ImageUploader = ({setRecipeImage}) => {
    const [imageSource, setImageSource] = useState('');
    const [imageBase64, setImageBase64] = useState('');

    useEffect(() => {
        let reader = new FileReader();
        let image = imageSource;
        if (image && image.type.match('image.*')) {
            reader.readAsDataURL(image);
            reader.onload = () => {
                setImageBase64(reader.result.toString());
            }

            setRecipeImage(imageBase64);
        }
    }, [imageSource, imageBase64]);

    return (
        <p>
            <input type={'file'} name={'recipeImage'} accept={'.jpg, .png, .jpeg'} onChange={(e) => setImageSource(e.target.files[0])} />
        </p>
    );
}