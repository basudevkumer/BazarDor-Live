const Button = ({ onclick, children, icon, className, iconClassName }) => {
  return (
    <button
      onClick={onclick}
      className={`py-3 px-5 bg-success text-white rounded-[6px] para-medium flex items-center gap-x-2 ${className}`}
    >
      {children}
      <span className={`text-xl ${iconClassName}`}>{icon}</span>
    </button>
  );
};

export default Button;
