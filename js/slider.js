function slider() {
  const sliders = document.querySelectorAll('.slider__slide')
  const btnDiv = document.querySelector('.buttons')
  const title = document.querySelector('.title')
  const text = document.querySelector('.paragraph--intro')

  const intro = [
    {
      title: 'Discover innovative ways to decorate',
      descr:
        'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
      title: 'We are available all across the globe',
      descr:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      title: 'Manufactured with the best materials',
      descr:
        'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
  ]

  /* Simple slider */
  let slideIndex = 1
  function showSliders(n) {
    n > sliders.length ? (slideIndex = 1) : null

    n < 1 ? (slideIndex = sliders.length) : null

    let i = slideIndex - 1
    sliders.forEach((slider) => (slider.style.display = 'none'))
    sliders[i].style.display = 'block'
    title.textContent = intro[i].title
    text.textContent = intro[i].descr
  }

  function plusSlides(n) {
    showSliders((slideIndex += n))
  }

  btnDiv.addEventListener('click', ({ target }) => {
    const btnPrev = target.matches('.buttons__arrow--prev')
    const btnNext = target.matches('.buttons__arrow--next')
    const arrowNext = target.matches('[data-slide="next"]')
    const arrowPrev = target.matches('[data-slide="prev"]')

    if (btnPrev || arrowPrev) {
      plusSlides(-1)
    }
    if (btnNext || arrowNext) {
      plusSlides(1)
    }
  })
  showSliders(slideIndex)
  /* Carousel */
  /* const slidersWrapper = document.querySelector('.slider__wrapper')
  const slidersField = document.querySelector('.slider__sliders')
  const width = window.getComputedStyle(slidersWrapper).width
  let slideIndex = 1
  let offset = 0
  
  slidersField.style.width = 100 * sliders.length + '%'
  slidersField.style.display = 'flex'
  slidersField.style.transition = '0.5s all'
  
  slidersWrapper.style.overflow = 'hidden'
  
  sliders.forEach((slider) => {
    slider.style.width = width
  })
  
  function translateX(offset) {
    slidersField.style.transform = `translateX(-${offset}px)`
  }
  
  btnDiv.addEventListener('click', (e) => {
    if (
      e.target.matches('.buttons__arrow--prev') ||
      e.target.matches('[data-slide="prev"]')
    ) {
      if (offset === 0) {
        offset = parseFloat(width) * (sliders.length - 1)
      } else {
        offset -= parseFloat(width)
      }
      console.log(offset)
      translateX(offset)
  
      if (slideIndex === 1) {
        slideIndex = sliders.length
      } else {
        slideIndex--
      }
    }
  
    if (
      e.target.matches('.buttons__arrow--next') ||
      e.target.matches('[data-slide="next"]')
    ) {
      if (offset === parseFloat(width) * (sliders.length - 1)) {
        offset = 0
      } else {
        offset += parseFloat(width)
      }
      translateX(offset)
  
      if (slideIndex === sliders.length) {
        slideIndex = 1
      } else {
        slideIndex++
      }
    }
  })
   */
}

export default slider
