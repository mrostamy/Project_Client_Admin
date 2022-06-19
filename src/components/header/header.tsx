import React, { Fragment } from "react";

export const Header = () => {

    return (
        <Fragment>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">داشبورد</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-left">
                                <li className="breadcrumb-item"><a href="#">خانه</a></li>
                                <li className="breadcrumb-item active">داشبورد ورژن 2</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}