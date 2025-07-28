// src/components/ExclusiveFeatures.tsx
import { Section } from '../types/product';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const ExclusiveFeatures: React.FC<{ section: Section }> = ({ section }) => {
  if (!section || !section.values) {
    return null;
  }
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{section.name}</h2>
      <div className="space-y-6">
        {section.values.map((item: any) => (
          <div key={item.id} className="border rounded-lg p-4">
            <img src={item.file_url} alt={item.title} className="w-full h-auto rounded-md mb-4"/>
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <ul className="space-y-2">
              {item.checklist.map((check: string, index: number) => (
                <li key={index} className="flex items-center text-gray-700">
                    <CheckIcon />
                    <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveFeatures;