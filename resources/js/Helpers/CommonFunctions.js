import {ACTIVE, PENDING} from "./Constants";

export function _appendMetaData(data, metaData) {
    data.append("meta_data[id]", metaData.id || '');
    data.append("meta_data[title]", metaData.title || '');
    data.append("meta_data[description]", metaData.description || '');
    data.append("meta_data[slug]", metaData.slug || '');
    data.append("meta_data[index]", metaData.index || '');
}

export function _appendFiles(data, files) {
    for (let x = 0; x < Object.keys(files).length; x++) {
        data.append("images[]", files[x]);
    }
}

export const _createSelectOptions = (data, labelKey, valueKey) => {
    return data.map(item => (
        {label: item.[labelKey], value: item.[valueKey]}
    ));
}

export const _handelStatusLabels = status => {
    switch (status) {
        case ACTIVE:
            return <span className="badge rounded-pill alert-success">Active</span>
        case PENDING:
            return <span className="badge rounded-pill alert-warning">Pending</span>
    }
}

export const _handelReviewLabels = reviews => {
    return reviews ?
        <span className="badge rounded-pill alert-primary">Enabled</span> :
        <span className="badge rounded-pill alert-secondary">Disabled</span>
}


