
import React from 'react';
import { UserData, RegistrationData } from '../types';

interface TicketProps {
  userData: UserData;
  regData: RegistrationData;
  onNext: () => void;
}

const Ticket: React.FC<TicketProps> = ({ userData, regData, onNext }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white p-10 shadow-2xl rounded-lg border border-gray-200 mb-8 relative">
        <div className="text-center mb-10 border-b-2 border-double border-gray-100 pb-8">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wider">准 考 证</h1>
          <p className="text-gray-500 mt-2">山东省高等学历继续教育学士学位英语考试</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="w-32 h-44 bg-gray-50 border border-gray-200 p-1 mb-4">
              <img src={userData.photoUrl} alt="Photo" className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 uppercase">QR Code</p>
              <i className="fas fa-qrcode text-5xl text-gray-800 mt-2"></i>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-y-6 text-sm">
            <div>
              <p className="text-gray-400 mb-1">准考证号</p>
              <p className="text-lg font-bold font-mono">20251122000842</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">姓名</p>
              <p className="text-lg font-bold">{userData.name}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">证件号码</p>
              <p className="font-medium">{userData.idNumber}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">考试科目</p>
              <p className="font-medium">学士学位英语</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-400 mb-1">考点名称</p>
              <p className="font-medium">{regData.center}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">考场号/座位号</p>
              <p className="font-medium">第08考场 / 22座</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">考试时间</p>
              <p className="font-bold text-blue-600">{regData.examDate} {regData.session.split('-')[1].trim()}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded border border-dashed border-gray-300">
          <h3 className="font-bold text-sm mb-3">考生须知：</h3>
          <ul className="text-xs text-gray-500 space-y-2 list-decimal list-inside">
            <li>考生须持本准考证和有效二代身份证件入场。</li>
            <li>开考前30分钟进入考场，开考15分钟后不得入场。</li>
            <li>严禁携带任何通讯工具、电子产品及作弊器材进入考位。</li>
            <li>本准考证一式两份，请妥善保管。</li>
          </ul>
        </div>
        
        <div className="absolute top-10 right-10 opacity-10 -rotate-12 pointer-events-none">
          <div className="w-32 h-32 rounded-full border-4 border-red-600 flex items-center justify-center">
            <span className="text-red-600 font-bold text-xl uppercase">Official Seal</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button 
          className="flex-1 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition font-medium flex items-center justify-center"
          onClick={() => window.print()}
        >
          <i className="fas fa-print mr-2"></i>
          打印准考证
        </button>
        <button 
          onClick={onNext}
          className="flex-[2] py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 font-medium"
        >
          确认打印完成并继续
        </button>
      </div>
    </div>
  );
};

export default Ticket;
