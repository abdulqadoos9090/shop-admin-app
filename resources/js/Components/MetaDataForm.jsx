import React from 'react';

export default function MetaDataForm(){
    return(
        <React.Fragment>
            <h6 className="mt-5">Meta Data -</h6>
            <div className="form-floating my-3">
                <input type="text" className="form-control" id="floatingMetaTitle" placeholder="Title"/>
                <label htmlFor="floatingMetaTitle">Meta Title</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingSlug"
                       placeholder="Slug"/>
                <label htmlFor="floatingSlug">Slug</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Meta Description" id="floatingMetaDescription" style={{height: 100}} defaultValue={""} />
                <label htmlFor="floatingMetaDescription">Meta Description</label>
            </div>
            <div className="form-floating">
                <select className="form-select" id="floatingMetaIndex" aria-label="Meta Index">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label htmlFor="floatingMetaIndex">Meta Index</label>
            </div>
        </React.Fragment>
    )
}
