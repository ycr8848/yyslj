
import React, { useState, useEffect } from 'react';

interface ExamPlaceholderProps {
  onExamFinished: () => void;
}

const ExamPlaceholder: React.FC<ExamPlaceholderProps> = ({ onExamFinished }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Small delay before transition
      const timer = setTimeout(onExamFinished, 500);
      return () => clearTimeout(timer);
    }
  }, [countdown, onExamFinished]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-md w-full text-center">
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/50">
          <i className="fas fa-pencil-alt text-4xl"></i>
        </div>
        <h2 className="text-3xl font-bold mb-4">考试进行中</h2>
        <p className="text-slate-400 mb-12">您正在参加 2025年秋季学士学位英语考试，请在规定时间内完成答题并提交。</p>
        
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 mb-8">
           <div className="text-sm text-slate-500 mb-2">距离考试结束还有</div>
           <div className="text-5xl font-mono font-bold text-blue-400 tracking-tighter">
             01:54:{countdown < 10 ? `0${countdown}` : countdown}
           </div>
        </div>
        
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={`w-2 h-2 rounded-full ${countdown === i ? 'bg-blue-500 animate-pulse' : 'bg-slate-700'}`}></div>
          ))}
        </div>
        
        <div className="mt-12 text-slate-500 text-xs">
           模拟考试环境：系统正在监控您的答题进度...
        </div>
      </div>
    </div>
  );
};

export default ExamPlaceholder;
