export default function MarqueeStrip() {
  const items = [
    { text: 'Privacy', italic: true, cream: true },
    { text: 'Autonomous agents', italic: false, cream: false },
    { text: 'zk-SNARKs', italic: true, cream: true },
    { text: 'Zcash layer stack', italic: false, cream: false },
    { text: 'Shielded value', italic: true, cream: true },
    { text: 'Encrypted compute', italic: false, cream: false },
    { text: 'Self-custody', italic: true, cream: true },
    { text: 'Agent identity', italic: false, cream: false },
    { text: 'On-chain', italic: true, cream: true },
    { text: 'For your agents', italic: false, cream: false },
  ];

  return (
    <div className="w-full h-[64px] border-y border-[rgba(239,233,221,0.12)] overflow-hidden flex items-center relative select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap will-change-transform">
        {/* Track 1 */}
        <div className="flex items-center gap-7 pr-7">
          {items.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-7">
              <span
                className={`font-display text-[22px] tracking-tight ${
                  item.cream ? 'text-[#EFE9DD]' : 'text-[rgba(239,233,221,0.55)]'
                } ${item.italic ? 'italic font-normal' : 'font-normal'}`}
              >
                {item.text}
              </span>
              <span className="text-[#F3DFA8] text-xs">✦</span>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless loop) */}
        <div className="flex items-center gap-7 pr-7" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center gap-7">
              <span
                className={`font-display text-[22px] tracking-tight ${
                  item.cream ? 'text-[#EFE9DD]' : 'text-[rgba(239,233,221,0.55)]'
                } ${item.italic ? 'italic font-normal' : 'font-normal'}`}
              >
                {item.text}
              </span>
              <span className="text-[#F3DFA8] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
