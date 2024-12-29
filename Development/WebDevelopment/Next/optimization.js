//! Dynamic Import
//* React lazy alternative in Next.js is dynamic import

import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/hello'),{ssr : false});

export default function Home() {
    return (
        <div>
        <DynamicComponent />
        </div>
    );
}


//! Prefeatcing Link
//* Next.js automatically prefetches the code for the linked page in the background. This results in faster page transitions.

import Link from 'next/link';

export default function Home() {
    return (
        <Link prefetch={true} href="/about">
                <a>About</a>
        </Link>
    );
}


//! Image Optimization
//* Next.js automatically optimizes images using the next/image component.

import Image from 'next/image';

export default function Home() {
    return (
        <Image
            src="/image.jpg"
            alt="Image"
            width={500}
            height={500}
        />
    );

}


//! getStaticProps & getServerSideProps
//* getStaticProps is used to fetch data at build time. It is used for static sites.

export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    return {
        props: {
            data,
        },
        revalidate: 10,//- Revalidate every 10 seconds
    };
}


//* getServerSideProps is used to fetch data at request time. It is used for server-side rendering.

export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}


//! next/bundle-analyzer
//* next/bundle-analyzer is used to analyze the bundle size of the Next.js app.

// Install the package
// npm install @next/bundle-analyzer

//? next.config.js
module.exports = {
    plugins: ['@next/bundle-analyzer'],
};