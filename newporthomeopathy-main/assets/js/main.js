(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  const mobileNav = select('#navbar')
  const mobileNavToggle = select('.mobile-nav-toggle')
  const setMobileNavOpen = (isOpen) => {
    if (!mobileNav || !mobileNavToggle) return
    mobileNav.classList.toggle('navbar-mobile', isOpen)
    mobileNavToggle.setAttribute('aria-expanded', String(isOpen))
    mobileNavToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu')
    const icon = mobileNavToggle.querySelector('i')
    if (icon) {
      icon.classList.toggle('bi-list', !isOpen)
      icon.classList.toggle('bi-x', isOpen)
    }
    if (isOpen) {
      const firstLink = mobileNav.querySelector('ul a[href]')
      if (firstLink) firstLink.focus()
    }
  }

  on('click', '.mobile-nav-toggle', function(e) {
    setMobileNavOpen(!mobileNav.classList.contains('navbar-mobile'))
  })

  document.addEventListener('keydown', (event) => {
    if (!mobileNav || !mobileNav.classList.contains('navbar-mobile')) return
    if (event.key === 'Escape') {
      setMobileNavOpen(false)
      mobileNavToggle.focus()
      return
    }
    if (event.key !== 'Tab') return

    const focusable = [...mobileNav.querySelectorAll('a[href], button:not([disabled])')]
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })

  /**
   * Scroll with offset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        setMobileNavOpen(false)
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  const currentYear = select('[data-current-year]')
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear()
  }

})()