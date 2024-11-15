import { ReactNode } from 'react';

interface HoverbgProps {
  children: ReactNode;
}

const Hoverbg: React.FC<HoverbgProps> = ({ children }) => {
  return (
    <div className="hover:bg-lightest_gray p-2 rounded-md px-4">
      {children}
    </div>
  );
};

export default Hoverbg;
