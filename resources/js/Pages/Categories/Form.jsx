import React, {useState} from 'react';
import {Inertia} from '@inertiajs/inertia'
import FormInput from "../../Components/FormInput";
import PageHeader from "../../Components/PageHeader";
import AdminLayout from "../../Components/AdminLayout";
import PageContent from "../../Components/PageContent";
import MetaDataForm from "../../Components/MetaDataForm";
import SubmitButton from "../../Components/SubmitButton";
import Select from "react-select";
import {_appendMetaData, statusOptions} from "../../Common";

export default function Form(props) {

    const {category} = props;
    const [values, setValues] = useState(category);
    const [metaData, setMetaData] = useState(category ? category.meta_data : null);

    const _handleInputChange = (e) => {
        if (e.target) {
            const key = e.target.id;
            const value = e.target.value;
            setValues(values => ({
                ...values,
                [key]: value,
            }))
        } else {
            setValues(values => ({
                ...values,
                ['status']: e.value,
            }))
        }
    }

    const _handleFormSubmit = () => {
        let data = new FormData()
        data.append('form_data[id]', values.id || '')
        data.append('form_data[label]', values.label || '')
        data.append('form_data[status]', values.status || '')
        _appendMetaData(data, metaData);
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
                                    defaultValue={values ? values.label : null}
                                    handleChange={_handleInputChange}
                                />


                                <Select
                                    options={statusOptions}
                                    defaultValue={values ? {value: values.status, label: values.status} : null}
                                    onChange={_handleInputChange}
                                />


                            </div>
                            <div className="tab-pane fade my-5" id="profile" role="tabpanel"
                                 aria-labelledby="profile-tab">
                                <MetaDataForm
                                    metaData={metaData}
                                    setMetaData={setMetaData}
                                />
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
