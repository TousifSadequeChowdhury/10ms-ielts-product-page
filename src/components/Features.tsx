import { Section } from '../types/product';
const Features: React.FC<{ section: Section }> = ({ section }) => (
  <section className="my-12 p-6 bg-slate-50 rounded-lg">
    <h2 className="text-3xl font-bold text-center mb-6">{section.name}</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {section.values.map((feature: any) => (
        <div key={feature.id} className="flex items-start">
          <img src={feature.icon} alt="" className="w-12 h-12 mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <p className="text-gray-600">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Features;