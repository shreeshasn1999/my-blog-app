/* eslint-disable react/prop-types */
function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} bg-[${bgColor}] text-[${textColor}]`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
