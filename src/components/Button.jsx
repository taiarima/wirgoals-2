export default function Button({
  preHoverText,
  onClick,
  maxWidth,
  className,
  children,
}) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {preHoverText ? preHoverText : children}
    </button>
  );
}
