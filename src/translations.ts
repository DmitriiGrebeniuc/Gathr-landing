export type Locale = 'ru' | 'en' | 'ro'

type MockEventCardTranslation = {
  title: string
  category: string
  date: string
  location: string
  author: string
  participants: string
}

type Translation = {
  meta: {
    languageLabel: string
    themeToggleLabel: string
    dark: string
    light: string
  }
  hero: {
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
  }
  sections: {
    why: {
      eyebrow: string
      title: string
      text: string
      cardTitle: string
      items: string[]
    }
    features: {
      eyebrow: string
      title: string
      items: Array<{
        title: string
        text: string
      }>
    }
    comparison: {
      eyebrow: string
      title: string
      text: string
      chatLabel: string
      gathrLabel: string
      chatItems: string[]
      gathrItems: string[]
    }
    howItWorks: {
      eyebrow: string
      title: string
      text: string
      steps: Array<{
        title: string
        text: string
      }>
    }
    useCases: {
      eyebrow: string
      title: string
      text: string
      chips: string[]
    }
    cta: {
      eyebrow: string
      title: string
      text: string
      button: string
    }
  }
  footer: {
    openApp: string
  }
  mock: {
    discover: {
      tabs: [string, string, string]
      filters: [string, string, string, string]
      cityLabel: string
      cityValue: string
      cards: [MockEventCardTranslation, MockEventCardTranslation]
      createAriaLabel: string
      bottomNav: [string, string, string]
    }
    details: {
      back: string
      title: string
      text: string
      dateLabel: string
      dateValue: string
      locationLabel: string
      locationValue: string
      mapLabel: string
      participantsLabel: string
      share: string
      join: string
    }
    create: {
      cancel: string
      title: string
      eventNameLabel: string
      eventNamePlaceholder: string
      activityTypeLabel: string
      activityTypes: [string, string, string, string]
      descriptionLabel: string
      descriptionPlaceholder: string
      dateLabel: string
      dateValue: string
      timeLabel: string
      timeValue: string
      locationLabel: string
      locationValue: string
      mapLabel: string
      submit: string
    }
    notifications: {
      title: string
      items: [
        { text: string; time: string },
        { text: string; time: string },
      ]
      bottomNav: [string, string, string]
    }
  }
}

const STORAGE_KEY = 'gathr-landing-locale'

