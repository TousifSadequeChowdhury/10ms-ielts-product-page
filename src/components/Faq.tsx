// src/components/Faq.tsx
import { useState } from 'react';
import { Section } from '../types/product';

const FaqItem: React.FC<{ item: any }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex justify-between items-center p-4 font-semibold"
            >
                {item.question}
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <div
                    className="p-4 prose max-w-none text-black bg-white"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                />
            )}
        </div>
    );
};


const Faq: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{section.name}</h2>
      <div className="border rounded-lg">
        {section.values.map((item: any) => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Faq;