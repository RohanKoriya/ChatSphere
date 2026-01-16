import React from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatPage() {
  const { logout } = useAuthStore();
  return (
    <div className="z-10">
      <button
        className="px-4 py-2 text-white bg-red-500 rounded-md"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default ChatPage;
