interface FooterProps {
  onOpenStarModal: () => void;
  onOpenDiscordModal: () => void;
  onOpenDocsModal: () => void;
  onSelectAct: (act: number) => void;
}

export default function Footer({
  onOpenStarModal,
  onOpenDiscordModal,
  onOpenDocsModal,
  onSelectAct,
}: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 pt-[180px] sm:pt-[220px] pb-16 page-gutters">
      {/* 4-column grid */}
      <div className="w-full border-t border-[rgba(239,233,221,0.12)] pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Column 1: Brand Wordmark & Tagline */}
        <div className="flex flex-col gap-4">
          <div className="font-pixel text-[17px] text-[#EFE9DD] tracking-[0.16em] uppercase">
            (+) UNPARALLELED
          </div>
          <p className="text-[15px] sm:text-[16px] text-[rgba(239,233,221,0.55)] max-w-[280px] leading-relaxed">
            Privacy for the agents that think for you.
          </p>
        </div>

        {/* Column 2: PRODUCT */}
        <div className="flex flex-col gap-4 lg:items-end">
          <div className="lg:w-[140px] flex flex-col gap-4">
            <span className="font-mono-tag text-[11px] text-[rgba(239,233,221,0.32)] tracking-[0.22em]">
              PRODUCT
            </span>
            <div className="flex flex-col gap-2.5 text-[16px] sm:text-[17px]">
              <button
                onClick={() => onSelectAct(1)}
                className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] text-left transition-colors cursor-pointer"
                data-cursor="interactive"
              >
                Veil
              </button>
              <button
                onClick={() => onSelectAct(2)}
                className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] text-left transition-colors cursor-pointer"
                data-cursor="interactive"
              >
                Vault
              </button>
              <button
                onClick={() => onSelectAct(3)}
                className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] text-left transition-colors cursor-pointer"
                data-cursor="interactive"
              >
                Sovereign
              </button>
              <button
                onClick={() => scrollTo('roadmap')}
                className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] text-left transition-colors cursor-pointer"
                data-cursor="interactive"
              >
                Roadmap
              </button>
              <button
                onClick={onOpenDocsModal}
                className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] text-left transition-colors cursor-pointer"
                data-cursor="interactive"
              >
                Docs
              </button>
            </div>
          </div>
        </div>

        {/* Column 3: COMMUNITY */}
        <div className="flex flex-col gap-4 lg:items-end">
          <div className="lg:w-[140px] flex flex-col gap-4">
            <span className="font-mono-tag text-[11px] text-[rgba(239,233,221,0.32)] tracking-[0.22em]">
              COMMUNITY
            </span>
            <div className="flex flex-col gap-2.5 text-[16px] sm:text-[17px]">
              <button
                onClick={onOpenStarModal}
                className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] text-left transition-colors cursor-pointer"
                data-cursor="interactive"
              >
                GitHub
              </button>
              <button
                onClick={onOpenDiscordModal}
                className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] text-left transition-colors cursor-pointer"
                data-cursor="interactive"
              >
                Discord
              </button>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] text-left transition-colors cursor-pointer"
                data-cursor="interactive"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: COMPANY (right-aligned to gutter) */}
        <div className="flex flex-col gap-4 lg:items-end">
          <div className="lg:w-[140px] flex flex-col gap-4">
            <span className="font-mono-tag text-[11px] text-[rgba(239,233,221,0.32)] tracking-[0.22em]">
              COMPANY
            </span>
            <div className="flex flex-col gap-2.5 text-[16px] sm:text-[17px]">
              <span className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] cursor-pointer transition-colors">
                Careers
              </span>
              <a
                href="mailto:hello@unparalleled.xyz"
                className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] cursor-pointer transition-colors"
                data-cursor="interactive"
              >
                Contact
              </a>
              <span className="text-[rgba(239,233,221,0.55)] hover:text-[#EFE9DD] cursor-pointer transition-colors">
                Privacy
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="mt-20 pt-8 border-t border-[rgba(239,233,221,0.08)] flex flex-col sm:flex-row items-center justify-between text-[12px] font-mono text-[rgba(239,233,221,0.35)] gap-4">
        <div>© {new Date().getFullYear()} UNPARALLELED. ALL RIGHTS RESERVED.</div>
        <div>OPEN SOURCE · PRIVATE BY DEFAULT</div>
      </div>
    </footer>
  );
}
