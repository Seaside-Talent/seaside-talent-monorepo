import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

export default function EmployersPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-success text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Tired of Unqualified Applicants?</h1>
              <p className="lead mb-4">
                Find Your Ideal Healthcare Hires Here. Reduce time and cost, eliminate unqualified applicants, and hire
                with built-in compliance.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link href="/post-job" className="btn btn-light btn-lg px-4">
                  Post Your First Job
                </Link>
                <Link href="/employer-solutions" className="btn btn-outline-light btn-lg px-4">
                  Learn More About Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Why Healthcare Teams Choose Us</h2>
            <p className="lead text-muted">Healthcare teams grow faster because hiring is no longer a bottleneck</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="text-success mb-3">
                    <i className="fas fa-clock fa-3x"></i>
                  </div>
                  <h5 className="card-title">Time & Cost Savings</h5>
                  <p className="card-text text-muted">
                    Reduce time-to-hire by 60% with automated credential filtering and pre-qualified candidate pools.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="text-primary mb-3">
                    <i className="fas fa-filter fa-3x"></i>
                  </div>
                  <h5 className="card-title">Eliminate Unqualified Applicants</h5>
                  <p className="card-text text-muted">
                    Automatic blocking of candidates who don't meet your credential and experience requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="text-info mb-3">
                    <i className="fas fa-shield-alt fa-3x"></i>
                  </div>
                  <h5 className="card-title">Built-in Compliance</h5>
                  <p className="card-text text-muted">
                    Compliance is not a burden, but built into the process. Protect your organization with every hire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <h2 className="display-6 fw-bold mb-4">Powerful Hiring Features</h2>
              <div className="mb-4">
                <h5>
                  <i className="fas fa-plus-circle text-success me-2"></i>Smart Job Posting
                </h5>
                <p className="text-muted">
                  Create detailed job posts with specific credential requirements and automatic matching.
                </p>
              </div>
              <div className="mb-4">
                <h5>
                  <i className="fas fa-filter text-success me-2"></i>Credential Filtering
                </h5>
                <p className="text-muted">
                  Automatically filter candidates based on licenses, certifications, and experience levels.
                </p>
              </div>
              <div className="mb-4">
                <h5>
                  <i className="fas fa-sync text-success me-2"></i>License Data Sync
                </h5>
                <p className="text-muted">
                  Optional integration with public license databases for real-time verification.
                </p>
              </div>
              <div className="mb-4">
                <h5>
                  <i className="fas fa-file-upload text-success me-2"></i>Document Management
                </h5>
                <p className="text-muted">
                  Secure document uploads and compliance tracking for all hiring requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-white rounded-3 p-4 shadow-sm">
                <h4 className="mb-4">Tier 1 Compliance Suite Preview</h4>
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex justify-content-between align-items-center">
                    <span>Document Upload & Storage</span>
                    <span className="badge bg-success">Available</span>
                  </div>
                  <div className="list-group-item d-flex justify-content-between align-items-center">
                    <span>Compliance Tracking</span>
                    <span className="badge bg-success">Available</span>
                  </div>
                  <div className="list-group-item d-flex justify-content-between align-items-center">
                    <span>License Verification</span>
                    <span className="badge bg-success">Available</span>
                  </div>
                  <div className="list-group-item d-flex justify-content-between align-items-center">
                    <span>Advanced ATS Integration</span>
                    <span className="badge bg-warning">Coming Soon</span>
                  </div>
                  <div className="list-group-item d-flex justify-content-between align-items-center">
                    <span>Automated Workflows</span>
                    <span className="badge bg-warning">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Simple, Transparent Pricing</h2>
            <p className="lead text-muted">Choose the plan that fits your hiring needs</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <h5 className="card-title">Basic Listing</h5>
                  <div className="display-6 fw-bold text-success mb-3">Free</div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Standard job posting
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Basic credential filtering
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>30-day listing duration
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Email notifications
                    </li>
                  </ul>
                  <Link href="/post-job" className="btn btn-outline-success w-100">
                    Post Free Job
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-primary shadow">
                <div className="card-header bg-primary text-white text-center">
                  <span className="badge bg-light text-primary">Most Popular</span>
                </div>
                <div className="card-body text-center p-4">
                  <h5 className="card-title">Featured Listing</h5>
                  <div className="display-6 fw-bold text-primary mb-3">$99</div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Featured placement
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Advanced filtering
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>60-day listing duration
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Priority support
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Analytics dashboard
                    </li>
                  </ul>
                  <Link href="/post-job?plan=featured" className="btn btn-primary w-100">
                    Get Featured
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <h5 className="card-title">Enterprise</h5>
                  <div className="display-6 fw-bold text-dark mb-3">Custom</div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Unlimited postings
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Tier 1 compliance suite
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Dedicated account manager
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Custom integrations
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>White-label options
                    </li>
                  </ul>
                  <Link href="/contact" className="btn btn-outline-dark w-100">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Employer FAQ</h2>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="employerFAQ">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#efaq1"
                    >
                      How does credential filtering work?
                    </button>
                  </h2>
                  <div id="efaq1" className="accordion-collapse collapse show" data-bs-parent="#employerFAQ">
                    <div className="accordion-body">
                      Our system automatically checks candidate credentials against your job requirements. Only
                      candidates with verified, matching qualifications can apply to your positions.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#efaq2"
                    >
                      What compliance features are included?
                    </button>
                  </h2>
                  <div id="efaq2" className="accordion-collapse collapse" data-bs-parent="#employerFAQ">
                    <div className="accordion-body">
                      We provide document storage, license tracking, expiration alerts, and compliance reporting. Our
                      Tier 1 suite includes advanced ATS integration and automated workflow management.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#efaq3"
                    >
                      Can I integrate with my existing ATS?
                    </button>
                  </h2>
                  <div id="efaq3" className="accordion-collapse collapse" data-bs-parent="#employerFAQ">
                    <div className="accordion-body">
                      Yes! Our Tier 1 compliance suite offers integration capabilities with major ATS platforms. Contact
                      our team to discuss your specific integration needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
