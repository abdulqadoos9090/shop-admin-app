import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function SubmitButton({cancelUrl, handleFormSubmit}) {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-end pt-3 ">
                <InertiaLink href={cancelUrl} className="btn btn-secondary px-4 mx-3">Cancel</InertiaLink>
                <button type="submit"  className="btn btn-success px-4">Save</button>
            </div>
        </React.Fragment>
    )
}
