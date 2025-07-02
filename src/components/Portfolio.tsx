import { Card } from "@/components/ui/card";

const portfolioImages = [
  {
    id: 1,
    type: "Семейная фотосессия",
    description: "Теплый семейный портрет в парке",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    type: "Индивидуальная съёмка",
    description: "Естественный портрет в студии",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    type: "Семейная фотосессия",
    description: "Счастливые моменты дома",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    type: "Индивидуальная съёмка",
    description: "Креативный портрет на природе",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    type: "Семейная фотосессия",
    description: "Игра с детьми на улице",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    type: "Индивидуальная съёмка",
    description: "Элегантный деловой портрет",
    image: "/placeholder.svg",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 px-4 bg-warm-sage">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-warm-brown mb-4">
            Портфолио
          </h2>
          <p className="text-lg text-warm-brown/70 font-body max-w-2xl mx-auto">
            Каждая фотография — это история. Посмотрите, как я рассказываю их
            через объектив
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 via-warm-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-warm-peach text-warm-brown text-xs font-medium px-3 py-1 rounded-full mb-2">
                    {item.type}
                  </span>
                  <p className="font-body text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
