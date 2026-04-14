import { useEffect, useState } from 'react'

type ThemeMode = 'dark' | 'light'

type MockEventCardProps = {
  title: string
  category: string
  date: string
  location: string
  author: string
  participants: string
}

function MockEventCard({
  title,
  category,
  date,
  location,
  author,
  participants,
}: MockEventCardProps) {
  return (
    <article className="mock-event-card">
      <h4>{title}</h4>
      <span className="mock-chip">{category}</span>
      <p>{date}</p>
      <p>{location}</p>
      <div className="mock-event-meta">
        <span>{author}</span>
        <span>{participants}</span>
      </div>
    </article>
  )
}

function MockScreenDiscover() {
  return (
    <div className="phone-frame">
      <div className="phone-statusbar" />
      <div className="phone-header">
        <span className="phone-brand">Gathr</span>
        <div className="phone-header-actions">
          <span className="phone-circle" />
          <span className="phone-avatar">AB</span>
        </div>
      </div>

      <div className="phone-tabs">
        <span className="is-active">События</span>
        <span>Участвую</span>
        <span>Мои события</span>
      </div>

      <div className="phone-content">
        <div className="mock-filter-row">
          <span className="mock-pill is-active">Все</span>
          <span className="mock-pill">Спорт</span>
          <span className="mock-pill">Нетворкинг</span>
          <span className="mock-pill">Еда</span>
        </div>

        <div className="mock-select">
          <span className="mock-select-label">Город</span>
          <span className="mock-select-value">Все города</span>
        </div>

        <div className="mock-card-list">
          <MockEventCard
            title="Утренняя прогулка"
            category="На улице"
            date="18.04.2026, 09:00"
            location="Центральный парк, Кишинёв"
            author="Создал Alex"
            participants="6 участников"
          />
          <MockEventCard
            title="Кофе после работы"
            category="Нетворкинг"
            date="19.04.2026, 19:30"
            location="Центр города"
            author="Создала Maria"
            participants="4 участника"
          />
        </div>

        <button className="mock-fab" type="button" aria-label="Создать событие">
          +
        </button>
      </div>

      <div className="phone-bottom-nav">
        <span className="is-active">Главная</span>
        <span>Уведомления</span>
        <span>Профиль</span>
      </div>
    </div>
  )
}

function MockScreenDetails() {
  return (
    <div className="phone-frame">
      <div className="phone-statusbar" />
      <div className="phone-top-link">← Назад</div>

      <div className="phone-content phone-content-tight">
        <h3 className="phone-screen-title">Кофе и знакомство</h3>
        <p className="phone-screen-text">
          Небольшая встреча в центре города. Можно просто зайти на кофе,
          познакомиться и пообщаться в спокойной компании.
        </p>

        <div className="mock-detail-item">
          <div className="mock-detail-icon" />
          <div>
            <span>Дата и время</span>
            <strong>19.04.2026, 19:30</strong>
          </div>
        </div>

        <div className="mock-detail-item">
          <div className="mock-detail-icon" />
          <div>
            <span>Локация</span>
            <strong>Кишинёв, центр</strong>
          </div>
        </div>

        <div className="mock-map">Карта события</div>

        <div className="mock-participants">
          <span>Участники (4)</span>
          <div className="mock-avatars">
            <span>AL</span>
            <span>MR</span>
            <span>DK</span>
            <span>+1</span>
          </div>
        </div>
      </div>

      <div className="phone-actions">
        <button className="phone-action-link" type="button">
          Поделиться
        </button>
        <button className="phone-action-primary" type="button">
          Присоединиться
        </button>
      </div>
    </div>
  )
}

