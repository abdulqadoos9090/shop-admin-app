import React, {useState} from 'react';
import {Inertia} from '@inertiajs/inertia'
import FormInput from "../../Components/FormInput";
import PageHeader from "../../Components/PageHeader";
import AdminLayout from "../../Components/AdminLayout";
import PageContent from "../../Components/PageContent";
import MetaDataForm from "../../Components/MetaDataForm";
import SubmitButton from "../../Components/SubmitButton";
import Select from "react-select";

export default function Form() {

    const options = [
        {value: 'follow,index', label: 'Follow Index'},
        {value: 'nofollow,noindex', label: 'No follow, No index'},
        {value: 'follow', label: 'follow'},
        {value: 'index', label: 'index'}
    ]


    const [values, setValues] = useState({
        label: "",
        status: "",
    })


    const _handleInputChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }


    const _handleFormSubmit = () => {
// console.log(values);
        let data = new FormData()
        data.append('label', values.label || '')
        data.append('metaTitle', values.metaTitle || '')
        data.append('metaSlug', values.metaSlug || '')
        data.append('metaDescription', values.metaDescription || '')
        Inertia.post('/categories/save', data);
    }

    return (
        <AdminLayout>
            <PageHeader
                title="Add new category"
                url="/categories"
                btnLable="View all"
                btnClass="primary"
            />
            <PageContent>
                <div className="row  justify-content-center my-4">
                    <div className="col-7">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home"
                                   role="tab"
                                   aria-controls="home" aria-selected="true">Category Details</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                                   aria-controls="profile" aria-selected="false">Seo Details</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active my-5" id="home" role="tabpanel"
                                 aria-labelledby="home-tab">

                                <FormInput
                                    id={"label"}
                                    label={"Label"}
                                    type={"text"}
                                    defaultValue={""}
                                    handleChange={_handleInputChange}
                                />


                                <Select
                                    options={options}
                                />


                            </div>
                            <div className="tab-pane fade my-5" id="profile" role="tabpanel"
                                 aria-labelledby="profile-tab">
                                <MetaDataForm handleChange={_handleInputChange}/>
                            </div>
                        </div>

                        <SubmitButton
                            cancelUrl="/categories"
                            handleFormSubmit={_handleFormSubmit}
                        />
                    </div>
                </div>
            </PageContent>
        </AdminLayout>
    )
}
