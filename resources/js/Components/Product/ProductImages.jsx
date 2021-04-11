import React, {useEffect} from 'react';
import FormInputFiles from "../Files/FormInputFiles";

const ProductImages = ({images, files, setFiles}) => {

    useEffect(() => {
        console.log('PRODUCT IMAGES RENDER');
    });

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
                                <button className="btn"><i className="fa fa-minus text-danger"/></button>
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
