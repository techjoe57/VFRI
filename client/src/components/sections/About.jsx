import { vms } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function About() {
  const revealRef = useReveal();

  return (
    <section
      id="about"
      className="scroll-mt-28 relative bg-cream/70 backdrop-blur-sm overflow-hidden py-4"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-32 w-[650px] h-[650px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-green-mid/5 blur-3xl" />
      </div>

      <div ref={revealRef} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-4">
          <span className="section-label mb-1 block">Who We Are</span>

          <h2 className="section-title mb-2">
            A Pan-African Voice
            <br />
            in Global Knowledge
          </h2>

          <p className="section-copy mx-auto max-w-5xl text-lg">
            Victoria Falls Regional Institute is an independent academic and
            research institute founded to localise the power of knowledge in
            International Law, International Relations, Peace & Security,
            Governance, Development, and Humanitarian Affairs.
          </p>
        </div>

        {/* Image + Floating Quote */}
        <div className="relative mt-6 mb-12 max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-sm shadow-2xl group">
            <img
              src="/images/about/about.avif"
              alt="VFRI team discussion"
              className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>

          {/* Floating Quote */}
          <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-[92%] max-w-4xl bg-green-deep border-l-4 border-gold rounded-sm px-6 py-4 shadow-2xl backdrop-blur-md">
            <p className="font-display text-base md:text-lg italic leading-relaxed text-white/85 text-center">
              "Discussions, policy formulations, and conferences about Africa
              tend to be held without Africa. Those who possess African wisdom,
              knowledge and experiences are often denied access to such
              platforms due to visa restrictions, financial barriers, and
              systemic exclusion."
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="relative mt-4">
          <div className="grid md:grid-cols-3 gap-4">
            {vms.map(({ label, title, body }) => (
              <div
                key={label}
                className="relative h-full rounded-sm bg-white shadow-xl border border-gold/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-crimson-mid to-gold" />

                <p className="meta-label text-gold mb-1">{label}</p>

                <h3 className="card-title text-crimson-deep mb-2">{title}</h3>

                <p className="text-sm text-ink-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}