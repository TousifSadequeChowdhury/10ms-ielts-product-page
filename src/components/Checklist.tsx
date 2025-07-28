// src/components/Checklist.tsx
import { ChecklistItem } from '../types/product';

const Checklist: React.FC<{ items: ChecklistItem[] }> = ({ items }) => (
  <section className="my-8">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
      {items.map((item, index) => (
        // Only show items that are flagged as visible
        item.list_page_visibility && (
          <div key={index} className="p-3 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center">
            <img src={item.icon} alt="" className="w-8 h-8 mb-2" />
            <p className="text-xs font-semibold text-gray-700">{item.text}</p>
          </div>
        )
      ))}
    </div>
  </section>
);

export default Checklist;