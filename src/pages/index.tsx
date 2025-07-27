// src/pages/index.tsx
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ProductData } from '../types/product';
import Trailer from '../components/Trailer';
import Instructors from '../components/Instructors';
import Pointers from '../components/Pointers';
import Checklist from '../components/Checklist';
import Features from '../components/Features';
import About from '../components/About';
import CTA from '../components/CTA';

interface PageProps {
  product: ProductData;
  lang: 'en' | 'bn';
}

const HomePage: NextPage<PageProps> = ({ product, lang }) => {
  const featuresSection = product.sections.find((s) => s.type === 'features');
  const instructorSection = product.sections.find((s) => s.type === 'instructors');
  const pointersSection = product.sections.find((s) => s.type === 'pointers');
  const aboutSection = product.sections.find((s) => s.type === 'about');

  return (
    <>
      <Head>
        <title>{Array.isArray(product.seo) ? product.title : product.seo.title}</title>
        <meta name="description" content={Array.isArray(product.seo) ? '' : product.seo.description} />
      </Head>

      <div className="text-center py-2 bg-gray-100">
        <Link href="/?lang=bn" className={`p-2 ${lang === 'bn' ? 'font-bold text-green-600' : ''}`}>বাংলা</Link>
        |
        <Link href="/?lang=en" className={`p-2 ${lang === 'en' ? 'font-bold text-green-600' : ''}`}>English</Link>
      </div>

      <main className="container mx-auto p-4 pb-28">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: product.description }} />
        <Checklist items={product.checklist} />
        {featuresSection && <Features section={featuresSection} />}
        <Trailer media={product.media} />
        {instructorSection && <Instructors section={instructorSection} />}
        {pointersSection && <Pointers section={pointersSection} />}
        {aboutSection && <About section={aboutSection} />}
      </main>
      
      <CTA text={product.cta_text.name} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.query.lang === 'bn' ? 'bn' : 'en'; [cite: 6, 8]

  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, [cite: 7]
    {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web', [cite: 9]
      },
    }
  );

  const apiResponse = await res.json();
  const product: ProductData = apiResponse.data;

  if (!product) { return { notFound: true }; }
  
  return { props: { product, lang } };
};

export default HomePage;