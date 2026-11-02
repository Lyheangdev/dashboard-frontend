export const useSessionStorage = <T>(key: string) => {
  const data = ref<T | null>(null);

  function setValue(payload: T) {
    sessionStorage.setItem(key, JSON.stringify(payload));
  }

  function getValue(): T | null {
    const dataObj = sessionStorage.getItem(key);
    return !dataObj ? null : (JSON.parse(dataObj) satisfies T);
  }

  function remove() {
    sessionStorage.removeItem(key);
  }

  onBeforeMount(() => {
    if (import.meta.client) {
      const obj = getValue();
      data.value = obj;
    }
  });

  return { data, setValue, getValue, remove };
};
