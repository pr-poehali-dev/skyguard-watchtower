import Icon from "@/components/ui/icon"

const topics = [
  {
    id: 1,
    icon: "Gauge",
    title: "Zabbix на пределе",
    description: "Как понять, что сервер уже работает «на износ», и какие метрики это предсказывают до падения.",
    tag: "Диагностика",
  },
  {
    id: 2,
    icon: "Database",
    title: "PostgreSQL и узкие места",
    description: "Анализ нагрузки на БД, медленные запросы, autovacuum и настройка под highload-инсталляции.",
    tag: "База данных",
  },
  {
    id: 3,
    icon: "GitBranch",
    title: "Proxy и preprocessing",
    description: "Почему proxy «захлёбывается», как разгрузить preprocessing и правильно распределить потоки.",
    tag: "Архитектура",
  },
  {
    id: 4,
    icon: "Activity",
    title: "Очереди и history syncers",
    description: "Диагностика переполненных очередей и настройка history syncers под реальный NVPS.",
    tag: "Производительность",
  },
  {
    id: 5,
    icon: "Search",
    title: "Аудит конфигурации",
    description: "Типичные ошибки production-инсталляций, которые незаметно снижают надёжность мониторинга.",
    tag: "Best practices",
  },
  {
    id: 6,
    icon: "TrendingUp",
    title: "Масштабирование Zabbix",
    description: "Как подготовиться к росту инфраструктуры и избежать «бутылочного горлышка» заранее.",
    tag: "Рост",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Программа
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вебинара</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        В основе — реальный опыт аудита нескольких highload Zabbix-инсталляций и практические рекомендации. Разбираем только то, что действительно влияет на стабильность.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-default"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-[#7A7FEE]/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name={topic.icon} size={22} className="text-[#7A7FEE]" />
                </div>
                <span className="text-xs font-medium bg-[#7A7FEE]/10 text-[#7A7FEE] px-2.5 py-1 rounded-full">
                  {topic.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{topic.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
