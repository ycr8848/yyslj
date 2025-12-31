
import React, { useState } from 'react';

interface PaymentProps {
  amount: number;
  onPaid: () => void;
}

const Payment: React.FC<PaymentProps> = ({ amount, onPaid }) => {
  const [method, setMethod] = useState<'alipay' | 'wechat'>('alipay');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaid();
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-50 text-center">
          <p className="text-gray-500 mb-2">应付金额</p>
          <div className="text-5xl font-bold text-gray-800">
            <span className="text-2xl font-normal mr-1">¥</span>{amount}.00
          </div>
          <p className="text-xs text-gray-400 mt-4">订单号: ORDER_20251230_99218273</p>
        </div>
        
        <div className="p-8">
          <h3 className="text-sm font-medium text-gray-600 mb-6">选择支付方式</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button
              onClick={() => setMethod('alipay')}
              className={`p-4 border rounded-xl flex items-center justify-center space-x-2 transition ${method === 'alipay' ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-100 hover:border-blue-200 text-gray-600'}`}
            >
              <i className="fab fa-alipay text-2xl"></i>
              <span className="font-medium">支付宝支付</span>
            </button>
            <button
              onClick={() => setMethod('wechat')}
              className={`p-4 border rounded-xl flex items-center justify-center space-x-2 transition ${method === 'wechat' ? 'border-green-500 bg-green-50 text-green-600' : 'border-gray-100 hover:border-green-200 text-gray-600'}`}
            >
              <i className="fab fa-weixin text-2xl"></i>
              <span className="font-medium">微信支付</span>
            </button>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-gray-50 rounded-lg border border-gray-100 p-2 relative flex items-center justify-center mb-8">
               {/* Simulated QR Code */}
               <div className="w-full h-full bg-slate-100 border border-slate-200 rounded flex flex-col items-center justify-center">
                  <i className="fas fa-qrcode text-6xl text-gray-300"></i>
                  <span className="text-[10px] text-gray-400 mt-2">点击按钮模拟支付</span>
               </div>
               {isProcessing && (
                 <div className="absolute inset-0 bg-white/90 flex items-center justify-center rounded-lg">
                   <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                 </div>
               )}
            </div>
            
            <button
              onClick={handlePay}
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition ${isProcessing ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]'}`}
            >
              {isProcessing ? '处理中...' : '立即支付'}
            </button>
            <p className="mt-4 text-[10px] text-gray-400">请在15分钟内完成支付，否则订单将失效</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
