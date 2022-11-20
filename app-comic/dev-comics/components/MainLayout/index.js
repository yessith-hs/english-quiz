import { Footer } from "components/Footer";
import { Header } from "components/Header";

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className='px-2.5 max-w-md  m-auto mt-10'>{children}</main>
      <Footer />
    </>
  )
}
