import { notFound } from "next/navigation";
import Link from "next/link";

const resources: Record<string, { title: string; content: string }> = {
  "risk-management": {
    title: "Risk Management Blueprint",
    content: `Risk management is the foundation of long-term trading success.

Most traders focus on entries, but professionals focus on protecting capital first. Without proper risk control, even the best strategy will eventually fail.

A strong framework includes fixed percentage risk per trade, strict stop-loss placement, and daily loss limits. Risking only 1% per trade prevents emotional damage during losing streaks.

Professional traders treat capital like business inventory. They preserve it, protect it, and grow it gradually.

Master risk management and you eliminate the biggest reason traders fail — emotional overexposure.`,
  },

  "trading-plan": {
    title: "Build a Professional Trading Plan",
    content: `A trading plan is your rulebook. Without it, trading becomes gambling.

A professional plan defines entry rules, exit strategy, stop-loss logic, session timing, and maximum daily drawdown.

When rules are written, emotions reduce. You stop reacting and start executing.

Your trading plan creates structure. Structure creates consistency.

Consistency builds profitability.`,
  },

  "psychology-discipline": {
    title: "Psychology & Discipline Mastery",
    content: `Trading psychology determines long-term success.

Revenge trading, fear of missing out, and overtrading destroy accounts — not strategy.

Discipline means following your system even after losses. It means accepting small losses without emotional reaction.

Professional traders focus on emotional stability.

Master discipline, and performance becomes sustainable.`,
  },
};

export default function ResourceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const resource = resources[params.slug];

  if (!resource) return notFound();

  return (
    <div className="min-h-screen bg-[#0B1C2D] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          {resource.title}
        </h1>

        <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
          {resource.content}
        </p>

        <div className="mt-16">
          <Link
            href="/courses"
            className="inline-block bg-[#C6A75E] text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Upgrade to Full Program
          </Link>
        </div>

      </div>
    </div>
  );
}