import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function PageContent({children}) {
    return (
        <div className="p-4 bg-white rounded-3">{children}</div>
    )
}
