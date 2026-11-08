import { AnimatedRays } from "@/components/ui/animated-rays";
import { MorphText } from "@/components/ui/morph-text";
import { GlowBorderCard } from "@/components/ui/glow-border-card";
import { Skiper16 } from "@/components/ui/skiper-ui/skiper16";
import { SiteNav, Logo } from "@/components/site-nav";

const EMAIL = "hello@plugpakka.com"; // TODO: create this mailbox before going live

const STATUSES = [
  ["Working", "#22c55e"],
  ["Not working", "#ff5d5d"],
  ["Occupied", "#ffb547"],
  ["Blocked by a non-EV", "#a78bfa"],
  ["Doesn't exist", "#64748b"],
] as const;

const STEPS = [
  { no: "01", color: "#b4f544", title: "Check before you drive", text: "Open the map and see each charger's status, how recently it was checked, and the latest photo." },
  { no: "02", color: "#4f7cff", title: "Someone nearby verifies it", text: "People at the charger take a photo with the in-app camera and answer a few quick questions. They have to be right there; we check their location." },
  { no: "03", color: "#a78bfa", title: "Verifiers get rewarded", text: "Chargers that haven't been checked in a while carry a bounty. The first accurate check claims it, so the map stays fresh." },
];

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded-lg focus:bg-lime focus:px-3 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <SiteNav />

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-16">
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <AnimatedRays />
          </div>
          <div className="mx-auto grid w-[min(1120px,100%-32px)] grid-cols-[minmax(0,1fr)] justify-items-center gap-6 py-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-300 backdrop-blur">
              <span className="size-2 rounded-full bg-lime motion-safe:animate-pulse" aria-hidden="true" />
              Starting in Mumbai · Early access
            </span>

            <h1 className="font-display font-bold tracking-tight">
              <span className="sr-only">Is that charger working, broken or blocked? Know before you go.</span>
              <span aria-hidden="true" className="block text-[clamp(2.25rem,6vw,4.5rem)] leading-none">
                Is that charger
              </span>
              <span aria-hidden="true" className="block">
                <MorphText
                  words={["working?", "broken?", "blocked?"]}
                  interval={2400}
                  fontSize="clamp(3rem, 12vw, 8rem)"
                  fontFamily="var(--font-display)"
                  className="w-full"
                  textClassName="w-full text-lime"
                />
              </span>
              <span aria-hidden="true" className="mt-2 block bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-[clamp(1.5rem,3.5vw,2.5rem)] text-transparent">
                Know before you go.
              </span>
            </h1>

            <p className="max-w-xl text-lg text-neutral-300">
              PlugPakka shows the real status of public EV chargers, checked on the spot by people nearby, with a photo to prove it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#early" className="rounded-full bg-lime px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgb(180_245_68/0.6)]">
                Get early access →
              </a>
              <a href="#how" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition hover:border-white/30">
                See how it works
              </a>
            </div>
            <p className="text-sm text-neutral-400" lang="hi">
              <strong className="text-white">पक्का</strong> = confirmed. Charger चालू है या नहीं, जाने से पहले पता करें।
            </p>
          </div>
        </section>

        {/* ---------- Problem + product preview ---------- */}
        <section className="py-28">
          <div className="mx-auto grid w-[min(1120px,100%-32px)] items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow>The problem</Eyebrow>
              <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-tight">Charger maps tell you where. Not whether.</h2>
              <p className="mt-4 text-lg text-neutral-400">
                Every EV driver knows the feeling: you plan around a charger, drive there, and it&apos;s dead, taken, or blocked by a parked car.
              </p>
              <div className="mt-8 grid gap-3">
                <Problem icon="🔌" title="Broken, but still listed" text="A charger can stay “available” on a map long after its screen has gone dark." />
                <Problem icon="🚗" title="Blocked or busy" text="Even a working charger is useless when a petrol car is parked in its spot." />
                <Problem icon="⏱️" title="Time is money" text="For fleet and taxi drivers, every wasted trip is lost rides and lost income." />
              </div>
            </div>
            <PhoneMockup />
          </div>
          <ul className="mx-auto mt-20 flex w-[min(1120px,100%-32px)] flex-wrap justify-center gap-3" aria-label="Statuses PlugPakka reports">
            {STATUSES.map(([label, color]) => (
              <li key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm">
                <span className="size-2.5 rounded-full" style={{ background: color }} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- How it works: Skiper UI card stack ---------- */}
        <section id="how" className="scroll-mt-16 pt-28">
          <div className="mx-auto w-[min(1120px,100%-32px)]">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-tight">Real people. Real photos. Right now.</h2>
          </div>
          <Skiper16
            cards={STEPS.map((s) => (
              <article key={s.no} className="flex h-full flex-1 flex-col justify-between gap-8 border border-white/10 bg-gradient-to-br from-[#141b2b] to-[#0b0f18] p-8 sm:p-10">
                <span className="font-display text-7xl font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_var(--c)]" style={{ "--c": s.color } as React.CSSProperties} aria-hidden="true">
                  {s.no}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold">{s.title}</h3>
                  <p className="mt-3 max-w-lg text-neutral-400">{s.text}</p>
                </div>
              </article>
            ))}
          />
        </section>

        {/* ---------- Who it's for ---------- */}
        <section id="who" className="scroll-mt-16 py-28">
          <div className="mx-auto w-[min(1120px,100%-32px)]">
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-tight">Built for everyone who depends on a charger.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <Card icon="🧑‍✈️" title="EV drivers">
                <Ticks items={["See status before you leave", "Know how fresh the check is", "Tell others you're heading there"]} />
              </Card>
              <Card icon="🚕" title="Fleets & operators">
                <Ticks items={["Fewer wasted trips for drivers", "A clearer picture of the chargers your drivers use", "Let's talk about a pilot"]} />
              </Card>
              <Card icon="💸" title="Verifiers" className="md:col-span-2">
                <div className="grid items-center gap-6 md:grid-cols-2">
                  <p className="text-neutral-400">
                    Near a charger anyway? Check it in under a minute and earn rewards for accurate reports. Honest checks build your reputation; wrong ones cost it.
                  </p>
                  <p className="bg-gradient-to-r from-lime to-volt bg-clip-text font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-none text-transparent" aria-hidden="true">
                    Check. Earn. Repeat.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ---------- Trust ---------- */}
        <section id="trust" className="scroll-mt-16 pb-28">
          <div className="mx-auto w-[min(1120px,100%-32px)]">
            <Eyebrow>Why you can trust it</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-tight">Built so cheating doesn&apos;t pay.</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card icon="📷" title="Live camera only">No gallery uploads. Every photo is taken in the app, on the spot.</Card>
              <Card icon="📍" title="Must be there">Your location has to be right next to the charger to submit a check.</Card>
              <Card icon="⚖️" title="Conflicts get reviewed">When two people disagree, rewards are held until the truth is clear.</Card>
              <Card icon="⭐" title="Reputation counts">Reliable verifiers carry more weight. Bad reports lose it.</Card>
            </div>
          </div>
        </section>

        {/* ---------- Early access: Vengeance UI glow card ---------- */}
        <section id="early" className="scroll-mt-16 pb-28">
          <div className="mx-auto w-[min(1120px,100%-32px)]">
            <GlowBorderCard
              width="100%"
              height="auto"
              borderRadius="2rem"
              animationDuration={6}
              gradientColors={["#b4f544", "#d9ff8a", "#4f7cff", "#7b9cff", "#a78bfa", "#b4f544", "#4f7cff", "#22c55e", "#a78bfa", "#b4f544"]}
              className="bg-[#0d111a]/90"
            >
              <div className="grid justify-items-center gap-5 px-2 py-14 text-center sm:py-20">
                <Eyebrow>Early access</Eyebrow>
                <h2 className="font-display text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-tight">Never drive to a dead charger again.</h2>
                <p className="max-w-xl text-neutral-400">
                  We&apos;re getting PlugPakka ready in Mumbai. Drivers, fleets and charger operators: say hello and we&apos;ll keep you posted.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href={`mailto:${EMAIL}?subject=PlugPakka%20early%20access`} className="rounded-full bg-lime px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5">
                    Email us for early access
                  </a>
                  <a href={`mailto:${EMAIL}?subject=PlugPakka%20fleet%20pilot`} className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:border-white/30">
                    Fleet pilot enquiry
                  </a>
                </div>
              </div>
            </GlowBorderCard>
          </div>
        </section>
      </main>

      <footer className="pb-14 text-sm text-neutral-400">
        <div className="mx-auto flex w-[min(1120px,100%-32px)] flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <span className="flex items-center gap-2">
            <Logo size={22} /> © 2026 PlugPakka. Made in India.
          </span>
          <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
          {/* Skiper UI's free licence requires this credit. */}
          <span className="w-full text-xs text-neutral-400">
            UI components from <a className="underline hover:text-white" href="https://skiper-ui.com">Skiper UI</a> and{" "}
            <a className="underline hover:text-white" href="https://www.vengenceui.com">Vengeance UI</a>.
          </span>
        </div>
      </footer>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lime">{children}</p>;
}

