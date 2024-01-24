import Image from "next/image";

export default function Home() {
  return (
    <>
    <header role="banner" className="site-header">
        <a className="site-logo" href="http://voorhoede.github.io/" rel="home" title="to homepage">
            <h1>
                {/* <img alt="A11Y Boilerplate"
                    src="a11y-boilerplate.svg"
                    onError="this.src='a11y-boilerplate.png;'"
                    width="200" height="200"
                    /> */}
            </h1>
        </a>

        {/* <!-- Quick menu (skipnav) to directly jump to specific sections: http://www.jimthatcher.com/skipnav.htm --> */}
        <nav className="site-header-quick-menu">
            <h2 className="a11y-sr-only">Quick menu</h2>
            <ul className="flat-list">
                <li><a className="menu-link a11y-kb-only" href="#content">Jump to content</a></li>
                <li><a className="menu-link a11y-kb-only" href="#main-menu">Jump to main menu</a></li>
                <li><a className="menu-link a11y-kb-only" href="#search">Jump to search</a></li>
                <li><a className="menu-link a11y-kb-only" href="#meta-menu">Jump to meta menu</a></li>
                <li><a className="menu-link a11y-kb-only" href="#user">Jump to user menu</a></li>
            </ul>
        </nav>

        {/* <!-- Mark search controls for enhanced a11y: http://www.w3.org/TR/wai-aria/roles#search --> */}
        <div role="search" className="search-menu">
            <a id="search" rel="search" href="https://example.com/search">
                <span className="icon-search"></span>
                <span className="a11y-sr-only">Search</span>
            </a>
            <form method="GET" action="https://www.example.com/search" className="search-menu-form">
                <label>
                    <span className="a11y-sr-only">Keywords</span>
                    <input type="search" name="q" placeholder="keyword(s)" />
                </label>
                <button>
                    <span className="icon-search"></span>
                    <span className="a11y-sr-only">Search on example.com</span>
                </button>
            </form>
        </div>

    </header>

    <main id="content" role="main" tabIndex={-1}>
        {/* <!-- tabindex fixes focus issue, alternatively use generic script: http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/ --> */}

        {/* <!-- @todo: add nav[role="navigation"] as TOC --> */}
    </main>

    <footer role="contentinfo" className="site-footer">
        <p>The A11Y Boilerplate is a project by <a href="http://voorhoede.nl">De Voorhoede</a>.</p>
        <p>The code is licensed under <a href="https://github.com/voorhoede/a11y-boilerplate/blob/master/LICENSE">MIT License</a>. So use it however you like.</p>
    </footer>
    </>
  );
}
