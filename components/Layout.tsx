import Nav from "../components-base/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <div className="nav-placeholder"></div>
      <Nav />
    </>
  );
}
