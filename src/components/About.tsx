import { Section } from '../types/product';
const About: React.FC<{ section: Section }> = ({ section }) => (
  <section className="my-12">
    <h2 className="text-3xl font-bold text-center mb-6">{section.name}</h2>
    <div className="prose lg:prose-xl max-w-none space-y-6 bg-gray-3 p-6 rounded-lg">
      {section.values.map((item: any) => (
        <div key={item.id} className="p-4 rounded-md">
          <div className="font-bold" dangerouslySetInnerHTML={{ __html: item.title }} />
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      ))}
    </div>
  </section>
);
export default About;