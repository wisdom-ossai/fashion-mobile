import "./notification-icon.css";

const NotificationIcon = ({
  icon,
  value,
}: {
  icon: Node | string;
  value: number | string;
}) => {
  return (
    <div className="notification-badges">
      <button data-badge={value}>
        {" "}
        <>{typeof icon === "string" ? <i className={icon}></i> : icon}</>
      </button>
    </div>
  );
};

export default NotificationIcon;
