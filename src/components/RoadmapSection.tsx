import { useEffect, useRef, useState } from 'react';

export default function RoadmapSection() {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let minDistance = Infinity;
      let closestIdx = 0;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - centerY);

        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = index;
        }
      });

      setActiveCardIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      num: '01',
      title: 'Shield your first agent',
      status: '● SHIPPING TODAY',
      isShippingToday: true,
      subtitle: 'Veil, our encrypted inference layer — the first private breath for an Unparalleled agent.',
      isCard01: true,
    },
    {
      num: '02',
      title: 'Private inference at scale',
      status: '○ ON THE WAY',
      isShippingToday: false,
      subtitle: 'Privacy that keeps up with production traffic, not just demos.',
      bullets: [
        { text: 'Sub-50ms shielding overhead', shipped: false },
        { text: 'Batch thousands of agent calls in parallel', shipped: false },
        { text: 'Region-pinned, attested enclaves', shipped: false },
        { text: 'Reproducible attestation reports', shipped: false },
        { text: 'Auto-scale with demand', shipped: false },
        { text: 'No single point of decryption', shipped: false },
        { text: 'Spend caps per agent', shipped: false },
        { text: 'Round-the-clock privacy monitoring', shipped: false },
      ],
    },
    {
      num: '03',
      title: 'Shielded value & payments',
      status: '○ ON THE WAY',
      isShippingToday: false,
      subtitle: 'Your agents transact, get paid and settle without leaving a trail.',
      bullets: [
        { text: 'Shielded agent-to-agent payments', shipped: false },
        { text: 'On-chain settlement, private amounts', shipped: false },
        { text: 'Gas abstraction for autonomous agents', shipped: false },
        { text: 'Per-agent spending policies', shipped: false },
        { text: 'Streaming payments for services', shipped: false },
        { text: 'Auditable by you alone', shipped: false },
      ],
    },
    {
      num: '04',
      title: 'Verifiable agent identity',
      status: '○ ON THE WAY',
      isShippingToday: false,
      subtitle: 'Prove who your agent is — without revealing who it belongs to.',
      bullets: [
        { text: 'Self-sovereign DIDs for every agent', shipped: false },
        { text: 'Zero-knowledge credentials', shipped: false },
        { text: 'Reputation without doxxing', shipped: false },
        { text: 'Selective disclosure', shipped: false },
        { text: 'Revocable, scoped permissions', shipped: false },
        { text: 'No central registry to breach', shipped: false },
      ],
    },
    {
      num: '05',
      title: 'Private coordination',
      status: '○ ON THE WAY',
      isShippingToday: false,
      subtitle: 'Agents talk, plan and team up completely off the record.',
      bullets: [
        { text: 'End-to-end encrypted messaging', shipped: false },
        { text: 'Private multi-agent swarms', shipped: false },
        { text: 'Confidential task marketplaces', shipped: false },
        { text: 'Encrypted shared memory', shipped: false },
        { text: 'Anonymous reputation signals', shipped: false },
        { text: 'Zero metadata leakage', shipped: false },
      ],
    },
    {
      num: '06',
      title: 'Plug into your stack',
      status: '○ ON THE WAY',
      isShippingToday: false,
      subtitle: 'One privacy layer beneath every agent framework and chain.',
      bullets: [
        { text: 'LangChain, CrewAI & AutoGPT', shipped: false },
        { text: 'ElizaOS & agent runtimes', shipped: false },
        { text: 'EVM, Solana & L2 settlement', shipped: false },
        { text: 'OpenAI, Anthropic & open weights', shipped: false },
        { text: 'Encrypted vector DBs & storage', shipped: false },
        { text: 'Wallets, MPC & hardware enclaves', shipped: false },
        { text: 'CI, monitoring & alerts', shipped: false },
        { text: 'Community models & environments', shipped: false },
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 md:py-36 page-gutters">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-14 border-b border-[rgba(239,233,221,0.12)]">
        <div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-[72px] leading-[1.04] tracking-tight text-[#EFE9DD]">
            From a single shielded agent to a{' '}
            <span className="italic text-[#F3DFA8] gold-glow font-display">private machine economy.</span>
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] text-[rgba(239,233,221,0.55)]">
            Veil is live today. The rest is coming — in the open.
          </p>
        </div>

        <div className="flex flex-col md:items-end justify-between self-stretch gap-6 select-none">
          {/* Eyebrow */}
          <div className="font-mono-tag tracking-[0.22em] text-[12px]">
            <span className="text-[#EFE9DD]">02</span>{' '}
            <span className="text-[rgba(239,233,221,0.32)]">THE ROAD AHEAD</span>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 font-mono-tag text-[11px] text-[rgba(239,233,221,0.55)]">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F3DFA8]" />
              HERE TODAY
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border border-[rgba(239,233,221,0.4)]" />
              ON THE WAY
            </span>
          </div>
        </div>
      </div>

      {/* Stacked Cards */}
      <div className="flex flex-col">
        {cards.map((card, index) => {
          const isActive = activeCardIndex === index;

          return (
            <div
              key={card.num}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`w-full py-12 md:py-16 border-b border-[rgba(239,233,221,0.12)] transition-all duration-500 px-2 sm:px-6 md:px-8 rounded-2xl ${
                isActive
                  ? 'bg-[rgba(239,233,221,0.03)] opacity-100'
                  : 'bg-transparent opacity-55'
              }`}
            >
              {/* Top row: Numeral + Title on Left, Status on Right */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-display italic text-2xl sm:text-3xl text-[#F3DFA8] gold-glow select-none">
                    {card.num}
                  </span>
                  <h3
                    className={`font-display text-3xl sm:text-4xl md:text-[38px] leading-tight tracking-tight transition-colors ${
                      isActive ? 'text-[#EFE9DD]' : 'text-[rgba(239,233,221,0.85)]'
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>

                <div className="font-mono-tag text-[11px] sm:text-[12px] tracking-[0.2em] shrink-0 select-none">
                  {card.isShippingToday ? (
                    <span className="text-[#F3DFA8] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F3DFA8]" />
                      SHIPPING TODAY
                    </span>
                  ) : (
                    <span className="text-[rgba(239,233,221,0.4)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full border border-[rgba(239,233,221,0.3)]" />
                      ON THE WAY
                    </span>
                  )}
                </div>
              </div>

              {/* Subtitle */}
              <p className="mt-3 text-[15px] sm:text-[16px] text-[rgba(239,233,221,0.55)] ml-0 sm:ml-12 max-w-[620px]">
                {card.subtitle}
              </p>

              {/* Bullets: Special layout for Card 01 vs general 2-column cards */}
              {card.isCard01 ? (
                <div className="mt-10 ml-0 sm:ml-12 flex flex-col gap-8">
                  {/* Group 1 & 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* ENCLAVES & INFERENCE */}
                    <div>
                      <div className="font-mono-tag text-[11px] text-[rgba(239,233,221,0.35)] tracking-[0.2em] mb-4">
                        ENCLAVES & INFERENCE
                      </div>
                      <div className="flex flex-col gap-3">
                        {[
                          'Run every prompt inside a sealed enclave',
                          'Memory encrypted in flight and at rest',
                          'Attested hardware you can verify yourself',
                          'No logs, no training on your agent\'s data',
                        ].map((bullet, i) => (
                          <div key={i} className="flex items-center gap-3 text-[16px] sm:text-[17px] text-[#EFE9DD]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F3DFA8] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AGENTS & KEYS */}
                    <div>
                      <div className="font-mono-tag text-[11px] text-[rgba(239,233,221,0.35)] tracking-[0.2em] mb-4">
                        AGENTS & KEYS
                      </div>
                      <div className="flex flex-col gap-3">
                        {[
                          'Self-custodied wallets for every agent',
                          'Drop-in with your existing framework',
                          'One-line SDK, any model',
                          'Watch every private call live',
                        ].map((bullet, i) => (
                          <div key={i} className="flex items-center gap-3 text-[16px] sm:text-[17px] text-[#EFE9DD]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F3DFA8] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hairline divider before MODELS */}
                  <div className="w-full h-[1px] bg-[rgba(239,233,221,0.08)] pt-2">
                    <div className="font-mono-tag text-[11px] text-[rgba(239,233,221,0.35)] tracking-[0.2em] mb-4">
                      SUPPORTED TODAY
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Left: Filled */}
                      <div className="flex flex-col gap-3">
                        {[
                          'Open-weights models — full support',
                          'Hosted APIs — proxied privately',
                          'Local models — fully offline',
                        ].map((bullet, i) => (
                          <div key={i} className="flex items-center gap-3 text-[16px] sm:text-[17px] text-[#EFE9DD]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F3DFA8] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Right: Hollow */}
                      <div className="flex flex-col gap-3">
                        {[
                          'Autonomous trading agents',
                          'Multi-agent swarms',
                          'On-chain agent runtimes',
                        ].map((bullet, i) => (
                          <div key={i} className="flex items-center gap-3 text-[16px] sm:text-[17px] text-[rgba(239,233,221,0.55)]">
                            <span className="w-2.5 h-2.5 rounded-full border border-[rgba(239,233,221,0.35)] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-8 ml-0 sm:ml-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5">
                  {card.bullets?.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className={`flex items-center gap-3 text-[16px] sm:text-[17px] ${
                        bullet.shipped ? 'text-[#EFE9DD]' : 'text-[rgba(239,233,221,0.55)]'
                      }`}
                    >
                      {bullet.shipped ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F3DFA8] shrink-0" />
                      ) : (
                        <span className="w-2.5 h-2.5 rounded-full border border-[rgba(239,233,221,0.35)] shrink-0" />
                      )}
                      <span>{bullet.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
