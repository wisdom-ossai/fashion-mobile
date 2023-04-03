import { FC, useState } from "react";
import "./dropdown.css";

interface IMenuItem {
  label: string;
  value: string | number;
}
interface IDropdownProp {
  defaultOpen?: boolean;
  menuItems: IMenuItem[];
  onItemClick?: (data: IMenuItem) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

const Dropdown: FC<IDropdownProp> = ({
  defaultOpen,
  onOpen,
  onClose,
  menuItems,
  onItemClick,
}) => {
  const [selected, setSelected] = useState(menuItems[0]);
  const [openDropdown, setOpenDropdown] = useState(defaultOpen);

  const handleItemClick = (data: IMenuItem) => {
    onClose && onClose();
    setSelected(data);
    onItemClick && onItemClick(data);
    setOpenDropdown(false);
  };

  const handleButtonClick = () => {
    if (!openDropdown) {
      onOpen && onOpen();
    }
    setOpenDropdown((prev) => !prev);
  };

  return (
    <div
      className={`dropdown-container${openDropdown ? " dropdown-open" : ""}`}
    >
      <div
        className="dropdown-toggle click-dropdown flex"
        onClick={handleButtonClick}
      >
        {selected.label} &nbsp; <i className="ri-arrow-down-s-line"></i>
      </div>
      <div className={`dropdown-menu${openDropdown ? " dropdown-active" : ""}`}>
        <ul>
          {menuItems.map((v) => (
            <li key={v.label}>
              <a onClick={() => handleItemClick(v)} href="#">
                {v.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
