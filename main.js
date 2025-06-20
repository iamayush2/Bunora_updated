// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const text = document.querySelector(".text p");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
  )
  .join("");

// side txt

let sidetxtcont = document.querySelector(".sidetxtcont");

let sidetxtdata = "Discover The Unexpected";

sidetxtdata.split("").forEach((e) => {
  const span = document.createElement("span");
  span.style.display = "inline-block";
  span.innerHTML = e;
  sidetxtcont.appendChild(span);
});

function coffeesidepicanimate() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#sec1",
      start: "top 5%",
      end: "bottom 10%",
      // markers: true,
      pin: true,
      scrub: 0,
    },
  });

  let aa = document.querySelectorAll(".aa");

  console.log(aa);

  aa.forEach((e) => {
    tl.to(e, {
      width: "0%",
      opacity: 0,
    });
  });
}

coffeesidepicanimate();

function sec8animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec8",
      start: "top 15%",
      end: "top -25%",

      scrub: 0.2,
      // markers: true,
      pin: true,
    },
  });

  tl.to(
    ".sec8txt",
    {
      x: "-465%",
    },
    "a"
  );
  tl.to(
    ".sec7tag ",
    {
      color: "#faf7ec",
      fontWeight: "700",
    },
    "a"
  );
}

sec8animation();

document.querySelector("textarea").addEventListener("click", function () {
  expandTextarea(this);
});

document.querySelector("textarea").addEventListener("blur", function () {
  compressTextarea(this);
});

function expandTextarea(element) {
  element.style.height = "20vh"; // Expand textarea
  element.nextElementSibling.classList.add("label-active"); // Move label up
}

function compressTextarea(element) {
  if (!element.value.trim()) {
    element.style.height = "60%"; // Compress textarea
    element.nextElementSibling.classList.remove("label-active"); // Reset label position
  }
}

function pageTransition() {
  let tl = gsap.timeline();
  tl.to(".transition", {
    duration: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power4.inOut",
  });
  tl.to(".transition", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0.2,
  });
}

function delay(n) {
  n = n || 0;
  return new promise((done) => {
    setTimeout(() => {
      done();
    });
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },
    },
  ],
});
