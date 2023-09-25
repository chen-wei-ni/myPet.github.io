function scrollShowPrint() {
    let footprint = document.querySelectorAll(".footprint");
    let catVideo = document.querySelectorAll('.stain_cat');
    let blackArea = document.querySelector('footer');
    let logo = document.querySelector(".blackPart .slidefix");
    let windowHeight = window.scrollY + window.innerHeight
    // console.log(footprint);
    footprint.forEach((e) => {
        let itemHeight = e.offsetHeight + e.offsetTop;
        // console.log(itemHeight, windowHeight, document.body.scrollHeight)
        if (windowHeight > itemHeight) {
            e.style.animation = "showUp 0.8s ease forwards 0.2s";
        }
    })
    catVideo.forEach(cat => {
        let itemHeight = cat.offsetHeight + cat.offsetTop;
        if (windowHeight > itemHeight) {
            cat.style.animation = "videoShowUp 2s ease forwards";
        }
    });
    // console.log(windowHeight, blackArea.offsetTop);
    if (windowHeight > blackArea.offsetTop + 500) {
        logo.style.opacity = "1";
    } else {
        logo.style.opacity = "0";
    }
    // if (windowHeight == document.body.scrollHeight) {
    //     window.removeEventListener("scroll", scrollShowPrint);
    // }
}
window.addEventListener('scroll', scrollShowPrint);
scrollShowPrint();

// --- 隱藏標題跟文章顯現在視窗上時出現
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(items => {
    items.forEach((item) => {
        // console.log(item)
        if (item.isIntersecting) {
            item.target.classList.add('bomb');
        }
    });
});
hiddenElements.forEach((el) => observer.observe(el));

// --上方自輪播出現
const slideShow = document.querySelector(".back");
setTimeout(() => {
    slideShow.classList.add("show");
}, 500);

// --下方貓咪根據卷軸往上或往下移動效果
const standCC = document.querySelector(".kawaiiCC");
const lieCC = document.querySelector(".lieCC");
function scrollDownOrTop() {
    let curve = document.querySelector('.connect');
    let wrapper = document.querySelector(".wrapper");
    let before = this.scrollY;
    window.addEventListener("scroll", function () {
        // wrapper sticky
        wrapper.style.top = `${(wrapper.offsetHeight / 1.8) * -1}px`
        //---connect curve
        let value = 1 + this.window.scrollY / (window.scrollY + window.innerHeight);
        //---cat icon float
        let after = this.scrollY;
        let delta = after - before;
        if (delta === 0) return false;
        if (delta > 0) {
            standCC.style.left = "100px";
            lieCC.style.top = "-11%"
            curve.style.transform = `scaleY(${value})`;
        } else {
            standCC.style.left = "-200px";
            lieCC.style.top = "-5%"
            curve.style.transform = `scaleY(${value * 0.2})`;
        }
        // console.log(delta > 0 ? "down" : "up");
        before = after;
    });
};
scrollDownOrTop();
