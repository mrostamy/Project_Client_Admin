import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Main_sidebar = () => {

    return (
        <Fragment>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img src="./assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                        style={{ opacity: "0.8" }} />
                    <span className="brand-text font-weight-light">پنل مدیریت</span>
                </a>
                <div className="sidebar" style={{ direction: "ltr" }}>
                    <div style={{ direction: "ltr" }}>
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="https://www.gravatar.com/avatar/52f0fbcbedee04a121cba8dad1174462?s=200&d=mm&r=g" className="img-circle elevation-2" alt="User Image"></img>
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">حسام موسوی</a>
                            </div>
                        </div>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item">
                                    <a href="pages/widgets.html" className="nav-link">
                                        <p>
                                            ویجت‌ها
                                            <span className="right badge badge-danger">جدید</span>
                                        </p>
                                        <i className="nav-icon fa fa-th"></i>
                                    </a>
                                </li>
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">

                                        <p>
                                            چارت‌ها
                                            <i className="right fa fa-angle-left"></i>
                                        </p>
                                        <i className="nav-icon fa fa-pie-chart"></i>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/charts/chartjs.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>نمودار ChartJS</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/flot.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>نمودار Flot</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/inline.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>نمودار Inline</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/calendar.html" className="nav-link">
                                        <i className="nav-icon fa fa-calendar"></i>
                                        <p>
                                            تقویم
                                            <span className="badge badge-info right">2</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link"  >
                                        <p>
                                            ورود
                                            <span className="badge badge-info right">2</span>
                                        </p>
                                        <i className="nav-icon fa fa-calendar"></i>

                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
        </Fragment >
    )
}
