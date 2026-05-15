export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-black mb-4">
        Welcome To FANVERSE 🚀
      </h1>

      <p className="text-zinc-400 text-xl">
        Creator dashboard is now live.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-2">
            Subscribers
          </h2>

          <p className="text-4xl font-black text-pink-400">
            0
          </p>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-2">
            Earnings
          </h2>

          <p className="text-4xl font-black text-green-400">
            ₹0
          </p>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-2">
            Posts
          </h2>

          <p className="text-4xl font-black text-purple-400">
            0
          </p>
        </div>
      </div>
    </main>
  );
}