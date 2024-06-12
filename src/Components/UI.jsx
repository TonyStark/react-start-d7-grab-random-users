
import React from 'react';
import '../App.css';
function UI({userData,loading,handleClick}) {
  
  return (
    <main className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-10 text-center">
          <h3 className='text-center mb-4'>Get Random User</h3>
          <div className="row mt-3 justify-content-center p-5 rounded-3 shadow">
            {loading ? (
              <div className="loading-state">
                <div className="loading"></div>
              </div>
            ) :  userData.length > 0 ? (
              <>
                <div className="col-3">
                  <div className="">
                      <img src={userData[0].picture.large} className="img-fluid" style={{
                        width:"150px",
                        height:"150px",
                        borderRadius:"50%",
                        border:"2px dashed black",
                        padding:"2px"}} alt="..." />
                  </div>
                </div>
                <div className="col-9">
                  <div className="">
                    <div className="card-body">
                      <ul className='list-unstyled text-start'>
                        <li className='d-flex fs-3 align-items-center gap-3 my-3'>
                          <div className="icon d-flex justify-content-center align-items-center" style={{
                            minWidth:"42px",
                            minHeight:"42px",
                            borderRadius:"5px",
                            backgroundColor:"rgb(155, 236, 0)"
                          }}>
                            <i className='bx bxs-user-circle align-middle'></i>
                          </div>
                          <span className='d-flex align-items-center w-100 fs-5 ps-2' style={{
                            minHeight:"42px",borderRadius:"5px",backgroundColor:"rgba(155, 236, 0,0.3)"
                          }} >{userData[0].name.title}. {userData[0].name.first} {userData[0].name.last}</span>
                        </li>
                        <li className='d-flex fs-3 align-items-center gap-3 my-3'>
                          <div className="icon d-flex justify-content-center align-items-center" style={{
                            minWidth:"42px",
                            minHeight:"42px",
                            borderRadius:"5px",
                            backgroundColor:"rgb(155, 236, 0)"
                          }}>
                            <i className='bx bxs-envelope align-middle'></i>
                          </div>
                          <span className='d-flex align-items-center w-100 fs-5 ps-2' style={{
                            minHeight:"42px",borderRadius:"5px",backgroundColor:"rgba(155, 236, 0,0.3)"
                          }} >{userData[0].email}</span>
                        </li>
                        <li className='d-flex fs-3 align-items-center gap-3 my-3'>
                          <div className="icon d-flex justify-content-center align-items-center" style={{
                            minWidth:"42px",
                            minHeight:"42px",
                            borderRadius:"5px",
                            backgroundColor:"rgb(155, 236, 0)"
                          }}>
                            <i className='bx bxl-github align-middle'></i>
                          </div>
                          <span className='d-flex align-items-center w-100 fs-5 ps-2' style={{
                            minHeight:"42px",borderRadius:"5px",backgroundColor:"rgba(155, 236, 0,0.3)"
                          }} >@{userData[0].login.username}</span>
                        </li>
                        <li className='d-flex fs-3 align-items-center gap-3 my-3'>
                          <div className="icon d-flex justify-content-center align-items-center" style={{
                            minWidth:"42px",
                            minHeight:"42px",
                            borderRadius:"5px",
                            backgroundColor:"rgb(155, 236, 0)"
                          }}>
                            <i className='bx bxs-phone-call align-middle'></i>
                          </div>
                          <span className='d-flex align-items-center w-100 fs-5 ps-2' style={{
                            minHeight:"42px",borderRadius:"5px",backgroundColor:"rgba(155, 236, 0,0.3)"
                          }} >{userData[0].cell}</span>
                        </li>
                        <li className='d-flex fs-3 align-items-center gap-3 my-3'>
                          <div className="icon d-flex justify-content-center align-items-center" style={{
                            minWidth:"42px",
                            minHeight:"42px",
                            borderRadius:"5px",
                            backgroundColor:"rgb(155, 236, 0)"
                          }}>
                            <i className='bx bx-current-location align-middle'></i>
                          </div>
                          <span className='d-flex align-items-center w-100 fs-5 ps-2' style={{
                            minHeight:"42px",borderRadius:"5px",backgroundColor:"rgba(155, 236, 0,0.3)"
                          }} >{userData[0].location.country}</span>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-3 mt-4">
                {loading ? (
                      <button className="btn btn-warning" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span className="visually-hidden" role="status">Loading...</span>
                      </button>
                    ):(<button className='btn btn-warning' onClick={handleClick}>Get Another</button>)}
                </div>
              </>
            ):(
              <p>No user data available</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default UI;
