"use client";
import { useState, useEffect, useRef } from "react";

const generateCaptchaText = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  return Array.from(
    { length: 6 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

export default function CaptchaVerification() {
  const [captcha, setCaptcha] = useState(generateCaptchaText());
  const [input, setInput] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    drawCaptcha();
  }, [captcha]);

  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f4f4f4";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "30px Arial";
    ctx.fillStyle = "#333";
    ctx.fillText(captcha, 15, 35);

    // Add some noise for security
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = "#999";
      ctx.stroke();
    }
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptchaText());
    setIsVerified(false);
    setInput("");
  };

  const verifyCaptcha = () => {
    if (input === captcha) {
      setIsVerified(true);
      alert("✅ CAPTCHA Verified!");
    } else {
      setIsVerified(false);
      alert("❌ Incorrect CAPTCHA. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-lg w-96">
      <canvas
        ref={canvasRef}
        width={150}
        height={50}
        className="border bg-gray-100"
      ></canvas>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter CAPTCHA"
        className="border p-2 w-full rounded-md"
      />
      <div className="flex gap-2">
        <button
          onClick={verifyCaptcha}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Verify
        </button>
        <button
          onClick={refreshCaptcha}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Refresh
        </button>
      </div>
      {isVerified && (
        <p className="text-green-600">✅ Verified Successfully!</p>
      )}
    </div>
  );
}
