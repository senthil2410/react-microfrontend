import React, { useEffect, useState } from "react";
import "./Notification.css";
const Notification = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const handleNotifications = (e: Event) => {
      const message = (e as CustomEvent<string>).detail;
      setNotifications((prev) => [...prev, message]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n !== message));
      }, 3000);
    };

    window.addEventListener("notification", handleNotifications);

    return () => {
      window.removeEventListener("notification", handleNotifications);
    };
  }, []);

  return (
    <div className="notification-container">
      {notifications.map((message, i) => (
        <div className="notification-items">{message}</div>
      ))}
    </div>
  );
};

export default Notification;
