import React from 'react'
import Link from 'gatsby-link'

import './style.css'
import './subtract.css'

const Header = ({ siteTitle }) => (
  <div className="site-header">
    <div className="wrapper">
      <div className="header-inner">
        <Link to="/">
          {/* <a className="site-title" rel="author" href="/" title="Design Systems Repo"> */}
          <img
            className="logo-lg"
            src="https://d33wubrfki0l68.cloudfront.net/d3b175cca4b3f55dad5444cad88e66451c0d078c/37a69/images/dsr-logo.svg"
            width="98"
            height="98"
          />
          <img
            className="logo-sm"
            src="https://d33wubrfki0l68.cloudfront.net/d478fbdcb6335e9cd4e31ba15262905ed04043db/5723f/images/dsr-logo-small.svg"
            width="143"
            height="36"
          />
          <button
            className="pull lines-button"
            type="button"
            role="button"
            aria-label="Toggle Navigation"
          >
            {' '}
            <span className="lines" />{' '}
          </button>{' '}
        </Link>
      </div>
      <div />
      <nav className="responsive-nav">
        {' '}
        <ul className="nav">
          {' '}
          <li>
            <a href="/design-systems/" title="Design Systems Gallery">
              Design Systems
            </a>
          </li>{' '}
          <li>
            <a href="/articles/" title="Articles">
              Articles
            </a>
          </li>{' '}
          <li>
            <a href="/tools/" title="Tools">
              Tools
            </a>
          </li>{' '}
          <li>
            <a href="/books/" title="Books">
              Books
            </a>
          </li>{' '}
          <li>
            <a href="/talks/" title="Talks">
              Talks
            </a>
          </li>{' '}
          <li>
            <a href="/about/" title="About">
              About
            </a>
          </li>{' '}
          <li>
            <a
              className="submit"
              href="https://jad8.typeform.com/to/XnIDFZ"
              target="_blank"
              title="Submit a Resource"
            >
              <span>Submit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                {' '}
                <g fill="none" fillRule="evenodd">
                  {' '}
                  <circle cx="12" cy="12" r="12" fill="#73FFE1" />{' '}
                  <polygon
                    fill="#000"
                    fillRule="nonzero"
                    points="13 6 11 6 11 11 6 11 6 13 11 13 11 18 13 18 13 13 18 13 18 11 13 11"
                  />{' '}
                </g>{' '}
              </svg>
            </a>
          </li>{' '}
        </ul>{' '}
      </nav>
    </div>
  </div>
)

export default Header
