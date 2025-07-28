// src/components/CTA.tsx
const CTA: React.FC<{ text: string }> = ({ text }) => {
  return (
    // The component is now a simple block, not a fixed footer
    <div className="bg-white border rounded-lg p-4 shadow-sm w-full">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">Course Fee</p>
          <p className="text-2xl font-bold">৳1000</p>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          {text}
        </button>
      </div>
    </div>
  );
};

export default CTA;