import "./App.css";

function App() {
  const notifications = [
    {
      name: "Mark Webler ",
      action: "reacted",
      post: "My first tournament today",
      time: "1m ago",
      img: "./public/assets/avatar-mark-webber.webp",
      seen: false,
    },
    {
      name: "Angella grey ",
      action: "followed",
      post: "",
      time: "5m ago",
      img: "./public/assets/avatar-angela-gray.webp",
      seen: false,
    },
    {
      name: "Jacob Thompson ",
      action: "Joined",
      post: "Chess club",
      time: "1 day ago",
      img: "./public/assets/avatar-jacob-thompson.webp",
      seen: false,
    },
    {
      name: "Rizky Hassanudin ",
      action: "message",
      post: "",
      time: " 5 days ago",
      img: "./public/assets/avatar-rizky-hasanuddin.webp",
      seen: true,
    },
    {
      name: "Kimberly Smith ",
      action: "commented",
      post: "picture",
      time: " 1 week ago",
      img: "./public/assets/avatar-kimberly-smith.webp",
      seen: true,
    },
    {
      name: "Nathan Peterson ",
      action: "reacted",
      post: " 5 end-game strategies to increase your win rate ",
      time: " 2 weeks ago",
      img: "src/assets/avatar-nathan-peterson.webp",
      seen: true,
    },
    {
      name: " Anna Kim ",
      action: "left",
      post: "Chess club",
      time: "2 weeks ago",
      img: "src/assets/avatar-anna-kim.webp",
      seen: true,
    },
  ];
  return (
    <>
      <Header />
      {notifications.map((notify) => (
        <Notification
          name={notify.name}
          action={notify.action}
          post={notify.post}
          time={notify.time}
          image={notify.img}
          seen={notify.seen}
        />
      ))}
    </>
  );
}

function Notification({ name, action, post, time, image, seen }) {
  const actions = { action };
  return (
    <>
      <div className={seen ? "notificationseen" : "notificationunseen"}>
        <div>
          <img src={image} height={50} width={50} alt="" />
        </div>
        <div className="content">
          <p>
            <span className="name">{name}</span>
            {actions.action == "reacted"
              ? "reacted to your post "
              : actions.action == "followed"
              ? "followed you"
              : actions.action == "Joined"
              ? "has joined your group "
              : actions.action == "message"
              ? "sent you a private message "
              : actions.action == "commented"
              ? "commented on your "
              : actions.action == "left"
              ? "left the group "
              : ""}
            <span className="post">{post}</span>{" "}
            <span className="star">{seen ? " " : "*"}</span>
          </p>
          <span className="time">{time}</span>
          <br></br>
          <div className={actions.action == "message" ? "msg" : ""}>
            {actions.action == "message"
              ? "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}
function Header() {
  return (
    <>
      <div className="header">
        <h2>
          Notifications <span className="number">3</span>{" "}
        </h2>
        <p>mark all as read</p>
      </div>
    </>
  );
}
export default App;
