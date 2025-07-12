import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

export default function JobSeekersPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Your Next Healthcare Opportunity Awaits</h1>
              <p className="lead mb-4">
                Find relevant jobs faster with credential matching, shift matching, and avoid unqualified applications.
                Feel seen and supported, not ghosted or ignored.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link href="/register" className="btn btn-light btn-lg px-4">
                  Create Your Free Profile
                </Link>
                <Link href="/browse-jobs" className="btn btn-outline-light btn-lg px-4">
                  Browse Jobs
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
            <h2 className="display-5 fw-bold">How Seaside Talent Helps You</h2>
            <p className="lead text-muted">Streamlined job search with credential matching technology</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="text-primary mb-3">
                    <i className="fas fa-search fa-3x"></i>
                  </div>
                  <h5 className="card-title">Find Relevant Jobs Faster</h5>
                  <p className="card-text text-muted">
                    Our credential matching system shows you only jobs that match your qualifications and preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="text-success mb-3">
                    <i className="fas fa-user-check fa-3x"></i>
                  </div>
                  <h5 className="card-title">Credential Verification</h5>
                  <p className="card-text text-muted">
                    Showcase your verified licenses, certifications, and experience to stand out to employers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="text-info mb-3">
                    <i className="fas fa-calendar-alt fa-3x"></i>
                  </div>
                  <h5 className="card-title">Shift & Specialty Matching</h5>
                  <p className="card-text text-muted">
                    Set your preferred shifts, specialties, and work settings to get matched with the right
                    opportunities.
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
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4">Complete Profile Creation</h2>
              <div className="mb-4">
                <h5>
                  <i className="fas fa-file-upload text-primary me-2"></i>Resume Upload
                </h5>
                <p className="text-muted">
                  Upload your resume and let our system extract key information automatically.
                </p>
              </div>
              <div className="mb-4">
                <h5>
                  <i className="fas fa-id-card text-primary me-2"></i>Credential Input
                </h5>
                <p className="text-muted">
                  Add license numbers, states, expiration dates, and certifications for verification.
                </p>
              </div>
              <div className="mb-4">
                <h5>
                  <i className="fas fa-tags text-primary me-2"></i>Preferences & Tags
                </h5>
                <p className="text-muted">
                  Set your preferred settings, shifts, specialties, and work environment preferences.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-white rounded-3 p-4 shadow-sm">
                <h4 className="mb-3">Profile Completion Checklist</h4>
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Basic Information
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Resume Upload
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    License Verification
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Specialty Tags
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Shift Preferences
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Frequently Asked Questions</h2>
            <p className="lead text-muted">Everything you need to know about finding jobs on Seaside Talent</p>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="jobSeekerFAQ">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How does credential verification work?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#jobSeekerFAQ">
                    <div className="accordion-body">
                      We verify your licenses and certifications through state databases and official sources.
                      Self-attested data is accepted initially and verified downstream based on employer requirements.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      Is creating a profile really free?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#jobSeekerFAQ">
                    <div className="accordion-body">
                      Yes! Creating your profile and applying to jobs is completely free for healthcare professionals.
                      We believe in supporting your career growth.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      What types of healthcare jobs are available?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#jobSeekerFAQ">
                    <div className="accordion-body">
                      We feature opportunities across all healthcare specialties including nursing, allied health,
                      physicians, administrative roles, and more. From hospitals to clinics to home health agencies.
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
