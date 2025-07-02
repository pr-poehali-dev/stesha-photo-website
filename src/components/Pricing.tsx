import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const pricingPlans = [
  {
    id: 1,
    title: "Семейная фотосессия",
    price: "8 000 ₽",
    duration: "1-2 часа",
    includes: [
      "До 5 человек в кадре",
      "30-40 обработанных фотографий",
      "Съёмка в студии или на природе",
      "Галерея для скачивания",
      "Консультация по образам",
    ],
    popular: true,
  },
  {
    id: 2,
    title: "Индивидуальная съёмка",
    price: "5 000 ₽",
    duration: "1 час",
    includes: [
      "Персональная съёмка",
      "20-25 обработанных фотографий",
      "Выбор локации",
      "Галерея для скачивания",
      "Ретушь портретов",
    ],
    popular: false,
  },
  {
    id: 3,
    title: "Мини-сессия",
    price: "3 000 ₽",
    duration: "30 минут",
    includes: [
      "Быстрая съёмка",
      "10-15 обработанных фотографий",
      "Студийная съёмка",
      "Экспресс-обработка",
      "Готовые фото за 3 дня",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-warm-pink">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-warm-brown mb-4">
            Прайс
          </h2>
          <p className="text-lg text-warm-brown/70 font-body max-w-2xl mx-auto">
            Честные цены на качественные фотосессии. Выберите подходящий пакет
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 ${
                plan.popular ? "ring-4 ring-warm-brown/20 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-warm-brown text-warm-cream px-6 py-2 rounded-full text-sm font-medium">
                    Популярно
                  </span>
                </div>
              )}

              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-display text-warm-brown mb-2">
                  {plan.title}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-warm-brown">
                    {plan.price}
                  </span>
                  <span className="text-warm-brown/60 ml-2">
                    / {plan.duration}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-8">
                <ul className="space-y-3 mb-8">
                  {plan.includes.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon
                        name="Check"
                        size={20}
                        className="text-warm-brown mt-0.5 flex-shrink-0"
                      />
                      <span className="text-warm-brown/80 font-body text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-body font-medium py-3 rounded-2xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-warm-brown hover:bg-warm-brown/90 text-warm-cream"
                      : "bg-warm-peach hover:bg-warm-peach/80 text-warm-brown"
                  }`}
                >
                  <Icon name="MessageCircle" className="mr-2" size={18} />
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
