import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Нужен ли опыт работы с Zabbix?",
    answer:
      "Да, вебинар рассчитан на тех, кто уже работает с Zabbix. Если вы только начинаете изучать — вебинар будет сложноватым, лучше сначала разобраться с базовой настройкой.",
  },
  {
    id: 2,
    question: "Вебинар платный?",
    answer:
      "Нет, вебинар бесплатный. Просто зарегистрируйтесь и получите ссылку на трансляцию.",
  },
  {
    id: 3,
    question: "Будет ли запись вебинара?",
    answer:
      "Да, запись будет доступна зарегистрированным участникам после проведения вебинара.",
  },
  {
    id: 4,
    question: "Какая версия Zabbix рассматривается?",
    answer:
      "Рассматриваются принципы и подходы, актуальные для Zabbix 5.x, 6.x и 7.x. Большинство рекомендаций применимы независимо от версии.",
  },
  {
    id: 5,
    question: "Будет ли Q&A сессия?",
    answer:
      "Да, в конце вебинара запланирована сессия вопросов и ответов. Вы также сможете задавать вопросы в чате во время трансляции.",
  },
  {
    id: 6,
    question: "Что нужно подготовить заранее?",
    answer:
      "Ничего специального не нужно. Если хотите получить максимум пользы — можете заранее ознакомиться со статьёй «Аудит Zabbix: на что нужно обратить внимание» на Habr.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Отвечаем на самые популярные вопросы о вебинаре.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
