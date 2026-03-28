import Lenis from "lenis";
export function smooth() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
}
