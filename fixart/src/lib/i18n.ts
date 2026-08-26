import type { ShopStatus } from "./hours";

export type Lang = "cs" | "en" | "ru";

export const LANGS: { id: Lang; label: string }[] = [
  { id: "cs", label: "CS" },
  { id: "en", label: "EN" },
  { id: "ru", label: "RU" },
];


const cs = {
  metaTitle: "FixArt — servis elektroniky Praha",
  metaDesc:
    "Opravíme zařízení. Nové nekupujte. Výměna baterie, displeje a zadního skla iPhonů, Samsungů i MacBooků v Praze 3.",
  nav: {
    opravy: "Opravy",
    cenik: "Ceník",
    garance: "Záruka",
    onas: "O nás",
    recenze: "Recenze",
    otazky: "Otázky",
    kontakt: "Kontakt",
  },
  telegram: "Telegram",
  book: "Rezervovat termín",
  menu: "Menu",
  close: "Zavřít",
  skip: "Přeskočit na obsah",
  hero: {
    kicker: "SERVIS ELEKTRONIKY · PRAHA",
    line1: "Opravíme zařízení.",
    line2: "Nové nekupujte.",
    lead: "Baterie, displeje a skla iPhonů, Samsungů i MacBooků. Často ještě dnes, s 12měsíční zárukou a vašimi daty na místě.",
    cta: "Rezervovat termín",
    prices: "Zobrazit ceník",
    from: "od",
    minutes: "min",
    repairsLabel: "Typ opravy",
    altBattery: "Baterie iPhonu nad ESD podložkou.",
    altDisplay: "Rozebraný telefon: displej, baterie a deska ve vzduchu.",
    altGlass: "Zadní sklo telefonu s ostrovem fotoaparátů.",
  },
  trust: {
    warranty: "12 měsíců záruka",
    sameDay: "Často tentýž den",
    data: "Data zůstávají",
    place: "Žižkov · Praha 3",
  },
  repairs: {
    battery: "Výměna baterie",
    display: "Výměna displeje",
    glass: "Zadní sklo",
  },
  statusOpen: "Otevřeno · Dnes do {time}",
  statusClosedToday: "Zavřeno · Otevíráme dnes v {time}",
  statusClosedNext: "Zavřeno · Otevíráme {day} v {time}",
  daysOn: {
    0: "v neděli",
    1: "v pondělí",
    2: "v úterý",
    3: "ve středu",
    4: "ve čtvrtek",
    5: "v pátek",
    6: "v sobotu",
  },
  days: {
    0: "Neděle",
    1: "Pondělí",
    2: "Úterý",
    3: "Středa",
    4: "Čtvrtek",
    5: "Pátek",
    6: "Sobota",
  },
  closed: "Zavřeno",
  services: {
    kicker: "Opravy",
    title: "Přesná práce. Žádné kompromisy.",
    lead: "Specializujeme se na Apple a prémiovou Android elektroniku. Diagnostika je vždy zdarma — platíte jen za schválenou opravu.",
    batteryLead: "Originální kapacita, kalibrace a záruka 12 měsíců. Často do hodiny.",
    displayLead: "OLED i LCD. Kalibrace True Tone tam, kde to jde. Vaše data zůstávají.",
    glassLead: "Zadní sklo bez výměny celého šasi. Čisté lepení, tělové odstíny.",
    port: "Nabíjecí konektor",
    portLead: "Lightning, USB-C i magnetické konektory. Čistění i výměna.",
    macbook: "MacBook a notebooky",
    macbookLead: "Baterie, klávesnice, disky a chlazení. Diagnostika na stole.",
    diagnostics: "Diagnostika zdarma",
    diagnosticsLead: "Řekneme cenu předem. Bez opravy nic neplatíte.",
  },
  steps: {
    kicker: "Průběh",
    title: "Tři kroky. Žádné překvapení.",
    s1t: "Diagnostika",
    s1d: "Přinesete zařízení nebo se objednáte. Do 15 minut znáte cenu a čas.",
    s2t: "Oprava",
    s2d: "Baterie často do hodiny. Displej a sklo tentýž den, pokud je díl skladem.",
    s3t: "Záruka",
    s3d: "12 měsíců na díl i práci. Účet a protokol odchází s vámi.",
  },
  pricing: {
    kicker: "Ceník",
    title: "Férové ceny, bez hvězdiček.",
    lead: "Ceny platí pro díly skladem a typickou závadu. Přesnou částku potvrdíme po diagnostice — vždy před začátkem práce. V ceně je díl, práce, DPH, protokol a 12 měsíců záruky.",
    colModel: "Model",
    colBattery: "Baterie",
    colDisplay: "Displej",
    colGlass: "Zadní sklo",
    colPort: "Konektor",
    colTime: "Čas",
    included: "V ceně: díl, práce, DPH, záruka 12 měsíců, písemný protokol.",
    swipe: "Posuňte tabulku do stran.",
    extrasTitle: "Další práce",
    extrasLead: "Ceny „od“. Po diagnostice řekneme, jestli stačí čištění, nebo je nutná výměna.",
    extras: {
      cameraRear: { title: "Zadní kamera", detail: "Modul i sklo objektivu. Kalibrace ostření." },
      cameraFront: { title: "Přední kamera", detail: "Selfie modul, TrueDepth tam, kde to díl dovolí." },
      speaker: { title: "Reproduktor / sluchátko", detail: "Čištění spár, výměna měniče." },
      keyboard: { title: "Klávesnice MacBook", detail: "Top case včetně trackpadu u vybraných ročníků." },
      water: { title: "Po tekutině", detail: "Otevření, sušení, měření koroze. Bez opravy platíte jen tuto položku." },
      express: { title: "Expresní příplatek", detail: "Přednost ve frontě, vytáhneme díl ze skladu hned." },
    },
    na: "—",
    groups: {
      iphone: "iPhone",
      samsung: "Samsung",
      macbook: "MacBook",
    },
    alts: {
      iphone: "Řada iPhonů na ESD podložce v dílně.",
      samsung: "Rozebraný Android telefon s OLED panelem.",
      macbook: "Otevřený MacBook s vyndávanou klávesnicí.",
    },
    note: "Ceny v CZK, včetně DPH. Pro Max / Ultra u displejů může vyjít o 10–15 % výš — řekneme to předem.",
  },
  warranty: {
    kicker: "Záruka",
    title: "12 měsíců. Písemně. Bez háčků.",
    lead: "Smluvní záruka na vyměněný díl i na naši práci. Běží od převzetí zařízení. Reklamaci bereme přednostně — většinou do 24 hodin.",
    alt: "Zapečetěný antistatický sáček s opraveným telefonem a prázdným protokolem.",
    cards: [
      {
        t: "Díl i práce",
        d: "Stejná lhůta na součástku i na montáž. Žádné „na díl ano, na lepidlo ne“.",
      },
      {
        t: "Znovu zdarma",
        d: "Když selže náš zásah, opravíme ho znovu. Diagnostika reklamace se neúčtuje.",
      },
      {
        t: "Protokol a účtenka",
        d: "Typ dílu, šarže, test kapacity nebo True Tone. Účtenka s IČ k reklamaci i do účetnictví.",
      },
      {
        t: "Stejné u všech dílů",
        d: "Originál, OEM i prémiový aftermarket, který montujeme, má 12 měsíců. Kategorie jde vždy na stůl předem.",
      },
    ],
    coveredTitle: "Co kryje",
    covered: [
      "Vadný díl, který jsme instalovali",
      "Chybu práce — lepení, konektory, šrouby, kalibrace",
      "Opakovanou závadu stejného typu po naší opravě",
      "Kapacitu baterie nebo True Tone mimo slíbené hodnoty",
    ],
    excludedTitle: "Co nekryje",
    excluded: [
      "Nové mechanické poškození — pád, ohyb, prasklé sklo",
      "Tekutina a koroze vzniklé po opravě",
      "Zásah jiného servisu nebo domácí pokus",
      "Software, iCloud, hesla a běžné opotřebení mimo vyměněný díl",
    ],
    claimTitle: "Jak reklamovat",
    claim:
      "Přineste zařízení a účtenku nebo protokol. Vadný zásah opravíme znovu zdarma, nebo vrátíme cenu dané opravy. Zákonná práva z vadného plnění tím nejsou nijak omezena.",
  },
  about: {
    kicker: "O nás",
    title: "Dílna v Praze 3, ne výdejna krabic.",
    p1: "FixArt je servis, kde se zařízení skutečně otevírají. Pracujeme s ESD stolem, originálními i prémiovými díly a protokolem, který by obstál i v autorizaci.",
    p2: "Sídlíme na Žižkově, zastávka Biskupcova. Přijďte bez objednání na diagnostiku, nebo si rezervujte termín na Telegramu — odpovíme během otevírací doby do několika minut.",
    points: [
      "12 měsíců záruka na díl i práci",
      "Data zůstávají ve vašem zařízení",
      "Prémiové díly, ne nejlevnější aukce",
      "Protokol a účtenka ke každé opravě",
    ],
    altWorkshop: "Dílna FixArt: rozebraný telefon a MacBook na ESD stole, Žižkov za oknem.",
    altHands: "Ruce technika při výměně OLED displeje, bez obličeje.",
    altAfter: "Stejný telefon před opravou s prasklým sklem a po opravě s novým displejem.",
    afterKicker: "Před / po",
    afterTitle: "Stejné zařízení. Jeden zásah.",
  },
  reviews: {
    kicker: "Recenze",
    title: "Co říkají zákazníci.",
    items: [
      { name: "Jana K.", rating: 5, text: "Vyměnili displej na iPhone 15 Pro za hodinu. Kvalita perfektní, True Tone funguje. Děkuji!", service: "displej" },
      { name: "Martin S.", rating: 5, text: "Baterie v MacBooku Air drží jako nová. Férová cena, příjemné jednání.", service: "baterie" },
      { name: "Lucie M.", rating: 5, text: "Rozbité zadní sklo na Samsungu S24 — ani nepoznáte, že bylo opravováno. Doporučuji.", service: "sklo" },
    ],
  },
  faq: {
    kicker: "Otázky",
    title: "Než přijdete.",
    items: [
      {
        q: "Zůstanou mi data a nastavení?",
        a: "Ano. Opravy děláme bez obnovy systému, pokud to závada nevyžaduje. Zálohu i tak doporučujeme — řekneme vám, kdy je nutná.",
      },
      {
        q: "Jak dlouho trvá výměna baterie?",
        a: "U iPhonů skladem většinou 45–60 minut. Objednejte se ráno a zařízení si odnesete odpoledne, často dřív.",
      },
      {
        q: "Používáte originální díly?",
        a: "Tam, kde dávají smysl — baterie a skla prémiové kvality s měřenou kapacitou, displeje s kalibrací True Tone. Vždy vám řekneme, jaký díl půjde dovnitř, ještě před opravou.",
      },
      {
        q: "Opravujete i Samsung a MacBooky?",
        a: "Ano. Telefony Samsung Galaxy i MacBook Air/Pro. U notebooků počítejte s delší diagnostikou — ozveme se s cenou, než začneme.",
      },
      {
        q: "Musím se objednat?",
        a: "Diagnostika funguje i bez objednání v otevírací době. Na displeje a MacBooky je lepší termín rezervovat, ať díl čeká na vás.",
      },
      {
        q: "Co když oprava nevyjde?",
        a: "Diagnostika je zdarma. Pokud opravu neschválíte, zařízení složíme a vrátíme. Žádné skryté poplatky.",
      },
      {
        q: "Jak přesně funguje záruka 12 měsíců?",
        a: "Kryje vyměněný díl i naši práci. Když stejná závada přijde znovu bez nového pádu nebo tekutiny, opravíme ji znovu zdarma. Přineste účtenku nebo protokol.",
      },
      {
        q: "Platí záruka i na aftermarket díl?",
        a: "Ano, 12 měsíců u všeho, co montujeme. Před prací řekneme, jestli jde o originál, OEM, nebo prémiový aftermarket — kategorie je na vás.",
      },
    ],
  },
  contact: {
    kicker: "Kontakt",
    title: "Napište, zavolejte, nebo přijďte.",
    lead: "Nejrychleji se dovoláte na Telegramu. Na dílnu na Žižkově se zastavte v otevírací době, jindy po dohodě.",
    address: "Adresa",
    transit: "MHD",
    stop: "Zastávka",
    hours: "Otevírací doba",
    hoursNote: "So–Ne a mimo hodiny po dohodě.",
    phone: "Telefon",
    email: "E-mail",
    person: "Kontakt",
    write: "Napsat na Telegram",
    map: "Otevřít mapu",
    mapTitle: "Dílna FixArt na mapě, Biskupcova 31, Praha 3.",
    altStreet: "Noční ulice na Žižkově, teplé světlo z okna dílny.",
    call: "Zavolat",
    formTitle: "Rezervace",
    name: "Jméno",
    phoneLabel: "Telefon",
    device: "Zařízení",
    service: "Závada",
    message: "Poznámka (volitelné)",
    send: "Odeslat rezervaci",
    sending: "Odesílám…",
    success: "Rezervace je připravená. Otevíráme Telegram.",
    error: "Doplňte jméno a telefon.",
    errorPhone: "Zadejte platný český telefon, např. 737 500 587.",
    errorServer: "Rezervaci se nepodařilo odeslat. Napište nám na Telegram.",
    errorRate: "Příliš mnoho pokusů. Napište nám rovnou na Telegram.",
    other: "Jiné",
    deviceOther: "Jiné zařízení",
  },
  footer: {
    tag: "Servis elektroniky · Praha",
    copy: "© 2026 FixArt",
  },
} as const;

