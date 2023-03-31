import React, { ReactNode, useRef, useState } from "react";
const AppContext = React.createContext<{}>({});
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<any>(null);
  return (
    <AppContext.Provider value={{ scrolled, setScrolled }}>
      <div
        ref={ref}
        id="screen"
        // className="screen"
        onScroll={(e) => {
          if (ref?.current) {
            if (ref.current.scrollTop > 50) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
          }
        }}
      >
        {children}
      </div>
    </AppContext.Provider>
  );
};
export const useApp: any = () => {
  return React.useContext(AppContext);
};

export default AppProvider;
