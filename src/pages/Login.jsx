import { useState, useEffect } from "react"; //React hooks to manage state and side effects
import successGif from "../assets/success-vibe.gif"; // 🎉 Themed success GIF
import { useNavigate } from "react-router-dom"; //React router hook to navigate programically (like going to /mood after login)


function Login() { //These hold user inputs, current step, messages, loading state and whether login was successful
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("Hey there! Ready to chill with VibeSphere?");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate(); //Used later to navigate to /mood once login is successful

  const handleSendOTP = () => { //This validates name and contact format and simulates sending the OTP with a delay
    setError(false);
    if (!name) {
      setMessage("Oops! Your name’s missing — gotta know who to say hi to!");
      setError(true);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(contact) && !/^\d{10}$/.test(contact)) {
      setMessage("Hmm… That doesn’t look like a phone number. Try again, champ!");
      setError(true);
      return;
    }
    setLoading(true);
    setMessage("Sending OTP...");
    setTimeout(() => {
      setLoading(false);
      setMessage("We just sent you a secret code — go find it, detective 🕵️‍♂️");
      setStep(2);
    }, 1500);
  };

  const handleVerifyOTP = () => { //No real backend here - it justs wait and then "verifies" OTP if its 6 digits
    setError(false);
    if (otp.length !== 6) {
      setMessage("6 digits, buddy! No more, no less.");
      setError(true);
      return;
    }
    setLoading(true);
    setMessage("Verifying OTP...");
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("vibeName", name); // ✅ Save name for personalization
      setSuccess(true);
    }, 1500);
  };

  const handleGoBack = () => { //Takes the user back to the initial form
    setStep(1);
    setMessage("Hey there! Ready to chill with VibeSphere?");
  };

  // 🔁 Auto redirect to mood page after success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/mood"); // 🔁 Redirect to Mood Selector Page
      }, 5000); //After 5 seconds of success, it navigates to Mood Selector Page
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-100 via-pink-100 to-purple-200 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-md text-center animate-fadeIn">
        <div className="text-4xl mb-2">🌸</div>
        <h1 className="text-2xl font-bold mb-2 text-purple-600">VibeSphere</h1>
        <p className={`text-sm mb-4 transition-all duration-300 ${error ? 'text-red-500 animate-shake' : 'text-gray-600'}`}>{message}</p>

        {/* ✅ SUCCESS STATE */}
        {success ? (   
          //Flexbox-centered card UI with a gradient background
          <div className="flex flex-col items-center">
            <h2 className="text-green-600 text-lg font-semibold animate-bounce mb-4">
              Awesome, {name}! You’re officially in. Let’s vibe! 🎉🎉
            </h2>
            <img
              src={successGif}
              alt="success"
              className="w-32 h-32 object-contain"
            />
            <p className="text-sm text-gray-400 mt-2">Redirecting to your vibe zone...</p>
          </div>
        ) : (
          <>
            {step === 1 && (
              <>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mb-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                />
                <p className="text-xs text-gray-500 mb-2">We'll only use your name to personalize your vibe ✨</p>
                <input
                  type="text"
                  placeholder="Email or Phone"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-2 mb-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                />
                <p className="text-xs text-gray-500 mb-4">We'll send a 6-digit code there — no spam, promise!</p>
                <button
                  onClick={handleSendOTP}
                  disabled={loading}
                  className={`bg-purple-500 text-white px-6 py-2 rounded-lg w-full transition-all hover:bg-purple-600 ${loading && 'opacity-50 cursor-not-allowed'}`}
                >
                  {loading ? "Sending..." : "Send OTP"}
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  onClick={handleVerifyOTP}
                  disabled={loading}
                  className={`bg-purple-500 text-white px-6 py-2 mb-3 rounded-lg w-full transition-all hover:bg-purple-600 ${loading && 'opacity-50 cursor-not-allowed'}`}
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
                <button
                  onClick={handleGoBack}
                  className="text-sm text-purple-500 underline hover:text-purple-700 transition-all"
                >
                  ⬅️ Go Back
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
