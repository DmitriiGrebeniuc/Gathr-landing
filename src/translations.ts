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
      notificationBadge: string
      tabs: [string, string, string]
      filters: [string, string, string, string]
      searchLabel: string
      cityLabel: string
      cityValue: string
      cards: [MockEventCardTranslation, MockEventCardTranslation]
      createAriaLabel: string
      bottomNav: [string, string, string]
    }
    details: {
      back: string
      title: string
      badge: string
      text: string
      dateLabel: string
      dateValue: string
      locationLabel: string
      locationValue: string
      mapLabel: string
      participantsLabel: string
      contactsLabel: string
      contacts: [string, string]
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
      visibilityLabel: string
      visibilityOptions: [string, string]
      joinModeLabel: string
      joinModeOptions: [string, string]
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
              'a path toward private events and organizer tools',
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
        notificationBadge: '4',
        tabs: ['Discover', 'Joined', 'My events'],
        filters: ['All', 'Sports', 'Coffee', 'Tech'],
        searchLabel: 'Search',
        cityLabel: 'City',
        cityValue: 'All cities',
        cards: [
          {
            title: 'Coffee after work',
            category: 'Social',
            date: '19.05.2026, 19:30',
            location: 'City center',
            author: 'Created by Maria',
            participants: '4 joined',
            badge: 'Open',
          },
          {
            title: 'Saturday football',
            category: 'Sports',
            date: '23.05.2026, 10:00',
            location: 'Central field',
            author: 'Created by Alex',
            participants: '9 joined',
            badge: 'Request',
          },
        ],
        createAriaLabel: 'Create event',
        bottomNav: ['Home', 'Alerts', 'Profile'],
      },
      details: {
        back: 'Back',
        title: 'Coffee and introductions',
        badge: 'Request to join',
        text:
          'A small meetup in the city center. Come by for coffee, meet new people, and keep the plan in one clear place.',
        dateLabel: 'Date and time',
        dateValue: '19.05.2026, 19:30',
        locationLabel: 'Location',
        locationValue: 'Chisinau, center',
        mapLabel: 'Event map',
        participantsLabel: 'Participants (4)',
        contactsLabel: 'Contact options',
        contacts: ['Telegram', 'Instagram'],
        share: 'Share',
        join: 'Request',
      },
      create: {
        cancel: 'Cancel',
        title: 'Create event',
        eventNameLabel: 'Event name',
        eventNamePlaceholder: 'What are you planning?',
        activityTypeLabel: 'Activity type',
        activityTypes: ['Sports', 'Social', 'Tech', 'Other'],
        descriptionLabel: 'Description',
        descriptionPlaceholder: 'Describe the meetup and who it is for...',
        visibilityLabel: 'Visibility',
        visibilityOptions: ['Public', 'Private'],
        joinModeLabel: 'Join mode',
        joinModeOptions: ['Open', 'Request'],
        dateLabel: 'Date',
        dateValue: '24.05.2026',
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
            text: 'Nina requested to join your event',
            time: '12 min ago',
          },
          {
            text: 'Coffee after work starts tomorrow',
            time: 'Today',
          },
          {
            text: 'Maria invited you to Saturday football',
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
            title: 'Join, заявки и приглашения',
            text: 'В открытые события можно вступить сразу. В request-событиях организатор сначала рассматривает заявку.',
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
            text: 'Базовый режим для людей, которые иногда создают или посещают встречи.',
            items: [
              'до 3 активных будущих событий',
              'до 10 приглашений на событие',
              'публичные события и основной join-flow',
            ],
          },
          {
            name: 'Pro',
            label: 'Для организаторов',
            text: 'Для тех, кто чаще собирает людей и хочет больше возможностей управления.',
            items: [
              'до 20 активных будущих событий',
              'до 100 приглашений на событие',
              'направление к закрытым событиям и инструментам организатора',
            ],
          },
        ],
      },
      comparison: {
        eyebrow: 'Почему не просто чат',
        title: 'Gathr не заменяет разговор. Он удерживает сам план.',
        text:
          'Чат все еще полезен до и после встречи. Gathr добавляет структурный слой: детали события, состояние участников, приглашения, заявки и обновления в одном месте.',
        chatLabel: 'Только чат',
        gathrLabel: 'Gathr',
        chatItems: [
          'детали быстро уезжают вверх',
          'сложно понять, кто точно идет',
          'решения и обновления смешаны с обычным разговором',
        ],
        gathrItems: [
          'у каждой встречи есть отдельная страница',
          'видны вступления, приглашения и заявки',
          'событием можно поделиться и вернуться к нему позже',
        ],
      },
      howItWorks: {
        eyebrow: 'Как это работает',
        title: 'Основной сценарий в нескольких шагах',
        text:
          'Gathr строится вокруг простого цикла: найти событие, открыть детали, присоединиться, создать свое и следить за изменениями.',
        steps: [
          {
            title: '1. Найти встречу',
            text: 'Смотри события по городу, активности и статусу. Свои и посещаемые события легко открыть снова.',
          },
          {
            title: '2. Проверить детали',
            text: 'Внутри видны описание, время, место, карта, участники, контакты и режим вступления.',
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
        notificationBadge: '4',
        tabs: ['Обзор', 'Участвую', 'Мои'],
        filters: ['Все', 'Спорт', 'Кофе', 'Tech'],
        searchLabel: 'Поиск',
        cityLabel: 'Город',
        cityValue: 'Все города',
        cards: [
          {
            title: 'Кофе после работы',
            category: 'Общение',
            date: '19.05.2026, 19:30',
            location: 'Центр города',
            author: 'Создала Maria',
            participants: '4 участвуют',
            badge: 'Открыто',
          },
          {
            title: 'Футбол в субботу',
            category: 'Спорт',
            date: '23.05.2026, 10:00',
            location: 'Центральное поле',
            author: 'Создал Alex',
            participants: '9 участвуют',
            badge: 'Заявка',
          },
        ],
        createAriaLabel: 'Создать событие',
        bottomNav: ['Главная', 'Уведомления', 'Профиль'],
      },
      details: {
        back: 'Назад',
        title: 'Кофе и знакомства',
        badge: 'Вход по заявке',
        text:
          'Небольшая встреча в центре города. Можно зайти на кофе, познакомиться с людьми и держать весь план в одном месте.',
        dateLabel: 'Дата и время',
        dateValue: '19.05.2026, 19:30',
        locationLabel: 'Локация',
        locationValue: 'Кишинев, центр',
        mapLabel: 'Карта события',
        participantsLabel: 'Участники (4)',
        contactsLabel: 'Контакты',
        contacts: ['Telegram', 'Instagram'],
        share: 'Поделиться',
        join: 'Отправить заявку',
      },
      create: {
        cancel: 'Отмена',
        title: 'Создать событие',
        eventNameLabel: 'Название',
        eventNamePlaceholder: 'Что планируешь?',
        activityTypeLabel: 'Тип активности',
        activityTypes: ['Спорт', 'Общение', 'Tech', 'Другое'],
        descriptionLabel: 'Описание',
        descriptionPlaceholder: 'Опиши встречу и для кого она...',
        visibilityLabel: 'Видимость',
        visibilityOptions: ['Публичное', 'Закрытое'],
        joinModeLabel: 'Вступление',
        joinModeOptions: ['Сразу', 'По заявке'],
        dateLabel: 'Дата',
        dateValue: '24.05.2026',
        timeLabel: 'Время',
        timeValue: '18:30',
        locationLabel: 'Локация',
        locationValue: 'Кишинев, центр',
        mapLabel: 'Выбери точку на карте',
        submit: 'Создать событие',
      },
      notifications: {
        title: 'Уведомления',
        items: [
          {
            text: 'Nina отправила заявку на твое событие',
            time: '12 минут назад',
          },
          {
            text: 'Кофе после работы начнется завтра',
            time: 'Сегодня',
          },
          {
            text: 'Maria пригласила тебя на футбол в субботу',
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
              'direcție către evenimente private și instrumente de organizator',
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
        notificationBadge: '4',
        tabs: ['Descoperă', 'Particip', 'Ale mele'],
        filters: ['Toate', 'Sport', 'Cafea', 'Tech'],
        searchLabel: 'Caută',
        cityLabel: 'Oraș',
        cityValue: 'Toate orașele',
        cards: [
          {
            title: 'Cafea după muncă',
            category: 'Social',
            date: '19.05.2026, 19:30',
            location: 'Centrul orașului',
            author: 'Creat de Maria',
            participants: '4 participă',
            badge: 'Deschis',
          },
          {
            title: 'Fotbal sâmbătă',
            category: 'Sport',
            date: '23.05.2026, 10:00',
            location: 'Terenul central',
            author: 'Creat de Alex',
            participants: '9 participă',
            badge: 'Cerere',
          },
        ],
        createAriaLabel: 'Creează eveniment',
        bottomNav: ['Acasă', 'Alerte', 'Profil'],
      },
      details: {
        back: 'Înapoi',
        title: 'Cafea și cunoaștere',
        badge: 'Acces cu cerere',
        text:
          'O întâlnire mică în centrul orașului. Vino la o cafea, cunoaște oameni noi și păstrează planul clar.',
        dateLabel: 'Data și ora',
        dateValue: '19.05.2026, 19:30',
        locationLabel: 'Locație',
        locationValue: 'Chișinău, centru',
        mapLabel: 'Harta evenimentului',
        participantsLabel: 'Participanți (4)',
        contactsLabel: 'Contacte',
        contacts: ['Telegram', 'Instagram'],
        share: 'Distribuie',
        join: 'Cere acces',
      },
      create: {
        cancel: 'Anulează',
        title: 'Creează eveniment',
        eventNameLabel: 'Numele',
        eventNamePlaceholder: 'Ce planifici?',
        activityTypeLabel: 'Tipul activității',
        activityTypes: ['Sport', 'Social', 'Tech', 'Altceva'],
        descriptionLabel: 'Descriere',
        descriptionPlaceholder: 'Descrie întâlnirea și pentru cine este...',
        visibilityLabel: 'Vizibilitate',
        visibilityOptions: ['Public', 'Privat'],
        joinModeLabel: 'Mod de participare',
        joinModeOptions: ['Direct', 'Cu cerere'],
        dateLabel: 'Data',
        dateValue: '24.05.2026',
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
            text: 'Nina a cerut acces la evenimentul tău',
            time: 'acum 12 min',
          },
          {
            text: 'Cafea după muncă începe mâine',
            time: 'Azi',
          },
          {
            text: 'Maria te-a invitat la fotbal sâmbătă',
            time: 'Ieri',
          },
        ],
        bottomNav: ['Acasă', 'Alerte', 'Profil'],
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
