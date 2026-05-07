export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Discord Community Managers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          AI Summaries of Long{" "}
          <span className="text-[#58a6ff]">Discord Threads</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop scrolling through hundreds of messages. Get instant AI-generated summaries with key decisions, action items, and participant highlights — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Started for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Connect with Discord OAuth · Cancel anytime</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔗</div>
            <h3 className="font-semibold text-white mb-1">Discord OAuth</h3>
            <p className="text-sm text-[#8b949e]">Securely connect your Discord account and select any server you manage.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">AI Summarization</h3>
            <p className="text-sm text-[#8b949e]">OpenAI processes threads and extracts decisions, action items, and highlights.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-white mb-1">Summary Dashboard</h3>
            <p className="text-sm text-[#8b949e]">Browse, search, and export all your thread summaries from one place.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited thread summaries",
              "All Discord servers & channels",
              "Key decisions & action items",
              "Participant highlights",
              "Export to Markdown / PDF",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-center"
          >
            Start for $9/mo
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to Discord?</h3>
            <p className="text-sm text-[#8b949e]">You authenticate via Discord OAuth. We request read-only access to the servers and channels you choose — we never post or modify anything.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which threads can be summarized?</h3>
            <p className="text-sm text-[#8b949e]">Any public or private thread in servers where you have access. Just pick the channel and thread from the dashboard and hit Summarize.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my data stored or shared?</h3>
            <p className="text-sm text-[#8b949e]">Thread content is sent to OpenAI for processing only. Summaries are stored in your account. We never sell or share your data with third parties.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Discord Thread Summarizer. All rights reserved.
      </footer>
    </main>
  );
}
