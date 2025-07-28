// src/components/GroupJoin.tsx
import { Section } from '../types/product';

const GroupJoin: React.FC<{ section: Section }> = ({ section }) => {
  const engagement = section.values[0];
  if (!engagement) return null;

  return (
    <section 
        className="my-8 p-6 rounded-lg text-white relative overflow-hidden" 
        style={{ backgroundColor: engagement.background.primary_color || '#333' }}
    >
        <img src={engagement.background.image} alt="" className="absolute top-0 left-0 w-full h-full object-cover opacity-20"/>
        <div className="relative z-10 flex items-center gap-6">
            <img src={engagement.thumbnail} alt={engagement.title} className="w-32 h-32 object-cover rounded-md hidden md:block" />
            <div>
                <h3 className="text-2xl font-bold" style={{ color: engagement.title_color }}>{engagement.title}</h3>
                <p className="mt-2" style={{ color: engagement.description_color }}>{engagement.description}</p>
                <a 
                    href={engagement.cta.clicked_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-white text-black font-bold py-2 px-6 rounded-lg"
                >
                    {engagement.cta.text}
                </a>
            </div>
        </div>
    </section>
  );
};

export default GroupJoin;