// bg.js
window.addEventListener('DOMContentLoaded', () => {
    // 1) Build an array of all your background URLs:
    const TOTAL = 21; // or however many you have
    const folder = 'Images/Backgrounds/';
    const imgs = Array.from({length: TOTAL}, (_, i) =>
      `${folder}Background ${i+1}.jpg`
    );
  
    // 2) Pick one at random:
    const pick = imgs[Math.floor(Math.random() * imgs.length)];
  
    // 3) Apply it to the <body>:
    Object.assign(document.body.style, {
      backgroundImage:  `url('${pick}')`,
      backgroundSize:   'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    });
  
    // 4) Darken it to ~70% so your white text always pops:
    const overlay = document.createElement('div');
    overlay.className = 'bg-overlay';
    document.body.prepend(overlay);
  });
  