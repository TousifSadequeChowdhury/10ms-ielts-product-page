import { MediaItem } from '../types/product';
const Trailer: React.FC<{ media: MediaItem[] }> = ({ media }) => {
  const trailerVideo = media.find(item => item.name === 'preview_gallery' && item.resource_type === 'video');
  if (!trailerVideo) return null;
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-4">কোর্স ট্রেইলার</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe src={`https://www.youtube.com/embed/${trailerVideo.resource_value}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full rounded-lg shadow-xl"></iframe>
      </div>
    </section>
  );
};
export default Trailer;