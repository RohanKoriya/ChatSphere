import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="relative p-1 m-2 rounded-lg bg-slate-800/60">
      {/* SLIDING INDICATOR */}
      <div
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)]
        rounded-md bg-cyan-500/20
        transition-transform duration-300 ease-in-out
        ${activeTab === "contacts" ? "translate-x-full" : "translate-x-0"}`}
      />

      {/* TABS */}
      <div className="relative z-10 flex">
        <button
          onClick={() => setActiveTab("chats")}
          className={`w-1/2 py-2 text-sm font-medium transition-colors
            ${activeTab === "chats" ? "text-cyan-400" : "text-slate-400"}`}
        >
          Chats
        </button>

        <button
          onClick={() => setActiveTab("contacts")}
          className={`w-1/2 py-2 text-sm font-medium transition-colors
            ${activeTab === "contacts" ? "text-cyan-400" : "text-slate-400"}`}
        >
          Contacts
        </button>
      </div>
    </div>
  );
}

export default ActiveTabSwitch;
