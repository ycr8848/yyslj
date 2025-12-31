
import React, { useState } from 'react';

interface InfoReviewProps {
  onComplete: () => void;
}

const InfoReview: React.FC<InfoReviewProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleApply = () => {
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto mt-20 p-12 bg-white rounded-xl shadow-lg text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          <i className="fas fa-check"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">复核申请已提交</h2>
        <p className="text-gray-500 mb-8">管理员将在24小时内处理您的信息复核请求。复核完成后系统将为您自动跳转。</p>
        <button 
          onClick={onComplete}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          返回核对个人信息
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-red-50 px-8 py-4 border-b border-red-100">
          <h2 className="text-lg font-bold text-red-700">信息复核申请</h2>
        </div>
        
        <div className="p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">纠错项</label>
              <select className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition">
                <option>姓名错误</option>
                <option>证件号码有误</option>
                <option>所属学校不符</option>
                <option>专业信息不符</option>
                <option>照片不符</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">补充说明</label>
              <textarea 
                rows={4}
                placeholder="请详细说明信息错误情况..."
                className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">上传凭证 (如身份证扫描件、学信网截图)</label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer">
                <i className="fas fa-cloud-upload-alt text-gray-300 text-3xl mb-2"></i>
                <span className="text-sm text-gray-500">点击或拖拽文件上传</span>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex gap-4">
            <button 
              onClick={onComplete}
              className="px-6 py-3 text-gray-500 hover:text-gray-800 transition"
            >
              取消并返回
            </button>
            <button 
              onClick={handleApply}
              disabled={loading}
              className={`flex-grow py-3 bg-blue-600 text-white rounded-md shadow-lg shadow-blue-600/20 font-medium transition ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            >
              {loading ? '提交中...' : '提交复核申请'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoReview;
