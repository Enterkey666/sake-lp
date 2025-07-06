import React, { useState } from 'react';

const initialForm = { name: '', email: '', message: '' };

const Footer = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'お名前は必須です';
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = '有効なメールアドレスを入力してください';
    if (!form.message) errs.message = 'お問い合わせ内容は必須です';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-black to-amber-900 text-white py-20 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* メインコンテンツ */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* ブランド情報 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍶</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Serif JP, serif' }}>
                  宮下酒造
                </h3>
                <p className="text-xs text-amber-300 uppercase tracking-wider">Miyashita Sake Brewery</p>
              </div>
            </div>
            <p className="text-amber-100 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              1875年創業、伝統と革新の酒造り。<br />
              <span className="text-amber-200">Crafting premium sake with passion and precision.</span>
            </p>
            <div className="flex space-x-4">
              {[
                { icon: '📘', label: 'Facebook' },
                { icon: '📷', label: 'Instagram' },
                { icon: '🐦', label: 'Twitter' },
                { icon: '📺', label: 'YouTube' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="group w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center border border-amber-400/30 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 豪華なお問い合わせフォーム */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-amber-100 mb-6" style={{ fontFamily: 'Noto Serif JP, serif' }}>
              お問い合わせ
            </h4>
            <form className="space-y-6 bg-gradient-to-br from-amber-100/10 to-amber-400/10 p-8 rounded-3xl shadow-2xl border border-amber-400/20 backdrop-blur-md relative" onSubmit={handleSubmit}>
              {/* フィードバック */}
              {status === 'success' && <div className="absolute top-0 left-0 w-full text-center py-2 bg-amber-500/90 text-white font-bold rounded-t-3xl animate-fade-in">送信が完了しました！</div>}
              {status === 'error' && <div className="absolute top-0 left-0 w-full text-center py-2 bg-red-500/90 text-white font-bold rounded-t-3xl animate-fade-in">送信に失敗しました</div>}
              {/* お名前 */}
              <div className="relative">
                <label className="absolute left-4 top-2 text-amber-600 text-sm pointer-events-none transition-all duration-200 transform -translate-y-1/2 bg-gradient-to-r from-amber-100/80 to-white/80 px-2 rounded-full flex items-center gap-2">
                  <span>👤</span> お名前
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 pt-8 pb-3 rounded-xl bg-white/20 border border-amber-400/30 focus:outline-none focus:border-amber-400 focus:bg-white/40 text-amber-900 placeholder-amber-300 transition-all duration-300 font-bold ${errors.name ? 'border-red-400' : ''}`}
                  placeholder=" "
                  autoComplete="off"
                />
                {errors.name && <div className="text-red-400 text-xs mt-1 ml-2">{errors.name}</div>}
              </div>
              {/* メール */}
              <div className="relative">
                <label className="absolute left-4 top-2 text-amber-600 text-sm pointer-events-none transition-all duration-200 transform -translate-y-1/2 bg-gradient-to-r from-amber-100/80 to-white/80 px-2 rounded-full flex items-center gap-2">
                  <span>✉️</span> メールアドレス
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 pt-8 pb-3 rounded-xl bg-white/20 border border-amber-400/30 focus:outline-none focus:border-amber-400 focus:bg-white/40 text-amber-900 placeholder-amber-300 transition-all duration-300 font-bold ${errors.email ? 'border-red-400' : ''}`}
                  placeholder=" "
                  autoComplete="off"
                />
                {errors.email && <div className="text-red-400 text-xs mt-1 ml-2">{errors.email}</div>}
              </div>
              {/* メッセージ */}
              <div className="relative">
                <label className="absolute left-4 top-2 text-amber-600 text-sm pointer-events-none transition-all duration-200 transform -translate-y-1/2 bg-gradient-to-r from-amber-100/80 to-white/80 px-2 rounded-full flex items-center gap-2">
                  <span>📝</span> お問い合わせ内容
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 pt-8 pb-3 rounded-xl bg-white/20 border border-amber-400/30 focus:outline-none focus:border-amber-400 focus:bg-white/40 text-amber-900 placeholder-amber-300 transition-all duration-300 font-bold resize-none ${errors.message ? 'border-red-400' : ''}`}
                  placeholder=" "
                  rows={4}
                />
                {errors.message && <div className="text-red-400 text-xs mt-1 ml-2">{errors.message}</div>}
              </div>
              {/* CTAボタン */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`group relative w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-2xl font-bold shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105 text-lg tracking-wider ${status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2"><span className="animate-spin">⏳</span> 送信中...</span>
                ) : (
                  <span className="flex items-center justify-center gap-2"><span>📨</span> 送信する</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>

          {/* アクセス情報 */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-amber-100 mb-6" style={{ fontFamily: 'Noto Serif JP, serif' }}>
              アクセス
            </h4>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden h-48 shadow-xl border border-amber-400/30">
                <img 
                  src="/assets/images/brewery-map.jpg" 
                  alt="宮下酒造 地図" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-amber-400/20">
              <p className="text-sm text-amber-100 font-medium">📍 新潟県新潟市123 Sake Street</p>
              <p className="text-xs text-amber-200/70 mt-1">〒950-0000</p>
            </div>
          </div>

          {/* 連絡先 */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-amber-100 mb-6" style={{ fontFamily: 'Noto Serif JP, serif' }}>
              連絡先
            </h4>
            <div className="space-y-4">
              {[
                { icon: '📞', label: '025-123-4567', desc: 'Phone' },
                { icon: '✉️', label: 'info@miyashita-sake.jp', desc: 'Email' },
                { icon: '🕒', label: '水〜日 9:00-17:00', desc: 'Hours' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-amber-400/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center border border-amber-400/30">
                    <span className="text-lg">{contact.icon}</span>
                  </div>
                  <div>
                    <p className="text-amber-100 font-medium">{contact.label}</p>
                    <p className="text-xs text-amber-200/70">{contact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ボトムセクション */}
        <div className="border-t border-amber-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-200/70 text-sm">
              © 2025 Miyashita Sake Brewery. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[
                'プライバシーポリシー',
                '利用規約', 
                '配送情報'
              ].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-amber-200/70 hover:text-amber-300 transition-colors duration-300 text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 