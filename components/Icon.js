export function Icon({ n, styles, children }) {
  return (
    <>
      <span className={"material-icons align-middle " + styles}>{n}</span>
      {children}
    </>
  );
}
// btn-close-white