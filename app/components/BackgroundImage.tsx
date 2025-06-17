import React from 'react';

const BackgroundImage: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0TVuMjoMSiMrPX8rmMR3D2_erzHoNT4Anup9Vx1vurKaVnxC3xZLaqAXVQpe9C_tr1yske4Z6xCc9dHKYRQ6X01PEAUvJSLWVQZOFPdoc1uZlkVl3HPJmVXQ4r8Os_vuUQNdEheLXAdzOt1h7lgJY3OEpSIEkVYJP92XKIFk6Da0LlvlKDuN_--dZc2dKF3270pF-nQj4MwigZpUG4OCEAapbUEi5f4eO8ZrMiO1zmn-KsWpnarpFN7JAgS6_5zlfeksqXBfBJdR9")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/80 backdrop-blur-sm" />
    </div>
  );
};

export default BackgroundImage; 