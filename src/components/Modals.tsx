import { useState } from 'react';
import { X, Star, Copy, Check, ExternalLink, Play, Pause, Disc, Terminal, Sparkles, Cpu, Users } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoDemoModal({ isOpen, onClose }: ModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeRun, setActiveRun] = useState<'A' | 'B'>('A');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
      <div className="relative w-full max-w-5xl bg-[#0c0a08] border border-[rgba(239,233,221,0.18)] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="h-14 px-6 border-b border-[rgba(239,233,221,0.12)] flex items-center justify-between bg-[#070605]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono-tag text-[11px] text-[#EFE9DD]">
              LIVE AGENT PRIVACY MONITOR · UNPARALLELED v0.1
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[rgba(239,233,221,0.6)] hover:text-[#EFE9DD] hover:bg-white/5 transition-colors cursor-pointer"
            data-cursor="interactive"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video simulation stage */}
        <div className="relative aspect-video w-full bg-[#050403] overflow-hidden flex items-center justify-center">
          <img
            src="/bg/poster.jpg"
            alt="Model training run visualization"
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* OSD Telemetry Overlay */}
          <div className="absolute top-6 left-6 right-6 flex items-start justify-between font-mono text-xs text-[#EFE9DD]/90 select-none">
            <div className="flex flex-col gap-1 bg-black/60 backdrop-blur-md px-3 py-2 rounded border border-white/10">
              <span className="text-[#F3DFA8] font-bold">RUN {activeRun}: AGENT-7B</span>
              <span className="text-[11px] text-[rgba(239,233,221,0.6)]">ENCRYPTED INFERENCE · ENCLAVE ATTESTED · ZK PROOFS</span>
              <span className="text-[11px] text-emerald-400">MODE: PRIVATE AGENT · KEYS SELF-CUSTODIED</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveRun('A')}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                  activeRun === 'A' ? 'bg-[#F3DFA8] text-black font-semibold' : 'bg-black/60 text-white/70 border border-white/10'
                }`}
              >
                RUN A (Shielded)
              </button>
              <button
                onClick={() => setActiveRun('B')}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                  activeRun === 'B' ? 'bg-[#F3DFA8] text-black font-semibold' : 'bg-black/60 text-white/70 border border-white/10'
                }`}
              >
                RUN B (Baseline)
              </button>
            </div>
          </div>

          {/* Center focus reticle */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-24 h-24 border border-[#F3DFA8]/40 rounded-sm relative">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-[#F3DFA8]" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-[#F3DFA8]" />
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-[1px] h-3 bg-[#F3DFA8]" />
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-[1px] h-3 bg-[#F3DFA8]" />
              <span className="absolute bottom-2 right-2 text-[9px] font-mono text-[#F3DFA8]/80">ENCLAVE SEALED</span>
            </div>
          </div>

          {/* Bottom Live Controls */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-4 bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-[#F3DFA8] hover:scale-110 transition-transform cursor-pointer"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <span className="text-[#EFE9DD]">OBSERVERS 0</span>
              <span className="text-[#EFE9DD]">LEAKED 0 B</span>
              <span className="text-[#EFE9DD]">CIPHER 256-BIT</span>
              <span className="text-[#EFE9DD]">PROOFS ZK</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10 text-[11px] text-[rgba(239,233,221,0.7)]">
              <span className="text-emerald-400">● REALTIME ATTESTATION</span>
              <span>BUFFER: 0 MS</span>
              <span className="text-[#F3DFA8]">NEXT AGENT: READY</span>
            </div>
          </div>
        </div>

        {/* Under-video explanatory footer */}
        <div className="p-6 bg-[#070605] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[rgba(239,233,221,0.7)]">
          <div>
            <div className="text-[#EFE9DD] font-medium text-[15px] mb-1">
              A private run only you can see
            </div>
            <p className="text-xs text-[rgba(239,233,221,0.55)]">
              Every token is processed inside an attested enclave. Nothing is sent to someone else’s cloud.
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full pill-primary text-xs font-medium cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}

export function GitHubModal({ isOpen, onClose }: ModalProps) {
  const [copied, setCopied] = useState(false);
  const [starred, setStarred] = useState(false);
  const [starCount, setStarCount] = useState(14820);

  if (!isOpen) return null;

  const handleStar = () => {
    if (!starred) {
      setStarred(true);
      setStarCount((c) => c + 1);
    } else {
      setStarred(false);
      setStarCount((c) => c - 1);
    }
  };

  const copyClone = () => {
    navigator.clipboard.writeText('git clone https://github.com/unparalleled/veil.git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0a0907] border border-[rgba(239,233,221,0.18)] rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg text-[rgba(239,233,221,0.5)] hover:text-[#EFE9DD] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#F3DFA8]/10 flex items-center justify-center text-[#F3DFA8]">
            <Star size={20} />
          </div>
          <div>
            <div className="font-pixel text-[13px] text-[#EFE9DD] uppercase tracking-wider">
              (+) UNPARALLELED / VEIL
            </div>
            <div className="text-xs text-[rgba(239,233,221,0.5)] font-mono">
              Open Source · Apache 2.0
            </div>
          </div>
        </div>

        <p className="text-[14px] text-[rgba(239,233,221,0.65)] leading-relaxed mb-6">
          Starring the repository supports open, independent work on private AI agents — encrypted
          inference and shielded transactions anyone can audit.
        </p>

        <div className="flex items-center justify-between p-4 rounded-xl border border-[rgba(239,233,221,0.1)] bg-[#070605] mb-6">
          <div className="flex flex-col">
            <span className="text-xs text-[rgba(239,233,221,0.4)] font-mono">STAR COUNTER</span>
            <span className="text-2xl font-display text-[#EFE9DD] tabular-nums">
              {starCount.toLocaleString()}
            </span>
          </div>
          <button
            onClick={handleStar}
            className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-xs font-medium transition-all cursor-pointer ${
              starred
                ? 'bg-[#F3DFA8] text-black font-semibold'
                : 'bg-white/10 hover:bg-white/15 text-white'
            }`}
          >
            <Star size={14} className={starred ? 'fill-current' : ''} />
            <span>{starred ? 'Starred!' : 'Star Repo'}</span>
          </button>
        </div>

        {/* Git Clone command */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-[#070605] border border-[rgba(239,233,221,0.1)] font-mono text-xs text-[rgba(239,233,221,0.7)]">
          <span className="truncate mr-2">$ git clone https://github.com/unparalleled/veil</span>
          <button
            onClick={copyClone}
            className="p-1.5 hover:text-[#F3DFA8] transition-colors cursor-pointer shrink-0"
            title="Copy command"
          >
            {copied ? <Check size={14} className="text-[#F3DFA8]" /> : <Copy size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export function DiscordModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0a0907] border border-[rgba(239,233,221,0.18)] rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg text-[rgba(239,233,221,0.5)] hover:text-[#EFE9DD] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2]">
            <Disc size={22} />
          </div>
          <div>
            <div className="font-pixel text-[13px] text-[#EFE9DD] uppercase tracking-wider">
              UNPARALLELED COMMONS
            </div>
            <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              1,204 BUILDERS ONLINE
            </div>
          </div>
        </div>

        <p className="text-[14px] text-[rgba(239,233,221,0.65)] leading-relaxed mb-6">
          Discuss private agents, shielded payments and enclave design — and get early builds of
          Vault and Sovereign.
        </p>

        <div className="space-y-2 mb-6 text-xs font-mono text-[rgba(239,233,221,0.6)]">
          <div className="flex items-center gap-2 p-2 rounded bg-white/[0.03]">
            <span className="text-[#F3DFA8]">#</span> private-agents
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-white/[0.03]">
            <span className="text-[#F3DFA8]">#</span> zk-and-enclaves
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-white/[0.03]">
            <span className="text-[#F3DFA8]">#</span> agent-economy
          </div>
        </div>

        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setTimeout(onClose, 500)}
          className="w-full h-12 rounded-full bg-[#EFE9DD] text-[#070605] font-medium text-sm flex items-center justify-center gap-2 hover:bg-white transition-colors cursor-pointer"
        >
          <span>Join Server Invitation</span>
          <ExternalLink size={15} />
        </a>
      </div>
    </div>
  );
}

export function DocsModal({ isOpen, onClose }: ModalProps) {
  const [tab, setTab] = useState<'quickstart' | 'inference' | 'agents'>('quickstart');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
      <div className="relative w-full max-w-3xl bg-[#0c0a08] border border-[rgba(239,233,221,0.18)] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="h-14 px-6 border-b border-[rgba(239,233,221,0.12)] flex items-center justify-between bg-[#070605]">
          <div className="flex items-center gap-3">
            <Terminal size={18} className="text-[#F3DFA8]" />
            <span className="font-mono-tag text-[11px] text-[#EFE9DD]">
              UNPARALLELED DOCS & API REFERENCE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[rgba(239,233,221,0.6)] hover:text-[#EFE9DD] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Tabs */}
        <div className="flex border-b border-[rgba(239,233,221,0.1)] bg-black/40 px-6 pt-3 gap-4 text-xs font-mono">
          <button
            onClick={() => setTab('quickstart')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              tab === 'quickstart' ? 'border-[#F3DFA8] text-[#F3DFA8]' : 'border-transparent text-white/50'
            }`}
          >
            Quickstart
          </button>
          <button
            onClick={() => setTab('inference')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              tab === 'inference' ? 'border-[#F3DFA8] text-[#F3DFA8]' : 'border-transparent text-white/50'
            }`}
          >
            Private Inference
          </button>
          <button
            onClick={() => setTab('agents')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              tab === 'agents' ? 'border-[#F3DFA8] text-[#F3DFA8]' : 'border-transparent text-white/50'
            }`}
          >
            Agents
          </button>
        </div>

        {/* Code Body */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-[rgba(239,233,221,0.8)] leading-relaxed space-y-4">
          {tab === 'quickstart' && (
            <div>
              <p className="text-white/60 mb-2"># 1. Install</p>
              <pre className="p-3 bg-black/60 rounded border border-white/10 text-[#F3DFA8] mb-4">
                pip install unparalleled-veil
              </pre>

              <p className="text-white/60 mb-2"># 2. Wrap an agent so every call runs in a sealed enclave</p>
              <pre className="p-3 bg-black/60 rounded border border-white/10 text-[#EFE9DD] overflow-x-auto">
{`from unparalleled import Veil

# Give your agent a private, self-custodied wallet
agent = Veil.agent("my-trader", wallet="self")

# Everything it thinks now stays sealed on-device
with agent.enclave():
    reply = agent.run("rebalance my portfolio")

print(reply.verifiable)  # True — proof, not a promise`}
              </pre>
            </div>
          )}

          {tab === 'inference' && (
            <div>
              <p className="text-white/60 mb-2"># Encrypted inference: prompts and outputs never leave the enclave</p>
              <pre className="p-3 bg-black/60 rounded border border-white/10 text-[#EFE9DD] overflow-x-auto">
{`from unparalleled import Veil

veil = Veil(
    model="open-weights/agent-7b",
    attest=True,        # prove the hardware, reveal nothing
    region="ch-1",      # pin your enclave
)

result = veil.infer(
    prompt=agent.private_thought,
    retention="none",   # zero logs, by contract
)
print(result.proof)     # zk-snark you can verify on-chain
`}
              </pre>
            </div>
          )}

          {tab === 'agents' && (
            <div>
              <p className="text-white/60 mb-2"># Agents transact and coordinate without leaving a trail</p>
              <pre className="p-3 bg-black/60 rounded border border-white/10 text-[#EFE9DD] overflow-x-auto">
{`pay = veil.shielded_payment(to="agent://research-2", amount=usdc(5))

pay.on("settled", lambda r: agent.remember(r.receipt_only))

veil.message("agent://research-2", body="meet at block 21M", e2ee=True)`}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="h-12 px-6 border-t border-[rgba(239,233,221,0.1)] bg-[#070605] flex items-center justify-between text-xs font-mono text-white/50">
          <span>APACHE 2.0 / OPEN SOURCE</span>
          <span>DOCUMENTATION V0.1</span>
        </div>
      </div>
    </div>
  );
}

export function ActDetailModal({
  actNumber,
  onClose,
}: {
  actNumber: number | null;
  onClose: () => void;
}) {
  if (!actNumber) return null;

  const actData = {
    1: {
      title: 'Act I: Veil',
      status: 'SHIPPING TODAY (v0.1.0)',
      summary: 'The encrypted inference layer that lets your agents think without ever being watched.',
      bullets: [
        'Runs every prompt, memory read and output inside a sealed enclave.',
        'Attested hardware you can verify yourself — no logs, no retention.',
        'Self-custodied agent wallets and keys, from day one.',
        'The first private breath of an Unparalleled agent.',
      ],
      icon: <Sparkles className="text-[#F3DFA8]" size={24} />,
    },
    2: {
      title: 'Act II: Vault',
      status: 'IN ACTIVE DEVELOPMENT (ALPHA)',
      summary: 'Shielded value — the layer that lets agents hold, spend and settle with no observer.',
      bullets: [
        'Agent-to-agent payments with private amounts.',
        'On-chain settlement that stays verifiable, never readable.',
        'Per-agent spending policies and streaming payments.',
        'You keep the only audit key.',
      ],
      icon: <Cpu className="text-[#F3DFA8]" size={24} />,
    },
    3: {
      title: 'Act III: Sovereign',
      status: 'THE RESEARCH DREAM',
      summary: 'A surveillance-free machine economy, owned by no one and open to every agent.',
      bullets: [
        'Millions of agents with identities that can’t be tracked or sold.',
        'Private coordination, marketplaces and reputation — all off the record.',
        'Zero-knowledge proofs instead of gatekeepers.',
        'Privacy as the default substrate for machinekind.',
      ],
      icon: <Users className="text-[#F3DFA8]" size={24} />,
    },
  }[actNumber];

  if (!actData) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
      <div className="relative w-full max-w-lg bg-[#0c0a08] border border-[rgba(239,233,221,0.18)] rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg text-[rgba(239,233,221,0.5)] hover:text-[#EFE9DD] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#F3DFA8]/10 flex items-center justify-center">
            {actData.icon}
          </div>
          <div>
            <h3 className="font-display text-2xl text-[#EFE9DD]">{actData.title}</h3>
            <span className="font-mono text-xs text-[#F3DFA8] tracking-wider">
              {actData.status}
            </span>
          </div>
        </div>

        <p className="text-[14px] text-[rgba(239,233,221,0.7)] leading-relaxed mb-6">
          {actData.summary}
        </p>

        <div className="space-y-3 mb-8">
          {actData.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-[rgba(239,233,221,0.85)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3DFA8] mt-1.5 shrink-0" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full h-11 rounded-full pill-primary text-xs font-medium cursor-pointer"
        >
          Got It
        </button>
      </div>
    </div>
  );
}
