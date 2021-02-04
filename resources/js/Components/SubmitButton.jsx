import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function SubmitButton({cancelUrl, SubmitUrl}) {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-end pt-3 ">
                <InertiaLink href={cancelUrl} className="btn btn-secondary px-4 mx-3">Cancel</InertiaLink>
                <InertiaLink method="post" type="submit" as="button" ty href={SubmitUrl}
                             className="btn btn-primary px-4">Save</InertiaLink>
            </div>
        </React.Fragment>
    )
}
