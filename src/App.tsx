import { useEffect, useState } from 'react'

import {
  locales,
  persistLocale,
  resolveInitialLocale,
  translations,
  type Locale,
} from './translations'

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

function MockScreenDiscover({ locale }: { locale: Locale }) {
  const t = translations[locale].mock.discover

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
        <span className="is-active">{t.tabs[0]}</span>
        <span>{t.tabs[1]}</span>
        <span>{t.tabs[2]}</span>
      </div>

      <div className="phone-content">
        <div className="mock-filter-row">
          <span className="mock-pill is-active">{t.filters[0]}</span>
          <span className="mock-pill">{t.filters[1]}</span>
          <span className="mock-pill">{t.filters[2]}</span>
          <span className="mock-pill">{t.filters[3]}</span>
        </div>

        <div className="mock-select">
          <span className="mock-select-label">{t.cityLabel}</span>
          <span className="mock-select-value">{t.cityValue}</span>
        </div>

        <div className="mock-card-list">
          <MockEventCard {...t.cards[0]} />
          <MockEventCard {...t.cards[1]} />
        </div>

        <button className="mock-fab" type="button" aria-label={t.createAriaLabel}>
          +
        </button>
      </div>

      <div className="phone-bottom-nav">
        <span className="is-active">{t.bottomNav[0]}</span>
        <span>{t.bottomNav[1]}</span>
        <span>{t.bottomNav[2]}</span>
      </div>
    </div>
  )
}

function MockScreenDetails({ locale }: { locale: Locale }) {
  const t = translations[locale].mock.details

  return (
    <div className="phone-frame">
      <div className="phone-statusbar" />
      <div className="phone-top-link">← {t.back}</div>

      <div className="phone-content phone-content-tight">
        <h3 className="phone-screen-title">{t.title}</h3>
        <p className="phone-screen-text">{t.text}</p>

        <div className="mock-detail-item">
          <div className="mock-detail-icon" />
          <div>
            <span>{t.dateLabel}</span>
            <strong>{t.dateValue}</strong>
          </div>
        </div>

        <div className="mock-detail-item">
          <div className="mock-detail-icon" />
          <div>
            <span>{t.locationLabel}</span>
            <strong>{t.locationValue}</strong>
          </div>
        </div>

        <div className="mock-map">{t.mapLabel}</div>

        <div className="mock-participants">
          <span>{t.participantsLabel}</span>
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
          {t.share}
        </button>
        <button className="phone-action-primary" type="button">
          {t.join}
        </button>
      </div>
    </div>
  )
}

function MockScreenCreate({ locale }: { locale: Locale }) {
  const t = translations[locale].mock.create

  return (
    <div className="phone-frame">
      <div className="phone-statusbar" />
      <div className="phone-sheet-header">
        <span>{t.cancel}</span>
        <strong>{t.title}</strong>
        <span />
      </div>

      <div className="phone-content phone-content-tight">
        <div className="mock-input-group">
          <label>{t.eventNameLabel}</label>
          <div className="mock-input">{t.eventNamePlaceholder}</div>
        </div>

        <div className="mock-input-group">
          <label>{t.activityTypeLabel}</label>
          <div className="mock-filter-row">
            <span className="mock-pill">{t.activityTypes[0]}</span>
            <span className="mock-pill is-active">{t.activityTypes[1]}</span>
            <span className="mock-pill">{t.activityTypes[2]}</span>
            <span className="mock-pill">{t.activityTypes[3]}</span>
          </div>
        </div>

        <div className="mock-input-group">
          <label>{t.descriptionLabel}</label>
          <div className="mock-textarea">{t.descriptionPlaceholder}</div>
        </div>

        <div className="mock-inline-fields">
          <div className="mock-input-group">
            <label>{t.dateLabel}</label>
            <div className="mock-input">{t.dateValue}</div>
          </div>
          <div className="mock-input-group">
            <label>{t.timeLabel}</label>
            <div className="mock-input">{t.timeValue}</div>
          </div>
        </div>

        <div className="mock-input-group">
          <label>{t.locationLabel}</label>
          <div className="mock-input">{t.locationValue}</div>
        </div>

        <div className="mock-map">{t.mapLabel}</div>
      </div>

      <div className="phone-actions phone-actions-single">
        <button className="phone-action-primary" type="button">
          {t.submit}
        </button>
      </div>
    </div>
  )
}

