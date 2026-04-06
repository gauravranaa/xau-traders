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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const resource = resources[slug];

  if (!resource) return notFound();

  return (
    <div className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-2xl mx-auto">

        {/* BACK */}
        <Link
          href="/resources"
          className="text-sm text-gray-500 hover:underline mb-6 inline-block"
        >
          ← Back
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {resource.title}
        </h1>

        {/* CONTENT */}
        <div className="text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
          {resource.content}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/courses"
            className="text-green-600 font-semibold hover:underline"
          >
            Explore Courses →
          </Link>
        </div>

      </div>
    </div>
  );
}