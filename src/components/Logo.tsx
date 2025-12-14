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
        <path 
          d="M 30 60 L 30 90 L 210 90 L 210 60 L 195 35 L 175 50 L 155 30 L 135 45 L 115 25 L 95 45 L 75 30 L 55 50 L 35 35 Z" 
          stroke="#1A1F2C" 
          strokeWidth="2.5" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        <text
          x="120"
          y="75"
          fontFamily="'Poppins', sans-serif"
          fontSize="36"
          fontWeight="300"
          fill="#1A1F2C"
          textAnchor="middle"
          letterSpacing="12"
        >
          ЛОКУС
        </text>
      </svg>
    </div>
  );
};

export default Logo;
