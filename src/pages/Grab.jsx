import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { DetailsStrip, TwoColText, StatGrid, FigureBlock, SplitMedia, ThreeColMedia } from '../components/blocks'

export default function Grab() {
  return (
    <>
      <Nav homePrefix="/" />

      {/* breadcrumb */}
      <div className="max-w-[1040px] mx-auto px-11 pt-12 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft flex items-center gap-[14px]">
        <Link to="/" className="transition-colors hover:text-rust-deep">Portfolio</Link>
        <span className="opacity-50">/</span>
        <Link to="/#case-studies" className="transition-colors hover:text-rust-deep">Case Studies</Link>
        <span className="opacity-50">/</span>
        <span>Grab</span>
      </div>

      {/* title */}
      <div className="max-w-[1040px] mx-auto px-11 pt-[30px]">
        <div className="pb-[50px] border-b border-rule flex flex-col gap-8">
          <h1 className="m-0 font-medium text-porter leading-[.98] tracking-[-0.01em]" style={{ fontSize: 'clamp(48px,7vw,64px)', textWrap: 'balance' }}>
            Grab — PIN and account recovery
          </h1>
        </div>
      </div>

      {/* Detail strip */}
      <DetailsStrip items={[['Role','Product Designer'],['Year','2021'],['Type','Consumer mobile app']]} />

      {/* Fig. 01 — Cover */}
      <FigureBlock
        variant="cover"
        media={<img src="/assets/grab-pin-hero.png" alt="Grab PIN and account recovery overview" className="w-full h-full object-cover object-top" />}
        shadow={false}
        rounded={false}
      />

      {/* Summary */}
      <TwoColText
        heading="Summary"
        right={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            As the lead designer, I led the end-to-end redesign of Grab's PIN ecosystem to support the expansion of GrabPay into high-stakes payment flows. By standardizing UI components and introducing an intuitive recovery method, I transformed an outdated system into a scalable, secure solution for millions of users across Southeast Asia.
          </p>
        }
      />

      {/* Impact */}
      <StatGrid
        sectionLabel="Impact"
        heading="Outcomes that strengthened security across Grab's ecosystem."
        cols={3}
        stats={[
          {
            number: '<span style="font-size:24px;line-height:1.15">11% increase</span>',
            label: 'in PIN reset success rates through a new recovery flow',
          },
          {
            number: '<span style="font-size:24px;line-height:1.15">22% reduction</span>',
            label: 'in "forgot PIN" support tickets, lowering operational costs',
          },
          {
            number: '<span style="font-size:24px;line-height:1.15">Millions of users</span>',
            label: 'supported by a scaled security system across Grab ecosystem',
          },
        ]}
      />

      {/* Challenge */}
      <TwoColText
        sectionLabel="The challenge"
        heading="Scaling Security for the Fintech Expansion"
        right={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            As Grab evolved into a financial services leader, the legacy PIN system—originally designed only for simple logins—became a critical bottleneck. With the expansion of GrabPay, an outdated UI posed a risk to user trust. I was tasked with redesigning this core experience, align with a new global design system, and ensure that users could safely access their funds without friction.
          </p>
        }
      />

      {/* Solution */}
      <TwoColText
        sectionLabel="The Solution"
        heading="Modernizing the Core Security Experience"
        right={
          <>
            <p className="text-[22px] leading-[1.5] text-ink m-0 mb-5" style={{ textWrap: 'pretty' }}>
              After defining the core challenges, I redesigned the PIN ecosystem that aligned with the new Grab branding. My focus was on creating a cohesive visual language that felt trustworthy and accessible for millions of users across the GrabPay ecosystem.
            </p>
            <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
              I transitioned the outdated legacy interface into a modern, system-aligned UI that improved scannability and accessibility.
            </p>
          </>
        }
      />

      {/* Fig. 02 */}
      <FigureBlock
        media={
          <video
            src="/assets/grab-pin-solution1-1.mov"
            className="w-full h-full object-cover object-top"
            autoPlay
            loop
            muted
            playsInline
          />
        }
        caption="Old vs New PIN set-up screen"
        shadow={false}
        rounded={false}
      />

      {/* Custom Illustrations */}
      <SplitMedia
        media={<img src="/assets/grab-pin-solution1-2illustration.png" alt="Custom illustration for the PIN experience" className="w-full h-full object-contain" />}
        aspectRatio="2582/1625"
        heading="Custom Illustrations"
        body={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            I designed a suite of custom illustrations for the new PIN experience based on the updated Grab design system, ensuring every interaction felt human and helpful.
          </p>
        }
      />

      {/* Scan QR to Pay */}
      <SplitMedia
        media={<img src="/assets/grab-pin-solution1-3QR.png" alt="Scan QR to Pay web-to-mobile payment flow" className="w-full h-full object-contain" />}
        aspectRatio="1824/1124"
        heading="Scan QR to Pay Experience"
        body={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            In partnership with the payment team, I designed the web-to-mobile payment flow. This demonstrates my ability to work across product teams, ensuring security feature remains a seamless part of the payment experience.
          </p>
        }
      />

      {/* Challenge 2 */}
      <TwoColText
        sectionLabel="The challenge"
        heading="the High Cost of Forgotten PINs"
        right={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            While the new UI improved the entry experience, the data showed that the existing recovery methods—email and manual support—were ineffective for the Southeast Asian market, where email adoption is low and manual verification is costly. I needed to design a recovery method that was both secure and native to our users' existing digital habits.
          </p>
        }
      />

      {/* Solution 2 */}
      <TwoColText
        sectionLabel="The Solution"
        heading="Leveraging Local Market Habits"
        right={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            I introduced Facebook as a new authentication method, leveraging its high adoption rates across Southeast Asia to provide a familiar and accessible security layer. Unlike email-based recovery, which often required users to leave the app, this method allows users to stay within Grab for a more seamless experience.
          </p>
        }
      />

      {/* Fig. 03 */}
      <FigureBlock
        media={<img src="/assets/grab-pin-hero.png" alt="Grab PIN and account recovery overview" className="w-full h-full object-cover object-top" />}
        shadow={false}
        rounded={false}
      />

      {/* Privacy-First Setup */}
      <SplitMedia
        media={<img src="/assets/grab-pin-solution2-1-setup.gif" alt="Automatic Facebook-linked PIN recovery setup" className="w-full h-full object-contain" />}
        aspectRatio="600/797"
        ratio="1:1"
        heading="An Integrated, Privacy-First Setup"
        body={
          <>
            <p className="text-[22px] leading-[1.5] text-ink m-0 mb-5" style={{ textWrap: 'pretty' }}>
              We streamlined the setup by making this method automatically available for users who log in via Facebook, removing the need for an extra linking step.
            </p>
            <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
              I focused on building trust by being upfront about data usage, communicating that we only access minimum required info and will never post on the user's behalf.
            </p>
          </>
        }
      />

      {/* Self-Serve Recovery */}
      <SplitMedia
        media={<img src="/assets/grab-pin-solution2-2-forgotPIN.gif" alt="Self-serve PIN recovery flow via linked social account" className="w-full h-full object-contain" />}
        aspectRatio="600/797"
        ratio="1:1"
        heading="A Self-Serve Recovery Journey"
        body={
          <>
            <p className="text-[22px] leading-[1.5] text-ink m-0 mb-5" style={{ textWrap: 'pretty' }}>
              By utilising the linked social account, this flow allows users to verify their identity and reset their PIN in seconds without needing to contact customer support.
            </p>
            <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
              This shift to a self-serve model was the primary driver behind the 22% reduction in support tickets and the 11% increase in successful PIN resets.
            </p>
          </>
        }
      />

      {/* Design Details */}
      <ThreeColMedia
        heading="Design Details"
        items={[
          {
            media: (
              <img
                src="/assets/grab%20detail%201.png"
                alt="Microcopy stating the app won't post to Facebook"
                className="w-full h-full object-cover object-top"
              />
            ),
            body: "I used microcopy to explicitly state that the app wouldn't post to Facebook, building user trust for the social authentication method.",
          },
          {
            media: (
              <img
                src="/assets/grab%20detail%202.png"
                alt="Time-sensitive guidance during PIN setup"
                className="w-full h-full object-cover object-top"
              />
            ),
            body: "To ensure a high completion rate, I added clear time-sensitive guidance that encourages users to finish their PIN setup without leaving the session.",
          },
          {
            media: (
              <img
                src="/assets/grab%20detail%203.png"
                alt="Security lock-out screen after multiple failed PIN attempts"
                className="w-full h-full object-cover object-top"
              />
            ),
            body: "I designed a proactive security lock-out screen that protects the user's wallet after multiple failed attempts while explaining the reason for the account restriction.",
          },
        ]}
      />

      {/* Key takeaway */}
      <TwoColText
        headingLevel="h3"
        heading="Key takeaway"
        bleedBg="#f3edd9"
        right={
          <p className="text-[22px] leading-[1.5] m-0 mb-5">
            This project was about evolving a legacy security feature into a scalable system that could support Grab's growth into financial services. By focusing on local user habits and automating the recovery process, we were able to protect millions of users while reducing the manual workload for support teams. It highlights how aligning design with business goals can solve both user friction and operational costs.
          </p>
        }
      />

      <Footer />
    </>
  )
}
