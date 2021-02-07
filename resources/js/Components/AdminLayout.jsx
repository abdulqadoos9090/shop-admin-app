import React, {useEffect} from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';
import {Inertia} from '@inertiajs/inertia';
import Loading from "./Loading";


export default function AdminLayout({children}) {
    return (
        <React.Fragment>
            <header className="container-fluid">
                <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bolder" href="#">ADMIN PANEL</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <Loading/>
                            </ul>
                            <div className="d-flex">
                                <a href="#" className="text-secondary bg-white rounded-3 px-2 pt-2 pb-1">
                                    <i className="fas fa-sign-out-alt fs-5"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="mt-5 pt-1 container-fluid">
                <div className="row">
                    <aside className="col-lg-1 d-flex justify-content-center bg-light" style={{"minHeight": "92.5vh"}}>
                        <ul className="nav flex-column position-fixed pt-4">
                            <li className="nav-item bg-white rounded-3 text-center py-1 mb-3">
                                <InertiaLink className="nav-link text-secondary " aria-current="page" href="/products">
                                    <i className="fas fa-shopping-bag fs-4"> </i>
                                </InertiaLink>
                            </li>
                            <li className="nav-item bg-white rounded-3 text-center py-1 mb-3">
                                <InertiaLink className="nav-link text-secondary" aria-current="page" href="/categories">
                                    <i className="fas fa-clipboard-list fs-4"></i>
                                </InertiaLink>
                            </li>
                        </ul>
                    </aside>

                    <article className="col-lg-11 mt-3">
                        <div className="bg-light rounded-3 m-2">
                            <div className="card-body p-4" style={{"minHeight": "92vh"}}>
                                {children}
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </React.Fragment>
    )
}
