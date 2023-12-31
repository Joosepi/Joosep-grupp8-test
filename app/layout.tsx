import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang='en'>
        <body>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </body>
      </html>
  );
}