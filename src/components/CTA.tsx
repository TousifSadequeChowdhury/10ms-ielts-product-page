const CTA: React.FC<{ text: string }> = ({ text }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 border-t z-50">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <p className="text-gray-600">Course Fee</p>
        <p className="text-2xl font-bold">৳1000</p>
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">{text}</button>
    </div>
  </div>
);
export default CTA;