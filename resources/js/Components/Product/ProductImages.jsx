import React, {useState} from 'react';
import FormInputFiles from "../Files/FormInputFiles";

const ProductImages = () => {
    return (
        <>
            <FormInputFiles/>
            <div className="row">
                <div className="col-12">
                    Uploaded Images:
                </div>
                {/*{*/}
                {/*    props.filesUrls ? props.filesUrls.map(file => (*/}
                {/*        <div className="col-2" key={file.id}>*/}
                {/*            <button className="btn" onClick={() => _handleDeleteImage(file.image.id)}>*/}
                {/*                <i className="fa fa-minus text-danger"> </i>*/}
                {/*            </button>*/}
                {/*            <img src={`/${file.image.url}`} className="img-thumbnail"/>*/}
                {/*        </div>*/}
                {/*    )) : null*/}
                {/*}*/}
            </div>
        </>
    )
}

export default React.memo(ProductImages);