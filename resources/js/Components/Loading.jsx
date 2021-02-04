import React, {useState} from 'react';
import {Inertia} from "@inertiajs/inertia";


export default function Loading() {
    Inertia.on('start', (event) => {
     let loading = document.getElementById('customLoading');
        loading.classList.remove("d-none");
    })

    Inertia.on('finish', (event) => {
     let loading = document.getElementById('customLoading');
        loading.classList.add("d-none");
    })

    return (
        <button className="btn btn-secodary d-none" type="button" disabled id="customLoading">
            <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"/>
            Loading...
        </button>
    )
}
