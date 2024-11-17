export class LazyLoader {
    private observer: IntersectionObserver;
  
    constructor() {
      this.observer = new IntersectionObserver(this.onIntersection, {
        rootMargin: '200px 0px', // Load images earlier
        threshold: 0.1, // Trigger when 10% of the image is visible
      });
    }
  
    // Initialize lazy loading on images
    init() {
      const lazyImages = document.querySelectorAll('img.lazyImg') as NodeListOf<HTMLImageElement>;
      lazyImages.forEach((img: HTMLImageElement) => {
        if (img) {
          this.observer.observe(img); // Ensure the img element exists before observing
        }
      });
    }
  
    // Callback for the Intersection Observer to load images when in view
    onIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          const srcset = img.getAttribute('data-srcset');
          
          // Set the real image sources
          if (src) {
            img.src = src;
          }
          
          if (srcset) {
            img.srcset = srcset;
          }
  
          // Remove the 'lazyload' class to prevent further loading
        //   img.classList.add('fade-in');
          img.classList.remove('lazyImg');
          
          // Ensure the image is still part of the DOM before unobserving
          if (img && this.observer) {
            this.observer.unobserve(img); // Remove observation once the image has loaded
          }
        }
      });
    }}
  
  // Initialize lazy loader
//   const lazyLoader = new LazyLoader();
//     lazyLoader.init();
 
