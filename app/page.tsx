"use client";

import { useState } from "react";
import { app } from "@/lib/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful 🚀");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful 🔥");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8">
        <h1 className="text-4xl font-black text-center text-white mb-2">
          FANVERSE
        </h1>

        <p className="text-zinc-400 text-center mb-8">
          Creator Monetization Platform
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-4 rounded-2xl bg-zinc-800 text-white outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-4 rounded-2xl bg-zinc-800 text-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold mb-4"
        >
          Sign Up
        </button>

        <button
          onClick={login}
          className="w-full py-4 rounded-2xl border border-white/20 text-white font-bold"
        >
          Login
        </button>
      </div>
    </main>
  );
}