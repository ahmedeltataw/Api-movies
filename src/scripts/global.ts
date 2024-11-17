let Header = document.querySelector('header') as HTMLDivElement;
//menu
let menuBtn = document.getElementById("menuBtn") as HTMLButtonElement;
let menu = document.getElementById("navMenu") as HTMLUListElement;
let menuItems = document.querySelectorAll("#navMenu li") as NodeListOf<HTMLLIElement>;
//main heading
let allSpan = document.querySelectorAll(
    ".tabValues .tap"
) as NodeListOf<HTMLSpanElement>;
let parentSpan = document.querySelector(".tabValues ") as HTMLDivElement;
let activeColor = document.querySelector(".activeColor") as HTMLSpanElement;

//
import { posterImg, votePercentage, getColor, splitDate, profileImg } from "./configuration";
import type { CardType } from "../types/type";
import noPoster from "../assets/images/error/no-poster.png";
import peopleImg from "../assets/images/error/avatar.png"

function calcMaxHeight(items: NodeListOf<HTMLLIElement> | HTMLLIElement[]): number {
    let maxHeight: number = 0;
    // mobileResponsive.classList.add("open")
    items.forEach((link: any) => {
        maxHeight += link.clientHeight
    })

    return maxHeight;
}
const animationSlide = (dir: 'up' | 'down', totalHeight: NodeListOf<HTMLLIElement> | any, targetEL: HTMLUListElement | any) => {
    let height = dir === "down" ? 0 : calcMaxHeight(totalHeight);
    let targetHeight = dir === 'down' ? calcMaxHeight(totalHeight) : 0;
    let speed = dir === 'down' ? (targetHeight / (targetHeight * 0.05)) : (height / (height * 0.05));
    console.log(speed)
    function animate() {
        if ((height <= 0 && dir === 'up') || (height >= targetHeight && dir === 'down')) {
            if (dir === 'up') {
                targetEL.style.height = "0";
            }
            return; // Exit animation loop
        }
        height += dir === "down" ? speed : -speed;
        if (height > targetHeight && dir === 'down') {
            height = targetHeight;
        }
        targetEL.style.height = `${height}px`;
        // Request next animation frame
        requestAnimationFrame(animate);
    }

    // Start the animation loop
    requestAnimationFrame(animate);
}
const toggleClass = (Element: HTMLElement | null, Classes: string[], action: 'add' | 'remove' | 'toggle') => {
    if (!Element) return console.log("no element");
    Classes.forEach(cls => {
        if (action === 'add') {
            if (cls) Element.classList.add(cls);
        } else if (action === 'remove') {
            if (cls) Element.classList.remove(cls);
        } else if (action === 'toggle') {
            if (cls) Element.classList.toggle(cls);
        }
    });
}
// =====aria expanded=============
const setAriaExpanded = (btn: HTMLButtonElement | null, EX: boolean) => {
    btn?.setAttribute('aria-expanded', EX.toString())
};

// =====Menu toggle=============
const MenuToggle = () => {
    toggleClass(menuBtn, [`active`], 'toggle');
    if (menuBtn.classList.contains("active")) {
        toggleClass(menu, [`open`], 'add');
        toggleClass(menu, [`md-max:d-none`], 'remove');
        requestAnimationFrame(() => {
            menu.style.top = `${Header.offsetHeight}px`
            animationSlide('down', menuItems, menu);
        });
    } else {
        toggleClass(menu, [`open`], 'remove');
        animationSlide('up', menuItems, menu);
        setTimeout(() => {
            menu.style.top = `-200px`
            toggleClass(menu, [`md-max:d-none`], 'add');
        }, 700)
    }
}
if (menuBtn !== null) menuBtn.addEventListener('click', MenuToggle);



