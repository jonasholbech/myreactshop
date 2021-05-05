export default function Nav(props) {
  return (
    <nav className="Nav">
      <a href="/">Home</a>
      {props.children}
    </nav>
  );
}
