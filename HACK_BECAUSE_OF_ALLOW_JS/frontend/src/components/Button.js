import React from 'react';
const Button = ({ label, onClick }) => {
    return (<button onClick={onClick} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
      {label}
    </button>);
};
export default Button;
