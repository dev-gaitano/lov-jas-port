
import { useState } from "react";
import { Film as FilmIcon, Play, Award } from "lucide-react";

interface FilmProject {
  id: number;
  title: string;
  year: string;
  category: string;
  thumbnail: string;
  description: string;
  awards?: string[];
}

const films: FilmProject[] = [
  {
    id: 1,
    title: "The Silent Echo",
    year: "2023",
    category: "Short Film",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    description: "A haunting exploration of memory and loss through the eyes of a young artist.",
    awards: ["Best Short Film - Amsterdam Film Festival 2023"]
  },
  {
    id: 2,
    title: "Urban Rhythms",
    year: "2022",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    description: "A documentary capturing the pulse of city life across three continents.",
  },
  {
    id: 3,
    title: "Colors of Dawn",
    year: "2021",
    category: "Feature Film",
    thumbnail: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d",
    description: "A coming-of-age story set against the backdrop of a changing world.",
    awards: ["Official Selection - Berlin International Film Festival 2022"]
  }
];

const Films = () => {
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null);

  return (
    <section id="films" className="relative py-24 bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-black/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <FilmIcon className="w-8 h-8 text-gold" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold">Featured Films</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film) => (
            <div
              key={film.id}
              className="relative group"
              onMouseEnter={() => setHoveredFilm(film.id)}
              onMouseLeave={() => setHoveredFilm(null)}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {hoveredFilm === film.id && (
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-xl font-playfair font-bold mb-2">{film.title}</h3>
                      <p className="text-sm text-white/70 mb-4">{film.description}</p>
                      {film.awards && (
                        <div className="flex items-center gap-2 text-gold">
                          <Award className="w-4 h-4" />
                          <span className="text-sm">{film.awards[0]}</span>
                        </div>
                      )}
                      <button className="mt-4 px-6 py-2 bg-gold/20 hover:bg-gold/30 border border-gold/50 rounded-full flex items-center gap-2 transition-colors duration-300">
                        <Play className="w-4 h-4" />
                        Watch Trailer
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="font-playfair font-bold text-lg">{film.title}</h3>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <span>{film.year}</span>
                  <span>•</span>
                  <span>{film.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Films;