function MockScreenNotifications({ locale }: { locale: Locale }) {
  const t = translations[locale].mock.notifications

  return (
    <div className="phone-frame">
      <div className="phone-statusbar" />
      <div className="phone-content phone-content-tight">
        <h3 className="phone-screen-title">{t.title}</h3>

        <div className="mock-notification-card">
          <div className="mock-notification-icon">👋</div>
          <div className="mock-notification-copy">
            <strong>{t.items[0].text}</strong>
            <span>{t.items[0].time}</span>
          </div>
        </div>

        <div className="mock-notification-card">
          <div className="mock-notification-icon">📌</div>
          <div className="mock-notification-copy">
            <strong>{t.items[1].text}</strong>
            <span>{t.items[1].time}</span>
          </div>
        </div>
      </div>

      <div className="phone-bottom-nav">
        <span>{t.bottomNav[0]}</span>
        <span className="is-active">{t.bottomNav[1]}</span>
        <span>{t.bottomNav[2]}</span>
      </div>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    const savedTheme = window.localStorage.getItem('gathr-landing-theme')
    return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'dark'
  })
  const [locale, setLocale] = useState<Locale>(() => resolveInitialLocale())

  useEffect(() => {
    localStorage.setItem('gathr-landing-theme', theme)
  }, [theme])

  useEffect(() => {
    persistLocale(locale)
    document.documentElement.lang = locale
  }, [locale])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const t = translations[locale]

  return (
    <div className="page" data-theme={theme}>
      <header className="hero">
        <div className="container">
          <div className="hero-topbar">
            <span className="hero-badge">Gathr</span>

            <div className="hero-controls">
              <div className="language-switcher" role="group" aria-label={t.meta.languageLabel}>
                {locales.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`language-switcher-option ${locale === option ? 'is-active' : ''}`}
                    onClick={() => setLocale(option)}
                    aria-pressed={locale === option}
                    lang={option}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={t.meta.themeToggleLabel}
                title={t.meta.themeToggleLabel}
              >
                <span className={`theme-toggle-option ${theme === 'dark' ? 'is-active' : ''}`}>
                  {t.meta.dark}
                </span>
                <span className={`theme-toggle-option ${theme === 'light' ? 'is-active' : ''}`}>
                  {t.meta.light}
                </span>
              </button>
            </div>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <h1 className="hero-title">{t.hero.title}</h1>
              <p className="hero-description">{t.hero.description}</p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="https://gathr-app.site/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.hero.primaryCta}
                </a>

                <a className="button button-secondary" href="#how-it-works">
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>

            <div className="hero-preview">
              <MockScreenDiscover locale={locale} />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container section-grid">
            <div className="section-copy">
              <span className="section-eyebrow">{t.sections.why.eyebrow}</span>
              <h2 className="section-title">{t.sections.why.title}</h2>
              <p className="section-text">{t.sections.why.text}</p>
            </div>

            <div className="info-card">
              <h3>{t.sections.why.cardTitle}</h3>
              <ul className="info-list">
                {t.sections.why.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-copy section-copy-narrow">
              <span className="section-eyebrow">{t.sections.features.eyebrow}</span>
              <h2 className="section-title">{t.sections.features.title}</h2>
            </div>

            <div className="features-grid">
              {t.sections.features.items.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-copy section-copy-wide">
              <span className="section-eyebrow">{t.sections.plans.eyebrow}</span>
              <h2 className="section-title">{t.sections.plans.title}</h2>
              <p className="section-text">{t.sections.plans.text}</p>
            </div>

            <div className="plans-grid">
              {t.sections.plans.tiers.map((tier) => (
                <article key={tier.name} className="plan-card">
                  <div className="plan-card-header">
                    <span className="plan-name">{tier.name}</span>
                    <span className="plan-label">{tier.label}</span>
                  </div>

                  <p>{tier.text}</p>

                  <ul className="plan-list">
                    {tier.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container section-grid">
            <div className="section-copy">
              <span className="section-eyebrow">{t.sections.comparison.eyebrow}</span>
              <h2 className="section-title">{t.sections.comparison.title}</h2>
              <p className="section-text">{t.sections.comparison.text}</p>
            </div>

            <div className="comparison-card">
              <div className="comparison-column">
                <span className="comparison-label comparison-label-muted">
                  {t.sections.comparison.chatLabel}
                </span>
                <ul className="comparison-list">
                  {t.sections.comparison.chatItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="comparison-column">
                <span className="comparison-label">{t.sections.comparison.gathrLabel}</span>
                <ul className="comparison-list">
                  {t.sections.comparison.gathrItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="how-it-works">
          <div className="container">
            <div className="section-copy section-copy-wide">
              <span className="section-eyebrow">{t.sections.howItWorks.eyebrow}</span>
              <h2 className="section-title">{t.sections.howItWorks.title}</h2>
              <p className="section-text">{t.sections.howItWorks.text}</p>
            </div>

            <div className="screens-grid">
              <div className="screen-showcase">
                <MockScreenDiscover locale={locale} />
                <div className="screen-showcase-copy">
                  <h3>{t.sections.howItWorks.steps[0].title}</h3>
                  <p>{t.sections.howItWorks.steps[0].text}</p>
                </div>
              </div>

              <div className="screen-showcase">
                <MockScreenDetails locale={locale} />
                <div className="screen-showcase-copy">
                  <h3>{t.sections.howItWorks.steps[1].title}</h3>
                  <p>{t.sections.howItWorks.steps[1].text}</p>
                </div>
              </div>

              <div className="screen-showcase">
                <MockScreenCreate locale={locale} />
                <div className="screen-showcase-copy">
                  <h3>{t.sections.howItWorks.steps[2].title}</h3>
                  <p>{t.sections.howItWorks.steps[2].text}</p>
                </div>
              </div>

              <div className="screen-showcase">
                <MockScreenNotifications locale={locale} />
                <div className="screen-showcase-copy">
                  <h3>{t.sections.howItWorks.steps[3].title}</h3>
                  <p>{t.sections.howItWorks.steps[3].text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container section-grid">
            <div className="section-copy">
              <span className="section-eyebrow">{t.sections.useCases.eyebrow}</span>
              <h2 className="section-title">{t.sections.useCases.title}</h2>
              <p className="section-text">{t.sections.useCases.text}</p>
            </div>

            <div className="use-cases-card">
              {t.sections.useCases.chips.map((chip) => (
                <span key={chip} className="use-case-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-card">
              <span className="section-eyebrow">{t.sections.cta.eyebrow}</span>
              <h2 className="section-title">{t.sections.cta.title}</h2>
              <p className="section-text">{t.sections.cta.text}</p>

              <a
                className="button button-primary"
                href="https://gathr-app.site/"
                target="_blank"
                rel="noreferrer"
              >
                {t.sections.cta.button}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© Gathr</span>
          <a href="https://gathr-app.site/" target="_blank" rel="noreferrer">
            {t.footer.openApp}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
