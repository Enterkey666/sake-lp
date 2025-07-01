import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Noto Serif JP, serif' }}>
              宮下酒造
            </h3>
            <p className="mb-6">
              1875年創業、伝統と革新の酒造り。<br />
              Crafting premium sake with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-sake-gold transition-colors cursor-pointer"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-sake-gold transition-colors cursor-pointer"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-sake-gold transition-colors cursor-pointer"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-sake-gold transition-colors cursor-pointer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">お問い合わせ</h4>
            <form className="space-y-4">
              <input type="text" placeholder="お名前" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-sake-gold text-white" />
              <input type="email" placeholder="メールアドレス" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-sake-gold text-white" />
              <textarea placeholder="お問い合わせ内容" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-sake-gold text-white" rows={3}></textarea>
              <button type="submit" className="bg-sake-gold text-white px-5 py-2 rounded hover:bg-[#C4A876] transition-colors w-full">送信</button>
            </form>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">アクセス</h4>
            <div className="rounded-lg overflow-hidden h-40 shadow-lg mb-4">
              <img src="/assets/images/brewery-map.jpg" alt="宮下酒造 地図" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="text-sm text-gray-400">新潟県新潟市123 Sake Street</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">連絡先</h4>
            <ul className="space-y-3 text-sm">
              <li><i className="fas fa-phone-alt mr-2 text-sake-gold"></i>025-123-4567</li>
              <li><i className="fas fa-envelope mr-2 text-sake-gold"></i>info@miyashita-sake.jp</li>
              <li><i className="fas fa-clock mr-2 text-sake-gold"></i>水〜日 9:00-17:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Miyashita Sake Brewery. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">利用規約</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">配送情報</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 