const Logo = ({ size = 120 }: { size?: number }) => {
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size * 2, height: size }}>
      <svg
        width={size * 2}
        height={size}
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45" cy="60" r="4" fill="#1A1F2C" />
        <circle cx="195" cy="60" r="4" fill="#1A1F2C" />
        
        <rect x="45" y="35" width="2" height="50" fill="#8E9196" opacity="0.4" />
        <rect x="75" y="35" width="2" height="50" fill="#8E9196" opacity="0.4" />
        <rect x="105" y="35" width="2" height="50" fill="#8E9196" opacity="0.4" />
        <rect x="135" y="35" width="2" height="50" fill="#8E9196" opacity="0.4" />
        <rect x="165" y="35" width="2" height="50" fill="#8E9196" opacity="0.4" />
        <rect x="195" y="35" width="2" height="50" fill="#8E9196" opacity="0.4" />
        
        <line x1="30" y1="85" x2="210" y2="85" stroke="#1A1F2C" strokeWidth="2" />
        
        <text
          x="120"
          y="70"
          fontFamily="'Poppins', sans-serif"
          fontSize="38"
          fontWeight="300"
          fill="#1A1F2C"
          textAnchor="middle"
          letterSpacing="14"
        >
          ЛОКУС
        </text>
      </svg>
    </div>
  );
};

export default Logo;