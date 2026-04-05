import { useState } from "react";
import {
  Shield,
  Scroll,
  Map,
  Skull,
  Users,
  BookOpen,
  Search,
  Menu,
  X,
  Hash,
  Mic,
  Settings,
  Bell,
  ChevronRight,
  Swords,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация в стиле Discord */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center text-lg">
              🐉
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">Лорница</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Вики вашего мира D&D</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              <BookOpen className="w-4 h-4 mr-2" />
              О проекте
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Войти
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                О проекте
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Войти
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле Discord */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer text-xl">
            🐉
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {["🗺️", "⚔️", "💀", "📖"].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2] text-lg"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}
          >
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">⚔️ Мир Аэлтара</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ChevronRight className="w-3 h-3" />
                  <span>Лор и истории</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["история-мира", "религии", "королевства", "легенды"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ChevronRight className="w-3 h-3" />
                  <span>Бестиарий</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["монстры", "боссы", "НПС", "фракции"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ChevronRight className="w-3 h-3" />
                  <span>Голосовые сессии</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Игровой стол", "Планирование"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Область пользователя */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">ДМ</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Мастер Подземелий</div>
                <div className="text-[#b9bbbe] text-xs truncate">#0001</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Mic className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">история-мира</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Хранилище знаний вашего D&D мира</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения чата */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">

              {/* Приветственное сообщение от бота */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                  🐉
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Лорница</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1 rounded">БОТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong>Добро пожаловать в Лорницу!</strong> Ваше личное хранилище историй, монстров, карт и лора D&D мира.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что хранит Лорница:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                        <li>📖 История мира, религии и легенды</li>
                        <li>💀 Бестиарий — монстры, боссы и НПС</li>
                        <li>🗺️ Интерактивные карты локаций</li>
                        <li>⚔️ Фракции и их отношения</li>
                        <li>👥 Доступ для всей группы игроков</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение Мастера Подземелий */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-700 to-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">ДМ</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Мастер Подземелий</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:05</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Добавил нового монстра в бестиарий — Теневой Дракон из руин Малакара!
                  </div>

                  {/* Карточка монстра */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-gray-900 to-purple-900 relative flex items-center justify-center">
                      <span className="text-4xl">🐲</span>
                      <div className="absolute top-2 right-2">
                        <span className="bg-red-800 text-white text-xs px-2 py-0.5 rounded">Легендарный</span>
                      </div>
                    </div>

                    <div className="pt-3 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Теневой Дракон</h3>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">Огромный дракон, нейтрально-злой</div>
                      </div>

                      <div className="flex border-b border-[#40444b] mb-3">
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#5865f2]">
                          Характеристики
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                          Способности
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                          Лор
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {[
                          { label: "КД", value: "22" },
                          { label: "ПЗ", value: "367" },
                          { label: "КО", value: "21" },
                        ].map((stat) => (
                          <div key={stat.label} className="bg-[#36393f] rounded p-2 text-center">
                            <div className="text-[#b9bbbe] text-xs">{stat.label}</div>
                            <div className="text-white font-bold text-sm">{stat.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                        <span className="text-[#3ba55c] text-xs font-medium">Добавлено сегодня</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение игрока */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-700 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">АР</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Аринда Рейнхарт</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:15</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    Ого, легендарный! Наконец-то нашла на карте, где находятся руины Малакара 🗺️
                  </div>
                </div>
              </div>
            </div>

            {/* Поле ввода */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg flex items-center px-3 sm:px-4 py-2 sm:py-3 gap-2 sm:gap-3">
                <span className="text-[#b9bbbe] text-sm sm:text-base flex-1">Написать в #история-мира...</span>
                <div className="flex gap-1 sm:gap-2">
                  <button className="text-[#b9bbbe] hover:text-[#dcddde] p-1">
                    <Map className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button className="text-[#b9bbbe] hover:text-[#dcddde] p-1">
                    <Scroll className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Правая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-3">Участники — 4</h3>

            <div className="mb-4">
              <div className="text-[#8e9297] text-xs uppercase tracking-wide mb-2">Мастер Подземелий</div>
              <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#393c43] cursor-pointer">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-700 to-red-700 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">ДМ</span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                </div>
                <span className="text-[#dcddde] text-sm">Мастер Подземелий</span>
              </div>
            </div>

            <div>
              <div className="text-[#8e9297] text-xs uppercase tracking-wide mb-2">Игроки</div>
              {[
                { name: "Аринда Рейнхарт", emoji: "🏹", color: "from-green-700 to-teal-700", online: true },
                { name: "Торин Камнебор", emoji: "⚒️", color: "from-yellow-700 to-orange-700", online: true },
                { name: "Лира Лесная", emoji: "🌿", color: "from-green-800 to-emerald-700", online: false },
              ].map((player) => (
                <div key={player.name} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#393c43] cursor-pointer mb-1">
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${player.color} flex items-center justify-center`}>
                      <span className="text-sm">{player.emoji}</span>
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${player.online ? "bg-[#3ba55c]" : "bg-[#72767d]"} border-2 border-[#2f3136] rounded-full`}></div>
                  </div>
                  <span className={`text-sm ${player.online ? "text-[#dcddde]" : "text-[#72767d]"}`}>{player.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Секция возможностей */}
      <div className="bg-[#2f3136] py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
              Всё для вашего мира — в одном месте
            </h2>
            <p className="text-[#b9bbbe] text-base sm:text-lg max-w-2xl mx-auto">
              Лорница объединяет истории, карты, монстров и персонажей вашей D&D кампании для всей группы
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "📖",
                title: "Истории и лор",
                desc: "Пишите историю мира, религии, легенды и события. Всё структурировано и доступно в любой момент.",
                color: "#5865f2",
              },
              {
                icon: "💀",
                title: "Бестиарий",
                desc: "Каталог монстров с характеристиками, способностями и лором. Легко найти нужного противника.",
                color: "#ed4245",
              },
              {
                icon: "🗺️",
                title: "Карты мира",
                desc: "Загружайте и аннотируйте карты локаций. Отмечайте важные места и события.",
                color: "#3ba55c",
              },
              {
                icon: "⚔️",
                title: "Персонажи и НПС",
                desc: "Храните досье на всех важных персонажей — союзников, злодеев и случайных встречных.",
                color: "#faa61a",
              },
              {
                icon: "🏰",
                title: "Фракции и королевства",
                desc: "Описывайте организации, государства и их отношения между собой.",
                color: "#9b59b6",
              },
              {
                icon: "👥",
                title: "Для всей группы",
                desc: "Делитесь доступом с игроками. Все видят актуальный лор и не теряют информацию.",
                color: "#1abc9c",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-[#36393f] rounded-xl p-4 sm:p-6 border border-[#202225] hover:border-[#5865f2] transition-colors"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-2xl"
                  style={{ backgroundColor: feature.color + "30" }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-[#8e9297] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA секция */}
      <div className="bg-[#36393f] py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🐉</div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            Начните строить свой мир
          </h2>
          <p className="text-[#b9bbbe] text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
            Лорница — это место, где истории вашей кампании живут вечно. Для Мастеров Подземелий и их игроков.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-medium w-full sm:w-auto">
              Открыть Лорницу
            </Button>
            <Button
              variant="ghost"
              className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg w-full sm:w-auto"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>

      {/* Подвал */}
      <footer className="bg-[#202225] py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐉</span>
            <div>
              <div className="text-white font-semibold">Лорница</div>
              <div className="text-[#72767d] text-xs">Вики для вашего D&D мира</div>
            </div>
          </div>
          <div className="text-[#72767d] text-sm">
            Сделано с ❤️ для любителей D&D
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
