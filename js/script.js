// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the mobile menu toggle
  initMobileMenu()

  // Initialize scroll animations
  initScrollAnimations()

  // Initialize testimonial slider
  initTestimonialSlider()

  // Initialize FAQ accordions
  initFaqAccordions()

  // Initialize strategy tabs
  initStrategyTabs()

  // Initialize location tabs
  initLocationTabs()

  // Initialize contact form
  initContactForm()

  // Initialize header scroll effect
  initHeaderScroll()
})

// Mobile Menu Toggle
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger")
  const navbar = document.querySelector(".navbar")

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navbar.classList.toggle("active")
    })

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".navbar a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navbar.classList.remove("active")
      })
    })
  }
}

// Scroll Animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll")

  if (animatedElements.length > 0) {
    // Initial check for elements in viewport
    checkElementsInViewport()

    // Check on scroll
    window.addEventListener("scroll", checkElementsInViewport)

    function checkElementsInViewport() {
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (elementPosition.top < windowHeight * 0.9) {
          element.classList.add("visible")
        }
      })
    }
  }
}

// Testimonial Slider
function initTestimonialSlider() {
  const slides = document.querySelectorAll(".testimonial-slide")
  const dots = document.querySelectorAll(".testimonial-dot")

  if (slides.length > 0 && dots.length > 0) {
    let currentSlide = 0
    let slideInterval

    // Start automatic slideshow
    startSlideshow()

    // Click event for dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index
        updateSlider()
        resetSlideshow()
      })
    })

    function updateSlider() {
      slides.forEach((slide) => slide.classList.remove("active"))
      dots.forEach((dot) => dot.classList.remove("active"))

      slides[currentSlide].classList.add("active")
      dots[currentSlide].classList.add("active")
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length
      updateSlider()
    }

    function startSlideshow() {
      slideInterval = setInterval(nextSlide, 5000)
    }

    function resetSlideshow() {
      clearInterval(slideInterval)
      startSlideshow()
    }
  }
}

// FAQ Accordions
function initFaqAccordions() {
  const faqItems = document.querySelectorAll(".faq-item")

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")

      question.addEventListener("click", () => {
        // Close all other items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active")
          }
        })

        // Toggle current item
        item.classList.toggle("active")
      })
    })
  }
}

// Strategy Tabs
function initStrategyTabs() {
  const strategyTabs = document.querySelectorAll(".strategy-tab")
  const strategyContents = document.querySelectorAll(".strategy-content")

  if (strategyTabs.length > 0 && strategyContents.length > 0) {
    strategyTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab")

        // Remove active class from all tabs and contents
        strategyTabs.forEach((t) => t.classList.remove("active"))
        strategyContents.forEach((c) => c.classList.remove("active"))

        // Add active class to clicked tab and corresponding content
        tab.classList.add("active")
        document.getElementById(target).classList.add("active")
      })
    })
  }
}

// Location Tabs
function initLocationTabs() {
  const locationTabs = document.querySelectorAll(".location-tab")
  const locationDetails = document.querySelectorAll(".location-details")

  if (locationTabs.length > 0 && locationDetails.length > 0) {
    locationTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-location")

        // Remove active class from all tabs and details
        locationTabs.forEach((t) => t.classList.remove("active"))
        locationDetails.forEach((d) => d.classList.remove("active"))

        // Add active class to clicked tab and corresponding details
        tab.classList.add("active")
        document.getElementById(target).classList.add("active")
      })
    })
  }
}

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById("contactForm")
  const formSuccess = document.getElementById("formSuccess")

  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simulate form submission (replace with actual form submission)
      setTimeout(() => {
        contactForm.style.display = "none"
        formSuccess.style.display = "block"
      }, 1000)
    })
  }
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector(".header")

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  }
}

// Add animation classes to hero elements
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-content h1")
  const heroText = document.querySelector(".hero-content p")
  const heroButtons = document.querySelector(".hero-buttons")

  if (heroTitle && heroText && heroButtons) {
    heroTitle.classList.add("animate-text")
    heroText.classList.add("animate-text-delay")
    heroButtons.classList.add("animate-text-delay-2")
  }
})

// Float animation for images
document.addEventListener("DOMContentLoaded", () => {
  const floatImages = document.querySelectorAll(".float-image")

  floatImages.forEach((img, index) => {
    img.style.animation = `float ${6 + index * 0.5}s ease-in-out infinite ${index * 0.5}s`
  })
})
