export function defineColumnFields<const T extends readonly string[]>(fields: T) {
  return fields;
}

export const isInteractiveElement = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  return !!target.closest("input,button,select,textarea,option,a,[contenteditable='true']");
};
