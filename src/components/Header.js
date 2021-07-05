import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../oauth2/OAuth';
import APIUtils from '../util/APIUtils';
const Header = () => {

    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading,setLoding] = useState(false);

    
  const loadCurrentlyLoggedInUser = () => {
    // setLoding(true);

    APIUtils.getCurrentUser()
    .then((response) => {
        setCurrentUser(response)
        // setAuthenticated(true)
        // setLoding(false)
      
    }).catch(error => {
      // setLoding(false) 
    });    
  } 
        

useEffect(() => {
  loadCurrentlyLoggedInUser();

  if(currentUser){
  setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  };

},[]);

const logOut = () => {
  localStorage.removeItem(ACCESS_TOKEN)
  setCurrentUser(null)
  // setAuthenticated(false)
};


    return (
        <div>
             <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          테스트페이지입니다 ---
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                관리자
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                회원
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}의 정보
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                로그아웃
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                로그인
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/join"} className="nav-link">
                회원가입
              </Link>
            </li>
          </div>
        )}
      </nav>
        </div>
    );
};

export default Header;