/* eslint-disable react/no-deprecated */
import { useState } from "react";
import ImageUploading from "react-images-uploading";




const Blog = () => {
    const [images, setImages] = useState(null);
    const onChange = (imageList) => {
        setImages(imageList);
    };

    // data for submit
    // console.log(images[0]?.data_url);



    return (
        <div className=" ">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={1}
                dataURLKey="data_url"
                acceptType={["jpg", "png"]}
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className=" ">
                        <div className="artboard artboard-horizontal w-40 h-40 bg-base-200 rounded-xl flex justify-center items-center">
                        {
                            images ? <div>
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item relative">
                                    <img className="w-40 h-40 rounded-xl" src={image.data_url} alt=""/>
                                    <div className="image-item__btn-wrapper">
                                        <button className="absolute bottom-0 border bg-black text-white rounded-lg p-1 right-0" onClick={() => onImageUpdate(index)}>Update</button>
                                    </div>
                                </div>
                            ))}
                        </div> 
                        : <button className=" "
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Click or Drop here
                            </button>
                        }
                        </div>
                        




                    </div>
                )}
            </ImageUploading>
            </div>
    );

};

export default Blog;

