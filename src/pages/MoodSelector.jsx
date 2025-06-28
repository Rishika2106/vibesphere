import React, { useState } from "react"; // A React hook to manage component state.
import { useNavigate } from "react-router-dom"; // A hook from react-router-dom to programmatically navigate to another route (like /home).

function MoodSelector() {
  const [mood, setMood] = useState(null); //Stores which mood the user selected.
  const [hovered, setHovered] = useState(null); //Stores which mood the user is currently hovering over (to show the hover message)
  const navigate = useNavigate(); //
  const vibeName = localStorage.getItem("vibeName") || "friend"; //The name of the user that was earlier saved in local storage

  const moods = [ //This array contains data for each mood
    {
      label: "Happy", //mood name
      emoji: "😊", // emoji for that mood
      color: "bg-yellow-300", // Tailwind class for background color
      message: "Sunshine in your soul? Let’s keep those good vibes rolling! ☀️", // the hover tooltip text
    },
    {
      label: "Sad",
      emoji: "😢",
      color: "bg-indigo-300",
      message: "Feeling blue? We're here to hold space for you 💙",
    },
    {
      label: "Anxious",
      emoji: "😰",
      color: "bg-purple-300",
      message: "Stormy inside? Let’s slow it down together 🧘‍♀️",
    },
    {
      label: "Loved",
      emoji: "💖",
      color: "bg-rose-300",
      message: "Wrapped in love? Let’s bask in that warmth 💫",
    },
    {
      label: "Lonely",
      emoji: "🥺",
      color: "bg-teal-300",
      message: "Alone right now? You’ve got company here 🤗",
    },
  ];

    const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);

    // ✅ Save the selected mood to localStorage
    localStorage.setItem("vibeMood", selectedMood);

    setTimeout(() => {
    navigate("/home");
        }, 1000);
    };

  return ( //Full-page container with beautiful gradient background, centered content.
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-100 via-pink-100 to-purple-200 px-4 py-10">
      <h1 className="text-3xl font-bold mb-2 text-purple-700 animate-fadeInDown">
        Hey {vibeName}, how are you feeling today?
      </h1>
      <p className="text-gray-600 mb-6 text-sm">Tap a vibe to begin your journey ✨</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-xl">
        {moods.map((m) => ( // Loops through all moods to render each one.
          <div
            key={m.label}
            className="relative group" //Tailwind class used for group-hover animations later.     
            onMouseEnter={() => setHovered(m.label)} //When you hover on a mood, show its message.
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => setHovered(m.label)}
          >
            {/* 💬 Hover Message */}
            {hovered === m.label && (
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-10 w-64 bg-white border border-gray-200 rounded-xl shadow-xl p-4 text-sm text-gray-700 animate-fadeInUp text-center transition-all">
                {m.message}
              </div>
            )}

            {/* 🎯 Mood Button with Emoji Bounce */}
            <button
              onClick={() => handleMoodSelect(m.label)} //Selects the mood
              className={`w-full py-3 rounded-xl text-white text-sm font-semibold transition-transform duration-400 ease-out shadow-md flex flex-col items-center justify-center gap-1 hover:scale-105 active:scale-95 ${m.color}`}
            >
              <span className="text-3xl group-hover:animate-bounce transition-all duration-300"> 
                {m.emoji}
              </span>
              {m.label}
            </button>
          </div>
        ))}
      </div>

      {mood && ( //Shows a confirmation message when a mood is selected.
        <p className="mt-6 text-purple-600 font-medium animate-fadeInUp">
          Got it — you’re feeling <span className="font-bold">{mood}</span>. Let’s vibe accordingly 💫
        </p>
      )}
    </div>
  );
}

export default MoodSelector;
