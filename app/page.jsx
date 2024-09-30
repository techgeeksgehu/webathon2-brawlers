import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Home() {
  return (
    <main>
      <section className="bg-green-400 md:h-[600px] flex justify-center flex-col md:flex-row md:justify-between py-5">
        <div className="flex justify-center items-center flex-col md:w-1/2 gap-2">
          <h1 className="text-5xl ">TBI GEHU</h1>
          <h3 className="text-2xl">Incubating your dreams into reality</h3>
          <Link href="/events" className="bg-green-200 rounded-xl py-2 px-3 text-xl font-bold flex justify-center items-center gap-3">
            <button>Get Started</button> <FaExternalLinkAlt />
          </Link>
        </div>
        <img src="static/img/homeImg.png" className="" />
      </section>
    </main>
  );
}
