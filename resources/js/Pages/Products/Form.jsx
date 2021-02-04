import React, {useState} from 'react';
import AdminLayout from "../../Components/AdminLayout";
import PageHeader from "../../Components/PageHeader";
import PageContent from "../../Components/PageContent";
import MetaDataForm from "../../Components/MetaDataForm";
import SubmitButton from "../../Components/SubmitButton";

import ImageUploader from 'react-images-upload';

import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormInput from "../../Components/FormInput";


export default function Form() {

    const _handleUploadImages = (value) => {
        console.log(value);
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
                                />



                                <FormInput
                                    id={"description"}
                                    label={"Product Description"}
                                    type={"textarea"}
                                    defaultValue={""}
                                />

                                <FormInput
                                    id={"price"}
                                    label={"Price"}
                                    type={"number"}
                                    defaultValue={""}
                                />

                                <FormInput
                                    id={"stock"}
                                    label={"Stock"}
                                    type={"text"}
                                    defaultValue={""}
                                />

                                <CKEditor
                                    editor={ClassicEditor}
                                    data="<p>Product Details</p>"
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({event, editor, data});
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                />


                            </div>
                            <div className="tab-pane fade my-5" id="profile" role="tabpanel"
                                 aria-labelledby="profile-tab">
                                <MetaDataForm/>
                            </div>
                        </div>

                        <SubmitButton
                            cancelUrl="/products"
                            submitUrl="/products/store"
                        />
                    </div>
                </div>
            </PageContent>
        </AdminLayout>
    )
}
