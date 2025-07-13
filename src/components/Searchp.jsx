import React from 'react'
import Nav from './Nav'

const Searchp = () => {
  return (
    <div
      style={{
    backgroundImage: 'url("https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/explore-Pinterest-logo.jpg")',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundposition: 'center',
    backgroundRepeat: 'n0-repeat'
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
                            <button className="btn btn-success">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchp