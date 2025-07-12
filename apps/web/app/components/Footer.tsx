import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-5">
      {/* Removed the outer 'container' div */}
      <div className="row">
        {/* Company Links Column */}
        <div className="col-6 col-md-2 mb-3">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="/about" className="nav-link p-0 text-body-secondary">
                About Us
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/services" className="nav-link p-0 text-body-secondary">
                Our Services
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/sentinel" className="nav-link p-0 text-body-secondary">
                Sentinel Platform
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/contact" className="nav-link p-0 text-body-secondary">
                Contact
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/careers" className="nav-link p-0 text-body-secondary">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Job Seekers Column */}
        <div className="col-6 col-md-2 mb-3">
          <h5>For Job Seekers</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="/jobs" className="nav-link p-0 text-body-secondary">
                Browse Jobs
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/register" className="nav-link p-0 text-body-secondary">
                Create Profile
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/resources/job-search-tips" className="nav-link p-0 text-body-secondary">
                Job Search Tips
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/faqs/job-seekers" className="nav-link p-0 text-body-secondary">
                Job Seeker FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Employers Column */}
        <div className="col-6 col-md-2 mb-3">
          <h5>For Employers</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="/employers" className="nav-link p-0 text-body-secondary">
                Employer Solutions
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/post-job" className="nav-link p-0 text-body-secondary">
                Post a Job
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/sentinel" className="nav-link p-0 text-body-secondary">
                Learn About Sentinel
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/faqs/employers" className="nav-link p-0 text-body-secondary">
                Employer FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription Form */}
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what&#39;s new and exciting from Seaside Talent.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="email"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© {new Date().getFullYear()} Seaside Talent, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          {/* These SVGs require Bootstrap Icons or a custom SVG sprite */}
          <li className="ms-3">
            <a
              className="link-body-emphasis"
              href="https://www.instagram.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="bi" width="24" height="24">
                {/* Replace with actual SVG path or use Bootstrap Icons */}
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="link-body-emphasis"
              href="https://www.facebook.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg className="bi" width="24" height="24" aria-hidden="true">
                {/* Replace with actual SVG path or use Bootstrap Icons */}
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
          </li>
          {/* Add more social media icons as needed */}
        </ul>
      </div>
    </footer>
  );
}