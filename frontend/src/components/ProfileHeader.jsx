import { useState, useRef } from "react";
import { LogOutIcon, VolumeOffIcon, Volume2Icon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const { logout, authUser, updateProfile, isPicUploading } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();

  const [selectedImg, setSelectedImg] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    if (isPicUploading) return;

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="p-6 border-b border-slate-700/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* AVATAR */}
          <div className="avatar online">
            <button
              disabled={isPicUploading}
              onClick={() => !isPicUploading && fileInputRef.current.click()}
              className={`relative overflow-hidden rounded-full size-14 group 
                ${isPicUploading ? "cursor-not-allowed opacity-60" : ""}`}
            >
              <img
                src={selectedImg || authUser?.profilePic || "/avatar.png"}
                alt="User avatar"
                className="object-cover size-full"
              />

              {/* Hover overlay */}
              {!isPicUploading && (
                <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/50 group-hover:opacity-100">
                  <span className="text-xs text-white">Change</span>
                </div>
              )}

              {/* Uploading overlay */}
              {isPicUploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <span className="text-xs text-white animate-pulse">
                    Uploading...
                  </span>
                </div>
              )}
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* USER INFO */}
          <div>
            <h3 className="text-slate-200 font-medium text-base max-w-[180px] truncate">
              {authUser?.fullName}
            </h3>
            <p className="text-xs text-slate-400">Online</p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4">
          {/* LOGOUT */}
          <button
            onClick={logout}
            className="transition-colors text-slate-400 hover:text-slate-200"
          >
            <LogOutIcon className="size-5" />
          </button>

          {/* SOUND TOGGLE */}
          <button
            onClick={() => {
              mouseClickSound.currentTime = 0;
              mouseClickSound
                .play()
                .catch((err) => console.log("Audio play failed:", err));
              toggleSound();
            }}
            className="transition-colors text-slate-400 hover:text-slate-200"
          >
            {isSoundEnabled ? (
              <Volume2Icon className="size-5" />
            ) : (
              <VolumeOffIcon className="size-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
