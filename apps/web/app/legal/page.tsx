import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

export default function LegalPage() {
  return (
    <>
      <Navbar />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">Legal Information</h1>
            <p className="lead text-muted">Understanding your rights and our commitments</p>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              {/* Privacy Policy */}
              <div className="mb-5">
                <h2 className="fw-bold mb-3">Privacy Policy</h2>
                <p>
                  This Privacy Policy describes how Seaside Talent collects, uses, and discloses your personal
                  information when you visit or make a purchase from seasidetalent.com (the &quot;Site&quot;) or use our services.
                </p>
                <p>
                  We are committed to protecting your privacy and handling your data in an open and transparent manner.
                  This policy outlines the types of information we collect, how we use it, and the measures we take to
                  safeguard it. We comply with relevant data protection regulations, including considerations for HIPAA
                  for healthcare data, and other applicable laws like GDPR and CCPA where relevant.
                </p>
                <p>
                  <em>
                    (Full Privacy Policy details, including data collection, storage, use, sharing, and user rights,
                    would be elaborated here.)
                  </em>
                </p>
              </div>

              {/* Terms of Service */}
              <div className="mb-5">
                <h2 className="fw-bold mb-3">Terms of Service</h2>
                <p>
                  Welcome to Seaside Talent! These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
                  Seaside Talent website, services, and applications (collectively, the &quot;Services&quot;). By accessing or
                  using our Services, you agree to be bound by these Terms.
                </p>
                <p>
                  These Terms outline your responsibilities as a user, our responsibilities as a service provider, and
                  the rules for using our platform, including acceptable content and intellectual property rights. They
                  also cover dispute resolution mechanisms.
                </p>
                <p>
                  <em>
                    (Full Terms of Service details, including user responsibilities, company&#39;s responsibilities,
                    limitations of liability, rules for platform use, and dispute resolution, would be elaborated here.)
                  </em>
                </p>
              </div>

              {/* Cookie Policy */}
              <div className="mb-5">
                <h2 className="fw-bold mb-3">Cookie Policy</h2>
                <p>
                  This Cookie Policy explains how Seaside Talent uses cookies and similar technologies on our website.
                  By continuing to use our Site, you consent to the use of cookies as described in this policy.
                </p>
                <p>
                  Cookies are small text files stored on your device that help us improve your browsing experience,
                  analyze site traffic, and personalize content. This policy details the types of cookies we use (e.g.,
                  essential, analytical, functional), their purpose, and how you can manage your cookie preferences.
                </p>
                <p>
                  <em>
                    (Full Cookie Policy details, including types of cookies used, purpose, and user options for managing
                    cookies, would be elaborated here.)
                  </em>
                </p>
              </div>

              {/* DMCA Policy */}
              <div className="mb-5">
                <h2 className="fw-bold mb-3">DMCA Policy</h2>
                <p>
                  Seaside Talent respects the intellectual property rights of others and expects its users to do the
                  same. In accordance with the Digital Millennium Copyright Act (&quot;DMCA&quot;), we will respond promptly to
                  notices of alleged copyright infringement that are properly provided to us.
                </p>
                <p>
                  This policy outlines the procedures for submitting a copyright infringement notification and for
                  submitting a counter-notification if you believe your content was removed in error.
                </p>
                <p>
                  <em>
                    (Full DMCA Policy details, including procedures for copyright infringement claims and
                    counter-notifications, would be elaborated here.)
                  </em>
                </p>
              </div>

              {/* Licensing & Credential Verification Disclaimer */}
              <div className="mb-5 p-4 border border-info rounded bg-info-subtle">
                <h2 className="fw-bold mb-3 text-info">Licensing & Credential Verification Disclaimer</h2>
                <p className="mb-0">
                  <strong>
                    While we provide onboarding and verification infrastructure for our clients, not all background
                    checks or license verifications are conducted in-house. Self-attested candidate data is accepted at
                    the application stage and verified downstream depending on the client&#39;s service tier.
                  </strong>
                </p>
                <p className="mt-3 text-muted">
                  This transparency is key to our values of &quot;Integrity Over Everything&quot; and &quot;Compliance is Care.&quot;
                </p>
              </div>

              <div className="text-center mt-5">
                <p className="text-muted">
                  For any questions regarding our legal policies, please <Link href="/contact">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
