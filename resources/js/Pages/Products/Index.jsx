import React from 'react';
import AdminLayout from "../../Components/AdminLayout";
import PageHeader from "../../Components/PageHeader";
import PageContent from "../../Components/PageContent";
import ActionButton from "../../Components/ActionButton";
import NoRecordsFound from "../../Components/NoRecordsFound";

const Index = ({products}) => {
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
                        <th scope="col">Category</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products?.length ? products.map(product => (
                            <tr key={product.id}>
                                <td>{product.general.name}</td>
                                <td>{product.general.category.label}</td>
                                <td>{product.general.status.label}</td>
                                <td>
                                    <ActionButton
                                        isDetails={false}
                                        detailsUrl={`/products/${product.id}/show`}
                                        isEdit={true}
                                        editUrl={`/products/${product.id}/edit`}
                                    />
                                </td>
                            </tr>
                        )) : <NoRecordsFound colSpan={7}/>
                    }
                    </tbody>
                </table>
            </PageContent>
        </AdminLayout>
    )
}

export default Index;
