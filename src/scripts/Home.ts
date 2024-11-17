import { fetchApi } from "./api";
import {updateUi} from "./global";
let SectionContainer = document.querySelector(".trendSection .container .triendSlider .slider-wrapper") as HTMLDivElement;
let AllSpan = document.querySelectorAll(".mainHeading .tabValues .tap") as NodeListOf<HTMLSpanElement>


if (AllSpan) AllSpan.forEach((item: HTMLSpanElement) => {
    if (item === null) return console.warn('item span is not found or null');

    item.addEventListener('click', (e: Event) => {
        let targetValue = e.target as HTMLSpanElement;
        let Key = targetValue.textContent;
        SectionContainer.innerHTML = ''
        getData(Key);

    })
})
async function getData(Key: string | any ) {
    try {
        let loadingSection = document.querySelector(".loadingSection");
        if (loadingSection) loadingSection.classList.remove("d-none");
        let data = await fetchApi(`trending/all/${Key}`);
        const result = data.results;
        updateUi(result , 'inner' ,SectionContainer , true)
    } catch (err: any) {
        console.error(err);
    } finally {
        let loadingSection = document.querySelector(".loadingSection");
        if (loadingSection) loadingSection.classList.add("d-none");
    }

}
// ${item.poster_path !== null ? posterImg("w342", item.poster_path) : noPoster.src}


