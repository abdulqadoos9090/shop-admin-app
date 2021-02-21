import React, {useState, useEffect} from 'react';
import {Inertia} from '@inertiajs/inertia'
import FormInput from "../../Components/FormInput";
import PageHeader from "../../Components/PageHeader";
import AdminLayout from "../../Components/AdminLayout";
import PageContent from "../../Components/PageContent";
import MetaDataForm from "../../Components/MetaDataForm";
import SubmitButton from "../../Components/SubmitButton";
import ImageUploader from 'react-images-upload';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {_appendFiles, _appendMetaData, statusOptions} from "../../Common";
import Select from "react-select";
import FilesUpload from "../../Components/FilesUpload";
import FilesPreview from "../../Components/FilesPreview";


export default function Form(props) {

    const {product} = props;
    const [values, setValues] = useState(product ? product : '');
    const [files, setFiles] = useState([]);
    const [imageUrls, setImageUrls] = useState(product ? product.product_images : null);
    const [details, setDetails] = useState(product ? product.details : '');
    const [metaData, setMetaData] = useState(product ? product.meta_data : '');


    const _handleInputChange = (e) => {
        if (e.target) {
            const key = e.target.id;
            const value = e.target.value;
            setValues(values => ({
                ...values,
                [key]: value,
            }))
        } else {
            setValues(values => ({
                ...values,
                ['status']: e.value,
            }))
        }
    }


    const _handleFormSubmit = () => {
        let data = new FormData();
        data.append('form_data[id]', values.id || '')
        data.append('form_data[name]', values.name || '')
        data.append('form_data[price]', values.price || '')
        data.append('form_data[stock]', values.stock || '')
        data.append('form_data[status]', values.status || '')
        data.append('form_data[details]', details || '')
        data.append('form_data[description]', values.description || '')
        _appendFiles(data, files);
        _appendMetaData(data, metaData);
        Inertia.post('/products/save', data);
    }

    return (
        <AdminLayout>
            <PageHeader
                title="Add new product"
                url="/products"
                btnLable="View all"
                btnClass="primary"
            />
            <PageContent>
                <div className="row  justify-content-center my-4">
                    <div className="col-7">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home"
                                   role="tab"
                                   aria-controls="home" aria-selected="true">Product Details</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                                   aria-controls="profile" aria-selected="false">Seo Details</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active my-5" id="home" role="tabpanel"
                                 aria-labelledby="home-tab">
                                {
                                    imageUrls ? <FilesPreview filesUrls={imageUrls}/> : null
                                }

                                <FilesUpload
                                    files={files}
                                    setFiles={setFiles}
                                />

                                <FormInput
                                    id={"name"}
                                    label={"Name"}
                                    type={"text"}
                                    defaultValue={values ? values.name : null}
                                    handleChange={_handleInputChange}
                                />


                                <FormInput
                                    id={"description"}
                                    label={"Product Description"}
                                    type={"textarea"}
                                    defaultValue={values ? values.description : null}
                                    handleChange={_handleInputChange}
                                />

                                <FormInput
                                    id={"price"}
                                    label={"Price"}
                                    type={"number"}
                                    defaultValue={values ? values.price : null}
                                    handleChange={_handleInputChange}
                                />

                                <FormInput
                                    id={"stock"}
                                    label={"Stock"}
                                    type={"number"}
                                    defaultValue={values ? values.stock : null}
                                    handleChange={_handleInputChange}
                                />

                                <CKEditor
                                    editor={ClassicEditor}
                                    data={details ? details : "<p>Product Details</p>"}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setDetails(data)
                                    }}
                                />

                                <br/>
                                <Select
                                    options={statusOptions}
                                    defaultValue={values ? {value: values.status, label: values.status} : null}
                                    onChange={_handleInputChange}
                                />

                            </div>
                            <div className="tab-pane fade my-5" id="profile" role="tabpanel"
                                 aria-labelledby="profile-tab">
                                <MetaDataForm
                                    metaData={metaData}
                                    setMetaData={setMetaData}
                                />
                            </div>
                        </div>

                        <SubmitButton
                            cancelUrl="/products"
                            handleFormSubmit={_handleFormSubmit}
                        />
                    </div>
                </div>
            </PageContent>
        </AdminLayout>
    )
}
