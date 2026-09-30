// Список песен. Файлы лежат в папке audio/. group: new — новые, y2016 — 2016 год, more — ещё песни
const SONGS = [
 {
  "file": "audio/ay-bevafo.mp3",
  "title": "Ай бевафо",
  "group": "new"
 },
 {
  "file": "audio/hay-hay-sanamo.mp3",
  "title": "Ҳай-ҳай санамо",
  "group": "new"
 },
 {
  "file": "audio/men-yomonni.mp3",
  "title": "Мен ёмонни",
  "group": "new"
 },
 {
  "file": "audio/javonii-dubora.mp3",
  "title": "Ҷавонии дубора",
  "group": "new"
 },
 {
  "file": "audio/shahri-fasona.mp3",
  "title": "Шаҳри фасона",
  "group": "new"
 },
 {
  "file": "audio/nima-buldi.mp3",
  "title": "Нима бўлди",
  "group": "new"
 },
 {
  "file": "audio/dukhtari-zebo.mp3",
  "title": "Духтари зебо",
  "group": "new"
 },
 {
  "file": "audio/farghona-ruboiysi.mp3",
  "title": "Фарғона рубоийси",
  "group": "new"
 },
 {
  "file": "audio/popurri-kontsert-2024.mp3",
  "title": "Попурри (концерт 2024)",
  "group": "new"
 },
 {
  "file": "audio/ghunchadahan.mp3",
  "title": "Ғунчадаҳан",
  "group": "new"
 },
 {
  "file": "audio/qalamqosh.mp3",
  "title": "Қаламқош",
  "group": "new"
 },
 {
  "file": "audio/qalamqosh-versiya-2.mp3",
  "title": "Қаламқош (версия 2)",
  "group": "new"
 },
 {
  "file": "audio/amira.mp3",
  "title": "Амира",
  "group": "new"
 },
 {
  "file": "audio/tu-bosh.mp3",
  "title": "Ту бош",
  "group": "new"
 },
 {
  "file": "audio/meoyi-yo-na.mp3",
  "title": "Меойӣ ё на",
  "group": "new"
 },
 {
  "file": "audio/dili-man.mp3",
  "title": "Дили ман",
  "group": "new"
 },
 {
  "file": "audio/makun.mp3",
  "title": "Макун",
  "group": "new"
 },
 {
  "file": "audio/dilozor.mp3",
  "title": "Дилозор",
  "group": "new"
 },
 {
  "file": "audio/dilbar.mp3",
  "title": "Дилбар",
  "group": "new"
 },
 {
  "file": "audio/kuk-somsa.mp3",
  "title": "Кўк сомса",
  "group": "new"
 },
 {
  "file": "audio/joni-oshiq.mp3",
  "title": "Ҷони ошиқ",
  "group": "new"
 },
 {
  "file": "audio/nozi-nozi.mp3",
  "title": "Нози-нози",
  "group": "new"
 },
 {
  "file": "audio/zebo-bosh.mp3",
  "title": "Зебо бош",
  "group": "new"
 },
 {
  "file": "audio/koshki.mp3",
  "title": "Кошки",
  "group": "new"
 },
 {
  "file": "audio/may.mp3",
  "title": "Май",
  "group": "new"
 },
 {
  "file": "audio/padar.mp3",
  "title": "Падар",
  "group": "new"
 },
 {
  "file": "audio/bolajon.mp3",
  "title": "Болаҷон",
  "group": "more"
 },
 {
  "file": "audio/dilbari-barginozi.mp3",
  "title": "Дилбари баргинозӣ",
  "group": "more"
 },
 {
  "file": "audio/durdonai-padar.mp3",
  "title": "Дурдонаи падар",
  "group": "more"
 },
 {
  "file": "audio/dukhtari-darvoz.mp3",
  "title": "Духтари Дарвоз",
  "group": "more"
 },
 {
  "file": "audio/dukhtari-tojik.mp3",
  "title": "Духтари тоҷик",
  "group": "more"
 },
 {
  "file": "audio/dukhtari-usto-mansur.mp3",
  "title": "Духтари усто Мансур",
  "group": "more"
 },
 {
  "file": "audio/modar-padar.mp3",
  "title": "Модар, падар",
  "group": "more"
 },
 {
  "file": "audio/mohingul.mp3",
  "title": "Моҳингул",
  "group": "more"
 },
 {
  "file": "audio/nomahoyat.mp3",
  "title": "Номаҳоят",
  "group": "more"
 },
 {
  "file": "audio/onazhon.mp3",
  "title": "Онама",
  "group": "more"
 },
 {
  "file": "audio/oshiq-shudam.mp3",
  "title": "Ошиқ шудам",
  "group": "more"
 },
 {
  "file": "audio/oshiqona.mp3",
  "title": "Ошиқона",
  "group": "more"
 },
 {
  "file": "audio/sadqa-shavam.mp3",
  "title": "Садқа шавам",
  "group": "more"
 },
 {
  "file": "audio/sevilmoqlik-qiyinroq.mp3",
  "title": "Севилмоқлик қийинроқ",
  "group": "more"
 },
 {
  "file": "audio/farida.mp3",
  "title": "Фарида",
  "group": "more"
 },
 {
  "file": "audio/khandonruy.mp3",
  "title": "Хандонруй",
  "group": "more"
 },
 {
  "file": "audio/khoksori.mp3",
  "title": "Хоксорӣ",
  "group": "more"
 },
 {
  "file": "audio/chahor-busa.mp3",
  "title": "Чаҳор бӯса",
  "group": "more"
 },
 {
  "file": "audio/hayron.mp3",
  "title": "Ҳайрон",
  "group": "more"
 },
 {
  "file": "audio/husni-khudododa.mp3",
  "title": "Ҳусни худодода",
  "group": "more"
 },
 {
  "file": "audio/joni-mani.mp3",
  "title": "Ҷони манӣ",
  "group": "more"
 },
 {
  "file": "audio/jononaam.mp3",
  "title": "Ҷононаам",
  "group": "more"
 },
 {
  "file": "audio/yonimda.mp3",
  "title": "Ёнимда",
  "group": "more"
 },
 {
  "file": "audio/azob-ekan.mp3",
  "title": "Азоб экан",
  "group": "more"
 },
 {
  "file": "audio/bo-nozu-karashma.mp3",
  "title": "Бо нозу карашма",
  "group": "more"
 },
 {
  "file": "audio/imshab.mp3",
  "title": "Имшаб",
  "group": "more"
 },
 {
  "file": "audio/mahliyo.mp3",
  "title": "Маҳлиё",
  "group": "more"
 },
 {
  "file": "audio/shahri-vafo.mp3",
  "title": "Шаҳри вафо",
  "group": "more"
 },
 {
  "file": "audio/soghindim.mp3",
  "title": "Соғиндим",
  "group": "more"
 },
 {
  "file": "audio/yor-nadoram.mp3",
  "title": "Ёр надорам",
  "group": "more"
 },
 {
  "file": "audio/zulfiya.mp3",
  "title": "Зулфия",
  "group": "more"
 },
 {
  "file": "audio/zarafshoni.mp3",
  "title": "Зарафшонӣ",
  "group": "more"
 },
 {
  "file": "audio/zindaam.mp3",
  "title": "Зиндаам",
  "group": "more"
 },
 {
  "file": "audio/savrigul.mp3",
  "title": "Савригул",
  "group": "more"
 },
 {
  "file": "audio/yuragim.mp3",
  "title": "Юрагим",
  "group": "more"
 },
 {
  "file": "audio/khohar.mp3",
  "title": "Хоҳар",
  "group": "more"
 },
 {
  "file": "audio/kokillaring.mp3",
  "title": "Кокилларинг",
  "group": "more"
 },
 {
  "file": "audio/noz-boronam-makun.mp3",
  "title": "Ноз боронам макун",
  "group": "more"
 },
 {
  "file": "audio/taronai-dili-man.mp3",
  "title": "Таронаи дили ман",
  "group": "more"
 },
 {
  "file": "audio/joni-mani-versiya-2.mp3",
  "title": "Ҷони манӣ (версия 2)",
  "group": "more"
 },
 {
  "file": "audio/gulmahtob.mp3",
  "title": "Гулмаҳтоб",
  "group": "more"
 },
 {
  "file": "audio/manu-daryo.mp3",
  "title": "Ману дарё",
  "group": "more"
 },
 {
  "file": "audio/modar.mp3",
  "title": "Модар",
  "group": "more"
 },
 {
  "file": "audio/padarjon.mp3",
  "title": "Падарҷон",
  "group": "more"
 },
 {
  "file": "audio/qiyo-qiyo.mp3",
  "title": "Қиё-қиё",
  "group": "more"
 },
 {
  "file": "audio/sevmoq-bu.mp3",
  "title": "Севмоқ бу...",
  "group": "more"
 },
 {
  "file": "audio/meshavi.mp3",
  "title": "Мешавӣ",
  "group": "more"
 },
 {
  "file": "audio/javoni.mp3",
  "title": "Ҷавонӣ",
  "group": "more"
 },
 {
  "file": "audio/guli-man.mp3",
  "title": "Гули ман",
  "group": "more"
 },
 {
  "file": "audio/sanam.mp3",
  "title": "Санам",
  "group": "more"
 },
 {
  "file": "audio/nozanin.mp3",
  "title": "Нозанин",
  "group": "more"
 },
 {
  "file": "audio/boron.mp3",
  "title": "Борон",
  "group": "more"
 },
 {
  "file": "audio/biyo-biyo.mp3",
  "title": "Биё-биё",
  "group": "more"
 },
 {
  "file": "audio/dukhtari-atlaspush.mp3",
  "title": "Духтари атласпӯш",
  "group": "more"
 },
 {
  "file": "audio/tamanno.mp3",
  "title": "Таманно",
  "group": "more"
 },
 {
  "file": "audio/dust-medoram.mp3",
  "title": "Дӯст медорам",
  "group": "more"
 },
 {
  "file": "audio/nilufar.mp3",
  "title": "Нилуфар",
  "group": "more"
 },
 {
  "file": "audio/dukhtari-hamsoya.mp3",
  "title": "Духтари ҳамсоя",
  "group": "more"
 },
 {
  "file": "audio/husni-tu.mp3",
  "title": "Ҳусни ту",
  "group": "more"
 },
 {
  "file": "audio/ajab-ajab.mp3",
  "title": "Аҷаб-аҷаб",
  "group": "more"
 },
 {
  "file": "audio/yori-digar.mp3",
  "title": "Ёри дигар",
  "group": "more"
 },
 {
  "file": "audio/nam-nami-boron.mp3",
  "title": "Нам-нами борон",
  "group": "more"
 },
 {
  "file": "audio/padarjon-versiya-2.mp3",
  "title": "Падарҷон (версия 2)",
  "group": "more"
 },
 {
  "file": "audio/modar-2.mp3",
  "title": "Модар",
  "group": "more"
 },
 {
  "file": "audio/korat-naboshad.mp3",
  "title": "Корат набошад",
  "group": "more"
 },
 {
  "file": "audio/biyo-yor.mp3",
  "title": "Биё ёр",
  "group": "more"
 },
 {
  "file": "audio/khudat-medoni.mp3",
  "title": "Худат медонӣ",
  "group": "more"
 },
 {
  "file": "audio/uyalasiz.mp3",
  "title": "Уяласиз",
  "group": "more"
 },
 {
  "file": "audio/rafti.mp3",
  "title": "Рафтӣ",
  "group": "more"
 },
 {
  "file": "audio/biyo-ey-dilbar.mp3",
  "title": "Биё, эй дилбар",
  "group": "more"
 },
 {
  "file": "audio/man-oshiqam.mp3",
  "title": "Ман ошиқам",
  "group": "more"
 },
 {
  "file": "audio/sen-kechirmasang.mp3",
  "title": "Сен кечирмасанг",
  "group": "more"
 },
 {
  "file": "audio/popurri.mp3",
  "title": "Попурри",
  "group": "more"
 },
 {
  "file": "audio/biyo.mp3",
  "title": "Биё",
  "group": "y2016"
 },
 {
  "file": "audio/bosham.mp3",
  "title": "Бошам",
  "group": "y2016"
 },
 {
  "file": "audio/bu-kecha.mp3",
  "title": "Бу кеча",
  "group": "y2016"
 },
 {
  "file": "audio/digare.mp3",
  "title": "Дигаре",
  "group": "y2016"
 },
 {
  "file": "audio/guftori-nek.mp3",
  "title": "Гуфтори нек",
  "group": "y2016"
 },
 {
  "file": "audio/kelmading.mp3",
  "title": "Келмадинг",
  "group": "y2016"
 },
 {
  "file": "audio/manam.mp3",
  "title": "Манам",
  "group": "y2016"
 },
 {
  "file": "audio/man-oshiqi-dili-tu.mp3",
  "title": "Ман ошиқи дили ту",
  "group": "y2016"
 },
 {
  "file": "audio/medlyak.mp3",
  "title": "Медляк",
  "group": "y2016"
 },
 {
  "file": "audio/meraft.mp3",
  "title": "Мерафт",
  "group": "y2016"
 },
 {
  "file": "audio/modar-3.mp3",
  "title": "Модар",
  "group": "y2016"
 },
 {
  "file": "audio/nakardi.mp3",
  "title": "Накардӣ",
  "group": "y2016"
 },
 {
  "file": "audio/oh-ey-dil.mp3",
  "title": "Оҳ, эй дил",
  "group": "y2016"
 },
 {
  "file": "audio/sabzina.mp3",
  "title": "Сабзина",
  "group": "y2016"
 },
 {
  "file": "audio/sizni-sevib-bulmaydi.mp3",
  "title": "Сизни севиб бўлмайди",
  "group": "y2016"
 },
 {
  "file": "audio/tojikiston.mp3",
  "title": "Тоҷикистон",
  "group": "y2016"
 },
 {
  "file": "audio/ushshoqi-samarqand.mp3",
  "title": "Ушшоқи Самарқанд",
  "group": "y2016"
 },
 {
  "file": "audio/khandida-meoyad.mp3",
  "title": "Хандида меояд",
  "group": "y2016"
 }
];
