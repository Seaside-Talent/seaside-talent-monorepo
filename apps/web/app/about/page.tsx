import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">About Seaside Talent: Revolutionizing Healthcare Hiring</h1>
              <p className="lead text-muted">
                Building the future of healthcare recruitment through compliance, technology, and human connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-6 fw-bold mb-4">Who We Are</h2>
              <p className="lead mb-4">
                Seaside Talent is a Massachusetts-based, remote-first recruitment and onboarding firm that serves
                healthcare organizations nationwide. Our team brings together expertise in human resources, healthcare
                staffing, compliance, and technology to support hiring operations with speed, precision, and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h2 className="display-6 fw-bold mb-4">Our Mission</h2>
              <p className="lead">
                To make healthcare hiring seamless, ethical, and scalable by delivering recruitment and onboarding
                solutions that prioritize people, compliance, and long-term success.
              </p>
            </div>
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4">Our Vision</h2>
              <p className="lead mb-3">
                To become the most trusted partner in healthcare hiring by removing barriers, reducing burnout, and
                raising the bar for recruitment and onboarding.
              </p>
              <p className="mb-0">
                <em>Seaside Talent exists to build that future, one hire, one system, one relationship at a time.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Points */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">We Envision a Future Where:</h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="text-success mb-3">
                    <i className="fas fa-rocket fa-2x"></i>
                  </div>
                  <h5 className="card-title">Healthcare teams grow faster</h5>
                  <p className="card-text text-muted">
                    Because hiring is no longer a bottleneck holding back patient care and organizational growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="text-primary mb-3">
                    <i className="fas fa-heart fa-2x"></i>
                  </div>
                  <h5 className="card-title">Candidates feel seen and supported</h5>
                  <p className="card-text text-muted">
                    Not ghosted or ignored, but valued throughout their career journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="text-info mb-3">
                    <i className="fas fa-shield-alt fa-2x"></i>
                  </div>
                  <h5 className="card-title">Compliance is not a burden</h5>
                  <p className="card-text text-muted">
                    But built into the process, protecting organizations, candidates, and communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="text-warning mb-3">
                    <i className="fas fa-handshake fa-2x"></i>
                  </div>
                  <h5 className="card-title">Technology powers decisions</h5>
                  <p className="card-text text-muted">
                    Without replacing human connection, enhancing relationships instead of eliminating them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Our Values</h2>
            <p className="lead text-muted">The principles that guide everything we do</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="card-title text-primary">
                    <i className="fas fa-users me-2"></i>People First, Always
                  </h5>
                  <p className="card-text">
                    We prioritize the wellbeing, dignity, and growth of every person we work with—whether employee,
                    candidate, or client—because people are the foundation of great work.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="card-title text-success">
                    <i className="fas fa-check-circle me-2"></i>Integrity Over Everything
                  </h5>
                  <p className="card-text">
                    We operate with honesty, transparency, and accountability, even when it is hard, because trust is
                    earned and reputation is non-negotiable.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="card-title text-info">
                    <i className="fas fa-shield-alt me-2"></i>Compliance is Care
                  </h5>
                  <p className="card-text">
                    In healthcare staffing, cutting corners is not just risky, it is reckless. We hold the line on
                    compliance to protect our clients, candidates, and communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="card-title text-warning">
                    <i className="fas fa-lightbulb me-2"></i>Thoughtful Simplicity
                  </h5>
                  <p className="card-text">
                    We believe hiring should be clear, efficient, and human—not buried in red tape. We build processes
                    that reduce friction and add value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seaside Map */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">The Seaside Map: Our Future</h2>
            <p className="lead text-muted">Our phased approach to transforming healthcare hiring</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-primary h-100">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">
                    <span className="badge bg-light text-primary me-2">Phase 0</span>
                    Job Board (Current)
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Credential-verified matching platform connecting healthcare professionals with opportunities through
                    intelligent filtering and compliance-aware processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-secondary h-100">
                <div className="card-header bg-secondary text-white">
                  <h5 className="mb-0">
                    <span className="badge bg-light text-secondary me-2">Phase 1</span>
                    Tier 1 - Compliance Engine
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Advanced ATS with integrated compliance tracking, document management, and automated workflow
                    capabilities for seamless hiring operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-secondary h-100">
                <div className="card-header bg-secondary text-white">
                  <h5 className="mb-0">
                    <span className="badge bg-light text-secondary me-2">Phase 2</span>
                    Recruitment-as-a-Service
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Full-service recruitment solutions with dedicated account management, custom sourcing strategies,
                    and end-to-end hiring support.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-secondary h-100">
                <div className="card-header bg-secondary text-white">
                  <h5 className="mb-0">
                    <span className="badge bg-light text-secondary me-2">Phase 3</span>
                    Embedded HR
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Complete workforce management platform including onboarding, performance tracking, and ongoing
                    employee lifecycle management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Commitment */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-4">Our Commitment to Culture</h2>
              <p className="lead mb-4">
                Internally, we are committed to building a culture of integrity, transparency, and operational
                excellence. We practice what we preach in healthcare hiring by creating an environment where our team
                can do meaningful, focused work without getting buried in chaos.
              </p>
              <p className="mb-0">
                <strong>All team members are empowered to do meaningful, focused work, not get buried in chaos.</strong>
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <i className="fas fa-users fa-5x text-primary mb-3"></i>
              <h4>Remote-First</h4>
              <p className="text-muted">Building the future of work while serving healthcare nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-6 fw-bold mb-4">Ready to Join Our Mission?</h2>
          <p className="lead mb-4">
            Whether you're a healthcare professional seeking your next opportunity or an organization looking to
            transform your hiring process, we're here to help.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link href="/job-seekers" className="btn btn-light btn-lg px-5">
              Find Your Next Role
            </Link>
            <Link href="/employers" className="btn btn-outline-light btn-lg px-5">
              Transform Your Hiring
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