function MockScreenCreate() {
  return (
    <div className="phone-frame">
      <div className="phone-statusbar" />
      <div className="phone-sheet-header">
        <span>Отмена</span>
        <strong>Создать событие</strong>
        <span />
      </div>

      <div className="phone-content phone-content-tight">
        <div className="mock-input-group">
          <label>Название события</label>
          <div className="mock-input">Что планируешь?</div>
        </div>

        <div className="mock-input-group">
          <label>Тип активности</label>
          <div className="mock-filter-row">
            <span className="mock-pill">Спорт</span>
            <span className="mock-pill is-active">Нетворкинг</span>
            <span className="mock-pill">Еда</span>
            <span className="mock-pill">Другое</span>
          </div>
        </div>

        <div className="mock-input-group">
          <label>Описание</label>
          <div className="mock-textarea">Коротко опиши идею встречи...</div>
        </div>

        <div className="mock-inline-fields">
          <div className="mock-input-group">
            <label>Дата</label>
            <div className="mock-input">20.04.2026</div>
          </div>
          <div className="mock-input-group">
            <label>Время</label>
            <div className="mock-input">18:30</div>
          </div>
        </div>

        <div className="mock-input-group">
          <label>Локация</label>
          <div className="mock-input">Кишинёв, центр</div>
        </div>

        <div className="mock-map">Выбор точки на карте</div>
      </div>

      <div className="phone-actions phone-actions-single">
        <button className="phone-action-primary" type="button">
          Создать событие
        </button>
      </div>
    </div>
  )
}

