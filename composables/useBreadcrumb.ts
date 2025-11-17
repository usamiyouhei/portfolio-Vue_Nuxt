import { computed } from "vue";

type Crumb = {
  label: string;
  to?: string;
};

export const useBreadcrumb = (page: string, ...extra: Array<Crumb>) => {
  const map: Record<string, Crumb[]> = {
    news: [{ label: "News", to: "/news" }],
    works: [{ label: "Works", to: "/works" }],
    service: [{ label: "Service", to: "/service" }],
    about: [{ label: "About", to: "/about" }],
    contact: [{ label: "Contact", to: "/#contact" }],
  };

  const crumbs = computed<Crumb[]>(() => {
    const base = map[page] || [];
    return [...base, ...extra];
  });
  return { crumbs };
};
