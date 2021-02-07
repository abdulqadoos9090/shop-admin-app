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


export default function Form() {

    const [images, setImages] = useState('')



    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
    })

    const [details, setDetails] = useState({
        details: ""
    })


    const _handleUploadImages = (value) => {
        for (let x = 0; x < value.length; x++) {
            setImages(images => ({
                ...images,
                [x]: value[x]
            }))
        }
    }

    const _handleInputChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }


    const _handleFormSubmit = () => {
// console.log(values);
        let data = new FormData()
        data.append('name', values.name || '')
        data.append('description', values.description || '')
        data.append('price', values.price || '')
        data.append('stock', values.stock || '')
        data.append('details', details.details || '')
        data.append('metaTitle', values.metaTitle || '')
        data.append('metaSlug', values.metaSlug || '')
        data.append('metaDescription', values.metaDescription || '')
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
                                    defaultValue={""}
                                    handleChange={_handleInputChange}
                                />


                                <FormInput
                                    id={"description"}
                                    label={"Product Description"}
                                    type={"textarea"}
                                    defaultValue={""}
                                    handleChange={_handleInputChange}
                                />

                                <FormInput
                                    id={"price"}
                                    label={"Price"}
                                    type={"number"}
                                    defaultValue={""}
                                    handleChange={_handleInputChange}
                                />

                                <FormInput
                                    id={"stock"}
                                    label={"Stock"}
                                    type={"number"}
                                    defaultValue={""}
                                    handleChange={_handleInputChange}
                                />

                                <CKEditor
                                    editor={ClassicEditor}
                                    data="<p>Product Details</p>"
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setDetails({details: data})
                                    }}
                                />


                            </div>
                            <div className="tab-pane fade my-5" id="profile" role="tabpanel"
                                 aria-labelledby="profile-tab">
                                <MetaDataForm handleChange={_handleInputChange}/>
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
