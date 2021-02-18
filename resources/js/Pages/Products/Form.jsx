import React, {useState} from 'react';
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
import {_appendMetaData, statusOptions} from "../../Common";
import Select from "react-select";


export default function Form(props) {
    const {product} = props;

    const [values, setValues] = useState(product);
    const [images, setImages] = useState('')
    const [details, setDetails] = useState(product ? product.details : null)
    const [metaData, setMetaData] = useState(product ? product.meta_data : null);

    const _handleUploadImages = (value) => {
        for (let x = 0; x < value.length; x++) {
            setImages(images => ({
                ...images,
                [x]: value[x]
            }))
        }
    }

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
        _appendMetaData(data, metaData);
        for (let x = 0; x < Object.keys(images).length; x++) {
            data.append("images[]", images[x]);
        }
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

                                <ImageUploader
                                    withIcon={true}
                                    buttonText='Choose images'
                                    onChange={_handleUploadImages}
                                    withPreview={true}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
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