type DeepString<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepString<U>[]
    : T extends object
      ? { [K in keyof T]: DeepString<T[K]> }
      : T;

type Tree = DeepString<typeof cs>;

const en: Tree = {
  metaTitle: "FixArt — electronics repair Prague",
  metaDesc:
    "We’ll repair the device. Don’t buy new. Battery, display and back-glass service for iPhone, Samsung and MacBook in Prague 3.",
  nav: {
    opravy: "Repairs",
    cenik: "Pricing",
    garance: "Warranty",
    onas: "About",
    recenze: "Reviews",
    otazky: "FAQ",
    kontakt: "Contact",
  },
  telegram: "Telegram",
  book: "Book a slot",
  menu: "Menu",
  close: "Close",
  skip: "Skip to content",
  hero: {
    kicker: "ELECTRONICS SERVICE · PRAGUE",
    line1: "We’ll repair the device.",
    line2: "Don’t buy new.",
    lead: "Batteries, displays and glass for iPhone, Samsung and MacBook. Often same day, with a 12-month warranty and your data left untouched.",
    cta: "Book a slot",
    prices: "See pricing",
    from: "from",
    minutes: "min",
    repairsLabel: "Repair type",
    altBattery: "iPhone battery hovering over an ESD mat.",
    altDisplay: "Exploded smartphone: display, battery and board in mid-air.",
    altGlass: "Smartphone back glass with camera island.",
  },
  trust: {
    warranty: "12-month warranty",
    sameDay: "Often same day",
    data: "Your data stays",
    place: "Žižkov · Prague 3",
  },
  repairs: {
    battery: "Battery replacement",
    display: "Display replacement",
    glass: "Back glass",
  },
  statusOpen: "Open · Today until {time}",
  statusClosedToday: "Closed · Opens today at {time}",
  statusClosedNext: "Closed · Opens {day} at {time}",
  daysOn: {
    0: "on Sunday",
    1: "on Monday",
    2: "on Tuesday",
    3: "on Wednesday",
    4: "on Thursday",
    5: "on Friday",
    6: "on Saturday",
  },
  days: {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  },
  closed: "Closed",
  services: {
    kicker: "Repairs",
    title: "Precise work. No shortcuts.",
    lead: "We specialise in Apple and premium Android. Diagnostics are always free — you pay only for an approved repair.",
    batteryLead: "Full capacity, calibration and a 12-month warranty. Often within an hour.",
    displayLead: "OLED and LCD. True Tone calibration where possible. Your data stays.",
    glassLead: "Rear glass without replacing the whole chassis. Clean bonding, matching finishes.",
    port: "Charging port",
    portLead: "Lightning, USB-C and magnetic connectors. Cleaning or replacement.",
    macbook: "MacBook & laptops",
    macbookLead: "Batteries, keyboards, storage and cooling. Diagnosed on the bench.",
    diagnostics: "Free diagnostics",
    diagnosticsLead: "We quote before we start. No repair, no charge.",
  },
  steps: {
    kicker: "Process",
    title: "Three steps. No surprises.",
    s1t: "Diagnostics",
    s1d: "Walk in or book. In 15 minutes you know the price and the time.",
    s2t: "Repair",
    s2d: "Batteries often within an hour. Displays and glass the same day when the part is in stock.",
    s3t: "Warranty",
    s3d: "12 months on parts and labour. You leave with a receipt and a protocol.",
  },
  pricing: {
    kicker: "Pricing",
    title: "Fair prices, no asterisks.",
    lead: "Prices cover in-stock parts and a typical fault. We confirm the exact amount after diagnostics — always before work begins. Part, labour, VAT, protocol and a 12-month warranty are included.",
    colModel: "Model",
    colBattery: "Battery",
    colDisplay: "Display",
    colGlass: "Back glass",
    colPort: "Port",
    colTime: "Time",
    included: "Included: part, labour, VAT, 12-month warranty, written protocol.",
    swipe: "Swipe the table sideways.",
    extrasTitle: "Other work",
    extrasLead: "Prices are “from”. After diagnostics we say whether cleaning is enough, or a part has to come out.",
    extras: {
      cameraRear: { title: "Rear camera", detail: "Module and lens glass. Focus calibration." },
      cameraFront: { title: "Front camera", detail: "Selfie module, TrueDepth where the part allows." },
      speaker: { title: "Speaker / earpiece", detail: "Mesh cleaning or transducer replacement." },
      keyboard: { title: "MacBook keyboard", detail: "Top case including trackpad on selected years." },
      water: { title: "Liquid damage", detail: "Open, dry, measure corrosion. If you stop there, you only pay this line." },
      express: { title: "Express surcharge", detail: "Jump the queue; we pull the part from stock immediately." },
    },
    na: "—",
    groups: {
      iphone: "iPhone",
      samsung: "Samsung",
      macbook: "MacBook",
    },
    alts: {
      iphone: "A row of iPhones on an ESD mat in the workshop.",
      samsung: "An opened Android phone with an OLED panel.",
      macbook: "An open MacBook with the keyboard being serviced.",
    },
    note: "Prices in CZK, VAT included. Pro Max / Ultra displays can run 10–15% higher — we say so before we start.",
  },
  warranty: {
    kicker: "Warranty",
    title: "12 months. In writing. No hooks.",
    lead: "A contractual warranty on the part we fitted and on our labour. It starts when you collect the device. Claims go to the front of the bench — usually within 24 hours.",
    alt: "A sealed anti-static bag with a repaired phone and a blank protocol.",
    cards: [
      {
        t: "Part and labour",
        d: "The same term on the component and on the fitting. No “yes on the part, no on the adhesive”.",
      },
      {
        t: "Done again, free",
        d: "If our work fails, we redo it. Claim diagnostics are not billed.",
      },
      {
        t: "Protocol and receipt",
        d: "Part type, batch, capacity or True Tone test. A receipt with our IČ for the claim and for your books.",
      },
      {
        t: "Same on every part",
        d: "Original, OEM and the premium aftermarket we fit all carry 12 months. The category is on the table before we start.",
      },
    ],
    coveredTitle: "Covered",
    covered: [
      "A defective part we installed",
      "Workmanship — bonding, connectors, screws, calibration",
      "The same fault returning after our repair",
      "Battery capacity or True Tone outside the values we promised",
    ],
    excludedTitle: "Not covered",
    excluded: [
      "New mechanical damage — drops, bends, cracked glass",
      "Liquid and corrosion after the repair",
      "Another shop’s work, or a home attempt",
      "Software, iCloud, passwords, and wear outside the replaced part",
    ],
    claimTitle: "How to claim",
    claim:
      "Bring the device and the receipt or protocol. We redo a failed repair free, or refund that job. Your statutory rights for defective performance are not limited.",
  },
  about: {
    kicker: "About",
    title: "A workshop in Prague 3, not a parcel desk.",
    p1: "FixArt is a bench, not a drop-off. We work on an ESD table with original and premium parts and a protocol that would hold up in an authorised shop.",
    p2: "We’re in Žižkov, at the Biskupcova tram stop. Come in for diagnostics without a booking, or reserve a slot on Telegram — we reply within minutes during opening hours.",
    points: [
      "12-month warranty on parts and labour",
      "Your data stays on the device",
      "Premium parts, not the cheapest auction lot",
      "Protocol and receipt with every repair",
    ],
    altWorkshop: "FixArt bench: an opened phone and MacBook on an ESD mat, Žižkov outside the window.",
    altHands: "Technician hands replacing an OLED display, no face in frame.",
    altAfter: "The same phone with a cracked screen on the left and restored on the right.",
    afterKicker: "Before / after",
    afterTitle: "Same device. One repair.",
  },
  reviews: {
    kicker: "Reviews",
    title: "What customers say.",
    items: [
      { name: "Jana K.", rating: 5, text: "Replaced my iPhone 15 Pro display in an hour. Perfect quality, True Tone works. Thanks!", service: "display" },
      { name: "Martin S.", rating: 5, text: "MacBook Air battery lasts like new. Fair price, great service.", service: "battery" },
      { name: "Lucie M.", rating: 5, text: "Cracked Samsung S24 back glass — you can't tell it was repaired. Highly recommend.", service: "glass" },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Before you visit.",
    items: [
      {
        q: "Will I keep my data and settings?",
        a: "Yes. We repair without restoring the system unless the fault requires it. We still recommend a backup — we’ll tell you when it’s necessary.",
      },
      {
        q: "How long does a battery replacement take?",
        a: "For in-stock iPhones, usually 45–60 minutes. Book in the morning and you’ll often pick it up the same afternoon, sometimes sooner.",
      },
      {
        q: "Do you use original parts?",
        a: "Where they make sense — batteries and glass of measured premium quality, displays with True Tone calibration. We always tell you which part goes in before we start.",
      },
      {
        q: "Do you repair Samsung and MacBooks too?",
        a: "Yes. Samsung Galaxy phones and MacBook Air/Pro. Laptops take a longer diagnosis — we quote before we begin.",
      },
      {
        q: "Do I need an appointment?",
        a: "Diagnostics are walk-in during opening hours. For displays and MacBooks a booking is better, so the part is waiting for you.",
      },
      {
        q: "What if I don’t want the repair?",
        a: "Diagnostics are free. If you don’t approve the work, we reassemble and return the device. No hidden fees.",
      },
      {
        q: "How does the 12-month warranty actually work?",
        a: "It covers the part we fitted and our labour. If the same fault returns without a new drop or liquid, we redo it free. Bring the receipt or protocol.",
      },
      {
        q: "Does aftermarket still get a warranty?",
        a: "Yes — 12 months on everything we fit. Before we start we say whether it is original, OEM, or premium aftermarket. You choose the category.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Message, call, or walk in.",
    lead: "Telegram is the fastest. The Žižkov workshop is open weekdays; other times by appointment.",
    address: "Address",
    transit: "Transit",
    stop: "Stop",
    hours: "Opening hours",
    hoursNote: "Sat–Sun and after hours by appointment.",
    phone: "Phone",
    email: "Email",
    person: "Contact",
    write: "Message on Telegram",
    map: "Open map",
    mapTitle: "FixArt workshop on the map, Biskupcova 31, Prague 3.",
    altStreet: "A Žižkov night street, warm light from the workshop window.",
    call: "Call",
    formTitle: "Booking",
    name: "Name",
    phoneLabel: "Phone",
    device: "Device",
    service: "Issue",
    message: "Note (optional)",
    send: "Send booking",
    sending: "Sending…",
    success: "Booking is ready. Opening Telegram.",
    error: "Please add your name and phone.",
    errorPhone: "Enter a valid Czech phone number, e.g. 737 500 587.",
    errorServer: "Could not send the booking. Message us on Telegram.",
    errorRate: "Too many attempts. Message us on Telegram instead.",
    other: "Other",
    deviceOther: "Other device",
  },
  footer: {
    tag: "Electronics service · Prague",
    copy: "© 2026 FixArt",
  },
};

const ru: Tree = {
  metaTitle: "FixArt — сервис электроники Прага",
  metaDesc:
    "Починим устройство. Не покупайте новое. Замена батареи, дисплея и заднего стекла iPhone, Samsung и MacBook в Праге 3.",
  nav: {
    opravy: "Ремонт",
    cenik: "Цены",
    garance: "Гарантия",
    onas: "О нас",
    recenze: "Отзывы",
    otazky: "Вопросы",
    kontakt: "Контакты",
  },
  telegram: "Telegram",
  book: "Записаться",
  menu: "Меню",
  close: "Закрыть",
  skip: "К содержанию",
  hero: {
    kicker: "СЕРВИС ЭЛЕКТРОНИКИ · ПРАГА",
    line1: "Починим устройство.",
    line2: "Не покупайте новое.",
    lead: "Батареи, дисплеи и стёкла iPhone, Samsung и MacBook. Часто в тот же день, с гарантией 12 месяцев и вашими данными на месте.",
    cta: "Записаться",
    prices: "Смотреть цены",
    from: "от",
    minutes: "мин",
    repairsLabel: "Тип ремонта",
    altBattery: "Батарея iPhone над ESD-ковриком.",
    altDisplay: "Разобранный телефон: дисплей, батарея и плата в воздухе.",
    altGlass: "Заднее стекло смартфона с островом камер.",
  },
  trust: {
    warranty: "Гарантия 12 месяцев",
    sameDay: "Часто в тот же день",
    data: "Данные на месте",
    place: "Жижков · Прага 3",
  },
  repairs: {
    battery: "Замена батареи",
    display: "Замена дисплея",
    glass: "Заднее стекло",
  },
  statusOpen: "Открыто · Сегодня до {time}",
  statusClosedToday: "Закрыто · Открываемся сегодня в {time}",
  statusClosedNext: "Закрыто · Открываемся {day} в {time}",
  daysOn: {
    0: "в воскресенье",
    1: "в понедельник",
    2: "во вторник",
    3: "в среду",
    4: "в четверг",
    5: "в пятницу",
    6: "в субботу",
  },
  days: {
    0: "Воскресенье",
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
  },
  closed: "Закрыто",
  services: {
    kicker: "Ремонт",
    title: "Точная работа. Без компромиссов.",
    lead: "Специализируемся на Apple и премиальном Android. Диагностика всегда бесплатна — платите только за согласованный ремонт.",
    batteryLead: "Родная ёмкость, калибровка и гарантия 12 месяцев. Часто в течение часа.",
    displayLead: "OLED и LCD. Калибровка True Tone, где возможно. Ваши данные остаются.",
    glassLead: "Заднее стекло без замены корпуса. Аккуратная склейка, родные оттенки.",
    port: "Разъём зарядки",
    portLead: "Lightning, USB-C и магнитные разъёмы. Чистка или замена.",
    macbook: "MacBook и ноутбуки",
    macbookLead: "Батареи, клавиатуры, накопители и охлаждение. Диагностика на столе.",
    diagnostics: "Диагностика бесплатно",
    diagnosticsLead: "Называем цену заранее. Нет ремонта — нет оплаты.",
  },
  steps: {
    kicker: "Как это проходит",
    title: "Три шага. Без сюрпризов.",
    s1t: "Диагностика",
    s1d: "Приходите или записывайтесь. За 15 минут вы знаете цену и срок.",
    s2t: "Ремонт",
    s2d: "Батарея часто за час. Дисплей и стекло в тот же день, если деталь на складе.",
    s3t: "Гарантия",
    s3d: "12 месяцев на деталь и работу. Чек и протокол уходите с вами.",
  },
  pricing: {
    kicker: "Цены",
    title: "Честные цены, без звёздочек.",
    lead: "Цены — для деталей на складе и типичной неисправности. Точную сумму подтверждаем после диагностики — всегда до начала работы. В цене деталь, работа, НДС, протокол и 12 месяцев гарантии.",
    colModel: "Модель",
    colBattery: "Батарея",
    colDisplay: "Дисплей",
    colGlass: "Заднее стекло",
    colPort: "Разъём",
    colTime: "Время",
    included: "В цене: деталь, работа, НДС, гарантия 12 месяцев, письменный протокол.",
    swipe: "Таблица листается вбок.",
    extrasTitle: "Другие работы",
    extrasLead: "Цены «от». После диагностики скажем, хватит ли чистки или нужна замена.",
    extras: {
      cameraRear: { title: "Задняя камера", detail: "Модуль и стекло объектива. Калибровка фокуса." },
      cameraFront: { title: "Передняя камера", detail: "Селфи-модуль, TrueDepth — где позволяет деталь." },
      speaker: { title: "Динамик / слуховой", detail: "Чистка сетки или замена излучателя." },
      keyboard: { title: "Клавиатура MacBook", detail: "Top case с трекпадом на выбранных годах." },
      water: { title: "После жидкости", detail: "Вскрытие, сушка, замер коррозии. Если на этом стоп — платите только эту строку." },
      express: { title: "Срочный тариф", detail: "Вне очереди, деталь со склада сразу." },
    },
    na: "—",
    groups: {
      iphone: "iPhone",
      samsung: "Samsung",
      macbook: "MacBook",
    },
    alts: {
      iphone: "Ряд iPhone на ESD-коврике в мастерской.",
      samsung: "Разобранный Android с OLED-панелью.",
      macbook: "Открытый MacBook со снятой клавиатурой.",
    },
    note: "Цены в CZK, включая НДС. Дисплеи Pro Max / Ultra могут быть на 10–15 % выше — скажем до старта.",
  },
  warranty: {
    kicker: "Гарантия",
    title: "12 месяцев. Письменно. Без крючков.",
    lead: "Договорная гарантия на установленную деталь и на нашу работу. Срок идёт с момента выдачи. Рекламации — вне очереди, обычно в течение 24 часов.",
    alt: "Антистатический пакет с отремонтированным телефоном и пустым протоколом.",
    cards: [
      {
        t: "Деталь и работа",
        d: "Один срок на комплектующую и на монтаж. Никакого «на деталь да, на клей нет».",
      },
      {
        t: "Повторим бесплатно",
        d: "Если наш ремонт отказал — делаем снова. Диагностика рекламации не тарифицируется.",
      },
      {
        t: "Протокол и чек",
        d: "Тип детали, партия, тест ёмкости или True Tone. Чек с IČ для рекламации и бухгалтерии.",
      },
      {
        t: "Одинаково на все детали",
        d: "Оригинал, OEM и премиальный aftermarket, который ставим, — 12 месяцев. Категорию называем до начала.",
      },
    ],
    coveredTitle: "Что покрывает",
    covered: [
      "Бракованная деталь, которую мы установили",
      "Ошибка работы — склейка, разъёмы, винты, калибровка",
      "Повтор той же неисправности после нашего ремонта",
      "Ёмкость батареи или True Tone вне обещанных значений",
    ],
    excludedTitle: "Что не покрывает",
    excluded: [
      "Новое механическое повреждение — удар, изгиб, трещина",
      "Жидкость и коррозия после ремонта",
      "Вмешательство другого сервиса или самостоятельная попытка",
      "ПО, iCloud, пароли и износ вне заменённой детали",
    ],
    claimTitle: "Как заявить",
    claim:
      "Принесите устройство и чек или протокол. Неудачный ремонт сделаем снова бесплатно либо вернём стоимость этой работы. Законные права из-за некачественного исполнения этим не ограничиваются.",
  },
  about: {
    kicker: "О нас",
    title: "Мастерская в Праге 3, не пункт выдачи.",
    p1: "FixArt — это стол, а не приёмка коробок. Работаем на ESD-столе с оригинальными и премиальными деталями и протоколом, который выдержал бы и авторизацию.",
    p2: "Мы на Жижкове, остановка Biskupcova. Приходите на диагностику без записи или бронируйте слот в Telegram — отвечаем за минуты в рабочее время.",
    points: [
      "Гарантия 12 месяцев на деталь и работу",
      "Данные остаются на вашем устройстве",
      "Премиальные детали, не самый дешёвый лот",
      "Протокол и чек к каждому ремонту",
    ],
    altWorkshop: "Мастерская FixArt: разобранный телефон и MacBook на ESD-столе, Жижков за окном.",
    altHands: "Руки мастера при замене OLED-дисплея, без лица.",
    altAfter: "Тот же телефон с трещиной слева и после ремонта справа.",
    afterKicker: "До / после",
    afterTitle: "То же устройство. Один ремонт.",
  },
  reviews: {
    kicker: "Отзывы",
    title: "Что говорят клиенты.",
    items: [
      { name: "Яна К.", rating: 5, text: "Заменили дисплей на iPhone 15 Pro за час. Качество отличное, True Tone работает. Спасибо!", service: "дисплей" },
      { name: "Мартин С.", rating: 5, text: "Батарея в MacBook Air держит как новая. Честная цена, приятное обслуживание.", service: "батарея" },
      { name: "Люция М.", rating: 5, text: "Разбитое заднее стекло на Samsung S24 — даже не заметно, что ремонтировали. Рекомендую.", service: "стекло" },
    ],
  },
  faq: {
    kicker: "Вопросы",
    title: "Перед визитом.",
    items: [
      {
        q: "Сохранятся ли данные и настройки?",
        a: "Да. Ремонтируем без сброса системы, если этого не требует неисправность. Резервную копию всё равно рекомендуем — скажем, когда она необходима.",
      },
      {
        q: "Сколько занимает замена батареи?",
        a: "Для iPhone со склада обычно 45–60 минут. Запишитесь утром — часто заберёте уже днём, иногда раньше.",
      },
      {
        q: "Вы ставите оригинальные детали?",
        a: "Там, где это имеет смысл — батареи и стёкла премиального качества с замером ёмкости, дисплеи с калибровкой True Tone. Какую деталь ставим, говорим до начала работы.",
      },
      {
        q: "Ремонтируете Samsung и MacBook?",
        a: "Да. Телефоны Samsung Galaxy и MacBook Air/Pro. Ноутбуки диагностируем дольше — цену сообщаем до старта.",
      },
      {
        q: "Нужна ли запись?",
        a: "Диагностика — без записи в рабочие часы. На дисплеи и MacBook лучше записаться, чтобы деталь ждала вас.",
      },
      {
        q: "Если ремонт не нужен?",
        a: "Диагностика бесплатна. Если работу не подтверждаете, собираем устройство и возвращаем. Скрытых платежей нет.",
      },
      {
        q: "Как именно работает гарантия 12 месяцев?",
        a: "Кроет установленную деталь и нашу работу. Если та же неисправность вернётся без нового удара или жидкости — сделаем снова бесплатно. Принесите чек или протокол.",
      },
      {
        q: "На aftermarket тоже есть гарантия?",
        a: "Да, 12 месяцев на всё, что ставим. До работы скажем, оригинал это, OEM или премиальный aftermarket — категорию выбираете вы.",
      },
    ],
  },
  contact: {
    kicker: "Контакты",
    title: "Напишите, позвоните или приходите.",
    lead: "Быстрее всего — Telegram. В мастерскую на Жижкове можно зайти в рабочие часы, в другое время — по договорённости.",
    address: "Адрес",
    transit: "Транспорт",
    stop: "Остановка",
    hours: "Часы работы",
    hoursNote: "Сб–Вс и вне часов — по договорённости.",
    phone: "Телефон",
    email: "Эл. почта",
    person: "Контакт",
    write: "Написать в Telegram",
    map: "Открыть карту",
    mapTitle: "Мастерская FixArt на карте, Biskupcova 31, Прага 3.",
    altStreet: "Ночная улица на Жижкове, тёплый свет из окна мастерской.",
    call: "Позвонить",
    formTitle: "Запись",
    name: "Имя",
    phoneLabel: "Телефон",
    device: "Устройство",
    service: "Неисправность",
    message: "Комментарий (необязательно)",
    send: "Отправить запись",
    sending: "Отправляем…",
    success: "Запись готова. Открываем Telegram.",
    error: "Укажите имя и телефон.",
    errorPhone: "Укажите чешский телефон, например 737 500 587.",
    errorServer: "Не удалось отправить запись. Напишите в Telegram.",
    errorRate: "Слишком много попыток. Напишите сразу в Telegram.",
    other: "Другое",
    deviceOther: "Другое устройство",
  },
  footer: {
    tag: "Сервис электроники · Прага",
    copy: "© 2026 FixArt",
  },
};

export const DICTS: Record<Lang, Tree> = { cs, en, ru };

// Helper to safely get nested values from a dictionary object
function getNested(obj: Record<string, unknown>, keys: string[]): unknown {
  let current: unknown = obj;
  for (const key of keys) {
    if (!current || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function getTranslation(lang: Lang, keyPath: string): string | undefined {
  const parts = keyPath.split(".");
  const value = getNested(DICTS[lang] as Record<string, unknown>, parts);

  if (typeof value === "string") return value;
  if (Array.isArray(value)) return JSON.stringify(value);
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    for (const k of Object.keys(obj)) {
      if (typeof obj[k] === "string") return obj[k] as string;
    }
  }

  return undefined;
}

export function getTranslationOrFallback(lang: Lang, keyPath: string, fallback?: string): string {
  const value = getTranslation(lang, keyPath);
  return value ?? (fallback ?? "");
}

export function statusLabel(t: Tree, status: ShopStatus) {
  if (status.open) return t.statusOpen.replace("{time}", status.until);
  if (status.dayOffset === 0) {
    return t.statusClosedToday.replace("{time}", status.at);
  }
  const day = t.daysOn[status.weekday as 0 | 1 | 2 | 3 | 4 | 5 | 6];
  return t.statusClosedNext.replace("{day}", day).replace("{time}", status.at);
}
