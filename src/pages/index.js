import Gateway from "@/components/Gateway";
import Header from "@/components/Header";
import Traders from "@/components/Traders";

export default function Home() {


  return (
    <>
      <main className='overflow-hidden bg-black'>
        <Header />
        <Gateway />
        <Traders />
      </main>
    </>
  );
}


