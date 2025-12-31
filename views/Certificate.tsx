
import React from 'react';
import { UserData } from '../types';

interface CertificateProps {
  userData: UserData;
  onFinish: () => void;
}

const Certificate: React.FC<CertificateProps> = ({ userData, onFinish }) => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Decorative Certificate */}
      <div className="bg-amber-50 p-12 shadow-2xl rounded border-8 border-double border-amber-200 mb-12 relative overflow-hidden">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
           <div className="flex flex-wrap w-[200%] -ml-[50%] -mt-[50%] rotate-45">
             {Array.from({length: 200}).map((_, i) => (
               <span key={i} className="text-4xl font-serif px-4 py-2">CERTIFICATE</span>
             ))}
           </div>
        </div>

        <div className="relative z-10 border-4 border-amber-300 p-10 flex flex-col items-center">
          <div className="mb-8">
            <i className="fas fa-award text-7xl text-amber-600"></i>
          </div>
          
          <h1 className="text-4xl font-serif font-bold text-amber-900 tracking-widest mb-2">合格证书</h1>
          <p className="text-amber-800 font-medium mb-12">山东省高等学历继续教育学士学位英语考试</p>
          
          <div className="w-full max-w-2xl text-center text-amber-900/80 leading-loose text-lg mb-16">
            <p className="mb-4">
              <span className="font-bold underline px-2">{userData.name}</span> 同学（身份证号：<span className="font-mono text-sm">{userData.idNumber}</span>），
            </p>
            <p>
              于 <span className="font-bold">2025年11月</span> 参加山东省高等学历继续教育学士学位英语考试，成绩合格，特发此证。
            </p>
          </div>
          
          <div className="w-full flex justify-between items-end mt-12">
            <div className="text-left text-sm text-amber-800/60">
              <p>证书编号: DEG-ENG-2025-819203</p>
              <p>发证日期: 2025年12月30日</p>
            </div>
            
            <div className="text-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 w-32 h-32 rounded-full border-4 border-red-500 border-dotted flex items-center justify-center -rotate-12">
                <span className="text-red-500 font-bold text-xs">山东省学位英语管理委员会</span>
              </div>
              <p className="text-amber-900 font-bold relative z-10">山东省高等教育学会</p>
            </div>
          </div>
          
          <div className="mt-20 self-start">
             <div className="w-24 h-32 border border-amber-200 bg-white/50 p-1">
                <img src={userData.photoUrl} alt="Photo" className="w-full h-full object-cover grayscale opacity-80" />
             </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button 
          className="flex-1 py-4 border-2 border-amber-400 text-amber-700 rounded-xl hover:bg-amber-100 transition font-bold flex items-center justify-center"
          onClick={() => window.print()}
        >
          <i className="fas fa-print mr-2"></i>
          立即打印证书
        </button>
        <button 
          onClick={onFinish}
          className="flex-1 py-4 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition shadow-xl shadow-amber-600/20 font-bold"
        >
          确认完成，关闭系统
        </button>
      </div>
    </div>
  );
};

export default Certificate;
