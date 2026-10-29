export function defineColumnFields<const T extends readonly string[]>(fields: T) {
  return fields;
}

export const isInteractiveElement = (target: EventTarget | null) => {
  if (!(target instanceof Element)) return false;
  return !!target.closest(
    'button, input, textarea, select, a, [role="button"], [contenteditable="true"]',
  );
};
