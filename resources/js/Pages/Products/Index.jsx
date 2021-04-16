import React from 'react';
import AdminLayout from "../../Components/AdminLayout";
import PageHeader from "../../Components/PageHeader";
import PageContent from "../../Components/PageContent";
import ActionButton from "../../Components/ActionButton";
import NoRecordsFound from "../../Components/NoRecordsFound";
import {_handelReviewLabels, _handelStatusLabels} from "../../Helpers/CommonFunctions";

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
                        <th scope="col">Slug</th>
                        <th scope="col">Category</th>
                        <th scope="col">Reviews</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products?.length ? products.map(product => (
                            <tr key={product.id}>
                                <td>{product.general?.name || null}</td>
                                <td>{product.metadata?.slug || null}</td>
                                <td>{product.general.category?.label || null}</td>
                                <td>{_handelReviewLabels(product.general.reviews || null)}</td>
                                <td>{_handelStatusLabels(product.general.status?.value || null)}</td>
                                <td>
                                    <ActionButton
                                        isDetails={false}
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
