import React, {useState, useEffect} from 'react';
import General from "./Childrens/General";
import {Inertia} from '@inertiajs/inertia';
import PageHeader from "../../Components/PageHeader";
import AdminLayout from "../../Components/AdminLayout";
import PageContent from "../../Components/PageContent";
import MetaDataForm from "../../Components/MetaDataForm";
import SubmitButton from "../../Components/SubmitButton";
import ProductVariations from "./Childrens/ProductVariations";
import {_appendFiles, _appendMetaData} from "../../Helpers/CommonFunctions";


export default function Form({product, categories}) {

    const [files, setFiles] = useState(() => []);
    const [values, setValues] = useState(product ? product : '');
    const [imageUrls, setImageUrls] = useState(product ? product.product_images : null);
    const [details, setDetails] = useState(product ? product.details : '');
    const [metaData, setMetaData] = useState(product ? product.meta_data : '');

    const _handleInputChange = (e, name = null) => {
        if (e.target) {
            const key = e.target.id;
            const value = e.target.value;
            setValues(values => ({
                ...values,
                [key]: value,
            }))
        }

        if (name === "category_id" || name === "status" || name === "review") {
            setValues(values => ({
                ...values,
                [name]: e.value,
            }))
        }

        if (name === "badges") {
            setValues(values => ({
                ...values,
                [name]: e.map(data => data.value)
            }))
        }

    }


    const _handleFormSubmit = () => {
        let data = new FormData();
        data.append('form_data[id]', values.id || '')
        data.append('form_data[name]', values.name || '')
        data.append('form_data[badges]', values.badges || '')
        data.append('form_data[price]', values.price || '')
        data.append('form_data[discounted_price]', values.discounted_price || '')
        data.append('form_data[stock]', values.stock || '')
        data.append('form_data[category_id]', parseInt(values.category_id) || '')
        data.append('form_data[status]', values.status || '')
        data.append('form_data[review]', values.review || '')
        data.append('form_data[details]', details || '')
        data.append('form_data[description]', values.description || '')
        _appendFiles(data, files);
        _appendMetaData(data, metaData);
        Inertia.post('/products/save', data, {preserveScroll: true});
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
                    <div className="col-9">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">

                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="general-tab" data-bs-toggle="tab"
                                   href="#product-general" role="tab"
                                   aria-controls="product-general" aria-selected="true">General</a>
                            </li>

                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="product-variations-tab" data-bs-toggle="tab"
                                   href="#product-variations"
                                   role="tab"
                                   aria-controls="product-variations" aria-selected="true">Product Variations</a>
                            </li>

                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="product-seo-details-tab" data-bs-toggle="tab"
                                   href="#product-seo-details" role="tab"
                                   aria-controls="profile" aria-selected="false">Seo Details</a>
                            </li>

                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="product-shipping-tab" data-bs-toggle="tab"
                                   href="#product-shipping"
                                   role="tab"
                                   aria-controls="product-shipping" aria-selected="true">Shipping</a>
                            </li>

                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="linked-product-tab" data-bs-toggle="tab"
                                   href="#linked-product"
                                   role="tab"
                                   aria-controls="linked-product" aria-selected="true">Linked Products</a>
                            </li>

                        </ul>
                        <div className="tab-content px-3" id="myTabContent">
                            <div className="tab-pane  my-5" id="product-general" role="tabpanel"
                                 aria-labelledby="general-tab">
                                <General
                                    files={files}
                                    setFiles={setFiles}
                                    values={values}
                                    details={details}
                                    setDetails={setDetails}
                                    product={product}
                                    categories={categories}
                                    handleInputChange={_handleInputChange}
                                />
                            </div>

                            <div className="tab-pane fade show active my-5" id="product-variations" role="tabpanel"
                                 aria-labelledby="profile-tab">
                                <ProductVariations
                                    imageUrls={imageUrls}
                                    files={files}
                                    setFiles={setFiles}
                                />
                            </div>

                            <div className="tab-pane fade my-5" id="product-seo-details" role="tabpanel"
                                 aria-labelledby="product-seo-details-tab">
                                <MetaDataForm
                                    metaData={metaData}
                                    setMetaData={setMetaData}
                                />
                            </div>

                            <div className="tab-pane fade my-5" id="product-shipping" role="tabpanel"
                                 aria-labelledby="product-shipping-tab">
                                product shipping
                            </div>

                            <div className="tab-pane fade my-5" id="linked-product" role="tabpanel"
                                 aria-labelledby="linked-product-tab">
                                linked product
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
