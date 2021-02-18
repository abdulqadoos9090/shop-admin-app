import React from 'react';
import AdminLayout from "../../Components/AdminLayout";
import {InertiaLink} from "@inertiajs/inertia-react";
import PageHeader from "../../Components/PageHeader";
import PageContent from "../../Components/PageContent";
import ActionButton from "../../Components/ActionButton";
import NoRecordsFound from "../../Components/NoRecordsFound";


export default function (props) {
    const {products} = props;
    return (
        <AdminLayout>
            <PageHeader
                title="View all products"
                url="/products/create"
                btnLable="Add new"
            />
            <PageContent>
                <table className="table table-borderless">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Index</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products && products.length ? products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.meta_data.index}</td>
                                <td>{product.status}</td>
                                <td><ActionButton editUrl={`/products/${product.id}/edit`}/></td>
                            </tr>
                        )) : <NoRecordsFound colSpan={5}/>
                    }
                    </tbody>
                </table>
            </PageContent>
        </AdminLayout>
    )
}
