import Header from "../components/Header"
import Hero from "../components/Hero"


export default async function Page() {

  return (
    <div className="flex bg-black flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
