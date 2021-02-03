import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function PageHeader({title,url,btnLable}) {
    return (
        <div className="p-1 mb-3 d-flex justify-content-between align-items-center">
            <h4>{title}</h4>
            <InertiaLink href={url} className={`btn px-4 btn-primary`}>{btnLable}</InertiaLink>
        </div>
    )
}
