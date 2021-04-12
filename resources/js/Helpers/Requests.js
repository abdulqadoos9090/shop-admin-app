import axios from 'axios';
import {_appendFiles} from "./CommonFunctions";

export const _handleFileUploads = (directory, state, setState) => {
    let data = new FormData;
    data.append("directory", directory);
    _appendFiles(data, state);
    axios.post('/move-uploaded-files', data)
        .then(function (response) {
            setState(response.data);
        });
}
