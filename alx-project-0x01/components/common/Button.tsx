const Button: React.FC<{ label: string }> = ({ label }) => {
    return (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        {label}
      </button>
    );
  };
  
  export default Button;
  