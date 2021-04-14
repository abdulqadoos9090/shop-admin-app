import axios from 'axios';
import {_appendFiles} from "./CommonFunctions";
import {EXISTED, NOT_EXISTED} from "./Constants";

export const _handleFileUploads = (directory, state, setState) => {
    let data = new FormData;
    data.append("directory", directory);
    _appendFiles(data, state);
    axios.post('/move-uploaded-files', data)
        .then(function (response) {
            setState(response.data);
        });
}

export const _verifyUniqueSlug = (e, data, setState) => {
    const value = e.target.value;
    value ? axios.post('/products/verify-unique-slug', {slug: e.target.value}).then(r => {
        r.data.length ? r.data.map(item => item === parseInt(data) ? null : setState(EXISTED)) : setState(NOT_EXISTED);
    }) : null;
}
