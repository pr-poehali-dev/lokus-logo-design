const Logo = ({ size = 120 }: { size?: number }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="20" y="20" width="80" height="80" stroke="#0EA5E9" strokeWidth="2" fill="none" />
        
        <rect x="30" y="30" width="30" height="30" fill="#1A1F2C" />
        
        <rect x="65" y="30" width="30" height="30" fill="#0EA5E9" />
        
        <rect x="30" y="65" width="30" height="30" fill="#0EA5E9" />
        
        <rect x="65" y="65" width="30" height="30" fill="#8E9196" />
        
        <line x1="60" y1="20" x2="60" y2="100" stroke="#0EA5E9" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="60" x2="100" y2="60" stroke="#0EA5E9" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  );
};

export default Logo;
