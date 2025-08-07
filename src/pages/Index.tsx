import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredDivision, setHoveredDivision] = useState<string | null>(null);
  
  // Smooth scroll animations on element visibility
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const militaryDivisions = [
    {
      id: 'stormtroopers',
      name: 'Штурмовики',
      description: 'Элитные войска Империи, обученные для любых боевых условий',
      icon: 'Shield',
      stats: { personnel: '2,000,000', effectiveness: '98%' },
      specialties: ['Штурм укреплений', 'Городской бой', 'Охрана объектов']
    },
    {
      id: 'navy',
      name: 'Имперский Флот',
      description: 'Космические силы, контролирующие гиперпространственные маршруты',
      icon: 'Rocket',
      stats: { vessels: '25,000', effectiveness: '95%' },
      specialties: ['Звёздные разрушители', 'TIE истребители', 'Орбитальная блокада']
    },
    {
      id: 'intelligence',
      name: 'Имперская Разведка',
      description: 'Секретная служба по сбору информации и контрразведке',
      icon: 'Eye',
      stats: { agents: 'Засекречено', effectiveness: '100%' },
      specialties: ['Шпионаж', 'Саботаж', 'Ликвидация целей']
    },
    {
      id: 'death-star',
      name: 'Звезда Смерти',
      description: 'Сверхоружие для поддержания мира и порядка в Галактике',
      icon: 'Zap',
      stats: { firepower: 'Абсолютная', range: 'Галактическая' },
      specialties: ['Уничтожение планет', 'Психологическое воздействие', 'Демонстрация силы']
    }
  ];

  const imperialLeaders = [
    {
      name: 'Император Палпатин',
      title: 'Галактический Император',
      description: 'Верховный правитель Галактической Империи',
      image: '/img/ddbb0ee0-bfa9-4c9d-a141-67a8f1d65cc4.jpg',
      achievements: ['Создал Галактическую Империю', 'Уничтожил орден джедаев', 'Установил мир в галактике']
    },
    {
      name: 'Дарт Вейдер',
      title: 'Лорд Ситхов',
      description: 'Правая рука Императора, защитник Империи',
      image: '/img/151cc7ac-4900-416a-bd38-370168dec8bc.jpg',
      achievements: ['Командует имперским флотом', 'Уничтожает врагов Империи', 'Обеспечивает порядок']
    }
  ];

  const trainingPrograms = [
    {
      name: 'Базовая подготовка',
      duration: '6 месяцев',
      description: 'Фундаментальное военное обучение для всех новобранцев'
    },
    {
      name: 'Специализированное обучение',
      duration: '1 год',
      description: 'Подготовка по выбранной военной специальности'
    },
    {
      name: 'Элитная программа',
      duration: '2 года',
      description: 'Подготовка для особых подразделений Империи'
    }
  ];

  const imperialTechnology = [
    {
      category: 'Медицинские технологии',
      items: [
        { name: 'Бакта-танки', description: 'Системы регенерации для быстрого заживления ран' },
        { name: 'Киборгизация', description: 'Замена повреждённых органов кибернетическими имплантами' },
        { name: 'Жизнеобеспечение', description: 'Портативные системы для работы в агрессивной среде' }
      ]
    },
    {
      category: 'Вооружение и транспорт',
      items: [
        { name: 'Бластеры E-11', description: 'Стандартное оружие штурмовиков Империи' },
        { name: 'AT-AT Walker', description: 'Тяжёлая наземная техника для штурма укреплений' },
        { name: 'TIE Fighter', description: 'Быстрый и манёвренный космический истребитель' }
      ]
    },
    {
      category: 'Автоматизированные системы',
      items: [
        { name: 'Дроиды-зонды', description: 'Автономные разведывательные системы' },
        { name: 'Имперские дроиды', description: 'Различные роботы для поддержки операций' },
        { name: 'Системы безопасности', description: 'Автоматическая защита имперских объектов' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Star field background */}
      <div className="fixed inset-0 star-field opacity-30 pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 imperial-gradient opacity-90"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/img/41892a24-0b18-4493-b34a-fa8c4d78a000.jpg" 
              alt="Имперский герб" 
              className="w-24 h-24 animate-glow"
            />
          </div>
          <h1 className="text-6xl font-orbitron font-black mb-6 tracking-wider animate-fade-in">
            ГАЛАКТИЧЕСКАЯ ИМПЕРИЯ
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Порядок. Мир. Процветание. Присоединяйтесь к силам, которые обеспечивают стабильность в галактике.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron">
              <Icon name="UserPlus" className="mr-2" />
              Вступить в ряды Империи
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Icon name="BookOpen" className="mr-2" />
              Изучить документацию
            </Button>
          </div>
        </div>
      </section>

      {/* Military Divisions */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12">
            Военные подразделения Империи
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {militaryDivisions.map((division) => (
              <Card 
                key={division.id}
                className={`transition-all duration-300 hover:scale-105 cursor-pointer border-primary/20 ${
                  hoveredDivision === division.id ? 'shadow-2xl shadow-primary/20' : ''
                }`}
                onMouseEnter={() => setHoveredDivision(division.id)}
                onMouseLeave={() => setHoveredDivision(null)}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={division.icon} className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-orbitron">{division.name}</CardTitle>
                      <CardDescription>{division.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {Object.entries(division.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-muted-foreground capitalize">{key}:</span>
                          <span className="text-primary font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Специализации:</h4>
                      <div className="flex flex-wrap gap-2">
                        {division.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Imperial Leaders */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12">
            Ключевые фигуры Империи
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {imperialLeaders.map((leader, idx) => (
              <Card key={idx} className="overflow-hidden border-primary/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-orbitron font-bold">{leader.name}</h3>
                    <p className="text-primary">{leader.title}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{leader.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Достижения:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Star" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training and Technology Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="training" className="w-full">
            <TabsList className="grid grid-cols-4 w-full mb-8 bg-card">
              <TabsTrigger value="training" className="font-orbitron">Обучение</TabsTrigger>
              <TabsTrigger value="rules" className="font-orbitron">Правила</TabsTrigger>
              <TabsTrigger value="technology" className="font-orbitron">Технологии</TabsTrigger>
              <TabsTrigger value="elite" className="font-orbitron">Элитные силы</TabsTrigger>
            </TabsList>

            <TabsContent value="training" className="space-y-6">
              <h2 className="text-3xl font-orbitron font-bold text-center mb-8">
                Система обучения новобранцев
              </h2>
              <div className="grid gap-6">
                {trainingPrograms.map((program, idx) => (
                  <Card key={idx} className="border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-orbitron">{program.name}</CardTitle>
                        <Badge variant="outline" className="border-primary text-primary">
                          {program.duration}
                        </Badge>
                      </div>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rules" className="space-y-6">
              <h2 className="text-3xl font-orbitron font-bold text-center mb-8">
                Правила и регламенты службы
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="conduct" className="border-primary/20">
                  <AccordionTrigger className="font-orbitron">
                    Кодекс поведения военнослужащих
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Все военнослужащие Империи обязаны соблюдать высочайшие стандарты дисциплины, 
                    беспрекословно выполнять приказы и демонстрировать преданность Императору и Империи.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="hierarchy" className="border-primary/20">
                  <AccordionTrigger className="font-orbitron">
                    Структура командования
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Чёткая иерархия командования обеспечивает эффективность операций. 
                    Каждый солдат должен знать свою роль и подчиняться старшим по званию.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="security" className="border-primary/20">
                  <AccordionTrigger className="font-orbitron">
                    Протоколы безопасности
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Безопасность имперских объектов и персонала является приоритетом. 
                    Все сотрудники должны соблюдать установленные протоколы доступа и конфиденциальности.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="technology" className="space-y-8">
              <h2 className="text-3xl font-orbitron font-bold text-center mb-8">
                Технологии Империи
              </h2>
              {imperialTechnology.map((category, idx) => (
                <Card key={idx} className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-2xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-4 p-4 bg-card/50 rounded-lg">
                          <Icon name="Cog" className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-lg">{item.name}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="elite" className="space-y-6">
              <h2 className="text-3xl font-orbitron font-bold text-center mb-8">
                Элитные подразделения
              </h2>
              <div className="grid gap-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-2xl flex items-center gap-3">
                      <Icon name="Crown" className="w-8 h-8 text-primary" />
                      Императорская гвардия
                    </CardTitle>
                    <CardDescription>
                      Личная охрана Императора, элита среди элитных войск
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Красные гвардейцы Императора представляют собой венец военного мастерства. 
                      Отобранные из лучших воинов галактики, они поклялись защищать Императора ценой собственной жизни.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-2xl flex items-center gap-3">
                      <Icon name="Sword" className="w-8 h-8 text-primary" />
                      Инквизиторы
                    </CardTitle>
                    <CardDescription>
                      Охотники на джедаев и еретиков, владеющие тёмной стороной Силы
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Инквизиторы - это бывшие джедаи, обращённые на тёмную сторону. 
                      Они охотятся на оставшихся джедаев и чувствительных к Силе, обеспечивая 
                      абсолютное господство Империи.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/80 border-t border-primary/20 py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/img/41892a24-0b18-4493-b34a-fa8c4d78a000.jpg" 
              alt="Имперский герб" 
              className="w-16 h-16 opacity-80"
            />
          </div>
          <h3 className="text-2xl font-orbitron font-bold mb-4">Галактическая Империя</h3>
          <p className="text-muted-foreground mb-6">
            Порядок через силу. Мир через контроль. Процветание через единство.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>© BBY 19 Галактическая Империя</span>
            <span>•</span>
            <span>Все права защищены</span>
            <span>•</span>
            <span>Слава Императору</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;