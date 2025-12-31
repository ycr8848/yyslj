
import React from 'react';
import { UserData } from '../types';
import ImageUpload from '../components/ImageUpload';

interface PersonalInfoProps {
  userData: UserData;
  onConfirm: () => void;
  onReject: () => void;
  onPhotoUpdate: (photoUrl: string) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ userData, onConfirm, onReject, onPhotoUpdate }) => {
  const handlePhotoUpdate = (photoUrl: string) => {
    onPhotoUpdate(photoUrl);
  };
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="bg-blue-600 px-10 py-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold tracking-tight">核心学籍信息核对</h2>
            <p className="text-blue-100 text-xs mt-1">请确保以下信息与您的学信网信息完全一致</p>
          </div>
          <div className="hidden sm:block text-right">
            <span className="text-xs bg-white/20 px-3 py-1.5 rounded-full font-bold">身份识别：{userData.name.charAt(0)}*</span>
          </div>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="relative group">
                <div className="w-44 h-56 bg-slate-50 border-4 border-slate-50 rounded-2xl overflow-hidden shadow-inner group-hover:shadow-lg transition-all duration-300">
                  <ImageUpload 
                    onImageUpload={handlePhotoUpdate}
                    currentImage={userData.photoUrl}
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold shadow-lg border-2 border-white whitespace-nowrap">
                  已通过人脸比对
                </div>
              </div>
              <p className="text-center text-[11px] text-slate-400 mt-6 font-medium max-w-[120px]">照片必须为考生本人近三个月内免冠彩色证件照</p>
            </div>
            
            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                {[
                  { label: '姓名', value: userData.name, icon: 'fa-user' },
                  { label: '证件号码', value: userData.idNumber, icon: 'fa-id-card' },
                  { label: '手机号码', value: userData.phone, icon: 'fa-mobile-alt' },
                  { label: '毕业院校', value: userData.school, icon: 'fa-university' },
                  { label: '所学专业', value: userData.major, icon: 'fa-book' },
                  { label: '报考科目', value: '学士学位英语', icon: 'fa-pen-fancy' },
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center space-x-2 mb-2">
                      <i className={`fas ${item.icon} text-slate-300 group-hover:text-blue-500 transition-colors text-xs`}></i>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
                    </div>
                    <div className="text-lg font-bold text-slate-700 bg-slate-50/50 p-3 rounded-xl border border-transparent group-hover:border-blue-100 transition-all">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-start space-x-4">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-800">重要法律责任声明</h4>
              <p className="text-[11px] text-amber-700/80 mt-1 leading-relaxed">
                点击确认即代表您承诺以上信息真实有效。如因信息不实导致无法注册学籍、参加考试或无法申请学位，后果由考生本人承担。
                恶意串改他人信息将追究其法律责任。
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onReject}
              className="flex-1 py-4 border-2 border-slate-100 text-slate-400 rounded-2xl hover:bg-slate-50 hover:text-red-500 hover:border-red-100 transition-all font-bold text-sm"
            >
              信息不实，我要纠错
            </button>
            <button 
              onClick={onConfirm}
              className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 font-bold text-sm flex items-center justify-center space-x-2"
            >
              <span>我已核对，信息准确无误</span>
              <i className="fas fa-check-double text-xs opacity-70"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
