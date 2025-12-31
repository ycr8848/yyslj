
import React, { useState } from 'react';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    // 模拟本地处理延迟
    setTimeout(() => {
      onLoginSuccess();
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Background with Blur */}
      <div 
        className="absolute inset-0 z-0 scale-110 bg-cover bg-center transition-transform duration-[10s] ease-linear animate-pulse-slow"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop')`,
          filter: 'blur(8px) brightness(0.6)'
        }}
      ></div>

      {/* Header Title */}
      <div className="relative z-10 text-center px-4 mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-[0.2em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          山东省高等学历继续教育
        </h1>
        <h2 className="text-white text-2xl md:text-3xl font-light mt-4 tracking-[0.1em] opacity-90">
          学士学位英语考务管理系统
        </h2>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[460px] px-6 animate-in zoom-in-95 duration-700 delay-200">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden p-10 md:p-12 transition-all duration-300 transform hover:scale-[1.005]">
          {/* QR Code Icon Toggle */}
          <div className="absolute top-6 right-6 cursor-pointer text-blue-500 hover:text-blue-600 transition group">
             <i className="fas fa-qrcode text-3xl opacity-60 group-hover:opacity-100 transition-opacity"></i>
             <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-bounce"></div>
          </div>

          <div className="flex justify-center mb-10">
             <div className="inline-flex border-b-2 border-slate-100 w-full">
                <button className="flex-1 py-3 text-blue-600 font-bold border-b-2 border-blue-600 text-sm">密码登录</button>
                <button className="flex-1 py-3 text-slate-400 font-medium text-sm hover:text-slate-600 transition-colors">验证码登录</button>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                <i className="far fa-user"></i>
              </div>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="用户名 / 证件号 / 手机号"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm text-slate-700 placeholder:text-slate-300"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                <i className="fas fa-lock text-sm"></i>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入登录密码"
                className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm text-slate-700 placeholder:text-slate-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-300 hover:text-slate-600 transition-colors"
              >
                <i className={`far ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>

            <div className="flex items-center justify-between text-xs px-1">
              <label className="flex items-center cursor-pointer text-slate-500 hover:text-slate-700 select-none">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 border-slate-300 rounded-lg transition" />
                <span className="ml-2">记住登录状态</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline font-medium">找回密码</a>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className={`w-full py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center space-x-2 ${isLoggingIn ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoggingIn ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>立即登录</span>
                  <i className="fas fa-sign-in-alt text-xs opacity-70"></i>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-50 text-center">
             <p className="text-xs text-slate-400">还没有账号？ <a href="#" className="text-blue-500 font-bold hover:underline">立即注册</a></p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 z-10 text-center text-[10px] text-white/50 leading-relaxed font-light tracking-[0.1em]">
        <p>版权所有 © 山东省高等教育学位英语考务中心</p>
        <div className="flex items-center justify-center space-x-3 mt-1 opacity-60">
           <span className="flex items-center"><img src="https://www.beian.gov.cn/portal/downloadFile?token=e16f728c-0972-4d31-9f93-02f9e4e6f491" className="h-3 w-3 mr-1" alt="safe" /> 京公网安备 11010802023942号</span>
           <span>|</span>
           <span>京ICP备08101962号-5</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