function MockScreenNotifications() {
  return (
    <div className="phone-frame">
      <div className="phone-statusbar" />
      <div className="phone-content phone-content-tight">
        <h3 className="phone-screen-title">Уведомления</h3>

        <div className="mock-notification-card">
          <div className="mock-notification-icon">👋</div>
          <div className="mock-notification-copy">
            <strong>Alex, Maria и ещё 2 человека присоединились к событию</strong>
            <span>2 часа назад</span>
          </div>
        </div>

        <div className="mock-notification-card">
          <div className="mock-notification-icon">📍</div>
          <div className="mock-notification-copy">
            <strong>Организатор обновил локацию встречи</strong>
            <span>Вчера</span>
          </div>
        </div>
      </div>

      <div className="phone-bottom-nav">
        <span>Главная</span>
        <span className="is-active">Уведомления</span>
        <span>Профиль</span>
      </div>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('gathr-landing-theme')

    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('gathr-landing-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="page" data-theme={theme}>
      <header className="hero">
        <div className="container">
          <div className="hero-topbar">
            <span className="hero-badge">Gathr</span>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Переключить тему"
              title="Переключить тему"
            >
              <span className={`theme-toggle-option ${theme === 'dark' ? 'is-active' : ''}`}>
                Dark
              </span>
              <span className={`theme-toggle-option ${theme === 'light' ? 'is-active' : ''}`}>
                Light
              </span>
            </button>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <h1 className="hero-title">
                Простой способ собирать людей на реальные встречи
              </h1>

              <p className="hero-description">
                Gathr помогает создавать локальные события, находить участников,
                делиться ссылками и не теряться в хаосе чатов.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="https://gathr-app.site/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Открыть приложение
                </a>

                <a className="button button-secondary" href="#how-it-works">
                  Как это работает
                </a>
              </div>
            </div>

            <div className="hero-preview">
              <MockScreenDiscover />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container section-grid">
            <div className="section-copy">
              <span className="section-eyebrow">Зачем нужен Gathr</span>
              <h2 className="section-title">
                Когда встречи живут только в чатах, всё быстро теряется
              </h2>
              <p className="section-text">
                Кто идет, где встреча, во сколько начало, актуально ли событие,
                есть ли ещё места - вся эта информация быстро расползается по
                сообщениям. Gathr собирает её в одном понятном месте.
              </p>
            </div>

            <div className="info-card">
              <h3>Что меняется</h3>
              <ul className="info-list">
                <li>есть отдельная карточка события</li>
                <li>видны дата, место и описание</li>
                <li>понятно, кто уже идет</li>
                <li>событием легко поделиться по ссылке</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-copy section-copy-narrow">
              <span className="section-eyebrow">Что можно делать</span>
              <h2 className="section-title">Основные возможности</h2>
            </div>

            <div className="features-grid">
              <article className="feature-card">
                <h3>Создавать события</h3>
                <p>
                  Указывай формат встречи, описание, место и другие детали в
                  одном понятном экране.
                </p>
              </article>

              <article className="feature-card">
                <h3>Находить чужие события</h3>
                <p>
                  Смотри, что уже происходит в городе, и присоединяйся к тому,
                  что тебе подходит.
                </p>
              </article>

              <article className="feature-card">
                <h3>Следить за участниками</h3>
                <p>
                  У события есть понятный список участников, чтобы было видно,
                  кто уже идет.
                </p>
              </article>

              <article className="feature-card">
                <h3>Приглашать и делиться</h3>
                <p>
                  Можно пригласить людей напрямую или просто отправить ссылку на
                  событие.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container section-grid">
            <div className="section-copy">
              <span className="section-eyebrow">Почему не просто чат</span>
              <h2 className="section-title">
                Чат удобен для разговора, но неудобен для самой встречи
              </h2>
              <p className="section-text">
                Сообщения уходят вверх, детали теряются, состав участников
                меняется, и в какой-то момент уже непонятно, что вообще
                актуально. Gathr нужен не вместо общения, а чтобы сама встреча
                была собрана в структурированном виде.
              </p>
            </div>

            <div className="comparison-card">
              <div className="comparison-column">
                <span className="comparison-label comparison-label-muted">Обычный чат</span>
                <ul className="comparison-list">
                  <li>детали быстро теряются</li>
                  <li>сложно понять, кто точно идет</li>
                  <li>нет одной точки входа в событие</li>
                </ul>
              </div>

              <div className="comparison-column">
                <span className="comparison-label">Gathr</span>
                <ul className="comparison-list">
                  <li>у события есть отдельная карточка</li>
                  <li>виден список участников</li>
                  <li>деталями легко делиться по ссылке</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="how-it-works">
          <div className="container">
            <div className="section-copy section-copy-wide">
              <span className="section-eyebrow">Как это работает</span>
              <h2 className="section-title">Наглядно по основным шагам</h2>
              <p className="section-text">
                В приложении можно быстро найти событие, открыть его детали,
                присоединиться или создать своё. Ниже - демонстрация основных
                экранов с условными данными.
              </p>
            </div>

            <div className="screens-grid">
              <div className="screen-showcase">
                <MockScreenDiscover />
                <div className="screen-showcase-copy">
                  <h3>1. Найди событие</h3>
                  <p>
                    Смотри актуальные встречи, фильтруй по интересам и городу,
                    открывай то, что подходит тебе.
                  </p>
                </div>
              </div>

              <div className="screen-showcase">
                <MockScreenDetails />
                <div className="screen-showcase-copy">
                  <h3>2. Открой детали</h3>
                  <p>
                    Внутри события видны описание, дата, место, участники и
                    основные действия.
                  </p>
                </div>
              </div>

              <div className="screen-showcase">
                <MockScreenCreate />
                <div className="screen-showcase-copy">
                  <h3>3. Создай своё событие</h3>
                  <p>
                    Заполни короткую форму, выбери формат, время и локацию, а
                    потом просто отправь ссылку людям.
                  </p>
                </div>
              </div>

              <div className="screen-showcase">
                <MockScreenNotifications />
                <div className="screen-showcase-copy">
                  <h3>4. Следи за изменениями</h3>
                  <p>
                    Уведомления помогают не пропустить новых участников и важные
                    обновления по встрече.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container section-grid">
            <div className="section-copy">
              <span className="section-eyebrow">Сценарии использования</span>
              <h2 className="section-title">Для каких встреч это подходит</h2>
              <p className="section-text">
                Футбол, кофе, прогулки, настолки, встречи локальных сообществ,
                небольшие ивенты, знакомые компании и тимбилдинги.
              </p>
            </div>

            <div className="use-cases-card">
              <span className="use-case-chip">Футбол</span>
              <span className="use-case-chip">Кофе</span>
              <span className="use-case-chip">Прогулки</span>
              <span className="use-case-chip">Настолки</span>
              <span className="use-case-chip">Нетворкинг</span>
              <span className="use-case-chip">Тимбилдинги</span>
              <span className="use-case-chip">Локальные встречи</span>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-card">
              <span className="section-eyebrow">Попробовать</span>
              <h2 className="section-title">
                Открой Gathr и посмотри, как это работает на практике
              </h2>
              <p className="section-text">
                Сейчас проект находится на стадии MVP и постепенно набирает
                первых пользователей.
              </p>

              <a
                className="button button-primary"
                href="https://gathr-app.site/"
                target="_blank"
                rel="noreferrer"
              >
                Перейти в приложение
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© Gathr</span>
          <a href="https://gathr-app.site/" target="_blank" rel="noreferrer">
            Открыть приложение
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App