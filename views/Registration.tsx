
import React, { useState } from 'react';
import { RegistrationData } from '../types';

interface RegistrationProps {
  onRegister: (data: RegistrationData) => void;
}

const Registration: React.FC<RegistrationProps> = ({ onRegister }) => {
  const [city, setCity] = useState('济南市');
  const [center, setCenter] = useState('山东大学(中心校区)');
  const [session, setSession] = useState('2025年秋季批次 - 上午场');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onRegister({
        city,
        center,
        session,
        examDate: '2025-11-22'
      });
    }, 800);
  };

  const centersByCity: Record<string, string[]> = {
    '济南市': ['山东大学(中心校区)', '山东师范大学(长清湖校区)', '济南大学(西校区)'],
    '青岛市': ['中国海洋大学(鱼山校区)', '青岛大学(浮山校区)', '山东科技大学(青岛校区)'],
    '淄博市': ['山东理工大学(东校区)'],
    '烟台市': ['烟台大学'],
    '东营市': ['中国石油大学(华东)'],
    '枣庄市': ['枣庄学院']
  };

  const handleCityChange = (c: string) => {
    setCity(c);
    setCenter(centersByCity[c][0]);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Form */}
          <div className="lg:col-span-8 p-8 md:p-12">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800">考位预约</h2>
              <p className="text-slate-400 text-sm mt-1">请选择您方便参加考试的考区和场次</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <section>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                  <h3 className="text-sm font-bold text-slate-700">第一步：选择考区</h3>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {Object.keys(centersByCity).map(c => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => handleCityChange(c)}
                      className={`py-3 rounded-xl text-xs font-bold transition-all border ${city === c ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200' : 'bg-white text-slate-500 border-slate-100 hover:border-blue-300'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                  <h3 className="text-sm font-bold text-slate-700">第二步：选择考点</h3>
                </div>
                <div className="relative group">
                   <select 
                    value={center}
                    onChange={(e) => setCenter(e.target.value)}
                    className="w-full p-4 pl-12 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-slate-700 font-medium"
                  >
                    {centersByCity[city].map(ctr => (
                      <option key={ctr}>{ctr}</option>
                    ))}
                  </select>
                  <i className="fas fa-map-marker-alt absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                  <h3 className="text-sm font-bold text-slate-700">第三步：选择考试场次</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: '1', name: '2025年秋季批次 - 上午场', time: '09:00 - 11:30', slots: '150/200' },
                    { id: '2', name: '2025年秋季批次 - 下午场', time: '14:30 - 17:00', slots: '188/200' },
                  ].map(item => (
                    <div 
                      key={item.id}
                      onClick={() => setSession(item.name)}
                      className={`relative p-5 border-2 rounded-2xl cursor-pointer transition-all group ${session === item.name ? 'border-blue-600 bg-blue-50/50 shadow-inner' : 'border-slate-50 hover:border-slate-200 bg-slate-50/30'}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${session === item.name ? 'bg-blue-600 text-white' : 'bg-white text-slate-300 group-hover:text-blue-400 shadow-sm'}`}>
                          <i className="far fa-clock"></i>
                        </div>
                        {session === item.name && (
                          <div className="bg-blue-600 text-white p-1 rounded-full text-[10px]">
                            <i className="fas fa-check"></i>
                          </div>
                        )}
                      </div>
                      <div className="font-bold text-slate-800 text-sm mb-1">{item.name}</div>
                      <div className="text-[10px] text-slate-400 flex items-center">
                        <i className="far fa-calendar-alt mr-1"></i>
                        2025-11-22 
                        <span className="mx-2">|</span>
                        {item.time}
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                         <span className="text-[10px] text-slate-400 font-medium">剩余名额</span>
                         <span className={`text-xs font-bold ${session === item.name ? 'text-blue-600' : 'text-slate-600'}`}>{item.slots}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="pt-6">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 font-bold flex items-center justify-center space-x-2 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>提交预约并开始在线缴费</span>
                      <i className="fas fa-arrow-right text-sm"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Info Sidebar */}
          <div className="lg:col-span-4 bg-slate-50/50 p-8 md:p-12 border-l border-slate-100">
             <div className="sticky top-24">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6">
                  <h4 className="font-bold text-slate-800 text-sm mb-4">报名政策摘要</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-[10px] flex-shrink-0 mt-0.5">1</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">系统实时保留考位 <b>2小时</b>，超时未缴费将自动释放，需重新申请。</p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-[10px] flex-shrink-0 mt-0.5">2</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">一旦确认考点场次并成功支付，<b>不支持</b> 随意更改，请确认行程。</p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-[10px] flex-shrink-0 mt-0.5">3</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">考试当天需携带准考证及 <b>二代身份证原件</b>，电子证件无效。</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-xl">
                   <div className="flex items-center space-x-2 mb-4 opacity-80">
                     <i className="fas fa-headset text-xs"></i>
                     <span className="text-[10px] font-bold uppercase tracking-wider">技术支持热线</span>
                   </div>
                   <div className="text-xl font-mono font-bold">400-820-1234</div>
                   <p className="text-[10px] opacity-60 mt-2 font-medium">周一至周五 09:00 - 18:00</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
