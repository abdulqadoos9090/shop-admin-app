import React from 'react';
import AdminLayout from "../../Components/AdminLayout";
import PageHeader from "../../Components/PageHeader";
import PageContent from "../../Components/PageContent";
import MetaDataForm from "../../Components/MetaDataForm";
import SubmitButton from "../../Components/SubmitButton";

export default function Form() {
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
                    <div className="col-6">
                        <h6>Product Information -</h6>
                        <div className="form-floating my-3">
                            <input type="text" className="form-control" id="floatingName" placeholder="name"/>
                            <label htmlFor="floatingName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="description" className="form-control" id="floatingDescription"
                                   placeholder="Description"/>
                            <label htmlFor="floatingDescription">Description</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingPrice"
                                   placeholder="Price"/>
                            <label htmlFor="floatingPrice">Price</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="stock" className="form-control" id="floatingDescription"
                                   placeholder="Stock"/>
                            <label htmlFor="floatingDescription">Stock</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="Product Details" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
                            <label htmlFor="floatingTextarea2">Product Details</label>
                        </div>
                        <MetaDataForm/>
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
