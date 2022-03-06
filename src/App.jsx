
import { BrowserRouter, Route, Routes, Navigate, useLocation, Router, Outlet } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import CoursePage from './pages/CoursePage/CoursePage'
import Header from "./components/Header/Header";
import NotFoundFage from "./pages/NotFoundPage/NotFoundPage";
import { Loading_1 } from "./components/Loading/Loading_1";
import * as courseAction from './redux/actions/index'
import PracticeListenPage from "./pages/PracticeListenPage/PracticeListenPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "./redux/actions/index";
import axios from "axios";
import {SERVER_URL} from './constants/index'
import { fetchUser } from "./api";

axios.defaults.withCredentials = true;
function App() {
  
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)
  useEffect(()=> {
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin) {
      const getToken = async() => {
        const res = await axios.get(`http://localhost:5000/user/refresh_token`)
        console.log("Lấy token thành công")
        dispatch(actions.getToken(res.data.access_token))
        dispatch(actions.login_success())
      }
      getToken()
    }
  }, [auth.isLogged, dispatch])
  useEffect(()=> {
    if(token) {
      const getUser = () => {
        console.log(token)
        return fetchUser(token).then((res)=> {
          dispatch(actions.get_user(res.data))
          console.log(res)
        })
        
      }
      getUser();
    }
  }, [token, dispatch])
  return (
    <div >
        {/* {loading.isLoading ? (<Loading_1/>) : ""} */}
        <Header></Header>
        <div className="body">
          {/* Nội dung trang */}
          <div className="main-content">
            <Outlet></Outlet>
            <Routes >
              {/* <Route path="*" element={<Navigate to="/home" />}></Route> */}
              {/* Navigate là chuyển hướng về trang khác */}
              <Route path="home" element={<HomePage />}></Route>
              {/* <Route path="/login" element={<LoginPage />}></Route> */}
              <Route path="course" element={<CoursePage />}></Route>
              <Route path="*" element={<NotFoundFage />}></Route>
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
