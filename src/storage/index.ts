const JWT_KEY = 'jwt';

const storage = {
  set(name: string, value: string): void {
    try {
      window.localStorage.setItem(name, value);
    } catch {
      // do nothing
    }
  },
  get(name: string): string | null {
    try {
      return window.localStorage.getItem(name);
    } catch {
      return null;
    }
  },
  remove(name: string): void {
    try {
      window.localStorage.removeItem(name);
    } catch {
      // do nothing
    }
  },
};

export default storage;
export { JWT_KEY };
