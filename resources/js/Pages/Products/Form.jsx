import React, {useState, useEffect} from 'react';
import {Inertia} from '@inertiajs/inertia';
import {_appendFiles} from "../../Helpers/CommonFunctions";

import PageHeader from "../../Components/PageHeader";
import AdminLayout from "../../Components/AdminLayout";
import PageContent from "../../Components/PageContent";
import SubmitButton from "../../Components/SubmitButton";

import General from "../../Components/Product/General";
import Shipping from "../../Components/Product/Shipping";
import MetaDataForm from "../../Components/MetaDataForm";
import ProductImages from "../../Components/Product/ProductImages";
import ProductVariations from "../../Components/Product/ProductVariations";


import {
    initialGeneral,
    initialMetaData,
    initialProductVariations,
    initialShipping
} from "../../Helpers/InitialStateObjects";

export default function Form({product, categories}) {

    const [images, setImages] = useState([]);
    const [general, setGeneral] = useState(() => initialGeneral);
    const [metadata, setMetadata] = useState(() => initialMetaData);
    const [shipping, setShipping] = useState(() => initialShipping);
    const [variations, setVariations] = useState(() => [initialProductVariations]);


    useEffect(() => {
        console.log('FORM RENDER');
    })

    // console.log({images, general, metadata, shipping, variations})
    const _handleFormSubmit = (e) => {
        e.preventDefault();
        let data = {
            id: null,
            category_id: general.category.value,
            general: general,
            shipping: shipping,
            metadata: metadata,
            variations: variations,
            images: images
        };
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
                <form onSubmit={_handleFormSubmit}>
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
                                       aria-controls="product-variations" aria-selected="true">Variations</a>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="product-images-tab" data-bs-toggle="tab"
                                       href="#product-images"
                                       role="tab"
                                       aria-controls="product-images" aria-selected="true">Images</a>
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
                                <div className="tab-pane fade show active my-5" id="product-general" role="tabpanel"
                                     aria-labelledby="general-tab">
                                    <General
                                        general={general}
                                        setGeneral={setGeneral}
                                        categories={categories}
                                    />
                                </div>

                                <div className="tab-pane my-5" id="product-variations" role="tabpanel"
                                     aria-labelledby="profile-tab">
                                    <ProductVariations
                                        variations={variations}
                                        setVariations={setVariations}
                                    />
                                </div>

                                <div className="tab-pane my-5" id="product-images" role="tabpanel"
                                     aria-labelledby="product-images-tab">
                                    <ProductImages
                                        images={images}
                                        setImages={setImages}
                                    />
                                </div>

                                <div className="tab-pane fade my-5" id="product-metadata" role="tabpanel"
                                     aria-labelledby="product-metadata-tab">
                                    <MetaDataForm
                                        metadata={metadata}
                                        setMetadata={setMetadata}
                                    />
                                </div>

                                <div className="tab-pane fade my-5" id="product-shipping" role="tabpanel"
                                     aria-labelledby="product-shipping-tab">
                                    <Shipping
                                        shipping={shipping}
                                        setShipping={setShipping}
                                    />
                                </div>

                                <div className="tab-pane fade my-5" id="linked-product" role="tabpanel"
                                     aria-labelledby="linked-product-tab">
                                    coming soon
                                </div>

                            </div>

                            <SubmitButton
                                cancelUrl="/products"
                            />
                        </div>
                    </div>
                </form>
            </PageContent>
        </AdminLayout>
    )
}
