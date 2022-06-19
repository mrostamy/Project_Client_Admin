import { Fragment, useEffect } from "react"

export const Content = () => {


  useEffect(() => {


    setTimeout(() => {

    }, 1000);


  });

  return (
    <Fragment>
      <section className="content">
        <div className="container-fluid">

          <div className="row">
            <div className="col-lg-3 col-6">

              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>

                  <p>سفارشات جدید</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
                <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
              </div>
            </div>

            <div className="col-lg-3 col-6">

              <div className="small-box bg-success">
                <div className="inner">
                  <h3>53<sup style={{ fontSize: "20" }}>%</sup></h3>

                  <p>افزایش امتیاز</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
              </div>
            </div>

            <div className="col-lg-3 col-6">

              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>

                  <p>کاربران ثبت شده</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add"></i>
                </div>
                <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
              </div>
            </div>

            <div className="col-lg-3 col-6">

              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>

                  <p>بازدید جدید</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph"></i>
                </div>
                <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>

  )

}