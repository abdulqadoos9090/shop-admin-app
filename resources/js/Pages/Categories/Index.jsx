import React from 'react';
import AdminLayout from "../../Components/AdminLayout";
import {InertiaLink} from "@inertiajs/inertia-react";
import PageHeader from "../../Components/PageHeader";
import PageContent from "../../Components/PageContent";
import ActionButton from "../../Components/ActionButton";
import NoRecordsFound from "../../Components/NoRecordsFound";


export default function (props) {
    const {categories} = props;
    // console.log(categories);
    return (
        <AdminLayout>
            <PageHeader
                title="View all categories"
                url="/categories/create"
                btnLable="Add new"
            />
            <PageContent>
                <table className="table table-borderless">
                    <thead>
                    <tr>
                        <th scope="col">Label</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        categories && categories.length ? categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.label}</td>
                                <td>{category.status}</td>
                                <td><ActionButton editUrl="/categories/1/edit"/></td>
                            </tr>
                        )) : <NoRecordsFound colSpan={3}/>
                    }
                    </tbody>
                </table>
            </PageContent>
        </AdminLayout>
    )
}
