gsap.registerPlugin(ScrollTrigger);

gsap.to("#logo img", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".section_2",
    start: "top 0",
    end: "top 0",
    toggleActions: "restart none none reverse",
  },
});
gsap
  .timeline()
  .from(".section_1 .logo", { x: "-100%", opacity: 0 })
  .from(".section_1 h1", { y: "100%" })
  .from(".section_1 h6", { opacity: 0 })
  .from(".section_1 .bg", { x: "100%" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_2",
      start: "top 80%",
      end: "bottom 100%",
      scrub: 2,
    },
  })
  .from(".section_2 .section_title", { y: 100 })
  .from(".cabinet_left", { x: "-100%", opacity: 0 })
  .from(".content_list.left li", { y: 100, opacity: 0, stagger: 0.1 })
  .from(".cabinet_right", { x: "100%", opacity: 0 })
  .from(".content_list.right li", { y: 100, opacity: 0, stagger: 0.1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_3",
      start: "top 60%",
      end: "bottom 100%",
      scrub: 2,
    },
  })
  .from(".section_3 .bg", { x: "-100%", opacity: 0 })
  .from(".section_3 h2", { y: "100%" })
  .from(".section_3 h6", { y: 100, opacity: 0 })
  .from(".section_3 .bg_1, .section_3 .bg_2", { opacity: 0, stagger: 0.1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_4",
      start: "top 60%",
      end: "bottom 80%",
      scrub: 2,
    },
  })
  .from(".section_4 .section_title", { y: "100%" })
  .from(".section_4 .flex-end", { x: -100, y: 100, opacity: 0, stagger: 0.1 })
  .from(".section_4 .flex-start", { x: 100, y: 100, opacity: 0, stagger: 0.1 })
  .from(".section_4 img", { opacity: 0, stagger: 0.1 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_5",
      start: "top 60%",
      end: "bottom 100%",
      scrub: 2,
    },
  })
  .from(".section_5 .bg_1", { x: "-100%", opacity: 0 })
  .from(".section_5 h4", { y: "100%", opacity: 0 })
  .from(".section_5 h2", { y: "100%" })
  .from(".section_5 .bg_2", { opacity: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_6",
      start: "top 50%",
      end: "center 70%",
      scrub: 2,
    },
  })
  .from(".section_6 .section_title", { y: "100%" })
  .from(".section_6 article", { y: "100%", opacity: 0, stagger: 0.1 })
  .from(".section_6 .bg", { x: "100%", opacity: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_7",
      start: "top 60%",
      end: "center 70%",
      scrub: 2,
    },
  })
  .from(".section_7 .section_title", { y: "100%" })
  .from(".section_7 article", { y: "100%", opacity: 0, stagger: 0.3 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_8",
      start: "top 60%",
      end: "bottom 100%",
      scrub: 2,
    },
  })
  .from(".section_8 .section_title", { y: "100%" })
  .from(".section_8 .bg", { x: "-100%", opacity: 0 })
  .from(".section_8 article", { y: "100%", opacity: 0, stagger: 0.1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_9",
      start: "top 50%",
      end: "bottom 90%",
      scrub: 2,
    },
  })
  .from(".section_9 .bg", { y: 200, opacity: 0 })
  .from(".section_9 h2", { y: "100%" })
  .from(".section_9 p", { y: 100, opacity: 0 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_10",
      start: "top 50%",
      end: "bottom 90%",
      scrub: 2,
    },
  })
  .from(".section_10 .section_title", { y: "100%" })
  .from("#Fade", { x: "-100%", opacity: 0 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_11",
      start: "top 50%",
      end: "bottom 80%",
      scrub: 2,
    },
  })
  .from(".section_11 .bg", { y: 200, opacity: 0 })
  .from(".section_11 article", { y: 100, opacity: 0, stagger: 0.1 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_12",
      start: "top 50%",
      end: "bottom 80%",
      scrub: 2,
    },
  })
  .from(".section_12 .bg", { x: "100%", opacity: 0 })
  .from(".section_12 article", { y: 100, opacity: 0, stagger: 0.1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_13",
      start: "top 50%",
      end: "bottom 100%",
      scrub: 2,
    },
  })
  .from(".section_13 h1", { y: "100%" })
  .from(".section_13 h4", { y: "100%", opacity: 0 })
  .from(".section_13 a", { y: "100%", opacity: 0, stagger: 0.1 })
  .from(".section_13 img", { x: "100%", opacity: 0 });
