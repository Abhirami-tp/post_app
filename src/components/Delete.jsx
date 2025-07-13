import React from 'react'
import Nav from './Nav'

const Delete = () => {
  return (
    <div
    style={{
    backgroundImage: 'url("https://www.socialchamp.com/blog/wp-content/uploads/2024/01/Content-Blog-Banner_Q4-2023_1125x600_57_How-to-Delete-Pinterest-Account.png")',
    minHeight: '100vh',
    backgroundposition: 'center'
  }}>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Post Id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete