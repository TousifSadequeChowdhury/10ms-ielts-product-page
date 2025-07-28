// src/components/Testimonials.tsx
import { Section } from '../types/product';

const Testimonials: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{section.name}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.values.map((item: any) => (
          <div key={item.id} className="border rounded-lg p-4 flex flex-col items-center text-center bg-gray-50">
            <img src={item.profile_image} alt={item.name} className="w-20 h-20 rounded-full object-cover mb-3"/>
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-sm font-semibold text-blue-600 mb-2">{item.description}</p>
            <p className="text-gray-600 text-sm italic">"{item.testimonial}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;