import React from "react";
import subwayImg from "../../assets/games/SubwaySurfers.png";
import templerunImg from "../../assets/games/templerun.jpg";
import monkeymartImg from "../../assets/games/monkeymart.jpg";
import snapstyleImg from "../../assets/games/snapstyle.png";

const games = [
  {
    name: "Subway Surfers",
    url: "https://poki.com/en/g/subway-surfers",
    image: subwayImg,
  },
  {
    name: "Monkey Mart",
    url: "https://poki.com/en/g/monkey-mart",
    image: monkeymartImg,
  },
  {
    name: "Temple Run 2",
    url: "https://poki.com/en/g/temple-run-2",
    image: templerunImg,
  },
  {
    name: "Snap Style Dress Up",
    url: "https://poki.com/en/g/snapstyle-dress-up",
    image: snapstyleImg,
  },
];

const videos = [
  {
    title: "Try Not To Laugh 🐶🐱",
    url: "https://www.youtube.com/embed/lSGtRtKeRE4",
  },
  {
    title: "True Inspirational Story 🎵",
    url: "https://www.youtube.com/embed/72GP8TxRF0Y",
  },
  {
    title: "One of the Greatest Speeches 🌞",
    url: "https://www.youtube.com/embed/Tuw8hxrFBH8",
  },
];

const musicLinks = [
  {
    name: "Happy Pop Playlist",
    url: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC",
  },
  {
    name: "Feel-Good Vibes",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0",
  },
];

const moods = ["😊 Happy", "😔 Sad", "😌 Calm", "😠 Angry", "🤪 Silly"];

export default function HappyHome() {
  return (
    <div className="min-h-screen relative px-4 py-10 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 text-[#333] font-sans flex flex-col items-center overflow-hidden">
      {/* Floating Emojis Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-bounce-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          >
            {['🌟', '✨', '🌼', '💫', '🎈'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-6xl w-full text-center">
        <h1 className="text-4xl font-bold mb-2">Hey sunshine! 🌞</h1>
        <p className="text-lg mb-6 text-yellow-900">
          You're glowing today — let’s make it even brighter! ✨
        </p>

        {/* Mood Selector */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Want to change your mood?? No worries</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {moods.map((mood, idx) => (
              <button
                key={idx}
                className="px-4 py-2 bg-white text-yellow-900 font-medium rounded-full shadow hover:bg-yellow-300 transition-all duration-200"
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        {/* Games Section */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold mb-6">🎮 Fun Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {games.map((game) => (
              <a
                key={game.name}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-yellow-100 rounded-2xl shadow-lg overflow-hidden transition-all duration-200 text-center"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-40 object-contain p-3"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{game.name}</h3>
                  <p className="text-sm text-yellow-700">Play Now ➜</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Music Section */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold mb-6">🎧 Feel-Good Music</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {musicLinks.map((music) => (
              <a
                key={music.name}
                href={music.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-yellow-900 font-medium rounded-full shadow transform hover:scale-105 hover:bg-yellow-200 transition duration-300"
              >
                {music.name}
              </a>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold mb-6">📺 VibeFlix: Just for You</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {videos.map((vid) => (
              <div
                key={vid.title}
                className="w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <iframe
                  className="w-full h-44"
                  src={vid.url}
                  title={vid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="text-sm font-medium py-3 px-2 text-yellow-800">
                  {vid.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Message */}
        <div className="text-center text-xl text-yellow-900 font-semibold mt-4">
          🌼 Your smile is your superpower — keep shining, the world needs your light! ❤️
        </div>
      </div>
    </div>
  );
}
