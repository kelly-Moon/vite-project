import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
  gsap.registerPlugin(ScrollTrigger);

  const horizontal = document.querySelector("#port");
  const horSection = gsap.utils.toArray(".port_item");
  // const wrap = horizontal.querySelector(".port_wrap");

  gsap.to(horSection, {
    xPercent: -120 * (horSection.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#port",
      start: "top 56px",
      // end: "+=3000",
      eend: () => "+=" + horizontal.offsetWidth,
      pin: true,
      scrub: 1,
      markers: false,
      invalidateOnRefresh: true, //refresh될 때마다 다시 계산
      anticipatePin: 1, //pin 시작할 때 화면 튀는 현상(jump)을 줄여주는 옵션
    },
  });
}
