import { ReactNode, useState } from "react";
import "./tab.css";

const TabItem = ({
  active,
  onClick,
  children,
  disabled,
  ...res
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  disabled: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`tab-button ${active ? "active" : ""}`}
    {...res}
  >
    {children}
  </button>
);

const Tab = ({
  data,
  onItemClick,
}: {
  data: any[];
  onItemClick?: (data: any) => void;
}) => {
  const [active, setActive] = useState(data[0]);
  return (
    <>
      <div className="tab-container">
        <div className="flex pl-2">
          {data.map((item) => (
            <TabItem
              key={item.id}
              active={item.id === active.id}
              onClick={() => {
                onItemClick && onItemClick(item);
                setActive(item);
              }}
              disabled={item.disable}
            >
              {item.name}
            </TabItem>
          ))}
        </div>
        <div>{active.component}</div>
      </div>
    </>
  );
};

export default Tab;
