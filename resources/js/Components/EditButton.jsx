import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function EditButton({editUrl}){
    return(
        <React.Fragment>
            <InertiaLink className="text-warning" href={editUrl}><i className="fa fa-pen"></i></InertiaLink>
        </React.Fragment>
    )
}
