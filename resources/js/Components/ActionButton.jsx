import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function ActionButton(props) {
    return (
        <React.Fragment>
            {
                props.isDetails ? (
                    <InertiaLink className="text-secondary px-1" href={props.detailsUrl ? props.detailsUrl : null}>
                        <i className="fa fa-pager"></i></InertiaLink>
                ) : null
            }
            {
                props.isEdit ? (
                    <InertiaLink className="text-warning px-1 mx-1" href={props.editUrl ? props.editUrl : null}>
                        <i className="fa fa-pen"></i></InertiaLink>
                ) : null
            }
            {
                props.isTrash ? (
                    <InertiaLink className="text-danger px-1" href={props.trashUrl ? props.trashUrl : null}>
                        <i className="fa fa-trash"></i></InertiaLink>
                ) : null
            }

        </React.Fragment>
    )
}
