import React from 'react';
// import { motion } from 'framer-motion';

const BreweryStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            The Art of Brewing
          </h2>
          <div className="w-24 h-1 bg-sake-gold mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-gray-700">
            宮下酒造の醸造は、伝統と最新技術の融合。五代にわたる杜氏の技と、厳選素材が生み出す唯一無二の味わい。
          </p>
        </div>
        {/* タイムライン風の工程紹介 */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sake-gold hidden md:block" />
          <div className="space-y-24 relative">
            {/* Step 1 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold mb-4">精米</h3>
                <p className="text-gray-700">
                  山田錦を40%まで丁寧に精米。雑味のないクリアな味わいの基礎を作ります。
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 relative flex justify-center">
                <img
                  src="/assets/images/process-polish.jpg"
                  alt="精米工程"
                  className="w-64 h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Step 2 */}
            <div className="md:flex items-center flex-row-reverse">
              <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">麹造り</h3>
                <p className="text-gray-700">
                  杜氏が温度・湿度を徹底管理し、杉の麹室で麹菌を育てます。
                </p>
              </div>
              <div className="md:w-1/2 md:pr-12 relative flex justify-center">
                <img
                  src="/assets/images/process-koji.jpg"
                  alt="麹造り工程"
                  className="w-64 h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Step 3 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold mb-4">発酵</h3>
                <p className="text-gray-700">
                  低温でじっくり30日以上発酵。複雑な香味と奥深い旨みが生まれます。
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 relative flex justify-center">
                <img
                  src="/assets/images/process-ferment.jpg"
                  alt="発酵工程"
                  className="w-64 h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Step 4 */}
            <div className="md:flex items-center flex-row-reverse">
              <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">上槽・瓶詰</h3>
                <p className="text-gray-700">
                  やさしく搾り、澄んだ酒を瓶詰。美しい透明感と香りをそのまま閉じ込めます。
                </p>
              </div>
              <div className="md:w-1/2 md:pr-12 relative flex justify-center">
                <img
                  src="/assets/images/process-bottle.jpg"
                  alt="瓶詰工程"
                  className="w-64 h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreweryStory; 