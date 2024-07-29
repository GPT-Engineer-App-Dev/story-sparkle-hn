import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-pink-100 to-red-100 flex flex-col justify-center items-center p-4">
      <Heart className="text-red-500 w-16 h-16 mb-6 animate-pulse" />
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4 text-center">Love: The Universal Language</h1>
      <p className="text-xl md:text-2xl text-red-800 mb-8 text-center max-w-2xl">
        Discover the power of love to transform lives, build connections, and create a better world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        {[
          { title: "Compassion", description: "Embrace empathy and kindness in your daily life." },
          { title: "Connection", description: "Foster meaningful relationships with others." },
          { title: "Self-Love", description: "Nurture your own well-being and personal growth." }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-red-500 mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
      <button className="mt-12 px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors">
        Spread the Love
      </button>
    </div>
  );
};

export default Index;
