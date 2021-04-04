import React, {useContext, useState,useEffect} from 'react';
import FormInputFiles from "../Files/FormInputFiles";
import {ProductFormContext} from "../../Helpers/Contexts";
import {UPDATE} from "../../Helpers/Constants";

const ProductImages = () => {

    const {productFormState, dispatch} = useContext(ProductFormContext);
    const images = productFormState.images;
    const [files,setFiles] = useState([]);

    useEffect(() => {
        dispatch({
            type: UPDATE,
            key: "images",
            data: files
        });
    },[files])

    return (
        <>
            <FormInputFiles
                files={files}
                setFiles={setFiles}
            />
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
