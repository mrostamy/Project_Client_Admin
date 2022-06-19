import React, { Fragment } from 'react';
import { Navbar } from '../navbar/navbar';
import { Main_sidebar } from '../main_sidebar/main_sidebar';
import { Content_Wrapper } from '../content_wrapper/content_wrapper';
import { Footer } from '../main_footer/main_footer';


export const Wrapper = () => {
    return (
        <Fragment>
            <div className="wrapper">
                <Navbar />
                <Main_sidebar />
                <Content_Wrapper />
                <Footer />
            </div>
        </Fragment>
    )
}