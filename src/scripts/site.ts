// Comportamento da página: menu, traçado de progresso, barra de agendamento do celular,
// listas que abrem e fecham, mitos e verdades, depoimentos longos e o formulário → WhatsApp.
import { formMessage, whatsappLink } from "../data/site";

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => [
  ...root.querySelectorAll<T>(sel),
];

const desktop = matchMedia("(min-width: 1024px)");

const debounce = (fn: () => void, ms = 150) => {
  let t = 0;
  return () => {
    clearTimeout(t);
    t = window.setTimeout(fn, ms);
  };
};

/* ---------- menu ------------------------------------------------------------ */
function initMenu() {
  const toggle = $<HTMLButtonElement>("[data-menu-toggle]");
  const menu = $<HTMLElement>("[data-menu]");
  if (!toggle || !menu) return;
  const label = $("[data-menu-label]", toggle);
  const outside = [$("main"), $("footer.closing"), $("[data-actionbar]")].filter(Boolean) as HTMLElement[];
  let returnTo: HTMLElement | null = null;

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";
  const setOpen = (open: boolean, restoreFocus = true) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    if (label) label.textContent = open ? "Fechar" : "Menu";
    menu.classList.toggle("is-open", open);
    document.documentElement.classList.toggle("menu-open", open);
    outside.forEach((el) => (el.inert = open));
    if (open) {
      returnTo = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => $<HTMLElement>("[data-menu-link]", menu)?.focus({ preventScroll: true }));
    } else if (restoreFocus) {
      (returnTo ?? toggle).focus({ preventScroll: true });
    }
  };

  toggle.setAttribute("aria-label", "Abrir menu");
  toggle.addEventListener("click", () => setOpen(!isOpen()));
  menu.addEventListener("click", (e) => {
    if ((e.target as Element).closest("a")) setOpen(false, false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
    if (e.key === "Tab" && isOpen()) {
      const items = [toggle, ...$$<HTMLElement>("a, button", menu)];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  matchMedia("(min-width: 1200px)").addEventListener("change", (e) => {
    if (e.matches && isOpen()) setOpen(false, false);
  });
}

/* ---------- traçado de progresso no cabeçalho -------------------------------- */
function initProgress() {
  const box = $<HTMLElement>("[data-progress]");
  const svg = box && $<SVGSVGElement>("svg", box);
  if (!box || !svg) return;
  const [rest, done] = $$<SVGPathElement>("path", svg);
  const sections = $$<HTMLElement>("main > section");
  const links = new Map($$<HTMLAnchorElement>("[data-nav-link]").map((a) => [a.dataset.navLink, a]));

  const build = () => {
    const w = box.clientWidth;
    const h = box.clientHeight;
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const y = h - 1;
    let d = `M0 ${y}`;
    for (const s of sections.slice(1)) {
      const x = Math.round((Math.min(s.offsetTop, max) / max) * w);
      if (x < 10 || x > w - 16) continue;
      // um batimento em traço reto: Q, R, S e a onda T em triângulo
      d += ` L${x - 6} ${y} L${x - 4} ${y + 1.5} L${x - 1.5} ${y - h + 3} L${x + 1.5} ${y + 2} L${x + 3.5} ${y} L${x + 6} ${y} L${x + 9} ${y - 3} L${x + 12} ${y}`;
    }
    d += ` L${w} ${y}`;
    rest.setAttribute("d", d);
    done.setAttribute("d", d);
    paint();
  };

  let frame = 0;
  const paint = () => {
    frame = 0;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const p = Math.min(1, Math.max(0, scrollY / max));
    box.style.setProperty("--p", `${(p * 100).toFixed(2)}%`);
  };
  addEventListener("scroll", () => {
    if (!frame) frame = requestAnimationFrame(paint);
  }, { passive: true });
  addEventListener("resize", debounce(build));
  addEventListener("load", build);
  new ResizeObserver(debounce(build, 200)).observe(document.body);
  build();

  // seção atual destacada nos links do cabeçalho (a que cruza o meio da tela)
  let current = "";
  const mark = () => {
    const mid = innerHeight / 2;
    const s = sections.find((x) => {
      const r = x.getBoundingClientRect();
      return r.top <= mid && r.bottom > mid;
    });
    const id = s?.id ?? "";
    if (id === current) return;
    current = id;
    links.forEach((a, key) => (key === id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
  };
  let markFrame = 0;
  addEventListener("scroll", () => {
    if (!markFrame) markFrame = requestAnimationFrame(() => ((markFrame = 0), mark()));
  }, { passive: true });
  mark();
}

/* ---------- barra de agendamento (celular) ------------------------------------ */
function initActionBar() {
  const bar = $<HTMLElement>("[data-actionbar]");
  if (!bar) return;
  // some enquanto outro botão de agendar (abertura, formulário, fechamento) está na tela
  const watch = [$("[data-cta='hero']"), $("[data-form]"), $("[data-cta='close']")].filter(Boolean) as HTMLElement[];
  const onScreen = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < innerHeight;
  };
  let shown = false;
  const sync = () => {
    frame = 0;
    const show = scrollY > 80 && !watch.some(onScreen);
    if (show === shown) return;
    shown = show;
    bar.classList.toggle("is-shown", show);
    bar.inert = !show;
  };
  let frame = 0;
  addEventListener("scroll", () => {
    if (!frame) frame = requestAnimationFrame(sync);
  }, { passive: true });
  addEventListener("resize", debounce(sync, 120));
  bar.inert = true;
  sync();
}

/* ---------- áreas de atuação: lista aberta no computador, sanfona no celular ---- */
function initAreas() {
  const items = $$<HTMLDetailsElement>(".area");
  if (!items.length) return;
  const apply = () => {
    const wide = desktop.matches;
    items.forEach((d) => {
      const summary = $<HTMLElement>("summary", d)!;
      if (wide) {
        d.removeAttribute("name");
        d.open = true;
        summary.tabIndex = -1;
      } else {
        d.open = false;
        d.setAttribute("name", "areas");
        summary.removeAttribute("tabindex");
      }
    });
  };
  items.forEach((d) =>
    $("summary", d)!.addEventListener("click", (e) => {
      if (desktop.matches) e.preventDefault();
    }),
  );
  apply();
  desktop.addEventListener("change", apply);
}

/* ---------- mitos e verdades ---------------------------------------------- */
function initMitos() {
  const qs = $$<HTMLButtonElement>("[data-mito]");
  if (!qs.length) return;
  const panel = (q: HTMLButtonElement) => document.getElementById(q.getAttribute("aria-controls")!)!;
  const set = (q: HTMLButtonElement, on: boolean) => {
    q.setAttribute("aria-expanded", String(on));
    panel(q).hidden = !on;
  };
  const choose = (q: HTMLButtonElement, fromUser = true) => {
    const wasOpen = q.getAttribute("aria-expanded") === "true";
    qs.forEach((o) => set(o, o === q ? (desktop.matches ? true : !wasOpen) : false));
    if (fromUser && q.getAttribute("aria-expanded") === "true") history.replaceState(null, "", `#${q.id}`);
  };
  qs.forEach((q) => q.addEventListener("click", () => choose(q)));
  // no computador sempre há uma resposta aberta
  const ensureOne = () => {
    if (desktop.matches && !qs.some((q) => q.getAttribute("aria-expanded") === "true")) set(qs[0], true);
  };
  desktop.addEventListener("change", ensureOne);
  // no celular a lista começa fechada; no computador uma resposta fica sempre aberta
  if (!desktop.matches) qs.forEach((q) => set(q, false));
  ensureOne();
  return (id: string) => {
    const q = qs.find((x) => x.id === id || x.getAttribute("aria-controls") === id);
    if (!q) return false;
    qs.forEach((o) => set(o, o === q));
    q.scrollIntoView({ block: "center" });
    return true;
  };
}

/* ---------- perguntas frequentes ------------------------------------------- */
function initFaq() {
  const items = $$<HTMLDetailsElement>(".faq");
  // aberturas feitas pelo próprio script não mudam o endereço da página
  const auto = new WeakSet<HTMLDetailsElement>();
  items.forEach((d) =>
    d.addEventListener("toggle", () => {
      if (auto.has(d)) {
        auto.delete(d);
        return;
      }
      if (d.open) history.replaceState(null, "", `#${d.id}`);
    }),
  );
  // no computador a primeira pergunta já aparece respondida
  if (desktop.matches && items[0] && !location.hash) {
    auto.add(items[0]);
    items[0].open = true;
  }
  return (id: string) => {
    const d = items.find((x) => x.id === id);
    if (!d) return false;
    if (!d.open) auto.add(d);
    d.open = true;
    d.scrollIntoView({ block: "center" });
    return true;
  };
}

/* ---------- depoimentos longos ----------------------------------------------- */
function initDepoimentos() {
  const all = $<HTMLButtonElement>("[data-depo-all]");
  all?.addEventListener("click", () => {
    const list = $(".depo-list");
    list?.classList.add("is-all");
    $<HTMLElement>(".depo-list > li:nth-child(4) .depo__more, .depo-list > li:nth-child(4) figcaption")?.focus?.();
  });
  $$<HTMLButtonElement>("[data-depo-more]").forEach((btn) => {
    const rest = document.getElementById(btn.getAttribute("aria-controls")!);
    const dots = rest?.previousElementSibling as HTMLElement | null;
    const label = $("[data-more-label]", btn)!;
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      if (rest) rest.hidden = !open;
      if (dots) dots.hidden = open;
      label.textContent = open ? "Recolher depoimento" : "Ver depoimento completo";
    });
  });
}

/* ---------- formulário → WhatsApp ------------------------------------------- */
function initForm() {
  const form = $<HTMLFormElement>("[data-form]");
  if (!form) return;
  const status = $("[data-form-status]", form);
  const fields = ["nome", "email", "mensagem"].map(
    (n) => form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement,
  );
  const valid = (el: HTMLInputElement | HTMLTextAreaElement) =>
    el.name === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value.trim()) : el.value.trim().length >= 2;
  const check = (el: HTMLInputElement | HTMLTextAreaElement) => {
    const ok = valid(el);
    el.closest(".field")?.classList.toggle("has-error", !ok);
    el.setAttribute("aria-invalid", String(!ok));
    return ok;
  };
  fields.forEach((el) => {
    el.addEventListener("blur", () => {
      if (el.value.trim()) check(el);
    });
    el.addEventListener("input", () => {
      if (el.getAttribute("aria-invalid") === "true") check(el);
    });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const wrong = fields.filter((el) => !check(el));
    if (wrong.length) {
      wrong[0].focus();
      if (status) status.textContent = "";
      return;
    }
    const [nome, email, mensagem] = fields.map((el) => el.value.trim());
    window.open(whatsappLink(formMessage(nome, email, mensagem)), "_blank", "noopener");
    if (status) status.textContent = "O WhatsApp abriu com a sua mensagem. Toque em enviar por lá para concluir.";
  });
}

/* ---------- endereços diretos (#pergunta-..., #mito-...) ------------------------- */
function initDeepLinks(openers: Array<((id: string) => boolean) | undefined>) {
  const open = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    for (const fn of openers) if (fn?.(id)) return;
  };
  open();
  addEventListener("hashchange", open);
}

/* ---------- ano no rodapé ---------------------------------------------------- */
function initYear() {
  const y = String(new Date().getFullYear());
  $$("[data-year]").forEach((el) => (el.textContent = y));
}

initMenu();
initProgress();
initActionBar();
initAreas();
const openMito = initMitos();
const openFaq = initFaq();
initDepoimentos();
initForm();
initDeepLinks([openFaq, openMito]);
initYear();
