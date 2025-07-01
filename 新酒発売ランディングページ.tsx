// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from 'react';
const App: React.FC = () => {
const [isScrolled, setIsScrolled] = useState(false);
const [activeTab, setActiveTab] = useState('home');
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [daysLeft, setDaysLeft] = useState(14);
const [showNotification, setShowNotification] = useState(false);
const [notificationMessage, setNotificationMessage] = useState('');
const [scrollY, setScrollY] = useState(0);
const heroRef = useRef<HTMLDivElement>(null);
useEffect(() => {
const handleScroll = () => {
setScrollY(window.scrollY);
// Add animation classes to elements when they come into view
const elements = document.querySelectorAll('.animate-on-scroll');
elements.forEach(element => {
const rect = element.getBoundingClientRect();
const isVisible = rect.top <= window.innerHeight * 0.75;
if (isVisible) {
element.classList.add('animate-fade-in');
}
});
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
const handleButtonClick = (action: string) => {
setNotificationMessage(`Thank you for your interest! ${action} feature is coming soon.`);
setShowNotification(true);
setTimeout(() => {
setShowNotification(false);
}, 3000);
};
useEffect(() => {
const handleScroll = () => {
if (window.scrollY > 50) {
setIsScrolled(true);
} else {
setIsScrolled(false);
}
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
return (
<div className="min-h-screen bg-white text-black">
{/* Header */}
<header
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
isScrolled ? 'bg-white/90 shadow-md py-2' : 'bg-transparent py-4'
}`}
>
<div className="container mx-auto px-6 flex justify-between items-center">
<div className="flex items-center">
<h1 className="text-3xl font-bold" style={{ fontFamily: '"Noto Serif JP", serif' }}>
宮下酒造
</h1>
<span className="ml-3 text-sm uppercase tracking-widest">Miyashita Brewery</span>
</div>
{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8">
{['Home', 'About', 'Products', 'Process', 'Visit', 'Contact'].map((item) => (
<a
key={item}
href={`#${item.toLowerCase()}`}
className={`text-sm uppercase tracking-wider hover:text-[#A22041] transition-colors cursor-pointer whitespace-nowrap ${
activeTab === item.toLowerCase() ? 'text-[#A22041]' : ''
}`}
onClick={() => setActiveTab(item.toLowerCase())}
>
{item}
</a>
))}
<button className="bg-[#D4B886] text-white px-5 py-2 rounded-button hover:bg-[#C4A876] transition-colors cursor-pointer whitespace-nowrap">
Reserve Now
</button>
</nav>
{/* Mobile Menu Button */}
<button
className="md:hidden text-2xl cursor-pointer"
onClick={() => setIsMenuOpen(!isMenuOpen)}
>
<i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
</button>
</div>
{/* Mobile Navigation */}
{isMenuOpen && (
<div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
<div className="container mx-auto px-6 flex flex-col space-y-4">
{['Home', 'About', 'Products', 'Process', 'Visit', 'Contact'].map((item) => (
<a
key={item}
href={`#${item.toLowerCase()}`}
className={`text-sm uppercase tracking-wider hover:text-[#A22041] transition-colors cursor-pointer ${
activeTab === item.toLowerCase() ? 'text-[#A22041]' : ''
}`}
onClick={() => {
setActiveTab(item.toLowerCase());
setIsMenuOpen(false);
}}
>
{item}
</a>
))}
<button className="bg-[#D4B886] text-white px-5 py-2 rounded-button hover:bg-[#C4A876] transition-colors cursor-pointer whitespace-nowrap self-start">
Reserve Now
</button>
</div>
</div>
)}
</header>
{/* Hero Section */}
<section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500"
style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=An%20elegant%20Parisian%20setting%20with%20Art%20Nouveau%20elements%20featuring%20a%20premium%20sake%20bottle%20displayed%20on%20a%20luxurious%20marble%20table.%20Soft%20evening%20lights%20from%20ornate%20French%20windows%20cast%20golden%20reflections%20on%20the%20bottle.%20The%20scene%20combines%20French%20sophistication%20with%20Japanese%20minimalism%2C%20creating%20a%20harmonious%20blend%20of%20cultures.%20The%20composition%20emphasizes%20luxury%20and%20refinement%20with%20subtle%20gold%20and%20deep%20blue%20accents&width=1920&height=1080&seq=1&orientation=landscape')`,
transform: `translateY(${scrollY * 0.5}px)`,
}}
></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10">
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent opacity-75"></div>
<div className="absolute inset-0 bg-[#D4B886]/10"></div>
</div>
<div className="container mx-auto px-6 relative z-20">
<div className="max-w-2xl text-white animate-on-scroll opacity-0">
<h2
className="text-5xl md:text-7xl font-bold mb-4 transform hover:scale-105 transition-transform duration-300"
style={{ fontFamily: '"Noto Serif JP", serif' }}
>
純米大吟醸
</h2>
<h3 className="text-3xl md:text-4xl font-light mb-6 tracking-wider" style={{ fontFamily: 'Didot, serif' }}>
L'ART DU JUNMAI DAIGINJO
</h3>
<p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
Une fusion exquise entre tradition japonaise et raffinement français. Découvrez l'harmonie parfaite entre les techniques ancestrales de brassage et l'élégance contemporaine dans chaque goutte.
</p>
<p className="text-base md:text-lg mb-8 italic text-gray-200">
"Where Japanese craftsmanship meets French sophistication"
</p>
<div className="flex flex-wrap gap-4">
<button
onClick={() => handleButtonClick('Reservation')}
className="bg-[#D4B886] text-white px-8 py-3 rounded-button hover:bg-[#C4A876] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer whitespace-nowrap"
style={{ fontFamily: 'Cormorant Garamond, serif' }}
>
Réserver Maintenant
</button>
<button 
className="border-2 border-white text-white px-8 py-3 rounded-button hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer whitespace-nowrap"
style={{ fontFamily: 'Cormorant Garamond, serif' }}
>
En Savoir Plus
</button>
</div>
<div className="mt-8 flex items-center gap-6">
<div className="flex items-center">
<i className="fas fa-star text-[#D4B886] mr-2"></i>
<span className="text-sm">Guide Michelin Recommandé</span>
</div>
<div className="flex items-center">
<i className="fas fa-award text-[#D4B886] mr-2"></i>
<span className="text-sm">Médaille d'Or Paris 2024</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
<i className="fas fa-chevron-down text-white text-2xl"></i>
</div>
</section>
{/* Product Concept Section */}
<section className="py-20 bg-white">
<style>
{`
@keyframes fadeIn {
from {
opacity: 0;
transform: translateY(20px);
}
to {
opacity: 1;
transform: translateY(0);
}
}
.animate-fade-in {
animation: fadeIn 1s ease-out forwards;
}
.animate-on-scroll {
opacity: 0;
transform: translateY(20px);
transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-on-scroll.animate-fade-in {
opacity: 1;
transform: translateY(0);
}
.hover-float {
transition: transform 0.3s ease;
}
.hover-float:hover {
transform: translateY(-5px);
}
`}
</style>
<div className="container mx-auto px-6">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Product Concept</h2>
<div className="w-24 h-1 bg-[#D4B886] mx-auto"></div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif JP", serif' }}>
The Essence of Tradition
</h3>
<p className="mb-6 leading-relaxed">
Our Junmai Daiginjo represents the pinnacle of sake craftsmanship, made with the finest Yamada Nishiki rice polished to 40%, pristine mountain water, and the expertise of master brewers spanning five generations.
</p>
<p className="mb-6 leading-relaxed">
Each bottle embodies the perfect balance between traditional brewing methods and innovative techniques that have evolved over our 150-year history.
</p>
<div className="grid grid-cols-2 gap-6 mt-8">
<div className="text-center">
<div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
<div className="bg-[#D4B886] h-full rounded-full" style={{ width: '30%' }}></div>
</div>
<p className="mt-2 text-sm">Sweetness</p>
</div>
<div className="text-center">
<div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
<div className="bg-[#D4B886] h-full rounded-full" style={{ width: '80%' }}></div>
</div>
<p className="mt-2 text-sm">Aroma</p>
</div>
<div className="text-center">
<div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
<div className="bg-[#D4B886] h-full rounded-full" style={{ width: '60%' }}></div>
</div>
<p className="mt-2 text-sm">Acidity</p>
</div>
<div className="text-center">
<div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
<div className="bg-[#D4B886] h-full rounded-full" style={{ width: '70%' }}></div>
</div>
<p className="mt-2 text-sm">Body</p>
</div>
</div>
</div>
<div className="relative">
<img
src="https://readdy.ai/api/search-image?query=An%20elegant%2C%20minimalist%20product%20shot%20of%20a%20premium%20sake%20bottle%20with%20beautiful%20Japanese%20typography%20on%20its%20label.%20The%20bottle%20has%20a%20sleek%20design%20with%20subtle%20gold%20accents%20against%20a%20clean%20white%20background%20with%20soft%20shadows.%20The%20sake%20appears%20crystal%20clear%20with%20a%20slight%20golden%20hue%2C%20conveying%20premium%20quality%20and%20craftsmanship&width=800&height=1000&seq=2&orientation=portrait"
alt="Miyashita Junmai Daiginjo Sake Bottle"
className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
/>
<div className="absolute -bottom-8 -right-8 bg-[#D4B886] text-white p-4 rounded-lg shadow-lg">
<p className="text-sm font-bold">Serving Temperature</p>
<p className="text-xs">Best enjoyed chilled (10-15°C)</p>
</div>
</div>
</div>
</div>
</section>
{/* Tasting Notes Section */}
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Tasting Notes</h2>
<div className="w-24 h-1 bg-[#D4B886] mx-auto"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
<div className="text-[#D4B886] text-4xl mb-4">
<i className="fas fa-eye"></i>
</div>
<h3 className="text-xl font-bold mb-3">Appearance</h3>
<p className="text-gray-700">
Crystal clear with a subtle golden hue that catches the light beautifully, revealing its premium quality and meticulous filtration process.
</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
<div className="text-[#D4B886] text-4xl mb-4">
<i className="fas fa-nose"></i>
</div>
<h3 className="text-xl font-bold mb-3">Aroma</h3>
<p className="text-gray-700">
Delicate notes of ripe pear, white peach, and jasmine flowers, with hints of sweet rice and a subtle minerality that invites you to explore further.
</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
<div className="text-[#D4B886] text-4xl mb-4">
<i className="fas fa-utensils"></i>
</div>
<h3 className="text-xl font-bold mb-3">Palate</h3>
<p className="text-gray-700">
Silky smooth with a perfect balance of gentle sweetness and crisp acidity. The flavor evolves from fresh fruit to a clean, dry finish with remarkable length.
</p>
</div>
</div>
<div className="mt-16 text-center">
<h3 className="text-2xl font-bold mb-6">Perfect Pairings</h3>
<div className="grid md:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-lg shadow-md">
<img
src="https://readdy.ai/api/search-image?query=A%20beautifully%20plated%20sashimi%20assortment%20featuring%20fresh%20slices%20of%20tuna%2C%20salmon%2C%20and%20white%20fish%20arranged%20artistically%20on%20a%20minimalist%20ceramic%20plate%20with%20garnishes.%20The%20lighting%20is%20soft%20and%20natural%2C%20highlighting%20the%20vibrant%20colors%20and%20textures%20of%20the%20raw%20fish%20against%20a%20simple%2C%20elegant%20background&width=400&height=400&seq=3&orientation=squarish"
alt="Sashimi Platter"
className="w-full h-48 object-cover rounded-lg mb-4"
/>
<h4 className="font-bold mb-2">Sashimi</h4>
<p className="text-sm text-gray-700">
The clean flavor profile complements the delicate taste of fresh fish.
</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
<img
src="https://readdy.ai/api/search-image?query=An%20elegant%20presentation%20of%20tempura%20featuring%20lightly%20battered%20and%20perfectly%20fried%20vegetables%20and%20shrimp%20with%20a%20golden%20crisp%20exterior.%20The%20tempura%20is%20arranged%20on%20a%20beautiful%20Japanese%20ceramic%20plate%20with%20a%20small%20dish%20of%20dipping%20sauce.%20The%20image%20has%20soft%20natural%20lighting%20that%20highlights%20the%20crispy%20texture%20against%20a%20minimalist%20background&width=400&height=400&seq=4&orientation=squarish"
alt="Tempura"
className="w-full h-48 object-cover rounded-lg mb-4"
/>
<h4 className="font-bold mb-2">Tempura</h4>
<p className="text-sm text-gray-700">
The sake's acidity cuts through the light batter for a refreshing contrast.
</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
<img
src="https://readdy.ai/api/search-image?query=A%20sophisticated%20presentation%20of%20grilled%20unagi%20%28eel%29%20glazed%20with%20a%20shiny%20tare%20sauce%2C%20served%20on%20a%20bed%20of%20perfectly%20steamed%20white%20rice.%20The%20dish%20is%20presented%20on%20an%20elegant%20black%20ceramic%20plate%20with%20a%20small%20side%20of%20pickled%20vegetables.%20The%20lighting%20is%20soft%20and%20directional%2C%20highlighting%20the%20glossy%20glaze%20on%20the%20eel%20against%20a%20clean%2C%20minimal%20background&width=400&height=400&seq=5&orientation=squarish"
alt="Grilled Unagi"
className="w-full h-48 object-cover rounded-lg mb-4"
/>
<h4 className="font-bold mb-2">Grilled Unagi</h4>
<p className="text-sm text-gray-700">
The sweetness of the sake balances the rich, savory flavors of eel.
</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
<img
src="https://readdy.ai/api/search-image?query=An%20artfully%20arranged%20plate%20of%20soft%2C%20creamy%20cheeses%20including%20brie%2C%20camembert%2C%20and%20blue%20cheese%20with%20accompaniments%20like%20honey%2C%20nuts%2C%20and%20fresh%20fruits.%20The%20cheeses%20are%20presented%20on%20a%20natural%20wooden%20board%20with%20small%20cheese%20knives.%20The%20lighting%20is%20warm%20and%20inviting%2C%20highlighting%20the%20different%20textures%20of%20the%20cheeses%20against%20a%20simple%2C%20elegant%20background&width=400&height=400&seq=6&orientation=squarish"
alt="Cheese Platter"
className="w-full h-48 object-cover rounded-lg mb-4"
/>
<h4 className="font-bold mb-2">Soft Cheeses</h4>
<p className="text-sm text-gray-700">
A surprising but delightful pairing with creamy, mild cheeses.
</p>
</div>
</div>
</div>
</div>
</section>
{/* Brewing Process Section */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">The Art of Brewing</h2>
<div className="w-24 h-1 bg-[#D4B886] mx-auto mb-6"></div>
<p className="max-w-3xl mx-auto text-gray-700">
Our brewing process combines time-honored traditions with modern precision, resulting in sake of exceptional quality and character.
</p>
</div>
<div className="relative">
{/* Timeline Line */}
<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4B886] hidden md:block"></div>
{/* Timeline Items */}
<div className="space-y-24 relative">
{/* Step 1 */}
<div className="md:flex items-center">
<div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
<h3 className="text-2xl font-bold mb-4">Rice Polishing</h3>
<p className="text-gray-700">
We begin by polishing premium Yamada Nishiki rice to remove the outer layers, leaving only the pure starch core. For our Junmai Daiginjo, we polish to an exceptional 40% ratio.
</p>
</div>
<div className="md:w-1/2 md:pl-12 relative">
<div className="hidden md:block absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#D4B886] border-4 border-white z-10"></div>
<img
src="https://readdy.ai/api/search-image?query=Close-up%20of%20Japanese%20sake%20rice%20being%20polished%20in%20a%20traditional%20rice%20polishing%20machine.%20The%20white%20rice%20grains%20are%20visible%20against%20the%20polishing%20mechanism%20with%20some%20fine%20rice%20dust%20in%20the%20air.%20The%20image%20has%20a%20clean%2C%20technical%20quality%20with%20soft%2C%20natural%20lighting%20highlighting%20the%20texture%20of%20the%20rice%20grains%20against%20a%20simple%20background&width=600&height=400&seq=7&orientation=landscape"
alt="Rice Polishing Process"
className="w-full h-auto rounded-lg shadow-lg"
/>
</div>
</div>
{/* Step 2 */}
<div className="md:flex items-center flex-row-reverse">
<div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
<h3 className="text-2xl font-bold mb-4">Koji Making</h3>
<p className="text-gray-700">
Our master koji makers cultivate koji mold on the rice in our cedar-lined koji rooms, maintaining precise temperature and humidity levels through constant monitoring.
</p>
</div>
<div className="md:w-1/2 md:pr-12 relative">
<div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#D4B886] border-4 border-white z-10"></div>
<img
src="https://readdy.ai/api/search-image?query=A%20traditional%20Japanese%20koji%20making%20room%20with%20cedar%20walls%20where%20rice%20is%20being%20spread%20on%20wooden%20trays.%20A%20master%20brewer%20in%20traditional%20clothing%20is%20carefully%20monitoring%20the%20process.%20The%20lighting%20is%20warm%20and%20atmospheric%2C%20highlighting%20the%20traditional%20craftsmanship%20and%20the%20texture%20of%20the%20koji-covered%20rice%20against%20the%20wooden%20environment&width=600&height=400&seq=8&orientation=landscape"
alt="Koji Making Process"
className="w-full h-auto rounded-lg shadow-lg"
/>
</div>
</div>
{/* Step 3 */}
<div className="md:flex items-center">
<div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
<h3 className="text-2xl font-bold mb-4">Fermentation</h3>
<p className="text-gray-700">
The slow, cold fermentation process takes place in small batches over 30-45 days, allowing complex flavors to develop while our brewers monitor every subtle change.
</p>
</div>
<div className="md:w-1/2 md:pl-12 relative">
<div className="hidden md:block absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#D4B886] border-4 border-white z-10"></div>
<img
src="https://readdy.ai/api/search-image?query=A%20traditional%20Japanese%20sake%20brewery%20fermentation%20room%20with%20large%20wooden%20vats%20where%20sake%20is%20fermenting.%20A%20master%20brewer%20is%20checking%20the%20fermentation%20process%20with%20traditional%20tools.%20The%20room%20has%20a%20cool%2C%20misty%20atmosphere%20with%20soft%2C%20diffused%20lighting%20highlighting%20the%20wooden%20fermentation%20tanks%20against%20the%20traditional%20brewery%20environment&width=600&height=400&seq=9&orientation=landscape"
alt="Fermentation Process"
className="w-full h-auto rounded-lg shadow-lg"
/>
</div>
</div>
{/* Step 4 */}
<div className="md:flex items-center flex-row-reverse">
<div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
<h3 className="text-2xl font-bold mb-4">Pressing & Filtration</h3>
<p className="text-gray-700">
We gently press the fermented mash and filter it with precision to achieve remarkable clarity while preserving the delicate flavors and aromas developed during fermentation.
</p>
</div>
<div className="md:w-1/2 md:pr-12 relative">
<div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#D4B886] border-4 border-white z-10"></div>
<img
src="https://readdy.ai/api/search-image?query=A%20sake%20pressing%20and%20filtration%20process%20in%20a%20traditional%20Japanese%20brewery.%20The%20image%20shows%20both%20traditional%20wooden%20pressing%20equipment%20and%20modern%20filtration%20systems%20with%20clear%20sake%20flowing%20through.%20The%20lighting%20is%20clean%20and%20bright%2C%20highlighting%20the%20clarity%20of%20the%20sake%20as%20its%20being%20processed%20against%20the%20brewery%20environment&width=600&height=400&seq=10&orientation=landscape"
alt="Pressing and Filtration Process"
className="w-full h-auto rounded-lg shadow-lg"
/>
</div>
</div>
{/* Step 5 */}
<div className="md:flex items-center">
<div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
<h3 className="text-2xl font-bold mb-4">Aging & Bottling</h3>
<p className="text-gray-700">
Our sake rests at precisely controlled temperatures before being bottled in our signature vessels, designed to protect the sake from light while showcasing its beautiful clarity.
</p>
</div>
<div className="md:w-1/2 md:pl-12 relative">
<div className="hidden md:block absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#D4B886] border-4 border-white z-10"></div>
<img
src="https://readdy.ai/api/search-image?query=A%20modern%20sake%20bottling%20facility%20with%20traditional%20elements.%20Premium%20sake%20bottles%20are%20being%20filled%20on%20a%20clean%2C%20precise%20bottling%20line.%20Workers%20in%20clean%20uniforms%20are%20carefully%20inspecting%20each%20bottle.%20The%20lighting%20is%20bright%20and%20clinical%2C%20highlighting%20the%20pristine%20environment%20and%20the%20clear%20sake%20being%20bottled%20against%20a%20modern%20brewery%20background&width=600&height=400&seq=11&orientation=landscape"
alt="Aging and Bottling Process"
className="w-full h-auto rounded-lg shadow-lg"
/>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Limited Edition Section */}
<section className="py-20 bg-gray-900 text-white relative overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center opacity-30"
style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20beautiful%20Japanese%20spring%20scene%20with%20cherry%20blossoms%20in%20full%20bloom%20against%20a%20traditional%20Japanese%20brewery%20building.%20The%20image%20has%20a%20dreamy%2C%20atmospheric%20quality%20with%20soft%20pink%20petals%20floating%20in%20the%20air.%20The%20lighting%20is%20gentle%20and%20ethereal%2C%20creating%20a%20romantic%20and%20seasonal%20mood%20perfect%20for%20a%20limited%20edition%20spring%20sake%20promotion&width=1920&height=1080&seq=12&orientation=landscape')`,
}}
></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Spring Limited Edition</h2>
<div className="w-24 h-1 bg-[#D4B886] mx-auto mb-6"></div>
<p className="max-w-3xl mx-auto">
Introducing our special seasonal release, inspired by the ephemeral beauty of cherry blossoms and crafted to capture the essence of spring in Japan.
</p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif JP", serif' }}>
桜花 - Sakura Edition
</h3>
<p className="mb-6 leading-relaxed">
This limited release features our premium Junmai Daiginjo infused with subtle notes of cherry blossom, creating a unique seasonal experience that embodies the transient beauty of spring in Japan.
</p>
<p className="mb-6 leading-relaxed">
Only 1,000 bottles produced annually, each individually numbered and presented in a handcrafted wooden box with traditional Japanese calligraphy.
</p>
<div className="flex items-center mb-8">
<div className="text-[#D4B886] mr-3">
<i className="fas fa-clock text-xl"></i>
</div>
<div>
<p className="text-sm uppercase tracking-wider">Limited Time Offer</p>
<p className="font-bold text-xl">{daysLeft} Days Remaining</p>
</div>
</div>
<div className="flex items-center mb-8">
<div className="text-[#D4B886] mr-3">
<i className="fas fa-wine-bottle text-xl"></i>
</div>
<div>
<p className="text-sm uppercase tracking-wider">Limited Quantity</p>
<p className="font-bold text-xl">368 Bottles Remaining</p>
</div>
</div>
<button className="bg-[#D4B886] text-white px-8 py-3 rounded-button hover:bg-[#C4A876] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer whitespace-nowrap">
Reserve Your Bottle
</button>
</div>
<div className="relative">
<img
src="https://readdy.ai/api/search-image?query=A%20beautiful%20limited%20edition%20sake%20bottle%20with%20cherry%20blossom%20design%20elements%20and%20Japanese%20calligraphy%20on%20the%20label.%20The%20bottle%20is%20presented%20in%20an%20elegant%20wooden%20box%20with%20sakura%20motifs.%20The%20sake%20has%20a%20subtle%20pink%20hue%20reminiscent%20of%20cherry%20blossoms.%20The%20image%20has%20soft%2C%20atmospheric%20lighting%20with%20pink%20and%20gold%20accents%20against%20a%20dark%20background%20to%20create%20a%20premium%2C%20seasonal%20impression&width=800&height=1000&seq=13&orientation=portrait"
alt="Sakura Limited Edition Sake"
className="w-full h-auto object-cover rounded-lg shadow-lg"
/>
<div className="absolute -top-8 -left-8 bg-[#A22041] text-white p-4 rounded-lg shadow-lg">
<p className="text-sm font-bold">Special Price</p>
<p className="text-2xl font-bold">¥12,800</p>
</div>
</div>
</div>
</div>
</section>
{/* Testimonials Section */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">What Connoisseurs Say</h2>
<div className="w-24 h-1 bg-[#D4B886] mx-auto"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow relative">
<div className="absolute -top-6 left-8">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4B886]">
<img
src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Japanese%20male%20sake%20sommelier%20in%20his%2040s%20wearing%20formal%20attire%20with%20a%20confident%2C%20knowledgeable%20expression.%20The%20image%20has%20clean%2C%20professional%20lighting%20against%20a%20neutral%20background%2C%20conveying%20expertise%20and%20authority%20in%20the%20sake%20industry&width=200&height=200&seq=14&orientation=squarish"
alt="Testimonial Author"
className="w-full h-full object-cover"
/>
</div>
</div>
<div className="text-[#D4B886] mb-4 mt-6">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
<p className="text-gray-700 mb-6 italic">
"As a sake sommelier, I've tasted countless premium sakes, but Miyashita's Junmai Daiginjo stands apart with its exceptional balance and remarkable depth of flavor. A true masterpiece."
</p>
<div>
<p className="font-bold">Takashi Yamamoto</p>
<p className="text-sm text-gray-600">Master Sake Sommelier, Tokyo</p>
</div>
</div>
<div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow relative">
<div className="absolute -top-6 left-8">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4B886]">
<img
src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20female%20international%20food%20critic%20in%20her%2030s%20with%20a%20thoughtful%20expression%20wearing%20elegant%20attire.%20The%20image%20has%20clean%2C%20professional%20lighting%20against%20a%20neutral%20background%2C%20conveying%20sophistication%20and%20expertise%20in%20culinary%20evaluation&width=200&height=200&seq=15&orientation=squarish"
alt="Testimonial Author"
className="w-full h-full object-cover"
/>
</div>
</div>
<div className="text-[#D4B886] mb-4 mt-6">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>
</div>
<p className="text-gray-700 mb-6 italic">
"I've featured Miyashita's sake in my international food column for its remarkable ability to pair with diverse cuisines. The Junmai Daiginjo offers complexity that appeals to both sake enthusiasts and newcomers."
</p>
<div>
<p className="font-bold">Emma Richardson</p>
<p className="text-sm text-gray-600">Food & Beverage Critic, London</p>
</div>
</div>
<div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow relative">
<div className="absolute -top-6 left-8">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4B886]">
<img
src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20distinguished%20Japanese%20chef%20in%20his%2050s%20wearing%20traditional%20chef%20attire%20with%20a%20serious%2C%20experienced%20expression.%20The%20image%20has%20clean%2C%20professional%20lighting%20against%20a%20neutral%20background%2C%20conveying%20mastery%20and%20dedication%20to%20Japanese%20culinary%20traditions&width=200&height=200&seq=16&orientation=squarish"
alt="Testimonial Author"
className="w-full h-full object-cover"
/>
</div>
</div>
<div className="text-[#D4B886] mb-4 mt-6">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
<p className="text-gray-700 mb-6 italic">
"In my three-star restaurant, we exclusively serve Miyashita sake with our omakase menu. The purity and elegance of their Junmai Daiginjo elevates the dining experience to new heights."
</p>
<div>
<p className="font-bold">Hiroshi Nakamura</p>
<p className="text-sm text-gray-600">Executive Chef, Kyoto</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<h3 className="text-2xl font-bold mb-6">Awards & Recognition</h3>
<div className="flex flex-wrap justify-center gap-8">
<div className="flex items-center">
<i className="fas fa-medal text-[#D4B886] text-3xl mr-3"></i>
<div className="text-left">
<p className="font-bold">Gold Medal</p>
<p className="text-sm text-gray-600">International Sake Competition 2024</p>
</div>
</div>
<div className="flex items-center">
<i className="fas fa-trophy text-[#D4B886] text-3xl mr-3"></i>
<div className="text-left">
<p className="font-bold">Best Junmai Daiginjo</p>
<p className="text-sm text-gray-600">Japan Sake Awards 2023</p>
</div>
</div>
<div className="flex items-center">
<i className="fas fa-award text-[#D4B886] text-3xl mr-3"></i>
<div className="text-left">
<p className="font-bold">Master Craftsman Award</p>
<p className="text-sm text-gray-600">Traditional Sake Brewing Association</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Visit the Brewery Section */}
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Brewery</h2>
<div className="w-24 h-1 bg-[#D4B886] mx-auto mb-6"></div>
<p className="max-w-3xl mx-auto text-gray-700">
Experience the art of sake brewing firsthand with a guided tour of our historic brewery, nestled in the picturesque mountains of Niigata Prefecture.
</p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<img
src="https://readdy.ai/api/search-image?query=A%20beautiful%20traditional%20Japanese%20sake%20brewery%20building%20with%20wooden%20architecture%20and%20tiled%20roof%20against%20a%20backdrop%20of%20mountains.%20The%20brewery%20has%20a%20welcoming%20entrance%20with%20traditional%20noren%20curtains%20and%20stone%20pathway.%20The%20image%20has%20natural%20lighting%20with%20a%20warm%2C%20inviting%20atmosphere%20that%20showcases%20the%20traditional%20craftsmanship%20of%20the%20building%20against%20the%20natural%20landscape&width=800&height=600&seq=17&orientation=landscape"
alt="Miyashita Sake Brewery"
className="w-full h-auto rounded-lg shadow-lg"
/>
</div>
<div>
<h3 className="text-2xl font-bold mb-4">Tour & Tasting Experience</h3>
<p className="mb-6 leading-relaxed text-gray-700">
Our brewery tours offer an intimate glimpse into our 150-year history and traditional brewing methods. Learn about each step of the sake-making process from our master brewers.
</p>
<div className="space-y-4 mb-8">
<div className="flex items-start">
<div className="text-[#D4B886] mr-3 mt-1">
<i className="fas fa-check-circle"></i>
</div>
<p className="text-gray-700">Guided tour of our historic brewery facilities</p>
</div>
<div className="flex items-start">
<div className="text-[#D4B886] mr-3 mt-1">
<i className="fas fa-check-circle"></i>
</div>
<p className="text-gray-700">Exclusive tasting of premium and limited-edition sakes</p>
</div>
<div className="flex items-start">
<div className="text-[#D4B886] mr-3 mt-1">
<i className="fas fa-check-circle"></i>
</div>
<p className="text-gray-700">Sake and food pairing demonstration with seasonal delicacies</p>
</div>
<div className="flex items-start">
<div className="text-[#D4B886] mr-3 mt-1">
<i className="fas fa-check-circle"></i>
</div>
<p className="text-gray-700">Special discount on purchases made during your visit</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md mb-8">
<h4 className="font-bold mb-4">Tour Information</h4>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-sm text-gray-600">Days</p>
<p className="font-medium">Wednesday - Sunday</p>
</div>
<div>
<p className="text-sm text-gray-600">Times</p>
<p className="font-medium">10:00 AM, 1:00 PM, 3:00 PM</p>
</div>
<div>
<p className="text-sm text-gray-600">Duration</p>
<p className="font-medium">90 minutes</p>
</div>
<div>
<p className="text-sm text-gray-600">Price</p>
<p className="font-medium">¥3,500 per person</p>
</div>
</div>
</div>
<button className="bg-[#D4B886] text-white px-8 py-3 rounded-button hover:bg-[#C4A876] transition-colors cursor-pointer whitespace-nowrap">
Book Your Tour
</button>
</div>
</div>
<div className="mt-16">
<h3 className="text-2xl font-bold mb-6 text-center">Find Us</h3>
<div className="bg-gray-200 rounded-lg overflow-hidden h-96 shadow-lg">
{/* This would be replaced with an actual map integration */}
<div className="w-full h-full bg-cover bg-center" style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20detailed%20map%20view%20of%20a%20traditional%20Japanese%20sake%20brewery%20location%20in%20a%20rural%20mountainous%20area%20of%20Japan.%20The%20map%20shows%20the%20brewery%2C%20surrounding%20natural%20features%2C%20and%20nearby%20roads.%20The%20image%20has%20a%20clean%2C%20cartographic%20style%20with%20clear%20labels%20and%20directional%20markers%20to%20help%20visitors%20find%20the%20location&width=1200&height=600&seq=18&orientation=landscape')`,
}}></div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-lg shadow-md">
<div className="text-[#D4B886] text-2xl mb-4">
<i className="fas fa-map-marker-alt"></i>
</div>
<h4 className="font-bold mb-2">Address</h4>
<p className="text-gray-700">
123 Sake Street, Niigata Prefecture<br />
Niigata 950-0000, Japan
</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
<div className="text-[#D4B886] text-2xl mb-4">
<i className="fas fa-phone-alt"></i>
</div>
<h4 className="font-bold mb-2">Contact</h4>
<p className="text-gray-700">
Phone: +81 25-123-4567<br />
Email: visit@miyashita-sake.jp
</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
<div className="text-[#D4B886] text-2xl mb-4">
<i className="fas fa-train"></i>
</div>
<h4 className="font-bold mb-2">Getting Here</h4>
<p className="text-gray-700">
30 minutes by taxi from Niigata Station<br />
Free shuttle available with reservation
</p>
</div>
</div>
</div>
</div>
</section>
{/* Call to Action Section */}
<section className="py-20 bg-[#D4B886] text-white">
<div className="container mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Essence of Japan</h2>
<p className="max-w-2xl mx-auto mb-8 text-lg">
Whether you're a sake connoisseur or new to the world of premium Japanese sake, our Junmai Daiginjo offers an unparalleled tasting experience that embodies centuries of tradition and craftsmanship.
</p>
<div className="flex flex-wrap justify-center gap-4">
<button className="bg-white text-[#D4B886] px-8 py-3 rounded-button hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap font-bold">
Reserve Your Bottle
</button>
<button className="border-2 border-white text-white px-8 py-3 rounded-button hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
Learn More About Our Heritage
</button>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-gray-900 text-white py-16">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12">
<div>
<h3 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif JP", serif' }}>
宮下酒造
</h3>
<p className="mb-6">
Crafting premium sake with tradition and innovation since 1875. Our commitment to quality and craftsmanship is reflected in every bottle.
</p>
<div className="flex space-x-4">
<a href="#" className="text-white hover:text-[#D4B886] transition-colors cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-white hover:text-[#D4B886] transition-colors cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="text-white hover:text-[#D4B886] transition-colors cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-white hover:text-[#D4B886] transition-colors cursor-pointer">
<i className="fab fa-youtube"></i>
</a>
</div>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Quick Links</h4>
<ul className="space-y-3">
<li>
<a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Our Story</a>
</li>
<li>
<a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Products</a>
</li>
<li>
<a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Brewery Tours</a>
</li>
<li>
<a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Events & News</a>
</li>
<li>
<a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Online Shop</a>
</li>
<li>
<a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact Us</a>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Contact Information</h4>
<ul className="space-y-3">
<li className="flex items-start">
<i className="fas fa-map-marker-alt mt-1 mr-3 text-[#D4B886]"></i>
<span>123 Sake Street, Niigata Prefecture, Japan</span>
</li>
<li className="flex items-start">
<i className="fas fa-phone-alt mt-1 mr-3 text-[#D4B886]"></i>
<span>+81 25-123-4567</span>
</li>
<li className="flex items-start">
<i className="fas fa-envelope mt-1 mr-3 text-[#D4B886]"></i>
<span>info@miyashita-sake.jp</span>
</li>
<li className="flex items-start">
<i className="fas fa-clock mt-1 mr-3 text-[#D4B886]"></i>
<span>Open: Wed-Sun, 9:00 AM - 5:00 PM</span>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Newsletter</h4>
<p className="mb-4">
Subscribe to receive updates on new releases, special events, and exclusive offers.
</p>
<form className="space-y-4">
<div>
<input
type="email"
placeholder="Your email address"
className="w-full px-4 py-2 rounded-button bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#D4B886] text-white"
/>
</div>
<button
type="submit"
className="bg-[#D4B886] text-white px-5 py-2 rounded-button hover:bg-[#C4A876] transition-colors cursor-pointer whitespace-nowrap w-full"
>
Subscribe
</button>
</form>
<div className="mt-6">
<p className="text-sm text-gray-400">
We accept various payment methods:
</p>
<div className="flex space-x-3 mt-2">
<i className="fab fa-cc-visa text-xl"></i>
<i className="fab fa-cc-mastercard text-xl"></i>
<i className="fab fa-cc-amex text-xl"></i>
<i className="fab fa-cc-paypal text-xl"></i>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
<p>© 2025 Miyashita Sake Brewery. All rights reserved.</p>
<div className="mt-2 flex justify-center space-x-6">
<a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
<a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
<a href="#" className="hover:text-white transition-colors cursor-pointer">Shipping Information</a>
</div>
</div>
</div>
</footer>
{/* Notification Toast */}
{showNotification && (
<div className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up">
{notificationMessage}
</div>
)}
</div>
);
}
export default App