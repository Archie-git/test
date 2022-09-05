import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.less';

const LoginPage = () => {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const handleLogin = () => {
    setPending(true);
    localStorage.setItem('logined', 'YES');
    navigate('/');
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={require('../../asset/png/logo.png').default} alt="img" />
      </div>
      <div className={style.body}>
        <div className={style.card}>
          <h2>登录/注册</h2>
          <input className={style.input_email} />
          <input className={style.input_code} />
          <div className={style.agreement}>
            <input type="checkbox" />
            <p>我已阅读并同意《用户协议》和《隐私协议》</p>
          </div>
          <button type="button" onClick={handleLogin}>{pending ? '登录中...' : '登录'}</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
