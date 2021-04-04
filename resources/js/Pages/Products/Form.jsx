import React, {useState, useEffect, useReducer} from 'react';
import {Inertia} from '@inertiajs/inertia';
import PageHeader from "../../Components/PageHeader";
import AdminLayout from "../../Components/AdminLayout";
import PageContent from "../../Components/PageContent";
import SubmitButton from "../../Components/SubmitButton";

import General from "../../Components/Product/General";
import Shipping from "../../Components/Product/Shipping";
import MetaDataForm from "../../Components/MetaDataForm";
import ProductImages from "../../Components/Product/ProductImages";
import ProductVariations from "../../Components/Product/ProductVariations";
import {_appendFiles, _appendMetaData} from "../../Helpers/CommonFunctions";

import {UPDATE} from "../../Helpers/Constants";
import {ProductFormContext} from '../../Helpers/Contexts';
import {initialProductForm} from "../../Helpers/InitialStateObjects";

const productReducer = (state, action) => {
    switch (action.type) {
        case UPDATE:
            return {...state, [action.key]: action.data};
        default:
            return state;
    }
}

const Form = ({product, categories}) => {

    const [productFormState, dispatch] = useReducer(productReducer, initialProductForm);

    useEffect(() => {
        console.log('FORM RENDER');
    })

    const _handleFormSubmit = () => {
        // let data = new FormData();
        // data.append('form_data[id]', values.id || '')
        // data.append('form_data[name]', values.name || '')
        // data.append('form_data[badges]', values.badges || '')
        // data.append('form_data[price]', values.price || '')
        // data.append('form_data[discounted_price]', values.discounted_price || '')
        // data.append('form_data[stock]', values.stock || '')
        // data.append('form_data[category_id]', parseInt(values.category_id) || '')
        // data.append('form_data[status]', values.status || '')
        // data.append('form_data[review]', values.review || '')
        // data.append('form_data[details]', details || '')
        // data.append('form_data[description]', values.description || '')
        // _appendFiles(data, files);
        // _appendMetaData(data, metaData);
        // Inertia.post('/products/save', data, {preserveScroll: true});
    }

    console.log(productFormState);

    return (
        <AdminLayout>
            <PageHeader
                title="Add new product"
                url="/products"
                btnLable="View all"
                btnClass="primary"
            />
            <PageContent>
                <ProductFormContext.Provider value={{productFormState, dispatch}}>
                    <div className="row justify-content-center my-4">
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
                                    <a className="nav-link" id="product-images-tab" data-bs-toggle="tab"
                                       href="#product-images"
                                       role="tab"
                                       aria-controls="product-images" aria-selected="true">Product Images</a>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="product-metadata-tab" data-bs-toggle="tab"
                                       href="#product-metadata" role="tab"
                                       aria-controls="profile" aria-selected="false">Metadata</a>
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
                                <div className="tab-pane my-5 fade show active" id="product-general" role="tabpanel"
                                     aria-labelledby="general-tab">
                                    <General categories={categories}/>
                                </div>

                                <div className="tab-pane fade  my-5" id="product-variations" role="tabpanel"
                                     aria-labelledby="profile-tab">
                                    <ProductVariations/>
                                </div>

                                <div className="tab-pane fade my-5" id="product-images" role="tabpanel"
                                     aria-labelledby="product-images-tab">
                                    <ProductImages/>
                                </div>

                                <div className="tab-pane fade my-5" id="product-metadata" role="tabpanel"
                                     aria-labelledby="product-metadata-tab">
                                    <MetaDataForm/>
                                </div>

                                <div className="tab-pane fade  my-5" id="product-shipping" role="tabpanel"
                                     aria-labelledby="product-shipping-tab">
                                    <Shipping/>
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
                </ProductFormContext.Provider>
            </PageContent>
        </AdminLayout>
    )
}

export default Form;
