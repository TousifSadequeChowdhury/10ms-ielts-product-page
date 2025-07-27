import { ChecklistItem } from '../types/product';
const Checklist: React.FC<{ items: ChecklistItem[] }> = ({ items }) => (
  <section className="my-8">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
      {items.map((item, index) => (
        item.list_page_visibility && (
          <div key={index} className="p-4 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
            <img src={item.icon} alt="" className="w-8 h-8 mb-2" />
            <p className="text-sm font-semibold text-gray-700">{item.text}</p>
          </div>
        )
      ))}
    </div>
  </section>
);
export default Checklist;