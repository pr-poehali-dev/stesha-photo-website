import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-cream via-warm-peach to-warm-pink px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-display font-light text-warm-brown mb-6 leading-tight">
          Стеша
          <span className="block text-4xl md:text-5xl mt-2 font-normal">
            фотограф
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-warm-brown/80 font-body font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Создаю теплые семейные истории и индивидуальные портреты, которые
          хочется хранить вечно 📸
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-warm-brown hover:bg-warm-brown/90 text-warm-cream font-body font-medium px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на съёмку
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-warm-cream font-body font-medium px-8 py-4 rounded-2xl transition-all duration-300"
          >
            <Icon name="Images" className="mr-2" size={20} />
            Посмотреть работы
          </Button>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-warm-brown/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
