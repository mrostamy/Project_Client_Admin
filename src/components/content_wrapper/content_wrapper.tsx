import React, { Fragment } from "react";
import { Header } from "../header/header";
import { Content } from "../main_content/main_content";

export const Content_Wrapper = () => {
  return (
    <div className="content-wrapper">
      <Header />
      <Content />
    </div >
  )
}
