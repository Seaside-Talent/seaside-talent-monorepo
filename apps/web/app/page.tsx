import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Style from job-seekers, content from original homepage */}
      <section className="bg-primary bg-gradient text-white py-5">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Find the Right Healthcare Talent, Faster.
              </h1>
              <p className="lead mb-4">
                No Noise, Just Qualified Matches. Your Next Healthcare
                Opportunity, Credential-Verified.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link href="/job-seekers" className="btn btn-light btn-lg px-4">
                  I&apos;m a Job Seeker
                </Link>
                <Link
                  href="/employers"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  I&apos;m an Employer
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center d-none d-lg-block">
              {" "}
              {/* Hidden on small screens */}
              <div className="bg-white bg-opacity-10 rounded-3 p-5">
                <i className="fas fa-user-md fa-5x mb-3"></i>
                <h3>Credential-Verified Professionals</h3>
                <p>
                  Connect with qualified healthcare talent through our
                  compliance-first platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">How It Works</h2>
            <p className="lead text-muted">
              Simple steps to connect healthcare talent with opportunities
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-5">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-primary mb-3">
                    <i className="fas fa-user-plus fa-3x"></i>
                  </div>
                  <h4 className="card-title">For Job Seekers</h4>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="d-flex align-items-start">
                        {" "}
                        {/* Added align-items-start */}
                        <span className="badge bg-primary rounded-pill me-3">
                          1
                        </span>{" "}
                        {/* Added me-3 for margin */}
                        <div>
                          <h6>Create Your Profile</h6>
                          <p className="text-muted mb-0">
                            Upload credentials, licenses, and experience
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="d-flex align-items-start">
                        {" "}
                        {/* Added align-items-start */}
                        <span className="badge bg-primary rounded-pill me-3">
                          2
                        </span>{" "}
                        {/* Added me-3 for margin */}
                        <div>
                          <h6>Get Matched</h6>
                          <p className="text-muted mb-0">
                            Our system matches you with relevant opportunities
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-start">
                        {" "}
                        {/* Added align-items-start */}
                        <span className="badge bg-primary rounded-pill me-3">
                          3
                        </span>{" "}
                        {/* Added me-3 for margin */}
                        <div>
                          <h6>Apply & Connect</h6>
                          <p className="text-muted mb-0">
                            Apply to jobs that match your qualifications
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-success mb-3">
                    <i className="fas fa-building fa-3x"></i>
                  </div>
                  <h4 className="card-title">For Employers</h4>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="d-flex align-items-start">
                        {" "}
                        {/* Added align-items-start */}
                        <span className="badge bg-success rounded-pill me-3">
                          1
                        </span>{" "}
                        {/* Added me-3 for margin */}
                        <div>
                          <h6>Post Your Job</h6>
                          <p className="text-muted mb-0">
                            Define requirements and credential needs
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="d-flex align-items-start">
                        {" "}
                        {/* Added align-items-start */}
                        <span className="badge bg-success rounded-pill me-3">
                          2
                        </span>{" "}
                        {/* Added me-3 for margin */}
                        <div>
                          <h6>Filter Applicants</h6>
                          <p className="text-muted mb-0">
                            Automatic credential filtering blocks unqualified
                            matches
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-start">
                        {" "}
                        {/* Added align-items-start */}
                        <span className="badge bg-success rounded-pill me-3">
                          3
                        </span>{" "}
                        {/* Added me-3 for margin */}
                        <div>
                          <h6>Hire with Confidence</h6>
                          <p className="text-muted mb-0">
                            Leverage compliance-aware hiring tools
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Why Choose Seaside Talent?</h2>
            <p className="lead text-muted">
              Compliance is Care - Built into every step
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div
                  className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fas fa-filter fa-2x"></i>
                </div>
                <h5>Cut the Noise</h5>
                <p className="text-muted">
                  Only qualified, credential-verified candidates reach your
                  inbox
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div
                  className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fas fa-certificate fa-2x"></i>
                </div>
                <h5>Credential-Filtered</h5>
                <p className="text-muted">
                  Automatic verification of licenses, certifications, and
                  qualifications
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div
                  className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fas fa-clock fa-2x"></i>
                </div>
                <h5>Time-Saving</h5>
                <p className="text-muted">
                  Streamlined hiring process reduces time-to-hire significantly
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div
                  className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fas fa-shield-alt fa-2x"></i>
                </div>
                <h5>Compliance-Aware</h5>
                <p className="text-muted">
                  Built-in compliance tools protect your organization and
                  candidates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}

      {/* Big Call to Action (Jumbotron) */}
      <section className="py-5">
        {" "}
        {/* Added py-5 for vertical padding */}
        <div className="container">
          {" "}
          {/* Container for Bootstrap grid */}
          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5 text-center">
              {" "}
              {/* Added text-center for better alignment */}
              <h1 className="display-5 fw-bold">
                Connecting Top Healthcare Talent with Leading Opportunities
              </h1>
              <p className="col-md-8 fs-4 mx-auto">
                {" "}
                {/* mx-auto to center the paragraph */}
                Seaside Talent is dedicated to bridging the gap between
                exceptional healthcare professionals and organizations seeking
                the best. Find your next role or your next hire with us.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      {/* Replaced Call to Action with the two Jumbotron cards */}
      <section>
        {/* Added py-5 for vertical padding */}
        <div className="container">
          {/* Container for Bootstrap grid */}
          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-primary rounded-3">
                <h2>For Job Seekers</h2>
                <p>
                  Discover exciting career opportunities in healthcare. Find
                  positions that match your skills and aspirations with ease.
                </p>
                <Link href="/jobs" className="btn btn-light" type="button">
                  Browse Jobs
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>For Employers</h2>
                <p>
                  Find top-tier talent to fill your healthcare roles. Post your
                  job openings and connect with qualified professionals.
                </p>
                <Link
                  href="/post-job"
                  className="btn btn-primary"
                  type="button"
                >
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br className="my-5" />
      <Footer />
    </>
  );
}