export const locales: Locale[] = ['ru', 'en', 'ro']

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      languageLabel: 'Language',
      themeToggleLabel: 'Switch theme',
      dark: 'Dark',
      light: 'Light',
    },
    hero: {
      title: 'A simple way to bring people together for real-life meetups',
      description:
        'Gathr helps you create local events, find participants, share links, and keep plans from getting lost in chat noise.',
      primaryCta: 'Open the app',
      secondaryCta: 'How it works',
    },
    sections: {
      why: {
        eyebrow: 'Why Gathr',
        title: 'When meetups live only in chat, the important details disappear fast',
        text:
          'Who is coming, where the meetup is, what time it starts, whether it is still happening, and whether there are spots left all quickly get buried in messages. Gathr keeps that information in one clear place.',
        cardTitle: 'What changes',
        items: [
          'every meetup gets its own event card',
          'date, place, and description stay visible',
          'it is clear who is already joining',
          'the event is easy to share with a link',
        ],
      },
      features: {
        eyebrow: 'What you can do',
        title: 'Core features',
        items: [
          {
            title: 'Create events',
            text: 'Set the meetup format, description, location, and key details on one clear screen.',
          },
          {
            title: 'Discover events',
            text: 'See what is already happening nearby and join what fits your plans.',
          },
          {
            title: 'Track participants',
            text: 'Each event has a clear participant list, so it is easy to see who is already in.',
          },
          {
            title: 'Invite and share',
            text: 'Invite people directly or just send a link to the event.',
          },
        ],
      },
      comparison: {
        eyebrow: 'Why not just chat',
        title: 'Chat is great for conversation, but not for running the meetup itself',
        text:
          'Messages scroll away, details get lost, the attendee list changes, and at some point it is no longer obvious what is still current. Gathr is not a replacement for communication. It gives the meetup a structured home.',
        chatLabel: 'Regular chat',
        gathrLabel: 'Gathr',
        chatItems: [
          'details get lost quickly',
          'it is hard to tell who is actually coming',
          'there is no single event entry point',
        ],
        gathrItems: [
          'each meetup has its own dedicated card',
          'the participant list is visible',
          'sharing the details by link is easy',
        ],
      },
      howItWorks: {
        eyebrow: 'How it works',
        title: 'The main flow at a glance',
        text:
          'In the app, you can quickly find an event, open its details, join it, or create your own. Below is a walkthrough of the main screens with sample data.',
        steps: [
          {
            title: '1. Find an event',
            text: 'Browse active meetups, filter by interests and city, and open the ones that match you.',
          },
          {
            title: '2. Open the details',
            text: 'Inside the event you can see the description, time, place, participants, and key actions.',
          },
          {
            title: '3. Create your own',
            text: 'Fill out a short form, choose the format, time, and location, then share the link.',
          },
          {
            title: '4. Stay updated',
            text: 'Notifications help you keep up with new participants and important meetup changes.',
          },
        ],
      },
      useCases: {
        eyebrow: 'Use cases',
        title: 'What kinds of meetups it fits',
        text:
          'Football, coffee, walks, board games, local community meetups, small events, familiar groups, and team gatherings.',
        chips: [
          'Football',
          'Coffee',
          'Walks',
          'Board games',
          'Networking',
          'Team outings',
          'Local meetups',
        ],
      },
      cta: {
        eyebrow: 'Try it',
        title: 'Open Gathr and see how it works in practice',
        text: 'The project is currently in the MVP stage and is gradually welcoming its first users.',
        button: 'Go to the app',
      },
    },
    footer: {
      openApp: 'Open the app',
    },
    mock: {
      discover: {
        tabs: ['Events', 'Joining', 'My events'],
        filters: ['All', 'Sports', 'Networking', 'Food'],
        cityLabel: 'City',
        cityValue: 'All cities',
        cards: [
          {
            title: 'Morning walk',
            category: 'Outdoors',
            date: '18.04.2026, 09:00',
            location: 'Central Park, Chisinau',
            author: 'Created by Alex',
            participants: '6 participants',
          },
          {
            title: 'Coffee after work',
            category: 'Networking',
            date: '19.04.2026, 19:30',
            location: 'City center',
            author: 'Created by Maria',
            participants: '4 participants',
          },
        ],
        createAriaLabel: 'Create event',
        bottomNav: ['Home', 'Alerts', 'Profile'],
      },
      details: {
        back: 'Back',
        title: 'Coffee and introductions',
        text:
          'A small meetup in the city center. Come by for coffee, meet new people, and have a relaxed conversation.',
        dateLabel: 'Date and time',
        dateValue: '19.04.2026, 19:30',
        locationLabel: 'Location',
        locationValue: 'Chisinau, center',
        mapLabel: 'Event map',
        participantsLabel: 'Participants (4)',
        share: 'Share',
        join: 'Join',
      },
      create: {
        cancel: 'Cancel',
        title: 'Create event',
        eventNameLabel: 'Event name',
        eventNamePlaceholder: 'What are you planning?',
        activityTypeLabel: 'Activity type',
        activityTypes: ['Sports', 'Networking', 'Food', 'Other'],
        descriptionLabel: 'Description',
        descriptionPlaceholder: 'Briefly describe the meetup idea...',
        dateLabel: 'Date',
        dateValue: '20.04.2026',
        timeLabel: 'Time',
        timeValue: '18:30',
        locationLabel: 'Location',
        locationValue: 'Chisinau, center',
        mapLabel: 'Pick a point on the map',
        submit: 'Create event',
      },
      notifications: {
        title: 'Notifications',
        items: [
          {
            text: 'Alex, Maria, and 2 more people joined the event',
            time: '2 hours ago',
          },
          {
            text: 'The organizer updated the meetup location',
            time: 'Yesterday',
          },
        ],
        bottomNav: ['Home', 'Alerts', 'Profile'],
      },
    },
  },
  ru: {
    meta: {
      languageLabel: 'Язык',
      themeToggleLabel: 'Переключить тему',
      dark: 'Тёмная',
      light: 'Светлая',
    },
    hero: {
      title: 'Простой способ собирать людей на реальные встречи',
      description:
        'Gathr помогает создавать локальные события, находить участников, делиться ссылками и не теряться в хаосе чатов.',
      primaryCta: 'Открыть приложение',
      secondaryCta: 'Как это работает',
    },
    sections: {
      why: {
        eyebrow: 'Зачем нужен Gathr',
        title: 'Когда встречи живут только в чатах, всё быстро теряется',
        text:
          'Кто идёт, где встреча, во сколько начало, актуально ли событие, есть ли ещё места - вся эта информация быстро расползается по сообщениям. Gathr собирает её в одном понятном месте.',
        cardTitle: 'Что меняется',
        items: [
          'есть отдельная карточка события',
          'видны дата, место и описание',
          'понятно, кто уже идёт',
          'событием легко поделиться по ссылке',
        ],
      },
      features: {
        eyebrow: 'Что можно делать',
        title: 'Основные возможности',
        items: [
          {
            title: 'Создавать события',
            text: 'Указывай формат встречи, описание, место и другие детали в одном понятном экране.',
          },
          {
            title: 'Находить чужие события',
            text: 'Смотри, что уже происходит в городе, и присоединяйся к тому, что тебе подходит.',
          },
          {
            title: 'Следить за участниками',
            text: 'У события есть понятный список участников, чтобы было видно, кто уже идёт.',
          },
          {
            title: 'Приглашать и делиться',
            text: 'Можно пригласить людей напрямую или просто отправить ссылку на событие.',
          },
        ],
      },
      comparison: {
        eyebrow: 'Почему не просто чат',
        title: 'Чат удобен для разговора, но неудобен для самой встречи',
        text:
          'Сообщения уходят вверх, детали теряются, состав участников меняется, и в какой-то момент уже непонятно, что вообще актуально. Gathr нужен не вместо общения, а чтобы сама встреча была собрана в структурированном виде.',
        chatLabel: 'Обычный чат',
        gathrLabel: 'Gathr',
        chatItems: [
          'детали быстро теряются',
          'сложно понять, кто точно идёт',
          'нет одной точки входа в событие',
        ],
        gathrItems: [
          'у события есть отдельная карточка',
          'виден список участников',
          'деталями легко делиться по ссылке',
        ],
      },
      howItWorks: {
        eyebrow: 'Как это работает',
        title: 'Наглядно по основным шагам',
        text:
          'В приложении можно быстро найти событие, открыть его детали, присоединиться или создать своё. Ниже - демонстрация основных экранов с условными данными.',
        steps: [
          {
            title: '1. Найди событие',
            text: 'Смотри актуальные встречи, фильтруй по интересам и городу, открывай то, что подходит тебе.',
          },
          {
            title: '2. Открой детали',
            text: 'Внутри события видны описание, дата, место, участники и основные действия.',
          },
          {
            title: '3. Создай своё событие',
            text: 'Заполни короткую форму, выбери формат, время и локацию, а потом просто отправь ссылку людям.',
          },
          {
            title: '4. Следи за изменениями',
            text: 'Уведомления помогают не пропустить новых участников и важные обновления по встрече.',
          },
        ],
      },
      useCases: {
        eyebrow: 'Сценарии использования',
        title: 'Для каких встреч это подходит',
        text:
          'Футбол, кофе, прогулки, настолки, встречи локальных сообществ, небольшие ивенты, знакомые компании и тимбилдинги.',
        chips: [
          'Футбол',
          'Кофе',
          'Прогулки',
          'Настолки',
          'Нетворкинг',
          'Тимбилдинги',
          'Локальные встречи',
        ],
      },
      cta: {
        eyebrow: 'Попробовать',
        title: 'Открой Gathr и посмотри, как это работает на практике',
        text: 'Сейчас проект находится на стадии MVP и постепенно набирает первых пользователей.',
        button: 'Перейти в приложение',
      },
    },
    footer: {
      openApp: 'Открыть приложение',
    },
    mock: {
      discover: {
        tabs: ['События', 'Участвую', 'Мои события'],
        filters: ['Все', 'Спорт', 'Нетворкинг', 'Еда'],
        cityLabel: 'Город',
        cityValue: 'Все города',
        cards: [
          {
            title: 'Утренняя прогулка',
            category: 'На улице',
            date: '18.04.2026, 09:00',
            location: 'Центральный парк, Кишинёв',
            author: 'Создал Alex',
            participants: '6 участников',
          },
          {
            title: 'Кофе после работы',
            category: 'Нетворкинг',
            date: '19.04.2026, 19:30',
            location: 'Центр города',
            author: 'Создала Maria',
            participants: '4 участника',
          },
        ],
        createAriaLabel: 'Создать событие',
        bottomNav: ['Главная', 'Уведомления', 'Профиль'],
      },
      details: {
        back: 'Назад',
        title: 'Кофе и знакомство',
        text:
          'Небольшая встреча в центре города. Можно просто зайти на кофе, познакомиться и пообщаться в спокойной компании.',
        dateLabel: 'Дата и время',
        dateValue: '19.04.2026, 19:30',
        locationLabel: 'Локация',
        locationValue: 'Кишинёв, центр',
        mapLabel: 'Карта события',
        participantsLabel: 'Участники (4)',
        share: 'Поделиться',
        join: 'Присоединиться',
      },
      create: {
        cancel: 'Отмена',
        title: 'Создать событие',
        eventNameLabel: 'Название события',
        eventNamePlaceholder: 'Что планируешь?',
        activityTypeLabel: 'Тип активности',
        activityTypes: ['Спорт', 'Нетворкинг', 'Еда', 'Другое'],
        descriptionLabel: 'Описание',
        descriptionPlaceholder: 'Коротко опиши идею встречи...',
        dateLabel: 'Дата',
        dateValue: '20.04.2026',
        timeLabel: 'Время',
        timeValue: '18:30',
        locationLabel: 'Локация',
        locationValue: 'Кишинёв, центр',
        mapLabel: 'Выбор точки на карте',
        submit: 'Создать событие',
      },
      notifications: {
        title: 'Уведомления',
        items: [
          {
            text: 'Alex, Maria и ещё 2 человека присоединились к событию',
            time: '2 часа назад',
          },
          {
            text: 'Организатор обновил локацию встречи',
            time: 'Вчера',
          },
        ],
        bottomNav: ['Главная', 'Уведомления', 'Профиль'],
      },
    },
  },
  ro: {
    meta: {
      languageLabel: 'Limbă',
      themeToggleLabel: 'Schimbă tema',
      dark: 'Întunecată',
      light: 'Luminoasă',
    },
    hero: {
      title: 'Un mod simplu de a aduna oameni pentru întâlniri reale',
      description:
        'Gathr te ajută să creezi evenimente locale, să găsești participanți, să distribui linkuri și să nu pierzi planurile în haosul chat-urilor.',
      primaryCta: 'Deschide aplicația',
      secondaryCta: 'Cum funcționează',
    },
    sections: {
      why: {
        eyebrow: 'De ce Gathr',
        title: 'Când întâlnirile trăiesc doar în chat, detaliile importante se pierd repede',
        text:
          'Cine vine, unde este întâlnirea, la ce oră începe, dacă evenimentul mai este actual și dacă mai sunt locuri disponibile - toate aceste informații se pierd repede printre mesaje. Gathr le adună într-un singur loc clar.',
        cardTitle: 'Ce se schimbă',
        items: [
          'fiecare întâlnire are propriul card de eveniment',
          'data, locul și descrierea rămân vizibile',
          'este clar cine participă deja',
          'evenimentul se distribuie ușor prin link',
        ],
      },
      features: {
        eyebrow: 'Ce poți face',
        title: 'Funcțiile principale',
        items: [
          {
            title: 'Creezi evenimente',
            text: 'Adaugi formatul întâlnirii, descrierea, locația și detaliile importante într-un singur ecran clar.',
          },
          {
            title: 'Descoperi evenimente',
            text: 'Vezi ce se întâmplă deja în oraș și te alături la ceea ce ți se potrivește.',
          },
          {
            title: 'Urmărești participanții',
            text: 'Fiecare eveniment are o listă clară de participanți, ca să vezi ușor cine vine deja.',
          },
          {
            title: 'Inviți și distribui',
            text: 'Poți invita oameni direct sau poți trimite pur și simplu linkul evenimentului.',
          },
        ],
      },
      comparison: {
        eyebrow: 'De ce nu doar chat',
        title: 'Chatul este bun pentru conversație, dar nu pentru organizarea întâlnirii',
        text:
          'Mesajele urcă, detaliile se pierd, lista participanților se schimbă și la un moment dat nu mai este clar ce informație este actuală. Gathr nu înlocuiește comunicarea, ci oferă întâlnirii o structură clară.',
        chatLabel: 'Chat obișnuit',
        gathrLabel: 'Gathr',
        chatItems: [
          'detaliile se pierd repede',
          'este greu de înțeles cine vine sigur',
          'nu există un singur punct de intrare în eveniment',
        ],
        gathrItems: [
          'fiecare întâlnire are un card separat',
          'lista participanților este vizibilă',
          'detaliile se distribuie ușor prin link',
        ],
      },
      howItWorks: {
        eyebrow: 'Cum funcționează',
        title: 'Fluxul principal, pe scurt',
        text:
          'În aplicație poți găsi rapid un eveniment, îi poți deschide detaliile, te poți alătura sau poți crea unul nou. Mai jos este o demonstrație a principalelor ecrane cu date exemplificative.',
        steps: [
          {
            title: '1. Găsește un eveniment',
            text: 'Vezi întâlnirile active, filtrează după interese și oraș și deschide ce ți se potrivește.',
          },
          {
            title: '2. Deschide detaliile',
            text: 'În interiorul evenimentului vezi descrierea, data, locul, participanții și acțiunile principale.',
          },
          {
            title: '3. Creează propriul eveniment',
            text: 'Completează un formular scurt, alege formatul, ora și locația, apoi trimite linkul.',
          },
          {
            title: '4. Urmărește schimbările',
            text: 'Notificările te ajută să nu ratezi participanții noi și actualizările importante ale întâlnirii.',
          },
        ],
      },
      useCases: {
        eyebrow: 'Scenarii de utilizare',
        title: 'Pentru ce tipuri de întâlniri se potrivește',
        text:
          'Fotbal, cafea, plimbări, jocuri de societate, întâlniri ale comunităților locale, evenimente mici, grupuri apropiate și team building.',
        chips: [
          'Fotbal',
          'Cafea',
          'Plimbări',
          'Board games',
          'Networking',
          'Team building',
          'Întâlniri locale',
        ],
      },
      cta: {
        eyebrow: 'Încearcă',
        title: 'Deschide Gathr și vezi cum funcționează în practică',
        text: 'Proiectul este acum în stadiul MVP și începe treptat să atragă primii utilizatori.',
        button: 'Deschide aplicația',
      },
    },
    footer: {
      openApp: 'Deschide aplicația',
    },
    mock: {
      discover: {
        tabs: ['Evenimente', 'Particip', 'Evenimentele mele'],
        filters: ['Toate', 'Sport', 'Networking', 'Mâncare'],
        cityLabel: 'Oraș',
        cityValue: 'Toate orașele',
        cards: [
          {
            title: 'Plimbare de dimineață',
            category: 'În aer liber',
            date: '18.04.2026, 09:00',
            location: 'Parcul Central, Chișinău',
            author: 'Creat de Alex',
            participants: '6 participanți',
          },
          {
            title: 'Cafea după muncă',
            category: 'Networking',
            date: '19.04.2026, 19:30',
            location: 'Centrul orașului',
            author: 'Creat de Maria',
            participants: '4 participanți',
          },
        ],
        createAriaLabel: 'Creează eveniment',
        bottomNav: ['Acasă', 'Alerte', 'Profil'],
      },
      details: {
        back: 'Înapoi',
        title: 'Cafea și cunoaștere',
        text:
          'O întâlnire mică în centrul orașului. Poți veni la o cafea, să cunoști oameni noi și să stați de vorbă într-o atmosferă relaxată.',
        dateLabel: 'Data și ora',
        dateValue: '19.04.2026, 19:30',
        locationLabel: 'Locație',
        locationValue: 'Chișinău, centru',
        mapLabel: 'Harta evenimentului',
        participantsLabel: 'Participanți (4)',
        share: 'Distribuie',
        join: 'Participă',
      },
      create: {
        cancel: 'Anulează',
        title: 'Creează eveniment',
        eventNameLabel: 'Numele evenimentului',
        eventNamePlaceholder: 'Ce plănuiești?',
        activityTypeLabel: 'Tipul activității',
        activityTypes: ['Sport', 'Networking', 'Mâncare', 'Altceva'],
        descriptionLabel: 'Descriere',
        descriptionPlaceholder: 'Descrie pe scurt ideea întâlnirii...',
        dateLabel: 'Data',
        dateValue: '20.04.2026',
        timeLabel: 'Ora',
        timeValue: '18:30',
        locationLabel: 'Locație',
        locationValue: 'Chișinău, centru',
        mapLabel: 'Alege un punct pe hartă',
        submit: 'Creează eveniment',
      },
      notifications: {
        title: 'Notificări',
        items: [
          {
            text: 'Alex, Maria și încă 2 persoane s-au alăturat evenimentului',
            time: 'acum 2 ore',
          },
          {
            text: 'Organizatorul a actualizat locația întâlnirii',
            time: 'Ieri',
          },
        ],
        bottomNav: ['Acasă', 'Notificări', 'Profil'],
      },
    },
  },
}

export function normalizeLocale(value?: string | null): Locale {
  if (!value) {
    return 'en'
  }

  const normalized = value.toLowerCase()

  if (normalized.startsWith('ru')) {
    return 'ru'
  }

  if (normalized.startsWith('ro')) {
    return 'ro'
  }

  if (normalized.startsWith('en')) {
    return 'en'
  }

  return 'en'
}

export function getSavedLocale(): Locale | null {
  if (typeof window === 'undefined') {
    return null
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'ru' || saved === 'en' || saved === 'ro' ? saved : null
}

export function getBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return 'en'
  }

  const candidates = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language]

  for (const candidate of candidates) {
    const locale = normalizeLocale(candidate)

    if (candidate && (locale === 'ru' || locale === 'en' || locale === 'ro')) {
      return locale
    }
  }

  return 'en'
}

export function resolveInitialLocale(): Locale {
  return getSavedLocale() ?? getBrowserLocale()
}

export function persistLocale(locale: Locale) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, locale)
}
