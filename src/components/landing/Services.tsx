import Icon from "@/components/ui/icon"

const pains = [
  "Растут очереди в Zabbix",
  "Proxy или server периодически «захлёбываются»",
  "Preprocessing перегружен",
  "PostgreSQL работает на пределе",
  "Frontend Zabbix тормозит",
  "History syncers не успевают",
  "NVPS растёт быстрее, чем железо",
  "Непонятно, какие параметры действительно нужно тюнить",
]

const gains = [
  "Самостоятельно обнаруживать проблемы в Zabbix",
  "Быстро находить бутылочные горлышки",
  "Понять, какие метрики действительно важны",
  "Получить checklist: куда смотреть в первую очередь",
  "Узнать реальные best practices highload-инсталляций",
  "Подготовиться к масштабированию без рисков",
]

const audiences = [
  { icon: "Terminal", title: "DevOps" },
  { icon: "Shield", title: "SRE" },
  { icon: "Server", title: "Системные администраторы" },
  { icon: "BarChart2", title: "Инженеры мониторинга" },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Для кого
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">этот вебинар</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Вебинар особенно полезен тем, кто эксплуатирует Zabbix в production и хочет перейти от «вроде работает» к осознанному управлению мониторингом.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {audiences.map((a) => (
          <div key={a.title} className="card p-6 shadow-md flex flex-col items-center text-center gap-3">
            <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
              <Icon name={a.icon} size={22} className="text-white" />
            </div>
            <span className="font-semibold text-black dark:text-white text-sm">{a.title}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6 md:p-8 shadow-md">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
            <Icon name="AlertTriangle" size={20} className="text-orange-400" />
            Узнаёте себя?
          </h3>
          <ul className="space-y-3">
            {pains.map((pain) => (
              <li key={pain} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                <Icon name="X" size={16} className="text-red-400 mt-0.5 shrink-0" />
                <span>{pain}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6 md:p-8 shadow-md">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
            <Icon name="CheckCircle" size={20} className="text-[#7A7FEE]" />
            После вебинара вы
          </h3>
          <ul className="space-y-3">
            {gains.map((gain) => (
              <li key={gain} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                <Icon name="Check" size={16} className="text-[#7A7FEE] mt-0.5 shrink-0" />
                <span>{gain}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
