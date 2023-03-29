import NotificationIcon from "../../components/notification-icon/NotificationIcon";
import SearchBox from "../../components/search-box/SearchBox";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero pt-4 px-2">
        <div className="flex align-center justify-between">
          <SearchBox />
          <div className="notification-icons">
            <NotificationIcon value="1" icon="ri-lg ri-shopping-bag-line" />
            <NotificationIcon value="9+" icon="ri-lg ri-chat-2-line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
