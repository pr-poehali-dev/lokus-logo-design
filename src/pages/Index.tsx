import Logo from "@/components/Logo";
import BrandIcons from "@/components/BrandIcons";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const colors = [
    { name: "Графит", hex: "#1A1F2C", desc: "Основной тёмный" },
    { name: "Точность", hex: "#0EA5E9", desc: "Акцентный синий" },
    { name: "Пространство", hex: "#F1F0FB", desc: "Светлый фон" },
    { name: "Бетон", hex: "#8E9196", desc: "Нейтральный серый" }
  ];

  const typography = [
    {
      name: "Montserrat",
      samples: [
        { weight: "Bold", size: "48px", text: "ЛОКУС" },
        { weight: "SemiBold", size: "32px", text: "Проектирование" },
        { weight: "Medium", size: "24px", text: "Строительство объектов" }
      ]
    },
    {
      name: "IBM Plex Sans",
      samples: [
        { weight: "Regular", size: "18px", text: "Основной текст для описаний и информационных блоков" },
        { weight: "Medium", size: "16px", text: "Мы специализируемся на комплексных решениях" },
        { weight: "Light", size: "14px", text: "Детальная информация и технические характеристики" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-secondary mb-4">
            Фирменный стиль ЛОКУС
          </h1>
          <p className="text-xl text-muted-foreground">
            Чистая геометрия и точность строительной отрасли
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-secondary mb-8">Логотип</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-12 flex items-center justify-center bg-white">
              <Logo size={200} />
            </Card>
            <Card className="p-12 flex items-center justify-center bg-secondary">
              <Logo size={200} />
            </Card>
          </div>
          <div className="mt-6 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-3 text-lg">Концепция логотипа</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Геометрическая сетка</strong> — точность и структура</li>
              <li>• <strong>Модульная система</strong> — строительные блоки</li>
              <li>• <strong>Чистые линии</strong> — профессионализм</li>
              <li>• <strong>Контрастные элементы</strong> — баланс пространства</li>
            </ul>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-secondary mb-8">Цветовая палитра</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colors.map((color, index) => (
              <Card key={index} className="overflow-hidden hover:scale-105 transition-transform">
                <div 
                  className="h-40 w-full" 
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{color.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{color.desc}</p>
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                    {color.hex}
                  </code>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-secondary mb-8">Типография</h2>
          
          {typography.map((font, fontIndex) => (
            <Card key={fontIndex} className="p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">{font.name}</h3>
              <div className="space-y-6">
                {font.samples.map((sample, sampleIndex) => (
                  <div key={sampleIndex} className="border-l-4 border-primary pl-6">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {sample.weight}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {sample.size}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: sample.size,
                        fontWeight: sample.weight.toLowerCase().includes('bold') ? 700 : 
                                   sample.weight.toLowerCase().includes('semibold') ? 600 :
                                   sample.weight.toLowerCase().includes('medium') ? 500 :
                                   sample.weight.toLowerCase().includes('light') ? 300 : 400,
                        fontFamily: font.name === "Montserrat" ? "'Montserrat', sans-serif" : "'IBM Plex Sans', sans-serif"
                      }}
                      className="text-foreground"
                    >
                      {sample.text}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </section>

        <Separator className="my-16" />

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-secondary mb-8">Система иконок</h2>
          <Card className="p-12">
            <BrandIcons />
          </Card>
          <div className="mt-6 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-3 text-lg">Принципы иконографии</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Геометрическая точность</strong> — построение на модульной сетке</li>
              <li>• <strong>Минимализм</strong> — только необходимые элементы</li>
              <li>• <strong>Единая толщина линий</strong> — 2px для обводок</li>
              <li>• <strong>Масштабируемость</strong> — читаемость на любом размере</li>
            </ul>
          </div>
        </section>

        <Separator className="my-16" />

        <section>
          <h2 className="text-3xl font-semibold text-secondary mb-8">Применение стиля</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8">
              <div className="mb-4">
                <Logo size={80} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Деловая документация</h3>
              <p className="text-sm text-muted-foreground">
                Визитки, бланки, конверты с использованием логотипа и фирменных цветов
              </p>
            </Card>
            <Card className="p-8">
              <div className="mb-4 flex gap-2">
                <div className="w-12 h-12 bg-primary rounded"></div>
                <div className="w-12 h-12 bg-secondary rounded"></div>
                <div className="w-12 h-12 bg-muted rounded"></div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Цифровые носители</h3>
              <p className="text-sm text-muted-foreground">
                Веб-сайт, презентации, социальные сети с единой цветовой палитрой
              </p>
            </Card>
            <Card className="p-8">
              <div className="mb-4">
                <BrandIcons />
              </div>
              <h3 className="font-semibold text-xl mb-2">Навигация и указатели</h3>
              <p className="text-sm text-muted-foreground">
                Система иконок для объектов, схем и информационных материалов
              </p>
            </Card>
          </div>
        </section>

        <div className="mt-20 text-center text-muted-foreground">
          <p>© 2024 ЛОКУС — Проектно-строительная компания</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
