import React from 'react';
import AdminLayout from "../../Components/AdminLayout";
import PageHeader from "../../Components/PageHeader";
import PageContent from "../../Components/PageContent";
import ActionButton from "../../Components/ActionButton";
import NoRecordsFound from "../../Components/NoRecordsFound";


export default function (props) {
    const {categories} = props;
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
                        <th scope="col">Title</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Index</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        categories && categories.length ? categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.label}</td>
                                <td>{category.meta_data.title}</td>
                                <td>{category.meta_data.slug}</td>
                                <td>{category.meta_data.index}</td>
                                <td>{category.status}</td>
                                <td>
                                    <ActionButton
                                        isEdit={true}
                                        editUrl={`/categories/${category.id}/edit`}
                                    />
                                </td>

                            </tr>
                        )) : <NoRecordsFound colSpan={6}/>
                    }
                    </tbody>
                </table>
            </PageContent>
        </AdminLayout>
    )
}
