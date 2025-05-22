import React, { useState } from 'react';

const cryptoAddresses = [
  {
    name: 'Bitcoin',
    address: 'bc1qvj37jf0g6yvpsnq3n5us2yka9at77d9zkyyc7g',
    icon: '₿',
    color: 'bg-purple-600 hover:bg-purple-500',
    shadow: 'shadow-purple-500/50',
  },
  {
    name: 'Ethereum',
    address: '0xDb54E5ECe324539c03316d2000c418c64C587A10',
    icon: 'Ξ',
    color: 'bg-purple-700 hover:bg-purple-600',
    shadow: 'shadow-purple-600/50',
  },
  {
    name: 'Litecoin',
    address: 'ltc1q5cdf2wwq66ecgeah9ax57yka3uwlmp3ms0pnlw',
    icon: 'Ł',
    color: 'bg-purple-800 hover:bg-purple-700',
    shadow: 'shadow-purple-700/50',
  },
  {
    name: 'Solana',
    address: 'ckx1mNdvXHpvGWx82qisZEHD46u1eBETHEMBa2crx9h',
    icon: 'SOL',
    color: 'bg-purple-900 hover:bg-purple-800',
    shadow: 'shadow-purple-800/50',
  }
];

const CustomCheckIcon = () => (
  <svg 
    version="1.2" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 270 211" 
    width="20" 
    height="20"
    className="mr-2"
  >
    <defs>
      <linearGradient id="g1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,-211,270,0,135,211)">
        <stop offset="0" stopColor="#9929ea"/>
        <stop offset="1" stopColor="#5808fb"/>
      </linearGradient>
    </defs>
    <style>
      {`.s0 { fill: url(#g1) }`}
    </style>
    <path className="s0" d="m148.2 140.8l13.5-23.4 40.8 70.2h27q-1.5-2.4-6.9-11.1-5.1-9-12.3-21.3-7.2-12.3-15.3-25.8-7.8-13.8-15-26.1-6.9-12.3-12-21-5.1-9-6.3-11.4l-58.8 102-21.9 38.1h-81q1.8-2.7 7.8-13.2 6-10.8 14.7-26.1 9-15.3 19.8-33.9 10.8-18.9 21.6-37.8 12.9-22.5 27-47.1 14.1-24.9 30.3-52.2h27l-55.8 96.6-51.9 90.3h27q13.8-24.3 25.5-44.4 11.7-20.4 22.5-39.3 11.1-18.9 22.2-38.1 11.1-19.2 24-41.7 0.3 0.6 5.1 9 5.1 8.4 12.6 21.6 7.8 13.2 17.4 30 9.6 16.8 19.5 34.2 10.2 17.1 19.8 33.9 9.6 16.5 17.1 29.4 7.5 12.9 12 21 4.8 7.8 4.8 7.8h-81z"/>
  </svg>
);

const CryptoSection = () => {
  const [notification, setNotification] = useState<{visible: boolean, crypto: string}>({
    visible: false,
    crypto: ''
  });

  const copyToClipboard = (address: string, cryptoName: string) => {
    navigator.clipboard.writeText(address)
      .then(() => {
        setNotification({
          visible: true,
          crypto: cryptoName
        });
        setTimeout(() => {
          setNotification(prev => ({...prev, visible: false}));
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-purple-100">Support Us</h2>
        <p className="text-center text-purple-300 mb-10">
          Donations
        </p>
        
        <div className="flex justify-center gap-6 flex-wrap">
          {cryptoAddresses.map((crypto) => (
            <button
              key={crypto.name}
              onClick={() => copyToClipboard(crypto.address, crypto.name)}
              className={`${crypto.color} ${crypto.shadow} text-white h-16 w-16 rounded-full flex items-center justify-center font-bold text-2xl hover:scale-110 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-300`}
              aria-label={`Copy ${crypto.name} address`}
            >
              {crypto.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Floating Notification */}
      <div className={`fixed bottom-6 right-6 flex items-center bg-purple-900/90 backdrop-blur-md border border-purple-300/20 rounded-lg px-4 py-3 shadow-lg transition-all duration-300 ${notification.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <CustomCheckIcon />
        <div>
          <p className="text-white font-medium">Copied to clipboard!</p>
          <p className="text-purple-200 text-sm">{notification.crypto} address</p>
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;