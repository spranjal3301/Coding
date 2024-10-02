//! Four ways to navigate between routes in Next.js


//- Linking and Navigating
import Link from 'next/link';

const HomePage = () => (
  <div>
    <Link href="/about">
      <a>Go to About Page</a>
    </Link>
  </div>
);

export default HomePage;


//- useRouter hook (Client Components)
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  const goToAbout = () => {
    router.push('/about');
  };

  return <button onClick={goToAbout}>Go to About Page</button>;
};

import { useRouter } from 'next/router';

const He = () => {
  const router = useRouter();

  const replaceRoute = () => {
    router.replace('/about');
  };

  return <button onClick={replaceRoute}>Replace with About Page</button>;
};


//- Using the redirect function (Server Components)
import { redirect } from 'next/redirect';

export  function Pag() {
  return redirect('/about');
}

