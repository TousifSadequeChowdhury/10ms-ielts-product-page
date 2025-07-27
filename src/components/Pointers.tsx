import { Section } from '../types/product';
const CheckIcon = () => (<svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>);
const Pointers: React.FC<{ section: Section }> = ({ section }) => (
  <section className="my-12 p-6 border rounded-lg">
    <h2 className="text-3xl font-bold mb-6">{section.name}</h2>
    <ul className="space-y-4">
      {section.values.map((pointer: any) => (
        <li key={pointer.id} className="flex items-start"><CheckIcon /><span>{pointer.text}</span></li>
      ))}
    </ul>
  </section>
);
export default Pointers;