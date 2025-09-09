import { create } from 'zustand';
const LS_KEY = 'weather_settings_v1';
export const useSettings = create((set, get) => ({
    unit: 'C',
    theme: 'light',
    favorites: [],
    setUnit: (u) => {
        set({ unit: u });
        persist();
    },
    toggleTheme: () => {
        const next = get().theme === 'light' ? 'dark' : 'light';
        set({ theme: next });
        document.documentElement.dataset.theme = next;
        persist();
    },
    addFavorite: (f) => {
        const existing = get().favorites;
        if (existing.some(e => e.name === f.name))
            return;
        const updated = [...existing, f];
        set({ favorites: updated });
        persist();
    },
    removeFavorite: (name) => {
        set({ favorites: get().favorites.filter(f => f.name !== name) });
        persist();
    },
    hydrate: () => {
        try {
            const raw = localStorage.getItem(LS_KEY);
            if (!raw)
                return;
            const parsed = JSON.parse(raw);
            set(parsed);
            document.documentElement.dataset.theme = parsed.theme || 'light';
        }
        catch { }
    }
}));
function persist() {
    try {
        const { unit, theme, favorites } = useSettings.getState();
        localStorage.setItem(LS_KEY, JSON.stringify({ unit, theme, favorites }));
    }
    catch { }
}
