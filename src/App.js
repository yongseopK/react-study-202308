import React, { useEffect, useState } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Home from './components/SideEffect/Home/Home';
import Login from './components/SideEffect/Login/Login';

// 컨텍스트 불러오기
import AuthContext from './store/auth-context';

const App = () => {

  // 로그인 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 화면이 리랜더링될 때 localStorage를 확인해서
  // 현재 로그인 플래그가 존재하는지 검사


  // 기존에 로그인한 사람인지 확인하는 코드는 리랜더링 할때마다 돌아가게 만들면 안됨
  useEffect(() => {
    console.log('useEffect 실행 - 최초 단한번만 실행됨');
    console.log('로그인 검사 수행');
    const storedLoginFlag = localStorage.getItem('login-flag');
    if (storedLoginFlag === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  // 서버로 로그인을 요청하는 함수
  const loginHandler = (email, password) => {
    // 로그인의 증거로 브라우저에 로그인 값을 1로 표현해서 저장
    localStorage.setItem('login-flag', '1');

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('login-flag', '1');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </AuthContext.Provider>
  );
};

export default App;