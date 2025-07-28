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
import ExclusiveFeatures from '../components/ExclusiveFeatures'; // Import the new component

interface PageProps {
  product: ProductData;
  lang: 'en' | 'bn';
}

const HomePage: NextPage<PageProps> = ({ product, lang }) => {
  // ... (the code to find sections remains the same)
  const featuresSection = product.sections.find((s) => s.type === 'features');
  const instructorSection = product.sections.find((s) => s.type === 'instructors');
  const pointersSection = product.sections.find((s) => s.type === 'pointers');
  const exclusiveFeatureSection = product.sections.find((s) => s.type === 'feature_explanations');
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

      <main className="container mx-auto p-4">
        {/* ADD THE key={lang} PROP TO THIS DIV */}
        <div className="flex flex-col md:flex-row md:gap-8" key={lang}>
          
          {/* Left Column (Main Content) */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: product.description }} />
            {instructorSection && <Instructors section={instructorSection} />}
            {featuresSection && <Features section={featuresSection} />}
            {pointersSection && <Pointers section={pointersSection} />}
            {exclusiveFeatureSection && <ExclusiveFeatures section={exclusiveFeatureSection} />}
            {aboutSection && <About section={aboutSection} />}
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

    // If the response from the server is not OK, something went wrong
    if (!res.ok) {
        throw new Error(`Failed to fetch API: ${res.status}`);
    }

    const apiResponse = await res.json();
    const product: ProductData = apiResponse.data;

    // If the API returns no data for the product
    if (!product) {
      return { notFound: true };
    }
    
    // Success case: return the props
    return { props: { product, lang } };

  } catch (error) {
    // Catch any error during the try block (e.g., network error)
    console.error("Error in getServerSideProps:", error);
    // Return a 404 page to prevent the app from crashing
    return { notFound: true };
  }
};

export default HomePage;