import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Nomadz",
  description: "E-tourism platform",
};

const LayoutRoot = ({ children }) => {
  return (
    <html lang="fr">
      <body className="h-screen">
        <Nav />
        <main className="h-[calc(100vh-4rem)]">
          {children}
        </main>
      </body>
    </html>
  );
};

export default LayoutRoot;
