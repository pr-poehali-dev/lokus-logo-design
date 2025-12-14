const Logo = ({ size = 120 }: { size?: number }) => {
  const scale = size / 120;
  
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size * 2, height: size }}>
      <svg
        width={size * 2}
        height={size}
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 40 40 L 70 10 L 100 30 L 130 10 L 160 30 L 190 10 L 200 20" 
          stroke="#1A1F2C" 
          strokeWidth="2" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        <rect 
          x="40" 
          y="40" 
          width="160" 
          height="70" 
          stroke="#1A1F2C" 
          strokeWidth="2" 
          fill="none"
        />
        
        <text
          x="120"
          y="85"
          fontFamily="'Josefin Sans', sans-serif"
          fontSize="48"
          fontWeight="300"
          fill="#1A1F2C"
          textAnchor="middle"
          letterSpacing="8"
        >
          ЛОКУС
        </text>
      </svg>
    </div>
  );
};

export default Logo;
