export type Locale = 'ru' | 'en' | 'ro'

type MockEventCardTranslation = {
  title: string
  category: string
  date: string
  location: string
  author: string
  participants: string
  badge: string
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
    plans: {
      eyebrow: string
      title: string
      text: string
      tiers: Array<{
        name: string
        label: string
        text: string
        items: string[]
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
      cityPill: string
      stats: [string, string, string]
      tabs: [string, string, string]
      filters: [string, string, string, string, string]
      weekTitle: string
      weekText: string
      nextTitle: string
      nextText: string
      cards: [MockEventCardTranslation, MockEventCardTranslation]
      createAriaLabel: string
      bottomNav: [string, string, string]
    }
    details: {
      back: string
      title: string
      badge: string
      text: string
      accessTitle: string
      accessText: string
      dateLabel: string
      dateValue: string
      locationLabel: string
      locationValue: string
      mapLabel: string
      contactTitle: string
      contactText: string
      contacts: [string, string, string]
      participantsLabel: string
      participantHint: string
      share: string
      join: string
    }
    create: {
      cancel: string
      title: string
      eventNameLabel: string
      eventNamePlaceholder: string
      activityTypeLabel: string
      activityTypes: [string, string, string, string, string, string, string]
      joinModeLabel: string
      joinModeOptions: [string, string]
      joinModeHint: string
      descriptionLabel: string
      descriptionPlaceholder: string
      submit: string
    }
    notifications: {
      title: string
      all: string
      items: [
        { title: string; text: string; time: string },
        { title: string; text: string; time: string },
        { title: string; text: string; time: string },
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
      title: 'A clearer home for real-life plans',
      description:
        'Gathr helps people find local meetups, create their own events, invite others, and keep the important details out of chat chaos.',
      primaryCta: 'Open Gathr',
      secondaryCta: 'See the flow',
    },
    sections: {
      why: {
        eyebrow: 'Why Gathr',
        title: 'Chats are good for talking. They are messy for organizing.',
        text:
          'Time, place, participants, updates, invitations, and join requests all get scattered across messages. Gathr gives each meetup one structured place, so people can understand what is happening without scrolling through the whole chat.',
        cardTitle: 'What becomes clearer',
        items: [
          'one event page instead of scattered messages',
          'time, place, map, and description stay visible',
          'participants, invitations, and requests are easier to manage',
          'updates and reminders are not lost in the conversation',
        ],
      },
      features: {
        eyebrow: 'What exists now',
        title: 'Built around the real event flow',
        items: [
          {
            title: 'Discover nearby events',
            text: 'Browse local meetups, filter by activity and city, and open the events that fit your plans.',
          },
          {
            title: 'Create and edit events',
            text: 'Add a title, description, activity type, time, location, map point, visibility, join mode, and contact options.',
          },
          {
            title: 'Join, request, or invite',
            text: 'Open events can be joined directly. Request-based events let organizers review who wants to come.',
          },
          {
            title: 'Participant clarity',
            text: 'Organizers and allowed participants can see who is in, while private details stay protected by access rules.',
          },
          {
            title: 'Notifications and settings',
            text: 'Gathr shows upcoming events, new participants, invitations, join requests, and lets users tune notification settings.',
          },
          {
            title: 'Profiles and support',
            text: 'Users can manage profile, language, appearance, security, support requests, and their current plan status.',
          },
        ],
      },
      plans: {
        eyebrow: 'Freemium model',
        title: 'Free for simple meetups, Pro for active organizers',
        text:
          'The product already has a free/pro access model in the app. The goal is not to push upgrades early, but to give active organizers more room and better controls when they need them.',
        tiers: [
          {
            name: 'Free',
            label: 'For casual plans',
            text: 'A practical starting point for people who create or join occasional meetups.',
            items: [
              'up to 3 active future events',
              'up to 10 invitations per event',
              'public events and core join flow',
            ],
          },
          {
            name: 'Pro',
            label: 'For organizers',
            text: 'Designed for people who host more often and need more capacity and control.',
            items: [
              'up to 20 active future events',
              'up to 100 invitations per event',
              'private events and request-based access',
            ],
          },
        ],
      },
      comparison: {
        eyebrow: 'Why not just chat',
        title: 'Gathr does not replace conversation. It keeps the plan stable.',
        text:
          'A chat is still useful before and after the meetup. Gathr is the structured layer around it: event details, participant state, invitations, requests, and updates in one place.',
        chatLabel: 'Only chat',
        gathrLabel: 'Gathr',
        chatItems: [
          'details scroll away',
          'it is hard to know who is actually coming',
          'updates and decisions are mixed with conversation',
        ],
        gathrItems: [
          'each meetup has a dedicated event page',
          'join state, invitations, and requests are visible',
          'the event can be shared and reopened later',
        ],
      },
      howItWorks: {
        eyebrow: 'How it works',
        title: 'The main flow at a glance',
        text:
          'Gathr is built around the simple loop of discovering, opening, joining, creating, and keeping track of events.',
        steps: [
          {
            title: '1. Find a meetup',
            text: 'Browse events by city, activity, and status. Joined and created events stay easy to return to.',
          },
          {
            title: '2. Check the details',
            text: 'See the description, time, place, map, participants, contact options, and whether joining is open or request-based.',
          },
          {
            title: '3. Create or invite',
            text: 'Set up your own event, choose the access mode, add location details, and invite people directly or by link.',
          },
          {
            title: '4. Stay updated',
            text: 'Notifications cover upcoming events, new participants, invitations, and pending join requests.',
          },
        ],
      },
      useCases: {
        eyebrow: 'Use cases',
        title: 'For small, real meetups that need a little structure',
        text:
          'Gathr fits everyday plans, local communities, small organizer-led events, company gatherings, and groups that need more than a message thread.',
        chips: [
          'Coffee',
          'Walks',
          'Sports',
          'Board games',
          'Community meetups',
          'Team outings',
          'Private groups',
          'Small events',
        ],
      },
      cta: {
        eyebrow: 'Try it',
        title: 'Open Gathr and make the next plan easier to follow',
        text:
          'The product is still evolving, but the core flow is already there: create, share, join, request, invite, and keep the details in one place.',
        button: 'Go to the app',
      },
    },
    footer: {
      openApp: 'Open the app',
    },
    mock: {
      discover: {
        cityPill: 'All cities',
        stats: ['Going', 'Created', 'Requests'],
        tabs: ['Overview', 'Events', 'Joined'],
        filters: ['All', 'Sports', 'Networking', 'Books', 'Search'],
        weekTitle: 'Selected this week',
        weekText: 'Closest events with visible real activity.',
        nextTitle: 'Upcoming events',
        nextText: 'Plans you can still join.',
        cards: [
          {
            title: 'Welcome to Gathr 👋',
            category: '🤝 Networking',
            date: '31.12.2026, 23:59:00',
            location: 'Piața Marii Adunări Naționale 12, Chișinău',
            author: 'Created by Dmitrii Grebeniuc',
            participants: '29 participants',
            badge: 'Choice',
          },
          {
            title: 'Board games without noisy party',
            category: '🎮 Entertainment',
            date: 'Hidden until approval',
            location: 'Location hidden until approval',
            author: 'Request access',
            participants: 'Closed',
            badge: 'Closed',
          },
        ],
        createAriaLabel: 'Create event',
        bottomNav: ['Home', 'Create', 'Profile'],
      },
      details: {
        back: 'Back',
        title: 'Weekend breakfast',
        badge: 'Closed',
        text: 'Coffee, food, and a calm start to the weekend. This event uses requests so the group stays small.',
        accessTitle: 'Access by request',
        accessText: 'Date, location, and map open after the creator approves your request.',
        dateLabel: 'Date and time',
        dateValue: 'Hidden until approval',
        locationLabel: 'Location',
        locationValue: 'Hidden until approval',
        mapLabel: 'The map opens after your request is approved.',
        contactTitle: 'Contact the organizer',
        contactText: 'Visible only to event participants.',
        contacts: ['Open Instagram', 'Open Telegram', 'Call'],
        participantsLabel: 'Participants (6)',
        participantHint: 'Only participant count is available now. Names open after joining.',
        share: 'Share',
        join: 'Request access',
      },
      create: {
        cancel: 'Cancel',
        title: 'Create event',
        eventNameLabel: 'Event name',
        eventNamePlaceholder: 'What are you planning?',
        activityTypeLabel: 'Activity type',
        activityTypes: ['🌐 Sports', '🤝 Networking', '📚 Study', '🎮 Entertainment', '☕ Food and drinks', '🌿 Outdoors', '✨ Other'],
        joinModeLabel: 'Join mode',
        joinModeOptions: ['Open', 'By request'],
        joinModeHint: 'Request mode is available only on Pro.',
        descriptionLabel: 'Description',
        descriptionPlaceholder: 'Add event details...',
        submit: 'Create event',
      },
      notifications: {
        title: 'Notifications',
        all: 'All',
        items: [
          { title: 'New participant', text: 'Alexei S. joined you', time: '2 min ago' },
          { title: 'Invitation', text: 'You were invited to Morning run', time: '15 min ago' },
          { title: 'Reminder', text: 'Today at 19:00 - Movie discussion', time: '1h ago' },
        ],
        bottomNav: ['Home', 'Create', 'Profile'],
      },
    },
  },
  ru: {
    meta: {
      languageLabel: 'Язык',
      themeToggleLabel: 'Переключить тему',
      dark: 'Темная',
      light: 'Светлая',
    },
    hero: {
      title: 'Понятное место для живых планов',
      description:
        'Gathr помогает находить локальные встречи, создавать свои события, приглашать людей и не терять важные детали в шуме чатов.',
      primaryCta: 'Открыть Gathr',
      secondaryCta: 'Посмотреть сценарий',
    },
    sections: {
      why: {
        eyebrow: 'Зачем Gathr',
        title: 'Чат удобен для общения. Но плохо держит сам план.',
        text:
          'Время, место, участники, обновления, приглашения и заявки быстро расползаются по сообщениям. Gathr дает каждой встрече отдельное понятное место, чтобы не искать детали в длинной переписке.',
        cardTitle: 'Что становится понятнее',
        items: [
          'у встречи есть отдельная страница, а не набор сообщений',
          'время, место, карта и описание остаются на виду',
          'участников, приглашения и заявки проще контролировать',
          'обновления и напоминания не теряются в разговоре',
        ],
      },
      features: {
        eyebrow: 'Что уже есть',
        title: 'Возможности вокруг реального сценария встречи',
        items: [
          {
            title: 'Поиск событий рядом',
            text: 'Можно смотреть локальные встречи, фильтровать по активности и городу, открывать то, что подходит.',
          },
          {
            title: 'Создание и редактирование',
            text: 'Название, описание, тип активности, время, локация, точка на карте, видимость, режим вступления и контакты.',
          },
          {
            title: 'Вступление, заявки и приглашения',
            text: 'В открытые события можно вступить сразу. В события по заявке организатор сначала рассматривает участника.',
          },
          {
            title: 'Ясность по участникам',
            text: 'Организатор и пользователи с доступом видят состав встречи, а приватные детали защищены правилами доступа.',
          },
          {
            title: 'Уведомления и настройки',
            text: 'Есть уведомления о ближайших событиях, новых участниках, приглашениях и заявках, плюс настройки уведомлений.',
          },
          {
            title: 'Профиль и поддержка',
            text: 'Пользователь может управлять профилем, языком, темой, безопасностью, обращениями в поддержку и статусом плана.',
          },
        ],
      },
      plans: {
        eyebrow: 'Freemium-модель',
        title: 'Free для простых встреч, Pro для активных организаторов',
        text:
          'В приложении уже есть модель free/pro. Цель не в том, чтобы рано давить на апгрейд, а в том, чтобы дать активным организаторам больше лимитов и контроля.',
        tiers: [
          {
            name: 'Free',
            label: 'Для обычных планов',
            text: 'Базовый режим для людей, которые иногда создают встречи или присоединяются к ним.',
            items: [
              'до 3 активных будущих событий',
              'до 10 приглашений на событие',
              'публичные события и базовый сценарий вступления',
            ],
          },
          {
            name: 'Pro',
            label: 'Для организаторов',
            text: 'Для тех, кто собирает людей чаще и хочет больше контроля.',
            items: [
              'до 20 активных будущих событий',
              'до 100 приглашений на событие',
              'закрытые события и доступ по заявке',
            ],
          },
        ],
      },
      comparison: {
        eyebrow: 'Почему не просто чат',
        title: 'Gathr не заменяет общение. Он удерживает сам план.',
        text:
          'Чат все еще полезен до и после встречи. Gathr добавляет структурный слой: детали события, состояние участников, приглашения, заявки и обновления в одном месте.',
        chatLabel: 'Только чат',
        gathrLabel: 'Gathr',
        chatItems: [
          'детали быстро уезжают вверх',
          'сложно понять, кто точно идет',
          'решения и обновления смешиваются с разговором',
        ],
        gathrItems: [
          'у каждой встречи есть отдельная страница',
          'видно состояние вступления, приглашений и заявок',
          'событие можно поделиться и открыть позже',
        ],
      },
      howItWorks: {
        eyebrow: 'Как это работает',
        title: 'Основной сценарий в четырех шагах',
        text:
          'Gathr построен вокруг простого цикла: найти событие, открыть детали, присоединиться или создать свое, а потом не пропустить изменения.',
        steps: [
          {
            title: '1. Найти встречу',
            text: 'Смотри события по городу, активности и статусу. Свои события и участия остаются под рукой.',
          },
          {
            title: '2. Проверить детали',
            text: 'Видны описание, время, место, карта, участники, контакты и режим вступления.',
          },
          {
            title: '3. Создать или пригласить',
            text: 'Создай свое событие, выбери режим доступа, добавь локацию и пригласи людей напрямую или ссылкой.',
          },
          {
            title: '4. Следить за изменениями',
            text: 'Уведомления помогают не пропустить ближайшие события, новых участников, приглашения и заявки.',
          },
        ],
      },
      useCases: {
        eyebrow: 'Сценарии',
        title: 'Для небольших живых встреч, которым нужна структура',
        text:
          'Gathr подходит для повседневных планов, локальных сообществ, небольших событий, компаний друзей, командных встреч и групп, которым уже тесно в обычном чате.',
        chips: [
          'Кофе',
          'Прогулки',
          'Спорт',
          'Настолки',
          'Комьюнити',
          'Командные встречи',
          'Закрытые группы',
          'Малые события',
        ],
      },
      cta: {
        eyebrow: 'Попробовать',
        title: 'Открой Gathr и сделай следующий план проще',
        text:
          'Продукт развивается, но основной сценарий уже есть: создать, поделиться, присоединиться, отправить заявку, пригласить и держать детали в одном месте.',
        button: 'Перейти в приложение',
      },
    },
    footer: {
      openApp: 'Открыть приложение',
    },
    mock: {
      discover: {
        cityPill: 'Все города',
        stats: ['Иду', 'Создал', 'Заявки'],
        tabs: ['Обзор', 'События', 'Участвую'],
        filters: ['Все', 'Спорт', 'Нетворкинг', 'Книги', 'Поиск'],
        weekTitle: 'Выбранное на этой неделе',
        weekText: 'Ближайшие события с самой заметной реальной активностью.',
        nextTitle: 'Ближайшие события',
        nextText: 'Планы, к которым еще можно присоединиться.',
        cards: [
          {
            title: 'Добро пожаловать в Gathr 👋',
            category: '🤝 Нетворкинг',
            date: '31.12.2026, 23:59:00',
            location: 'Piața Marii Adunări Naționale 12, Chișinău',
            author: 'Создал Dmitrii Grebeniuc',
            participants: '29 участников',
            badge: 'Выбор',
          },
          {
            title: 'Настолки без шумной тусовки',
            category: '🎮 Развлечения',
            date: 'Дата откроется после одобрения',
            location: 'Локация откроется после одобрения',
            author: 'Доступ по заявке',
            participants: 'Закрытое',
            badge: 'Закрытое',
          },
        ],
        createAriaLabel: 'Создать событие',
        bottomNav: ['Главная', 'Создать', 'Профиль'],
      },
      details: {
        back: 'Назад',
        title: 'Завтрак выходного дня',
        badge: 'Закрытое',
        text: 'Кофе, еда и спокойное начало выходного. Событие по заявке, чтобы группа оставалась маленькой.',
        accessTitle: 'Доступ по заявке',
        accessText: 'Дата, локация и карта откроются после того, как создатель одобрит вашу заявку.',
        dateLabel: 'Дата и время',
        dateValue: 'Скрыто до одобрения',
        locationLabel: 'Локация',
        locationValue: 'Скрыто до одобрения',
        mapLabel: 'Карта откроется после одобрения вашей заявки.',
        contactTitle: 'Связаться с организатором',
        contactText: 'Блок виден только участникам события.',
        contacts: ['Открыть Instagram', 'Открыть Telegram', 'Позвонить'],
        participantsLabel: 'Участники (6)',
        participantHint: 'Сейчас доступно только количество участников. Имена откроются после вступления в событие.',
        share: 'Поделиться',
        join: 'Подать заявку',
      },
      create: {
        cancel: 'Отмена',
        title: 'Создать событие',
        eventNameLabel: 'Название события',
        eventNamePlaceholder: 'Что ты планируешь?',
        activityTypeLabel: 'Тип активности',
        activityTypes: ['🌐 Спорт', '🤝 Нетворкинг', '📚 Учеба', '🎮 Развлечения', '☕ Еда и напитки', '🌿 На улице', '✨ Другое'],
        joinModeLabel: 'Режим вступления',
        joinModeOptions: ['Открытый', 'По заявке'],
        joinModeHint: 'Режим по заявке доступен только на тарифе Pro.',
        descriptionLabel: 'Описание',
        descriptionPlaceholder: 'Добавь детали о событии...',
        submit: 'Создать событие',
      },
      notifications: {
        title: 'Уведомления',
        all: 'Все',
        items: [
          { title: 'Новый участник', text: 'К вам присоединился Алексей С.', time: '2 мин назад' },
          { title: 'Приглашение', text: 'Вас пригласили на событие «Утренний забег»', time: '15 мин назад' },
          { title: 'Напоминание', text: 'Сегодня в 19:00 — Кино и обсуждение', time: '1 ч назад' },
        ],
        bottomNav: ['Главная', 'Создать', 'Профиль'],
      },
    },
  },
  ro: {
    meta: {
      languageLabel: 'Limbă',
      themeToggleLabel: 'Schimbă tema',
      dark: 'Întunecat',
      light: 'Luminos',
    },
    hero: {
      title: 'Un loc mai clar pentru planuri în viața reală',
      description:
        'Gathr te ajută să găsești întâlniri locale, să creezi evenimente, să inviți oameni și să nu pierzi detaliile importante în haosul chat-urilor.',
      primaryCta: 'Deschide Gathr',
      secondaryCta: 'Vezi fluxul',
    },
    sections: {
      why: {
        eyebrow: 'De ce Gathr',
        title: 'Chatul e bun pentru discuții. Nu e bun pentru organizare.',
        text:
          'Ora, locul, participanții, actualizările, invitațiile și cererile de participare se împrăștie repede printre mesaje. Gathr oferă fiecărei întâlniri un loc clar.',
        cardTitle: 'Ce devine mai clar',
        items: [
          'o pagină de eveniment în loc de mesaje împrăștiate',
          'ora, locul, harta și descrierea rămân vizibile',
          'participanții, invitațiile și cererile sunt mai ușor de gestionat',
          'actualizările și notificările nu se pierd în conversație',
        ],
      },
      features: {
        eyebrow: 'Ce există acum',
        title: 'Funcții construite în jurul unui eveniment real',
        items: [
          {
            title: 'Descoperi evenimente locale',
            text: 'Vezi întâlniri în apropiere, filtrezi după activitate și oraș și deschizi ce ți se potrivește.',
          },
          {
            title: 'Creezi și editezi evenimente',
            text: 'Adaugi titlu, descriere, tip de activitate, oră, locație, hartă, vizibilitate, mod de alăturare și contacte.',
          },
          {
            title: 'Participi, ceri acces sau inviți',
            text: 'La evenimente deschise te poți alătura direct. La cele cu cerere, organizatorul aprobă participanții.',
          },
          {
            title: 'Claritate despre participanți',
            text: 'Organizatorii și oamenii cu acces pot vedea cine participă, iar detaliile private rămân protejate.',
          },
          {
            title: 'Notificări și setări',
            text: 'Gathr afișează evenimente apropiate, participanți noi, invitații, cereri de acces și setări pentru notificări.',
          },
          {
            title: 'Profil și suport',
            text: 'Utilizatorii pot gestiona profilul, limba, tema, securitatea, suportul și statutul planului curent.',
          },
        ],
      },
      plans: {
        eyebrow: 'Model freemium',
        title: 'Free pentru planuri simple, Pro pentru organizatori activi',
        text:
          'Aplicația are deja un model free/pro. Ideea nu este să împingem upgrade-uri prea devreme, ci să oferim mai mult spațiu și control celor care organizează mai des.',
        tiers: [
          {
            name: 'Free',
            label: 'Pentru planuri ocazionale',
            text: 'Un punct de pornire practic pentru cei care creează sau se alătură la întâlniri din când în când.',
            items: [
              'până la 3 evenimente viitoare active',
              'până la 10 invitații per eveniment',
              'evenimente publice și fluxul de participare de bază',
            ],
          },
          {
            name: 'Pro',
            label: 'Pentru organizatori',
            text: 'Pentru cei care adună oameni mai des și au nevoie de mai mult control.',
            items: [
              'până la 20 de evenimente viitoare active',
              'până la 100 de invitații per eveniment',
              'evenimente private și acces cu cerere',
            ],
          },
        ],
      },
      comparison: {
        eyebrow: 'De ce nu doar chat',
        title: 'Gathr nu înlocuiește conversația. Ține planul stabil.',
        text:
          'Chatul rămâne util înainte și după întâlnire. Gathr adaugă stratul structurat: detalii, participanți, invitații, cereri și actualizări într-un singur loc.',
        chatLabel: 'Doar chat',
        gathrLabel: 'Gathr',
        chatItems: [
          'detaliile dispar rapid',
          'este greu să știi cine vine sigur',
          'deciziile și actualizările se amestecă cu discuția',
        ],
        gathrItems: [
          'fiecare întâlnire are o pagină dedicată',
          'participarea, invitațiile și cererile sunt vizibile',
          'evenimentul poate fi distribuit și redeschis mai târziu',
        ],
      },
      howItWorks: {
        eyebrow: 'Cum funcționează',
        title: 'Fluxul principal, pe scurt',
        text:
          'Gathr este construit în jurul unui ciclu simplu: descoperi, deschizi, participi, creezi și urmărești schimbările.',
        steps: [
          {
            title: '1. Găsește o întâlnire',
            text: 'Vezi evenimente după oraș, activitate și status. Evenimentele tale și cele la care participi rămân ușor de găsit.',
          },
          {
            title: '2. Verifică detaliile',
            text: 'Vezi descrierea, ora, locul, harta, participanții, contactele și modul de participare.',
          },
          {
            title: '3. Creează sau invită',
            text: 'Creează propriul eveniment, alege modul de acces, adaugă locația și invită oameni direct sau prin link.',
          },
          {
            title: '4. Rămâi la curent',
            text: 'Notificările acoperă evenimente apropiate, participanți noi, invitații și cereri de acces.',
          },
        ],
      },
      useCases: {
        eyebrow: 'Scenarii',
        title: 'Pentru întâlniri mici care au nevoie de structură',
        text:
          'Gathr se potrivește planurilor de zi cu zi, comunităților locale, evenimentelor mici, grupurilor private și echipelor care au nevoie de mai mult decât un thread de mesaje.',
        chips: [
          'Cafea',
          'Plimbări',
          'Sport',
          'Board games',
          'Comunități',
          'Echipe',
          'Grupuri private',
          'Evenimente mici',
        ],
      },
      cta: {
        eyebrow: 'Încearcă',
        title: 'Deschide Gathr și fă următorul plan mai ușor de urmărit',
        text:
          'Produsul evoluează, dar fluxul de bază există deja: creezi, distribui, participi, ceri acces, inviți și păstrezi detaliile într-un singur loc.',
        button: 'Deschide aplicația',
      },
    },
    footer: {
      openApp: 'Deschide aplicația',
    },
    mock: {
      discover: {
        cityPill: 'Toate orașele',
        stats: ['Particip', 'Create', 'Cereri'],
        tabs: ['Overview', 'Evenimente', 'Particip'],
        filters: ['Toate', 'Sport', 'Networking', 'Cărți', 'Caută'],
        weekTitle: 'Selectate săptămâna aceasta',
        weekText: 'Cele mai apropiate evenimente cu activitate reală vizibilă.',
        nextTitle: 'Evenimente apropiate',
        nextText: 'Planuri la care încă te poți alătura.',
        cards: [
          {
            title: 'Bun venit în Gathr 👋',
            category: '🤝 Networking',
            date: '31.12.2026, 23:59:00',
            location: 'Piața Marii Adunări Naționale 12, Chișinău',
            author: 'Creat de Dmitrii Grebeniuc',
            participants: '29 participanți',
            badge: 'Alegere',
          },
          {
            title: 'Jocuri de masă fără petrecere gălăgioasă',
            category: '🎮 Divertisment',
            date: 'Data se deschide după aprobare',
            location: 'Locația se deschide după aprobare',
            author: 'Acces cu cerere',
            participants: 'Privat',
            badge: 'Privat',
          },
        ],
        createAriaLabel: 'Creează eveniment',
        bottomNav: ['Acasă', 'Creează', 'Profil'],
      },
      details: {
        back: 'Înapoi',
        title: 'Mic dejun de weekend',
        badge: 'Privat',
        text: 'Cafea, mâncare și un început liniștit de weekend. Evenimentul folosește cereri ca grupul să rămână mic.',
        accessTitle: 'Acces cu cerere',
        accessText: 'Data, locația și harta se deschid după ce creatorul îți aprobă cererea.',
        dateLabel: 'Data și ora',
        dateValue: 'Ascuns până la aprobare',
        locationLabel: 'Locație',
        locationValue: 'Ascunsă până la aprobare',
        mapLabel: 'Harta se deschide după aprobarea cererii tale.',
        contactTitle: 'Contactează organizatorul',
        contactText: 'Blocul este vizibil doar participanților.',
        contacts: ['Deschide Instagram', 'Deschide Telegram', 'Sună'],
        participantsLabel: 'Participanți (6)',
        participantHint: 'Acum este disponibil doar numărul de participanți. Numele se deschid după alăturare.',
        share: 'Distribuie',
        join: 'Cere acces',
      },
      create: {
        cancel: 'Anulează',
        title: 'Creează eveniment',
        eventNameLabel: 'Numele evenimentului',
        eventNamePlaceholder: 'Ce planifici?',
        activityTypeLabel: 'Tipul activității',
        activityTypes: ['🌐 Sport', '🤝 Networking', '📚 Studii', '🎮 Divertisment', '☕ Mâncare și băuturi', '🌿 Afară', '✨ Altceva'],
        joinModeLabel: 'Mod de participare',
        joinModeOptions: ['Deschis', 'Cu cerere'],
        joinModeHint: 'Modul cu cerere este disponibil doar pe planul Pro.',
        descriptionLabel: 'Descriere',
        descriptionPlaceholder: 'Adaugă detalii despre eveniment...',
        submit: 'Creează eveniment',
      },
      notifications: {
        title: 'Notificări',
        all: 'Toate',
        items: [
          { title: 'Participant nou', text: 'Alexei S. s-a alăturat', time: 'acum 2 min' },
          { title: 'Invitație', text: 'Ai fost invitat la „Alergare de dimineață”', time: 'acum 15 min' },
          { title: 'Reminder', text: 'Azi la 19:00 — Film și discuție', time: 'acum 1h' },
        ],
        bottomNav: ['Acasă', 'Creează', 'Profil'],
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

  const candidates =
    Array.isArray(navigator.languages) && navigator.languages.length > 0
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
