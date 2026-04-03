import { notFound } from "next/navigation";
import Link from "next/link";

/* =========================
   RESOURCE DATA
========================= */
const resources: Record<
  string,
  { title: string; content: string }
> = {
  "risk-management": {
    title: "Risk Management Blueprint",
    content: `Risk management is the foundation of long-term trading success.

Most traders focus on entries — professionals focus on protecting capital.

👉 Rule #1: Never risk more than 1% per trade.

If your capital is ₹1,00,000 → risk only ₹1,000.

Why?

• You survive losing streaks  
• You stay emotionally stable  
• You trade consistently  

Low risk = clear mind.

📉 Stop Loss is Mandatory

Every trade must have a stop loss.

Without it:
• One trade can wipe your account  
• Emotions take control  

Professionals always know:
👉 "Where am I wrong?"

📊 Risk-to-Reward

Example:
Risk ₹1,000 → Target ₹3,000

Even with 40% accuracy → you win.

🏆 Final Thought

You don’t need a perfect strategy.

You need:
• Risk control  
• Discipline  
• Consistency  

👉 Master risk, and you eliminate 80% of trading failure.`,
  },

  "trading-plan": {
    title: "Build a Professional Trading Plan",
    content: `A trading plan is your rulebook.

Without it → trading becomes gambling.

A professional plan defines:

• Entry rules  
• Exit strategy  
• Risk per trade  
• Trading sessions  
• Daily limits  

🎯 Why It Matters

Without a plan:
• You overtrade  
• You revenge trade  
• You act emotionally  

With a plan:
• You stay calm  
• You follow structure  
• You execute like a system  

🧠 Key Rule

👉 "No setup = No trade"

📊 Core System

1. Entry rules  
2. Stop loss  
3. Target  
4. Risk (1%)  
5. Time window  

🏆 Professional Thinking

Amateurs ask:
👉 "Will this trade win?"

Professionals ask:
👉 "Does this follow my system?"

Consistency = Profit.`,
  },

  "psychology-discipline": {
    title: "Psychology & Discipline Mastery",
    content: `Your biggest enemy is not the market.

👉 It’s your mind.

Most traders lose due to:
• Fear  
• Greed  
• FOMO  
• Revenge trading  

🧠 Emotional Cycle

Win → Overconfidence  
Loss → Emotion  
Revenge → Bigger loss  

Cycle repeats → Account gone.

⚙️ Discipline Means:

• Follow rules always  
• Accept losses calmly  
• Execute system blindly  

📉 Biggest Mistakes

❌ Overtrading  
❌ Early exits  
❌ Holding losses  
❌ Breaking rules  

✔ Professional Behavior

• Trade less  
• Risk fixed  
• Stay calm  
• Follow system  

👉 Trade like a machine.

🏆 Final Truth

You don’t lose because of the market.

You lose because:
• No discipline  
• Emotional decisions  

👉 Master your mind = consistent profits.`,
  },
};

/* =========================
   PAGE COMPONENT
========================= */
export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>; // ✅ IMPORTANT FIX
}) {
  const { slug } = await params; // ✅ MUST await

  const resource = resources[slug];

  if (!resource) return notFound();

  return (
    <div className="min-h-screen bg-[#0B1C2D] text-white px-6 py-28">
      <div className="max-w-3xl mx-auto">

        {/* BACK */}
        <Link
          href="/resources"
          className="text-sm text-gray-400 hover:text-white mb-6 inline-block"
        >
          ← Back to Resources
        </Link>

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          {resource.title}
        </h1>

        {/* CONTENT */}
        <div className="text-gray-300 leading-relaxed text-lg space-y-5 whitespace-pre-line">
          {resource.content}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Trade Like a Professional?
          </h3>

          <p className="text-gray-400 mb-6">
            Learn structured trading with real mentorship and systems.
          </p>

          <Link
            href="/courses"
            className="inline-block bg-[#C6A75E] text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Upgrade to Full Program 🚀
          </Link>
        </div>

      </div>
    </div>
  );
}