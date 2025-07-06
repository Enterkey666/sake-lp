import React, { useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos', href: '/about' },
  { label: 'Produits', href: '/products' },
  { label: 'Savoir-Faire', href: '/process' },
  { label: 'Visite', href: '/visit' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  useEffect(() => {
    // ヘッダーの高さ分だけbodyにpadding-topを付与
    const header = document.getElementById('main-header');
    if (header) {
      document.body.style.paddingTop = header.offsetHeight + 'px';
    }
    return () => {
      document.body.style.paddingTop = '';
    };
  }, []);

  return (
    <header id="main-header" className="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-br from-amber-100/90 via-white/80 to-amber-200/90 shadow-xl backdrop-blur-lg border-b border-amber-200/40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* ロゴ */}
        <a href="/" className="flex flex-col items-start">
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'Noto Serif JP, serif' }}>Brasserie<br />Miyashita</span>
          <span className="text-xs text-amber-700 tracking-widest mt-1 ml-1">ARTISAN<br />SAKE<br />PREMIUM</span>
        </a>
        {/* ナビゲーション */}
        <nav className="hidden md:flex gap-4 items-center bg-gradient-to-br from-amber-100/80 to-amber-200/80 px-6 py-3 rounded-2xl shadow-lg">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 tracking-wide ${idx === 4 ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg' : 'bg-amber-50/60 text-amber-900 hover:bg-amber-200/80'} ${idx === 0 ? 'ml-2' : ''}`}
              style={{ letterSpacing: '0.05em' }}
            >
              {link.label}
            </a>
          ))}
          <a href="/reserve" className="ml-2 px-6 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-lg hover:scale-105 transition-transform duration-300">Réserver</a>
        </nav>
        {/* モバイルメニュー（省略可: 必要なら後で追加） */}
      </div>
    </header>
  );
};

export default Header; 