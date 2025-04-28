import { useEffect, useState } from "react";

const Notifications = ({
  message,
  isType,
}: {
  message: string | undefined;
  isType: "error" | "success";
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setIsOpen(true);
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div
      className={`p-2 min-w-32 ${
        isType === "error"
          ? "bg-red-400"
          : isType === "success"
          ? "bg-green-400"
          : null
      } fixed rounded-lg left=[-100%] bottom-2`}
      style={{
        transition: "ease-in-out",
        transitionDuration: "400ms",
        left: isOpen ? "4px" : "-100%",
      }}
    >
      {message}
    </div>
  );
};

export default Notifications;
