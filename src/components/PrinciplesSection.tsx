import { useState } from 'react';

export default function PrinciplesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const principles = [
    {
      num: '/01',
      title: 'Privacy is a right, not a feature',
      description:
        'Humans spent a century winning privacy. Your agents deserve the same shield — by default, not as a premium tier.',
    },
    {
      num: '/02',
      title: 'Verify, don’t trust',
      description:
        'Every enclave is attested, every settlement provable. Open source, zero-knowledge, and auditable by anyone.',
    },
    {
      num: '/03',
      title: 'Self-custody or nothing',
      description:
        'Agents hold their own keys. No custodian, no freeze button, no one who can read your agent’s mind or move its money.',
    },
    {
      num: '/04',
      title: 'Built for machinekind',
      description:
        'The next wave of the web isn’t only for people. We build for the agents that will live, work and trade inside it.',
    },
  ];

  return (
    <section id="principles" className="py-24 md:py-36 page-gutters">
      {/* Eyebrow */}
      <div className="font-mono-tag tracking-[0.24em] text-[12px] pb-12 border-b border-[rgba(239,233,221,0.12)] flex items-center gap-3 select-none">
        <span className="text-[#EFE9DD]">03</span>
        <span className="text-[rgba(239,233,221,0.32)]">PRINCIPLES</span>
      </div>

      {/* Principles Rows */}
      <div className="flex flex-col">
        {principles.map((item, index) => {
          const isHovered = hoveredIdx === index;

          return (
            <div
              key={item.num}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              data-cursor="interactive"
              className={`w-full py-10 sm:py-12 border-b border-[rgba(239,233,221,0.12)] grid grid-cols-1 md:grid-cols-[160px_460px_1fr] gap-6 md:gap-8 items-start cursor-default transition-all duration-300 ${
                isHovered
                  ? 'bg-[rgba(243,223,168,0.04)] px-4 sm:px-6 rounded-xl'
                  : 'bg-transparent px-0'
              }`}
            >
              {/* Numeral: italic serif */}
              <div
                className={`font-display italic text-2xl sm:text-[26px] transition-colors duration-300 select-none ${
                  isHovered ? 'text-[#F3DFA8] gold-glow-subtle' : 'text-[rgba(239,233,221,0.4)]'
                }`}
              >
                {item.num}
              </div>

              {/* Title */}
              <h3
                className={`font-display text-3xl sm:text-[36px] leading-tight tracking-tight transition-colors duration-300 ${
                  isHovered ? 'text-[#ffffff]' : 'text-[#EFE9DD]'
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] sm:text-[17px] leading-[1.62] text-[rgba(239,233,221,0.55)] max-w-[540px]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
