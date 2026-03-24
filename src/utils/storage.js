const STORAGE_KEY = "heroio_installed_apps";

const safeParse = (value) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    return [];
  }
};

export const readInstalledApps = () => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return Array.isArray(safeParse(stored)) ? safeParse(stored) : [];
};

export const isAppInstalled = (id) => {
  const apps = readInstalledApps();
  return apps.some((item) => item.id === id);
};

export const installApp = (app) => {
  const apps = readInstalledApps();
  if (apps.some((item) => item.id === app.id)) return apps;
  const updated = [...apps, { ...app, installedAt: Date.now() }];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const uninstallApp = (id) => {
  const apps = readInstalledApps().filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  return apps;
};
