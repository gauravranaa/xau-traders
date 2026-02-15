type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;

  const content: Record<string, { title: string; body: string }> = {
    "market-psychology": {
      title: "Market Psychology",
      body: `
📘 The Truth About Market Psychology: Why Most Traders Fail Before the Market Even Moves

Trading is not a strategy problem.
It is not a technical indicator problem.
It is not even a capital problem.

It is a psychology problem.

The market does not defeat traders.
Their own emotions do.

1️⃣ The Emotional Cycle of a Retail Trader

Most traders start with excitement.
Then comes early profit.
Then overconfidence.
Then loss.
Then revenge trading.
Then system hopping.

The problem was never the system.
It was emotional instability.

2️⃣ Fear and Greed

Fear makes you:
- Exit early
- Skip good setups
- Avoid re-entry

Greed makes you:
- Increase lot size
- Remove stop-loss
- Overtrade

The market rewards discipline.
It punishes emotion.

3️⃣ Discipline Over Motivation

Motivation is temporary.
Discipline is permanent.

Professionals rely on:
- Fixed risk per trade
- Daily loss limits
- Journaling
- Pre-defined checklists

Emotion-free systems create consistent results.

Final Thought:

Master your psychology,
and trading becomes structured.
      `,
    },

    "risk-management": {
      title: "Risk Management",
      body: `
📘 Risk Management: The Real Secret Behind Long-Term Trading Success

Most traders search for high win rates.
Professionals search for controlled risk.

Survival is success in trading.

1️⃣ Why Risk Is More Important Than Strategy

If you risk 20% per trade,
5 losses = account destroyed.

If you risk 1% per trade,
5 losses = small drawdown.

Risk small. Stay alive.

2️⃣ The 1% Rule

Professional traders rarely risk more than 1–2% per trade.

Markets are unpredictable.
Even good setups fail.

Small risk = emotional stability.

3️⃣ Risk-to-Reward Ratio

Risk 1 to make 3.
Even 40% win rate becomes profitable.

Most beginners do opposite.
They risk more than they gain.

That is mathematically destructive.

4️⃣ Daily Loss Limit

Stop trading after 2–3 losses.
Emotional control drops after losses.

Protect mental capital.

Final Thought:

You do not need a magical strategy.

You need:
Discipline.
Risk control.
Patience.

Boring traders survive.
Surviving traders become profitable.
      `,
    },
  };

  const post = content[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Post not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {post.title}
        </h1>

        {/* Accent Line */}
        <div className="w-20 h-1 bg-blue-500 mb-12"></div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none text-lg leading-relaxed whitespace-pre-line text-gray-300">
          {post.body}
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800 mt-20 pt-6 text-sm text-gray-500">
          XAU Traders • Educational Insight
        </div>

      </div>

    </div>
  );
}
