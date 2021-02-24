import React, {useState} from 'react';
import {Inertia} from '@inertiajs/inertia';

export default function FilesPreview(props) {

    const _handleDeleteImage = id => {
        let isTrue = confirm("Do you want to delete this image?");
        isTrue ? Inertia.get(`/images/${id}/delete`) : null;
    }

    return (
        <React.Fragment>

            <div className="row mb-4">
                <div className="col-12">
                    <p className="font-weight-bolder">Product images</p>
                </div>
                {
                    props.filesUrls ? props.filesUrls.map(file => (
                        <div className="col-2" key={file.id}>
                            <button className="btn" onClick={() => _handleDeleteImage(file.image.id)}>
                                <i className="fa fa-minus text-danger"> </i>
                            </button>
                            <img src={`/${file.image.url}`} className="img-thumbnail"/>
                        </div>
                    )) : null
                }
            </div>
        </React.Fragment>
    )
}
