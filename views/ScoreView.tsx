
import React from 'react';

interface ScoreViewProps {
  onPrintCert: () => void;
}

const ScoreView: React.FC<ScoreViewProps> = ({ onPrintCert }) => {
  return (
    <div className="max-w-2xl mx-auto py-20 px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
            <i className="fas fa-graduation-cap text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold">考试成绩查询</h2>
          <p className="text-blue-100 mt-2">2025年秋季学士学位英语考试</p>
        </div>
        
        <div className="p-10">
          <div className="flex justify-around items-center mb-12">
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-1">考试状态</div>
              <div className="text-green-500 font-bold flex items-center justify-center">
                <i className="fas fa-check-circle mr-1"></i>
                合格
              </div>
            </div>
            <div className="w-px h-12 bg-gray-100"></div>
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-1">最终得分</div>
              <div className="text-4xl font-bold text-gray-800">86</div>
            </div>
          </div>
          
          <div className="space-y-4 mb-10">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-gray-500">听力部分</span>
              <span className="font-bold text-gray-700">18 / 20</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-gray-500">阅读理解</span>
              <span className="font-bold text-gray-700">35 / 40</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-gray-500">写作与翻译</span>
              <span className="font-bold text-gray-700">33 / 40</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-xl text-blue-800 text-sm mb-10 text-center font-medium">
             恭喜您！您的成绩已达到合格标准，可以打印学位英语合格证书。
          </div>
          
          <button 
            onClick={onPrintCert}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition"
          >
            前往打印合格证书
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreView;
