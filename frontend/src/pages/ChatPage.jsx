import React from "react";
import { useChatStore } from "../store/useChatStore";

import BorderAnimateContainer from "../components/BorderAnimateContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ContactList from "../components/ContactList";
import ChatList from "../components/ChatList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-6xl h-[680px]">
      <BorderAnimateContainer>
        {/* LEFT SIDE */}
        <div className="flex flex-col w-80 bg-slate-800/50 backdrop-blur-sm">
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 p-4 space-y-2 overflow-y-auto">
            {activeTab === "chats" ? <ChatList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col flex-1 bg-slate-900/50 backdrop-blur-sm">
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>
      </BorderAnimateContainer>
    </div>
  );
}

export default ChatPage;
