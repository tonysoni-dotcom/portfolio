export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-20 bg-black">
      <div className="max-w-2xl px-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Vishnu Soni
        </h1>
        <p className="text-xl text-zinc-300 mb-2">
          Frontend engineer building product experiences.
        </p>
        <p className="text-zinc-400 mb-4">I make cool shit, check some out below.</p>
        <button className="bg-white text-black mb-8 px-4 py-2 rounded-md cursor-pointer hover:bg-zinc-200 transition-colors">
          Check projects
        </button>
        <div className="flex gap-6 justify-center text-zinc-400">
          <a href="https://github.com/tonysoni-dotcom" className="hover:text-white underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/vishnu-soni-work" className="hover:text-white underline">
            LinkedIn
          </a>
          <a href="mailto:vishnu.soni.work@gmail.com" className="hover:text-white underline">
            Email
          </a>
        </div>
      </div>
    </main>
  );
}