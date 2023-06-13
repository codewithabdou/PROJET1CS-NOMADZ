import Nav from "@components/shared/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Nomadz",
  description: "E-tourism platform",
};

const LayoutRoot = ({ children }) => {
  return (
    <html lang="fr">
      <body className="min-h-screen font-poppins">
        <Nav />
        <main className="h-screen">{children}</main>
      </body>
    </html>
  );
};

export default LayoutRoot;
