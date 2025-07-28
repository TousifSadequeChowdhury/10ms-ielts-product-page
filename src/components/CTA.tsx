// src/components/CTA.tsx
const CTA: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-full">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">Course Fee</p>
          <p className="text-2xl font-bold text-gray-800">৳1000</p>
        </div>
        {/* Using the new 'brand-green' color */}
        <button className="bg-brand-green hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          {text}
        </button>
      </div>
    </div>
  );
};

export default CTA;