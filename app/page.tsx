export default function Home() {
  const creators = [
    {
      name: "Aarav Fitness",
      category: "Fitness Coach",
      followers: "120K",
      price: "₹199/month",
    },
    {
      name: "Riya Glam",
      category: "Lifestyle Creator",
      followers: "89K",
      price: "₹299/month",
    },
    {
      name: "Vikram Trader",
      category: "Trading Mentor",
      followers: "210K",
      price: "₹499/month",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            FANVERSE
          </h1>

          <p className="text-2xl text-zinc-300 mb-10">
            India’s Creator Monetization Platform
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-lg">
              Start Earning
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 text-lg">
              Explore Creators
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {creators.map((creator) => (
            <div
              key={creator.name}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-6"
            >
              <div className="w-full h-52 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 mb-5"></div>

              <h2 className="text-2xl font-bold">
                {creator.name}
              </h2>

              <p className="text-zinc-400 mt-1">
                {creator.category}
              </p>

              <div className="flex justify-between mt-6">
                <span>{creator.followers} fans</span>

                <span className="text-pink-400 font-bold">
                  {creator.price}
                </span>
              </div>

              <button className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 font-bold">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}