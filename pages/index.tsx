import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Image
        src="/assets/splash.png"
        alt="primelab"
        layout="fill"
      />
    </div>
  )
}

export default Home;
