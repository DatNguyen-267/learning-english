import React, { Component, useEffect } from 'react';
import './Header.scss'
import { BrowserRouter, Route, Routes, Navigate, useLocation, useParams, useNavigate } from "react-router-dom";
import { useSelector ,useDispatch } from 'react-redux';
import * as actions from './../../redux/actions/index'
function Header() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(auth)
  let user
  const handleLogout = () => {
    // console.log('handle logout')
    dispatch(actions.logout({
      navigate: navigate
    }))
  }
  if (auth.isLogged) {
    user = (
    <div className="navbar__action">
      <i className="fas fa-bell navbar__action-notify"></i>
      <img className="navbar__action-avatar" src="https://cdn.fullstack.edu.vn/f8-production/user_photos/165533/62011642e39d5.jpg" alt=""></img>
      <div className="tippy-0">
          <div className="menu__user">
              <div className="menu__user-header">
                  <img className="menu__user-header-img" src="https://cdn.fullstack.edu.vn/f8-production/user_photos/165533/62011642e39d5.jpg" alt=""></img>
                  <div className="menu__user-header-info">
                      <div className="menu__user-header-name">Nguyen Dat</div>
                      <div className="menu__user-header-id">ID: 19520040</div>
                  </div>
              </div>
              <div className="menu__user-body">
                  <div className="menu__user-group">
                      <hr />
                      <a className="menu__user-group-item">Khóa học của tôi</a>
                      <a className="menu__user-group-item">Trang của tôi</a>
                  </div>
                  <div className="menu__user-group">
                      <hr />
                      <div className="menu__user-group-item" onClick={handleLogout}>Đăng xuất</div>
                  </div>
              </div>
          </div>
      </div>
    </div> )
  }
  else {
    user = (
      <div className="navbar__action">
        <a href="http://localhost:3000/login" className="navbar__action-login">Đăng nhập</a>
      </div>
      )
  }
  useEffect(()=> {
    if (auth.isLogged) {
      console.log('is create script scc')
      // const script = document.createElement('script');
      // script.type = 'text/javascript';
      // script.appendChild(
      //   document.createTextNode(`
          
      //     `)
      //   )
      // script.async = true;
      // document.body.appendChild(script);
      // return () => {
      //   document.body.removeChild(script);
      // }
      let avatar = document.querySelector(".navbar__action-avatar")
      let tippy = document.querySelector(".tippy-0")
      let menu = document.querySelector(".menu__user")
      
      function blurFunc() {
        tippy.style.display = "none"
      }
      avatar.addEventListener('click',() => {
        tippy.style.display = "block"
      })
      avatar.addEventListener('blur', blurFunc)
      
      window.addEventListener('mousedown', function(event) {
        if (event.target === avatar && tippy.style.display === "none") {
          tippy.style.display = "block";}
        // } else if (event.target != menu ) {
        //   tippy.style.display = 'none';
        // }
      });
    }
  }, [])
  return (
    <header>
      <div className="grid wide">
        <div className="navbar">
          <div className="navbar__logo">
            <a href="" className="">
              <i className="fab fa-bandcamp"></i>
            </a>
            <h5>WaterDog</h5>
          </div>
          <div className="navbar__link">
            <ul className="navbar-list">
              <li className="navbar-item ">
                <a href="" >
                  <span>Home</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="" >
                  <span>Khóa học</span>
                </a>
              </li>
              <li className="navbar-item" >
                <a href="" className="active">
                  <span>Luyện Thi</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="">
                  <span>Của Tôi</span>
                </a>
              </li>
            </ul>
          </div>
          {user}
          
        </div>
      </div>
    </header>
  );
}

export default Header;