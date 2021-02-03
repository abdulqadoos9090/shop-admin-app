import React from 'react';
import AdminLayout from "../../Components/AdminLayout";
import {InertiaLink} from "@inertiajs/inertia-react";
import PageHeader from "../../Components/PageHeader";
import PageContent from "../../Components/PageContent";
import EditButton from "../../Components/EditButton";


export default function () {
    return (
        <AdminLayout>
            <PageHeader
                title="View all product"
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
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>PKR 200</td>
                        <td><EditButton editUrl="/products/1/edit"/></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>PKR 300</td>
                    </tr>
                    </tbody>
                </table>
            </PageContent>
        </AdminLayout>
    )
}
