import ContactFormButton from "./ContactFormButton"
import Icon from "@/components/ui/icon"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <div className="inline-flex items-center gap-2 bg-[#7A7FEE]/10 text-[#7A7FEE] text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <Icon name="Calendar" size={14} />
            <span>19 мая 2025 в 19:00 МСК · Онлайн</span>
          </div>
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Zabbix под
            <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">микроскопом</span>
          </h1>
          <p className="mt-2 mb-4 text-xl text-gray-600 dark:text-gray-400 font-normal">
            Как найти проблемы до того, как мониторинг перестанет мониторить
          </p>
          <p className="mb-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Практический вебинар для DevOps, SRE и системных администраторов о том, как выявлять скрытые проблемы производительности и надёжности Zabbix.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton>Зарегистрироваться бесплатно</ContactFormButton>
            <a href="#projects" className="btn-secondary text-black dark:text-white">
              Программа вебинара
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Icon name="Clock" size={16} className="text-[#7A7FEE]" />
              <span>~2 часа</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Icon name="Video" size={16} className="text-[#7A7FEE]" />
              <span>Онлайн-трансляция</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Icon name="Gift" size={16} className="text-[#7A7FEE]" />
              <span>Бесплатно</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <img
            src="/purple-circle-wave-static.png"
            alt="Purple Wave"
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}
