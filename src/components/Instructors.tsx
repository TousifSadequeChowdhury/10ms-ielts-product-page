import { Section } from '../types/product';
const Instructors: React.FC<{ section: Section }> = ({ section }) => (
  <section className="my-12 p-6 bg-gray-100 rounded-lg">
    <h2 className="text-3xl font-bold text-center mb-6">{section.name}</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {section.values.map((instructor: any) => (
        <div key={instructor.name} className="text-center w-48">
          <img src={instructor.image} alt={instructor.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md"/>
          <h3 className="mt-4 text-xl font-semibold">{instructor.name}</h3>
          <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: instructor.description }}></p>
        </div>
      ))}
    </div>
  </section>
);
export default Instructors;