if (allSpan) allSpan.forEach((tap: HTMLSpanElement, index: number) => {


    tap.addEventListener("click", () => {
        parentSpan.querySelector(".active")?.classList.remove("active");
        tap.classList.add("active");
        if (tap.classList.contains("active")) {
            let clacActive = index * 100;
            activeColor.style.setProperty("--x", `${clacActive + 5}px`);
        }



    });
    window.addEventListener("DOMContentLoaded", () => {
        if (tap.classList.contains("active")) {
            let clacActive = index * 100;
            activeColor.style.setProperty("--x", `${clacActive + 5}px`);
        }
    });
});

export const updateUi = (data: [], action: 'inner' | 'after', container: HTMLDivElement, Slider: boolean) => {
    let type: string | null = new URLSearchParams(window.location.search).get("type");
    let getData = data.map((item: CardType) => {
        let cardHTML = '';
        // Check if the type is 'person' and media_type is 'person'

        if (item.media_type !== 'person' && type !== 'person') {

            // For non-person items, display standard card
            if (Slider === true) {
                cardHTML = `
                    <div class="slider-items">
                        <div class="AE_card relative w-full h-full  " data-id =${item.id}>
                            <div class="cardImg h-3/4 round-8 relative">
                            ${item.poster_path !== null ? `
                                <img
                                    data-src=${posterImg("w92", item.poster_path)}
                                    src=${posterImg("w500", item.poster_path)}
                                    alt=${item.title || item.name}
                                    class="img-cover round-8 img-t lazyLoad"
                                    loading="lazy"
                                    decoding="async"
                                    
                                    data-srcset='
                                        ${posterImg("w185", item.poster_path)} 185w,
                                        ${posterImg("w342", item.poster_path)} 342w,
                                       
                                        
                                    '
                                    sizes="(max-width: 300px) 185px,(max-width: 780px) 342px"
                                />
                            ` : `<img src="${noPoster.src}" alt="no poster found" onload="this.classList.add('loaded')" class="img-cover round-8 img-t notFoundImg"  loading="lazy" />`}
                            </div>
                            <h3 class="line-relaxed fs-20 line-clamp-1 pt-2 ps-4">${item.original_title || item.original_name}</h3>
                            <p class="year o-80 fs-16 ps-6 fw-500 pt-0">${item.release_date ? `(${splitDate(item.release_date)})` : item.first_air_date ? `(${splitDate(item.first_air_date)})` : ""}</p>
                            <a href=${`/movies/${item.id}`} class="w-full h-full absolute inset-0"></a>
                        </div>
                    </div>
                `;
            } else {
                cardHTML = `
                    <div class="AE_card relative h-fit mb-5 card ${!item.release_date && !item.first_air_date && 'pb-9'}" data-id=${item.id}>
                        <div class="cardImg imgGrid round-8 relative">
                            ${item.poster_path !== null
                        ? `
                                    <img
                                        data-src=${posterImg("w92", item.poster_path)}
                                        src=${posterImg("w500", item.poster_path)}
                                        alt=${item.title || item.name}
                                        class="img-cover round-8 img-t lazyLoad"
                                        loading="lazy"
                                        decoding="async"
                                        data-srcset='
                                            ${posterImg("w185", item.poster_path)} 185w,
                                            ${posterImg("w342", item.poster_path)} 342w,
                                            
                                           
                                        '
                                        sizes="(max-width: 300px) 185px,(max-width: 780px) 342px"
                                    />
                            `
                        : `<img src="${noPoster.src}" alt="no poster found" onload="this.classList.add('loaded')" class="img-cover round-8 img-t notFoundImg"  loading="lazy" />`
                    }
                        </div>
                        <h3 class="line-relaxed fs-20 line-clamp-1 pt-2 ps-4">${item.original_title || item.original_name}</h3>
                        <p class="year o-80 fs-16 ps-6 fw-500 pt-0">${item.release_date ? `(${splitDate(item.release_date)})` : item.first_air_date ? `(${splitDate(item.first_air_date)})` : ""}</p>
                        <a href=${`/movies/${item.id}`} class="w-full h-full absolute inset-0"></a>
                    </div>
                `;
            }
        } else {

            // If the type and media_type are both 'person', display the people card
            cardHTML = `
                <div class="peopleCard card  w-full mb-5 relative ${item.profile_path === null ? 'h-full' : 'h-fit'} ${!item.known_for_department && 'pb-9'} ${!item.known_for_department && item.profile_path ? "noData" : ""}" data-id=${item.id}>
                    <div class="peopleImg round-8 ${item.profile_path === null ? 'noPeople' : 'h-3/4'}">
                    ${item.profile_path !== null
                    ? `
                            <img
                                data-src=${profileImg("w185", item.profile_path)}
                                src=${profileImg("w45", item.profile_path)}
                                alt="profile"
                                class="img-cover round-8 img-t lazyLoad"
                                loading="lazy"
                                decoding="async"
                                data-srcset='
                                    ${profileImg("w45", item.profile_path)} 45w,
                                    ${profileImg("w185", item.profile_path)} 185w,
                                    ${profileImg("h632", item.profile_path)} 632w
                                '
                                sizes="(max-width: 300px) 45px,(max-width: 780px) 185px,(max-width: 1280px) 632px,632px"
                            />
                        `
                    : `<img src="${peopleImg.src}" alt="no people found" onload="this.classList.add('loaded')" loading="lazy" class="img-cover round-8 img-t notFoundImg"  />`
                }
                    </div>
                    <h3 class="line-relaxed fs-20 line-clamp-1 pt-2 ps-4">${item.name}</h3>
                    ${item.known_for_department && `<p class="year o-80 fs-16 ps-6 fw-500 pt-0">${item.known_for_department}</p>`}
                    <a href=${`people/${item.id}`} class="w-full h-full absolute inset-0"></a>
                </div>
            `;
        }

        return cardHTML;
    }).join('');




    if (action === "inner") {
        container.innerHTML = getData;
    } else {
        container.insertAdjacentHTML('beforeend', getData);
    }
    loadLazyImage();
    console.log('loadLazyImage')
};
export const loadLazyImage = () => {
    const images = document.querySelectorAll('.lazyLoad') as NodeListOf<HTMLImageElement>;
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                let imgSrc = img.dataset.src as string;
                let imgSrcset = img.dataset.srcset as string;
                if (!img.classList.contains('notFoundImg')) {
                    if (imgSrc) img.src = imgSrc;
                    if (imgSrcset) img.srcset = imgSrcset;
                }
                img.classList.add('loading');
                img.addEventListener('load' , ()=>{
                    console.log("loaded");
                    img.classList.remove('loading');
                    img.classList.add('loaded');
                })
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: "150px",
        threshold: .3
    });

    // Observe each image
    images.forEach((img) => observer.observe(img));
}
document.addEventListener('DOMContentLoaded', loadLazyImage)
loadLazyImage();

// effect all cards fade up
export const CardEffect = ()=>{
    const Cards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;
    

    const observer = new IntersectionObserver((entries , observer)=>{
        entries.forEach((entry) => {
            const card = entry.target as HTMLElement;
            card.classList.toggle("show" , entry.isIntersecting)
        });
    } , {
        threshold: .8,
        rootMargin: "300px"
    })
    Cards.forEach((card , index) =>{
        const delay = (index % 10) * 100;
        card.style.transitionDelay = `${delay}ms`
        observer.observe(card)
    });
}
CardEffect();

export const LastCardFollow = (loadMore: () => void)=>{

    const observer = new IntersectionObserver((entries )=>{
        const lastCard = entries[0];
        

        if(!lastCard.isIntersecting) return;
        loadMore();
        if (lastCard) observer.observe(lastCard.target);
        observer.observe(document.querySelector('.card:last-child')as HTMLElement)
    } , {
        rootMargin: '200px'
    })
    if(document.querySelector('.card:last-child')as HTMLElement)observer.observe(document.querySelector('.card:last-child')as HTMLElement)
}

