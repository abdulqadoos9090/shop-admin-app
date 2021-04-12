import React, {useEffect} from 'react';
import FormInputFiles from "../Files/FormInputFiles";

const ProductImages = ({images, setImages, files, setFiles}) => {

    useEffect(() => {
        console.log('PRODUCT IMAGES RENDER');
    });
    const _handleRemoveImage = index => {
        const arr = _.cloneDeep(images);
        arr.splice(index, 1);
        setImages(arr);
    }

    return (
        <>
            <FormInputFiles
                files={files}
                setFiles={setFiles}
            />
            {images?.length ? (
                <div className="row">
                    <div className="col-12">
                        Uploaded Images:
                    </div>
                    {
                        images.map((path, index) => (
                            <div className="col-2" key={index}>
                                <span className="btn" onClick={() => _handleRemoveImage(index)}><i
                                    className="fa fa-minus text-danger"/></span>
                                <img src={`/${path}`} className="img-thumbnail"/>
                            </div>
                        ))
                    }
                </div>
            ) : null}

        </>
    )
}

export default React.memo(ProductImages);
