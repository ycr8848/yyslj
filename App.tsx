
import React, { useState, useEffect } from 'react';
import Login from './views/Login';
import PersonalInfo from './views/PersonalInfo';
import InfoReview from './views/InfoReview';
import Registration from './views/Registration';
import Payment from './views/Payment';
import Ticket from './views/Ticket';
import ExamPlaceholder from './views/ExamPlaceholder';
import ScoreView from './views/ScoreView';
import Certificate from './views/Certificate';
import { WorkflowStep, UserData, RegistrationData } from './types';

const STEPS = [
  { id: WorkflowStep.PERSONAL_INFO, label: '核对信息' },
  { id: WorkflowStep.REGISTRATION, label: '选择考点' },
  { id: WorkflowStep.PAYMENT, label: '在线缴费' },
  { id: WorkflowStep.PRINT_TICKET, label: '准考证' },
  { id: WorkflowStep.VIEW_SCORE, label: '成绩查询' },
  { id: WorkflowStep.PRINT_CERTIFICATE, label: '领取证书' },
];

const App: React.FC = () => {
  // 从 localStorage 加载初始状态，提升本地运行体验
  const [currentStep, setCurrentStep] = useState<WorkflowStep>(() => {
    const saved = localStorage.getItem('sd_exam_step');
    return (saved as WorkflowStep) || WorkflowStep.LOGIN;
  });
  
  const [userData, setUserData] = useState<UserData | null>(() => {
    const saved = localStorage.getItem('sd_user_data');
    return saved ? JSON.parse(saved) : null;
  });

  const [regData, setRegData] = useState<RegistrationData | null>(() => {
    const saved = localStorage.getItem('sd_reg_data');
    return saved ? JSON.parse(saved) : null;
  });

  // 状态变更时自动保存
  useEffect(() => {
    localStorage.setItem('sd_exam_step', currentStep);
  }, [currentStep]);

  useEffect(() => {
    if (userData) localStorage.setItem('sd_user_data', JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    if (regData) localStorage.setItem('sd_reg_data', JSON.stringify(regData));
  }, [regData]);

  const handlePhotoUpdate = (photoUrl: string) => {
    if (userData) {
      const updatedUserData = { ...userData, photoUrl };
      setUserData(updatedUserData);
    }
  };

  const handleLoginSuccess = () => {
    const initialData: UserData = {
      name: '李甜甜',
      idNumber: '370102199805204321',
      phone: '17553085873',
      photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
      school: '山东科技大学',
      major: '计算机科学与技术'
    };
    setUserData(initialData);
    setCurrentStep(WorkflowStep.PERSONAL_INFO);
  };

  const resetSystem = () => {
    localStorage.clear();
    window.location.reload();
  };

  const activeStepIndex = STEPS.findIndex(s => s.id === currentStep);

  const renderContent = () => {
    switch (currentStep) {
      case WorkflowStep.LOGIN:
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case WorkflowStep.PERSONAL_INFO:
        return <PersonalInfo userData={userData!} onConfirm={() => setCurrentStep(WorkflowStep.REGISTRATION)} onReject={() => setCurrentStep(WorkflowStep.INFO_REVIEW)} onPhotoUpdate={handlePhotoUpdate} />;
      case WorkflowStep.INFO_REVIEW:
        return <InfoReview onComplete={() => setCurrentStep(WorkflowStep.PERSONAL_INFO)} />;
      case WorkflowStep.REGISTRATION:
        return <Registration onRegister={(data) => { setRegData(data); setCurrentStep(WorkflowStep.PAYMENT); }} />;
      case WorkflowStep.PAYMENT:
        return <Payment amount={120} onPaid={() => setCurrentStep(WorkflowStep.PRINT_TICKET)} />;
      case WorkflowStep.PRINT_TICKET:
        return <Ticket userData={userData!} regData={regData!} onNext={() => setCurrentStep(WorkflowStep.ATTEND_EXAM)} />;
      case WorkflowStep.ATTEND_EXAM:
        return <ExamPlaceholder onExamFinished={() => setCurrentStep(WorkflowStep.VIEW_SCORE)} />;
      case WorkflowStep.VIEW_SCORE:
        return <ScoreView onPrintCert={() => setCurrentStep(WorkflowStep.PRINT_CERTIFICATE)} />;
      case WorkflowStep.PRINT_CERTIFICATE:
        return <Certificate userData={userData!} onFinish={() => setCurrentStep(WorkflowStep.FINISHED)} />;
      case WorkflowStep.FINISHED:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                <i className="fas fa-check"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">流程圆满结束</h2>
              <p className="text-gray-500 mb-8">恭喜李甜甜同学！您已完成所有环节。证书电子版已发送至您的手机 17553085873。</p>
              <button onClick={resetSystem} className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all font-bold">返回系统首页</button>
            </div>
          </div>
        );
      default:
        return <Login onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {currentStep !== WorkflowStep.LOGIN && currentStep !== WorkflowStep.ATTEND_EXAM && (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                <i className="fas fa-university text-lg"></i>
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800 leading-none">学位英语考务管理系统</h1>
                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">Shandong Academic Degree English System</p>
              </div>
            </div>

            <nav className="flex items-center space-x-2 md:space-x-4">
              {STEPS.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className={`flex items-center space-x-1.5 ${index <= activeStepIndex ? 'text-blue-600' : 'text-slate-300'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 ${index <= activeStepIndex ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-white'}`}>
                      {index + 1}
                    </div>
                    <span className="text-xs font-medium hidden sm:inline">{step.label}</span>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div className={`w-4 md:w-8 h-[2px] ${index < activeStepIndex ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                  )}
                </React.Fragment>
              ))}
            </nav>

            <div className="flex items-center space-x-3 pl-4 border-l border-slate-100">
               <div className="text-right hidden md:block">
                 <p className="text-xs font-bold text-slate-700">李甜甜</p>
                 <p className="text-[10px] text-slate-400">当前时间: 2025-12-30</p>
               </div>
               <img src={userData?.photoUrl} className="w-8 h-8 rounded-full border border-slate-200 object-cover" alt="avatar" />
            </div>
          </div>
        </header>
      )}
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {currentStep !== WorkflowStep.LOGIN && currentStep !== WorkflowStep.ATTEND_EXAM && (
        <footer className="py-8 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs text-slate-400">© 2025 山东省高等教育学位英语考务中心 | 技术支持：教育云平台</p>
            <button 
              onClick={resetSystem} 
              className="mt-4 text-[10px] text-slate-300 hover:text-slate-500 transition-colors uppercase tracking-widest underline underline-offset-4"
            >
              本地开发选项：重置流程状态
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
