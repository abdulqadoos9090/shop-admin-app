import React from 'react';

export default function FilesPreview(props) {
    return (

        <React.Fragment>
            <div className="row mb-4">
                <div className="col-12">
                   <p className="font-weight-bolder">Product images</p>
                </div>
                {
                    props.filesUrls ? props.filesUrls.map(file => (
                        <div className="col-2" key={file.id}>
                            <img src={`/${file.image.url}`} className="img-thumbnail"/>
                        </div>
                    )) : null
                }

            </div>
        </React.Fragment>
    )
}
