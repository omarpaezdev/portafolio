import { useEffect } from "react";

export function useCursor() {
  useEffect(() => {
    const cur = document.getElementById("op-cur");
    const ring = document.getElementById("op-cur-ring");
    if (!cur || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0, raf;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);
    const els = document.querySelectorAll("a, button, .op-skill-item, .op-project-card, .op-contact-item, .op-btn");
    const enter = () => document.body.classList.add("op-ch");
    const leave = () => document.body.classList.remove("op-ch");
    els.forEach((el) => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });
    const tick = () => {
      cur.style.left = mx + "px"; cur.style.top = my + "px";
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      document.removeEventListener("mousemove", onMove);
      els.forEach((el) => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); });
      cancelAnimationFrame(raf);
    };
  }, []);
}

export function useBgCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("op-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, raf;
    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * 1920, y: Math.random() * 1080,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      o: Math.random() * 0.45 + 0.08,
    }));
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = 1920; if (d.x > 1920) d.x = 0;
        if (d.y < 0) d.y = 1080; if (d.y > 1080) d.y = 0;
        ctx.beginPath();
        ctx.arc((d.x * W) / 1920, (d.y * H) / 1080, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,176,${d.o})`; ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo((dots[i].x * W) / 1920, (dots[i].y * H) / 1080);
            ctx.lineTo((dots[j].x * W) / 1920, (dots[j].y * H) / 1080);
            ctx.strokeStyle = `rgba(0,229,176,${0.04 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);
}

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".op-reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function useNavScroll() {
  useEffect(() => {
    const nav = document.getElementById("op-nav");
    if (!nav) return;
    const handler = () => nav.classList.toggle("scrolled", window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
}
