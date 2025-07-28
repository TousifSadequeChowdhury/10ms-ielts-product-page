import { Section } from '../types/product';
import { Quote } from 'lucide-react'; // optional icon for better UI

const Testimonials: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <section className="my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">
        {section.name}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {section.values.map((item: any) => (
          <div
            key={item.id}
            className="border rounded-xl p-6 flex flex-col items-center text-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.profile_image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-200"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm font-medium text-red-600 mb-2">{item.description}</p>
            <div className="relative mt-2 text-gray-600 text-sm">
              <Quote className="absolute -top-3 -left-4 text-gray-300 w-6 h-6" />
              <p className="italic px-4">"{item.testimonial}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