function Card({ icon, title, children, className = "" }: { icon: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <article className={`rounded-3xl border border-white/10 bg-[#0d111a] p-7 transition-colors hover:border-lime/40 ${className}`}>
      <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-2xl" aria-hidden="true">{icon}</span>
      <h3 className="mb-2 mt-5 font-display text-xl font-bold">{title}</h3>
      <div className="text-neutral-400">{children}</div>
    </article>
  );
}

function Problem({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <span className="text-2xl" aria-hidden="true">{icon}</span>
      <div>
        <h3 className="font-display font-bold">{title}</h3>
        <p className="text-neutral-400">{text}</p>
      </div>
    </div>
  );
}

function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 grid gap-2">
      {items.map((t) => (
        <li key={t}><span className="mr-2 font-bold text-lime" aria-hidden="true">✓</span>{t}</li>
      ))}
    </ul>
  );
}

/** A drawn (not screenshot) preview of the app: map pins + a verified charger card. */
function PhoneMockup() {
  const pins = [
    ["46%", "34%", "#16a34a"], ["20%", "24%", "#dc2626"], ["70%", "46%", "#d97706"], ["28%", "54%", "#16a34a"], ["76%", "22%", "#64748b"],
  ];
  return (
    <div aria-hidden="true" className="mx-auto aspect-[9/18.5] w-[min(300px,100%)] rounded-[44px] bg-gradient-to-br from-[#2a3142] to-[#0b0e15] p-3 shadow-[0_40px_120px_-30px_rgb(79_124_255/0.45)] ring-1 ring-white/10">
      <div className="relative h-full overflow-hidden rounded-[34px] bg-[#e6ebf2] text-[13px] text-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_46%,#fff_46%_49%,transparent_49%),linear-gradient(25deg,transparent_60%,#fff_60%_62.5%,transparent_62.5%),linear-gradient(170deg,transparent_30%,#d5e9d0_30%_42%,transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-slate-900 px-4 pb-2.5 pt-7 font-display text-sm font-semibold text-white">
          <span className="size-4 rounded bg-lime" /> PlugPakka
        </div>
        {pins.map(([l, t, c], i) => (
          <span key={i} className={`absolute size-6 -rotate-45 rounded-[50%_50%_50%_0] border-2 border-white shadow-md ${i === 0 ? "motion-safe:animate-bounce" : ""}`} style={{ left: l, top: t, background: c }} />
        ))}
        <div className="absolute inset-x-2.5 bottom-2.5 rounded-2xl bg-white p-3.5 shadow-[0_-6px_30px_rgb(0_0_0/0.15)]">
          <p className="font-display text-[15px] font-semibold">Fast charger · Andheri East</p>
          <span className="mt-1.5 inline-flex rounded-full bg-green-100 px-2.5 py-0.5 text-[11px] font-semibold text-green-900">✓ Working</span>
          <p className="mt-1.5 text-[11.5px] text-slate-600">Verified 12 min ago · 22 m from the charger</p>
          <div className="relative mt-2.5 h-[74px] rounded-xl bg-[repeating-linear-gradient(135deg,#bbf7d0_0_10px,#86efac_10px_20px)]">
            <span className="absolute bottom-1.5 left-2 rounded-md bg-black/65 px-1.5 py-0.5 text-[10px] text-white">📷 Verified on the spot</span>
          </div>
        </div>
      </div>
    </div>
  );
}
