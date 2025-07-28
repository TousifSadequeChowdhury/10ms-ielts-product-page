// src/components/Offers.tsx
import { useState, useEffect } from 'react';
import { Section } from '../types/product';

const Offers: React.FC<{ section: Section }> = ({ section }) => {
  const offer = section.values[0];
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!offer?.end_at) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const endDate = new Date(offer.end_at).getTime();
      const distance = endDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [offer?.end_at]);
  
  if (!offer) return null;

  return (
    <section className="my-8 p-4 bg-red-100 border border-red-300 text-center rounded-lg">
        <h3 className="text-red-700 font-semibold">{offer.text}</h3>
        <div className="flex justify-center gap-4 mt-2 text-xl font-bold text-red-800">
            <div>{timeLeft.days}d</div>
            <div>{timeLeft.hours}h</div>
            <div>{timeLeft.minutes}m</div>
            <div>{timeLeft.seconds}s</div>
        </div>
    </section>
  );
};

export default Offers;