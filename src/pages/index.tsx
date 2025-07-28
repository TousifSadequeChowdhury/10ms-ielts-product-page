import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ProductData } from '../types/product';

// Import all your created components
import Trailer from '../components/Trailer';
import Instructors from '../components/Instructors';
import Pointers from '../components/Pointers';
import Checklist from '../components/Checklist';
import Features from '../components/Features';
import About from '../components/About';
import CTA from '../components/CTA';
import ExclusiveFeatures from '../components/ExclusiveFeatures';
import Offers from '../components/Offers';
import GroupJoin from '../components/GroupJoin';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';

// Define the props for the page component
interface PageProps {
  product: ProductData;
  lang: 'en' | 'bn';
}

const HomePage: NextPage<PageProps> = ({ product, lang }) => {
  // Find all sections from the API, checking if they have content
  const offersSection = product.sections.find((s) => s.type === 'offers' && s.values.length > 0);
  const instructorSection = product.sections.find((s) => s.type === 'instructors' && s.values.length > 0);
  const featuresSection = product.sections.find((s) => s.type === 'features' && s.values.length > 0);
  const groupJoinSection = product.sections.find((s) => s.type === 'group_join_engagement' && s.values.length > 0);
  const pointersSection = product.sections.find((s) => s.type === 'pointers' && s.values.length > 0);
  const exclusiveFeatureSection = product.sections.find((s) => s.type === 'feature_explanations' && s.values.length > 0);
  const testimonialsSection = product.sections.find((s) => s.type === 'testimonials' && s.values.length > 0);
  const aboutSection = product.sections.find((s) => s.type === 'about' && s.values.length > 0);
  const faqSection = product.sections.find((s) => s.type === 'faq' && s.values.length > 0);

  return (
    <>
      <Head>
        <title>{Array.isArray(product.seo) ? product.title : product.seo.title}</title>
        <meta name="description" content={Array.isArray(product.seo) ? '' : product.seo.description} />
            <link rel="icon" href="/public/tenminfavicon.png" />

      </Head>

      <div className="text-center py-2 bg-gray-100">
        <Link href="/?lang=bn" className={`p-2 ${lang === 'bn' ? 'font-bold text-green-600' : ''}`}>বাংলা</Link>
        |
        <Link href="/?lang=en" className={`p-2 ${lang === 'en' ? 'font-bold text-green-600' : ''}`}>English</Link>
      </div>

      <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:gap-8" key={lang}>
          
          {/* Left Column (Main Content) */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <div className="prose mt-4 max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
            {offersSection && <Offers section={offersSection} />}
            {instructorSection && <Instructors section={instructorSection} />}
            {featuresSection && <Features section={featuresSection} />}
            {groupJoinSection && <GroupJoin section={groupJoinSection} />}
            {pointersSection && <Pointers section={pointersSection} />}
            {exclusiveFeatureSection && <ExclusiveFeatures section={exclusiveFeatureSection} />}
            {testimonialsSection && <Testimonials section={testimonialsSection} />}
            {aboutSection && <About section={aboutSection} />}
            {faqSection && <Faq section={faqSection} />}
          </div>

          {/* Right Column (Sidebar) */}
          <div className="w-full md:w-1/3 md:sticky md:top-4 h-fit space-y-4 mt-8 md:mt-0">
            <Trailer media={product.media} />
            <CTA text={product.cta_text.name} />
            <Checklist items={product.checklist} />
          </div>

        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const lang = context.query.lang === 'bn' ? 'bn' : 'en';

    const res = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
      {
        headers: {
          'X-TENMS-SOURCE-PLATFORM': 'web',
        },
      }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch API: ${res.status}`);
    }

    const apiResponse = await res.json();
    const product: ProductData = apiResponse.data;

    if (!product) {
      return { notFound: true };
    }
    
    return { props: { product, lang } };

  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { notFound: true };
  }
};

export default HomePage;