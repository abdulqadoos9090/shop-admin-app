import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function ActionButton({editUrl}){
    return(
        <React.Fragment>
            <InertiaLink className="text-warning px-1" href={editUrl}><i className="fa fa-pen"></i></InertiaLink>
            <InertiaLink className="text-danger px-1" href={editUrl}><i className="fa fa-trash"></i></InertiaLink>
        </React.Fragment>
    )
}
