import React from "react";

interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  className?: string;
}

const Error: React.FC<ErrorProps> = ({ message, className, ...props }) => {
  return (
    <div
      className={`text-red-500 text-sm mt-2 ${className || ""}`}
      {...props}
    >
      {message}
    </div>
  );
};

export default Error;
