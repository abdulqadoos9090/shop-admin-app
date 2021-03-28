export function _appendMetaData(data, metaData) {
    data.append("meta_data[id]", metaData.id || '');
    data.append("meta_data[title]", metaData.title || '');
    data.append("meta_data[description]", metaData.description || '');
    data.append("meta_data[slug]", metaData.slug || '');
    data.append("meta_data[index]", metaData.index || '');
}

export function _appendFiles(data,files){
    for (let x = 0; x < Object.keys(files).length; x++) {
        data.append("images[]", files[x]);
    }
}

export const statusOptions = [
    {value: 'pending', label: 'Pending'},
    {value: 'active', label: 'Active'},
];


export const reviewOptions = [
    {value: 'enable', label: 'Enable'},
    {value: 'disable', label: 'Disable'},
];

export const indexOptions = [
    {value: 'follow,index', label: 'follow,index'},
    {value: 'nofollow,noindex', label: 'nofollow,noindex'},
    {value: 'follow', label: 'follow'},
    {value: 'index', label: 'index'}
]
