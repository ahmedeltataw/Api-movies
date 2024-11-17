class slider {
  private sliderWrapper?: HTMLElement;
  private btnNext?: HTMLElement;
  private btnPrev?: HTMLElement;
  private currentSlide: number = 0;
  private slideWidth: number = 0;
  private slidesPerView: number = 0;

  constructor(selector: string) {
    const parentElement = document.querySelector(selector);
    if (!parentElement) {
      
      return;
    }

    this.sliderWrapper = parentElement.querySelector('.slider-wrapper') as HTMLElement | undefined;
    this.btnNext = parentElement.querySelector('.btn-next') as HTMLElement | undefined;
    this.btnPrev = parentElement.querySelector('.btn-prev') as HTMLElement | undefined;

    if (!this.sliderWrapper || !this.btnNext || !this.btnPrev) {
      console.error(`Required slider elements are missing in "${selector}".`);
      return;
    }

    this.btnNext.addEventListener("click", () => this.Next());
    this.btnPrev.addEventListener("click", () => this.prev());
    this.sliderWrapper.addEventListener("touchstart", (e) => this.onTouchStart(e));
    this.sliderWrapper.addEventListener("touchmove", (e) => this.onTouchMove(e));
    this.sliderWrapper.addEventListener("touchend", () => this.onTouchEnd());
    window.addEventListener("resize", () => this.onResize());

    this.updateDimensions();
    this.updateButtons();
  }

  private updateDimensions(): void {
    if (!this.sliderWrapper) return; // Ensure `sliderWrapper` is defined
    this.slideWidth = this.sliderWrapper.children[0]?.clientWidth || 0;
    const wrapperWidth = this.sliderWrapper.parentElement?.clientWidth || 0;

    this.slidesPerView = Math.floor(wrapperWidth / (this.slideWidth + 10));
    this.goToSlide(this.currentSlide);
  }

  private goToSlide(slideIndex: number): void {
    if (!this.sliderWrapper) return;
    const slideItemWidth = this.sliderWrapper.children[0]?.clientWidth || 0;
    const offset = -slideIndex * (slideItemWidth + 10);
    this.sliderWrapper.style.transform = `translateX(${offset}px)`;
    this.currentSlide = slideIndex;
    this.updateButtons();
  }

  private Next(): void {
    if (!this.btnNext?.classList.contains('disabled')) this.goToSlide(this.currentSlide + 1);
  }

  private prev(): void {
    if (!this.btnPrev?.classList.contains('disabled')) this.goToSlide(this.currentSlide - 1);
  }

  private updateButtons(): void {
    if (!this.sliderWrapper || !this.btnNext || !this.btnPrev) return;
    const totalSlides = this.sliderWrapper.children.length;
    const slideItemWidth = this.sliderWrapper.children[0]?.clientWidth || 0;
    const wrapperWidth = this.sliderWrapper.parentElement?.clientWidth || 0;

    const slidesPerView = Math.floor(wrapperWidth / slideItemWidth);

    this.btnPrev.classList.toggle('disabled', this.currentSlide === 0);
    this.btnNext.classList.toggle('disabled', this.currentSlide >= totalSlides - slidesPerView);
  }

  private onTouchStart(event: TouchEvent): void {
    // Implementation remains the same
  }

  private onTouchMove(event: TouchEvent): void {
    // Implementation remains the same
  }

  private onTouchEnd(): void {
    // Implementation remains the same
  }

  private onResize(): void {
    this.updateDimensions();
  }
}

// if(new slider("#trendSlider")) new slider("#trendSlider")

new slider("#trendSlider");