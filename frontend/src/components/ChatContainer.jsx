import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";
import { Download } from "lucide-react";

function ChatContainer() {
  const {
    selectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  const handleDownload = (e, imageUrl) => {
    e.stopPropagation();
    e.preventDefault();

    fetch(imageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "image";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      });
  };

  useEffect(() => {
    getMessagesByUserId(selectedUser._id);

    subscribeToMessages();

    // clean up
    return () => unsubscribeFromMessages();
  }, [selectedUser, getMessagesByUserId]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <ChatHeader />
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        {messages.length > 0 && !isMessagesLoading ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`chat ${msg.senderId === authUser._id ? "chat-end" : "chat-start"}`}
              >
                <div
                  className={`chat-bubble relative ${
                    msg.senderId === authUser._id
                      ? "bg-cyan-800 text-white"
                      : "bg-slate-800 text-slate-200"
                  }`}
                >
                  {msg.image && (
                    <div className="relative mt-2 group">
                      {/* IMAGE – opens in new tab */}
                      <a
                        href={msg.image}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={msg.image}
                          alt="Shared"
                          className="object-cover h-48 rounded-lg cursor-pointer"
                          draggable="false"
                        />
                      </a>

                      {/* DOWNLOAD BUTTON (hover only, no navigation) */}
                      <button
                        onClick={(e) => handleDownload(e, msg.image)}
                        className="absolute p-2 transition-all duration-200 scale-90 rounded-full opacity-0 bottom-2 right-2 bg-black/60 hover:bg-black/80 group-hover:opacity-100 group-hover:scale-100"
                        title="Download image"
                      >
                        <Download className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  )}

                  {msg.text && <p className="mt-2">{msg.text}</p>}
                  <p className="flex items-center gap-1 mt-1 text-xs opacity-75">
                    {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {/* for auto scroll to bottom */}
            <div ref={messageEndRef} />
          </div>
        ) : isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      <MessageInput />
    </>
  );
}

export default ChatContainer;
