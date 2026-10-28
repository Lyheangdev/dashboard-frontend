export const useClickOutSide = (
  target: MaybeRef<HTMLElement | null | undefined>,
  callback: () => void,
) => {
  const handleCheckClickOutside = (event: PointerEvent) => {
    const checkTarget = toValue(target);
    const clickElement = event.target;

    if (!checkTarget || !(clickElement instanceof Node) || checkTarget.contains(clickElement))
      return;

    callback();
  };

  onMounted(() => {
    window.addEventListener('pointerdown', handleCheckClickOutside);
  });

  onBeforeUnmount(() => {
    window.addEventListener('pointerdown', handleCheckClickOutside);
  });
};
