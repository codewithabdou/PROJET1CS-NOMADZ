import Providers from "@components/Provider";
import Nav from "@components/shared/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Nomadz",
  description: "E-tourism platform",
};

const LayoutRoot = ({ children, session }) => {
  return (
    <html lang="fr">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="h-screen font-poppins">
        <Providers session={session}>
          <Nav />
          <main className="h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default LayoutRoot;
