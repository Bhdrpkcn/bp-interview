import { questionProps } from "@/types/types";

export const questions: questionProps[] = [
  //Personal
  {
    id: "pers1",
    category: "Personal",
    subCategory: "intro",
    question: "Kendinizden bahseder misiniz ?",
    qCode: "",
    answer: "",
    answerLi: [],
    answerCode: "",
    hint: [
      "Mimarlık arkaplanı",
      "Hızlı öğrenen",
      "Disiplinli",
      "Detay Odaklı",
      "Kısaca hobiler",
    ],
  },
  {
    id: "pers2",
    category: "Personal",
    subCategory: "Why progress",
    question:
      "Mimarlık kariyerinizi neden bıraktınız ? Neden yazılım alanına yöneldiniz ?",
    qCode: "",
    answer: "",
    answerLi: [],
    answerCode: "",
    hint: [
      "Tekdüze işler",
      "Three JS",
      "Yazılımcı lise arkadaşları",
      "Kullanıcı odaklı daha inovatif bir alana geçiş ihtiyacı",
    ],
  },
  {
    id: "pers3",
    category: "Personal",
    subCategory: "Why recruit",
    question: "neden sizi işe alalım ?",
    qCode: "",
    answer: "",
    answerLi: [],
    answerCode: "",
    hint: [
      "Analitik düşünme",
      "Detaycı",
      "Proje yönetimi",
      "Kullanıcı odaklı tasarımlar yapabilme",
      "Hızlı Adapte olma",
      "Problem Çözme Yeteneği",
    ],
  },

  // HTML :
  {
    id: "html1",
    category: "HTML",
    subCategory: "Html Tanım",
    question: "HTML nedir ?",
    qCode: "",
    answer:
      "HTML (HyperText Markup Language), web sayfalarının iskeletini oluşturan işaretleme dilidir.",
    answerLi: [
      "Web içeriklerini yapılandırır.",
      "Metin, görsel, bağlantı gibi öğeleri tanımlar.",
      "Tarayıcıların içeriği yorumlamasını sağlar.",
    ],
    answerCode: "",
    hint: "Bir bina planı gibi; HTML olmadan yapı inşa edilemez.",
  },
  {
    id: "html2",
    category: "HTML",
    subCategory: "Html5",
    question: "HTML5 in önemli yeni özellikleri neler ?",
    qCode: "",
    answer:
      "HTML5, modern web geliştirmeyi kolaylaştıran semantik etiketler, video-ses desteği, svg desteği, form geliştirmleri gibi özelliklere sahip.",
    answerLi: [
      "HTML5, web sayfalarını daha anlamlı hale getiren `<article>`, `<section>`, `<header>`, `<footer>` gibi semantik etiketler getirdi.",
      "Gömülü `<audio>` ve `<video>` etiketleri ile harici eklentilere ihtiyaç duymadan medya oynatma imkanı sundu.",
      "Canvas API ve SVG desteği ile tarayıcı üzerinde dinamik grafik ve animasyonlar oluşturmayı mümkün kıldı.",
      "Yeni form kontrolleri (`<input type='date'>`, `<input type='email'>` vb.) ile daha gelişmiş ve kullanıcı dostu formlar geliştirilmesini sağladı.",
      "Web Storage (localStorage, sessionStorage) ve Service Workers ile offline çalışma ve veri saklama çözümleri sundu.",
    ],
    answerCode: "",
    hint: [
      "HTML5'in semantik yapısı",
      "Multimedya desteği",
      "Canvas ve SVG",
      "Form geliştirmeleri",
      "Web Storage ve offline çalışma",
    ],
  },
  {
    id: "html3",
    category: "HTML",
    subCategory: "<tag>",
    question: "HTML tag'leri nelerdir ?",
    qCode: "",
    answer:
      "HTML tag'leri, web sayfalarındaki içerikleri tanımlamak için kullanılan işaretleme etiketleridir.",
    answerLi: [
      "Yapısal Etiketler: `<html>`, `<head>`, `<body>`, `<div>`, `<span>`, `<section>`, `<article>`, `<header>`, `<footer>`",
      "Metin Biçimlendirme: `<h1>-<h6>`, `<p>`, `<strong>`, `<em>`, `<blockquote>`, `<code>`",
      "Bağlantılar & Navigasyon: `<a>`, `<nav>`",
      "Listeler: `<ul>`, `<ol>`, `<li>`",
      "Tablolar: `<table>`, `<tr>`, `<td>`, `<th>`, `<thead>`, `<tbody>`, `<tfoot>`",
      "Formlar: `<form>`, `<input>`, `<textarea>`, `<button>`, `<select>`, `<option>`, `<label>`",
      "Medya: `<img>`, `<audio>`, `<video>`, `<canvas>`",
      "Betik ve Meta: `<script>`, `<meta>`, `<link>`, `<style>`",
    ],
    answerCode: "",
    hint: [
      "HTML etiketleri türleri",
      "Yapısal, metin, medya, form ve interaktif etiketler",
    ],
  },
  {
    id: "html4",
    category: "HTML",
    subCategory: "Tags vs Elements",
    question: "HTML tag'leri ile elementleri arasındaki farklar nelerdir ?",
    qCode: "",
    answer:
      "Tag, bir HTML öğesini başlatan veya bitiren işaretlemedir; element ise tag ve içeriğin birleşimidir.",
    answerLi: [
      "Tag: <p> veya </p> gibi açılış/kapanış işaretleridir.",
      "Element: <p>Bu bir paragraf.</p> gibi tag + içeriktir.",
      "Element, içeriği kapsar; tag sadece sınırları belirler.",
    ],
    answerCode: "",
    hint: [
      "Tag açılış ve kapanıştan oluşur",
      "Element, tag ve içeriğin birleşimidir",
    ],
  },
  {
    id: "html5",
    category: "HTML",
    subCategory: "!DOCTYPE",
    question: "'!DOCTYPE' nedir ?",
    qCode: "",
    answer:
      "DOCTYPE, tarayıcıya HTML belgesinin hangi sürümle yazıldığını belirtir.",
    answerLi: [
      "Modern web için genellikle <!DOCTYPE html> kullanılır.",
      "Tarayıcıların belgeyi doğru yorumlamasını sağlar.",
      "Standart ve uyumluluk modları arasında fark yaratır.",
    ],
    answerCode: "<!DOCTYPE html>",
    hint: [
      "Tarayıcıya HTML sürümünü bildirir",
      "HTML5 için `<!DOCTYPE html>` kullanılır",
    ],
  },
  {
    id: "html6",
    category: "HTML",
    subCategory: "text <br>",
    question: "HTML de bir text'i nasıl ayırabilirsiniz ?",
    qCode: "",
    answer:
      "HTML'de bir metni ayırmak için yapısal ve biçimsel etiketler kullanılır.",
    answerLi: [
      "<br> ile satır atlatabilir",
      "<p> ile paragraflar oluşturabilir",
      "<hr> ile yatay çizgiyle bölebilir",
      "<div> veya <span> ile blok ya da satır içi ayrılabilir",
    ],
    answerCode: "",
    hint: [
      "Metni satır, paragraf veya çizgi ile ayırma",
      "`<br>`, `<p>`, `<hr>` etiketleri kullanılır",
    ],
  },
  {
    id: "html7",
    category: "HTML",
    subCategory: "div vs span",
    question: "div ile span arasındaki fark nedir ?",
    qCode: "",
    answer: "div blok düzeyinde, span satır içi bir HTML etiketidir.",
    answerLi: [
      "div: Blok düzeyinde, tam satırı kaplar.",
      "span: Satır içi, sadece içeriği kadar yer kaplar.",
      "div yapısal düzen için, span küçük metin parçalarını stil vermek için kullanılır.",
    ],
    answerCode: "",
    hint: ["`<div>` = blok", "`<span>` = satır içi"],
  },
  {
    id: "html8",
    category: "HTML",
    subCategory: "table 3x3",
    question: "3 kolon ve 3 sıradan oluşan bir table oluşturabilir misiniz ?",
    qCode: "",
    answer: "Evet, aşağıdaki HTML kodu 3x3'lük bir tablo oluşturur.",
    answerLi: [],
    answerCode:
      "<table border='1'>\n  <tr>\n    <td>1,1</td><td>1,2</td><td>1,3</td>\n  </tr>\n  <tr>\n    <td>2,1</td><td>2,2</td><td>2,3</td>\n  </tr>\n  <tr>\n    <td>3,1</td><td>3,2</td><td>3,3</td>\n  </tr>\n</table>",
    hint: [
      "`<table>`, `<tr>`(SATIR), `<td>`(HUCRE) etiketleri ile oluşturulur",
      "3x3 tablo için 3 satır ve her satırda 3 hücre gerekir",
    ],
  },
  {
    id: "html9",
    category: "HTML",
    subCategory: "SSR CSR",
    question:
      "SSR (service side rendering) vs CSR (client side rendering) nedir kısaca açıklayıp kıyaslar mısınız ?",
    qCode: "",
    answer:
      "SSR sunucuda, CSR tarayıcıda render edilen içerik sunma yöntemleridir.",
    answerLi: [
      "SSR: HTML sunucuda oluşturulur, hızlı ilk yükleme sağlar.",
      "CSR: Javascript ile tarayıcıda oluşturulur, daha dinamik kullanıcı deneyimi sunar.",
      "SSR SEO dostudur, CSR daha hızlı etkileşim sağlar.",
    ],
    answerCode: "",
    hint: [
      "SSR sunucuda - hızlı yükleme",
      "CSR tarayıcıda (client) hızlı etkileşim",
    ],
  },
  {
    id: "html10",
    category: "HTML",
    subCategory: "class(html)",
    question: "HTML deki 'class' özelliğini kısaca açıklar mısınız?",
    qCode: "",
    answer:
      "HTML'de class, birden fazla öğeye stil veya işlevsellik uygulamak için kullanılan bir özelliktir.",
    answerLi: [
      "CSS ile stillendirme yapılmasını sağlar.",
      "Javascript ile öğeleri seçmek için kullanılır.",
      "Birden fazla öğeye aynı anda uygulanabilir.",
    ],
    answerCode: "",
    hint: [
      "CSS ve JavaScript ile etkileşim sağlar",
      "Aynı `class` birden fazla elemente atanabilir",
    ],
  },
  {
    id: "html11",
    category: "HTML",
    subCategory: "dil-font ekleme",
    question:
      "Bir HTML dosyasında dil, font gibi özellikleri nasıl eklersiniz ?",
    qCode: "",
    answer:
      "HTML dosyasında dil için lang özelliği, font için CSS veya Google Fonts kullanılır.",
    answerLi: [
      'Dil ayarı için: <html lang="tr">',
      "Font eklemek için: CSS'te font-family kullanılır.",
      "Harici fontlar için Google Fonts linkleri eklenir.",
    ],
    answerCode: "",
    hint: ["Dil `<html>` etiketiyle", "font CSS veya `<link>` ile"],
  },
  {
    id: "html12",
    category: "HTML",
    subCategory: "<meta>",
    question: "<meta> tag'inin HTML'deki rolü nedir ?",
    qCode: "",
    answer:
      "<meta> etiketi, sayfa hakkında meta veriler tanımlamak için kullanılır.",
    answerLi: [
      'Karakter seti belirtir: <meta charset="UTF-8">',
      'SEO için açıklama ekler: <meta name="description" content="Açıklama">',
      'Responsive tasarım için: <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    ],
    answerCode: "",
    hint: ["SEO", "karakter seti", "responsive tasarım"],
  },
  {
    id: "html13",
    category: "HTML",
    subCategory: "id vs class",
    question: "'id' ile 'class' özelliklerinin farkı nedir ?",
    qCode: "",
    answer:
      "'id' benzersiz bir öğeyi tanımlar, 'class' birden fazla öğeye uygulanabilir.",
    answerLi: [
      "id benzersizdir, bir sayfada yalnızca bir kez kullanılır.",
      "class, aynı stil veya işlevi paylaşan birden fazla öğede kullanılabilir.",
      "CSS ve JS'de id için #, class için . kullanılır.",
    ],
    answerCode: "",
    hint: ["id benzersizdir", "class birden çok elemente uygulanabilir"],
  },
  {
    id: "html14",
    category: "HTML",
    subCategory: "html: js script ekleme",
    question: "Javascript kodunu HTML'ye nasıl entegre edersiniz ?",
    qCode: "",
    answer: "Javascript kodu, HTML'ye <script> etiketiyle gömülür.",
    answerLi: [
      "İçerik olarak doğrudan HTML'ye eklenebilir: <script>console.log('Hello');</script>",
      'Harici dosya olarak eklenebilir: <script src="app.js"></script>',
      "Genellikle <body> veya <head> içinde yer alır.",
    ],
    answerCode: "",
    hint: ["<script> etiketi", "Harici dosya bağlama"],
  },

  //CSS
  {
    id: "css01",
    category: "CSS",
    subCategory: "Css tanım",
    question: "CSS nedir ? Neden CSS Kullanırsınız ?",
    qCode: "",
    answer:
      "CSS (Cascading Style Sheets), HTML öğelerine stil ve düzen kazandırmak için kullanılır.",
    answerLi: [
      "Web sayfalarına renk, yazı tipi ve düzen ekler.",
      "Responsive tasarım sağlar.",
      "HTML ve tasarımı birbirinden ayırarak kodu daha okunabilir kılar.",
    ],
    answerCode: "",
    hint: ["Stil dili", "Tasarım özelleştirme", "Responsive yapı"],
  },
  {
    id: "css02",
    category: "CSS",
    subCategory: "selectors in css",
    question: "CSS selectors nelerdir kısaca açıklar mısınız ?",
    qCode: "",
    answer:
      "CSS seçiciler, HTML öğelerini seçerek stil uygulamak için kullanılır.",
    answerLi: [
      "Element seçici: p { color: red; }",
      "Class seçici: .box { padding: 10px; }",
      "ID seçici: #header { background: blue; }",
      "Descendant seçici: div p { font-size: 14px; }",
      'Attribute seçici: [type="text"] { border: 1px solid; }',
    ],
    answerCode: "",
    hint: ["Element", "ID", "Class", "Descendant seçiciler(div, p)"],
  },
  {
    id: "css03",
    category: "CSS",
    subCategory: "flex vs grid",
    question: "flex veya grid kullanımına nasıl karar verirsiniz ?",
    qCode: "",
    answer:
      "Flex tek boyutlu, Grid ise iki boyutlu düzenler için tercih edilir.",
    answerLi: [
      "Flex: Sıralı (tek eksen) düzenler için idealdir.",
      "Grid: Satır ve sütunlardan oluşan karmaşık düzenlerde kullanılır.",
      "Basit menüler için Flex, karmaşık layoutlar için Grid uygundur.",
    ],
    answerCode: "",
    hint: ["Tek boyut için flex", "İki boyut için grid"],
  },
  {
    id: "css04",
    category: "CSS",
    subCategory: "html'ye css ekleme",
    question: "Css styling i HTML ye aktarmanın yolları neler ?",
    qCode: "",
    answer: "CSS stillerini HTML'ye üç farklı şekilde uygulayabilirsiniz.",
    answerLi: [
      'Inline CSS: <p style="color: red;">Metin</p>',
      "Internal CSS: <style> p { color: blue; } </style> etiketiyle",
      'External CSS: <link rel="stylesheet" href="styles.css"> ile harici dosya kullanarak',
    ],
    answerCode: "",
    hint: ["Inline, internal, external CSS"],
  },
  {
    id: "css05",
    category: "CSS",
    subCategory: "cascading",
    question: "CSS'teki 'cascading' nedir ?",
    qCode: "",
    answer:
      "Cascading, stil kurallarının öncelik sırasına göre uygulanmasıdır.",
    answerLi: [
      "Öncelik sırası: Inline > Internal > External",
      "Spesifiklik kuralları ve !important kullanımı önceliği etkiler.",
      "Son yazılan kural, eşit öncelikteyse geçerli olur.",
    ],
    answerCode: "",
    hint: ["Öncelik sırası", "Spesifiklik", "Son kural geçerlidir"],
  },
  {
    id: "css06",
    category: "CSS",
    subCategory: "CSS Frameworks",
    question: "Kullandığınız css framework'lerden bahsedebilir misiniz ?",
    qCode: "",
    answer:
      "Tailwind CSS, SCSS ve Radix UI gibi modern CSS framework'lerini kullanıyorum.",
    answerLi: [
      "Tailwind CSS: Utility-first yapısıyla hızlı ve esnek tasarım sağlar.",
      "Radix UI: Erişilebilir ve özelleştirilebilir UI bileşenleri sunar.",
      "SCSS: Daha düzenli ve ölçeklenebilir stiller sağlar.",
    ],
    answerCode: "",
    hint: ["Tailwind CSS", "SCSS", "Radix UI"],
  },
  {
    id: "css07",
    category: "CSS",
    subCategory: "media uyumluluğu",
    question: "Mobile cihazlar için media stillerini nasıl düzenlersiniz ?",
    qCode: "",
    answer:
      "Tailwind Css veya CSS te Responsive tasarım için media sorgularını kullanırım.",
    answerLi: [
      "CSS : `@media (max-width: 768px) { ... }` → Mobil cihazlara özel CSS uygular.",
      "Tailwind CSS : className = w-16 md:w-32 lg:w-48 ",
      "Flex ve Grid kullanarak responsive tasarım oluşturulur.",
      "Yüzdelik genişlik ve `rem` gibi birimler ölçeklenebilirliği artırır.",
    ],
    answerCode:
      "@media (max-width: 768px) {\n  body {\n    font-size: 14px;\n  }\n}",
    hint: ["@media sorguları", "Responsive tasarım", "Ölçeklenebilir birimler"],
  },
  {
    id: "css08",
    category: "CSS",
    subCategory: "margin vs padding",
    question: "Margin ile Padding arasındaki fark nedir ?",
    qCode: "",
    answer: "Margin, dış boşluk; padding ise iç boşluktur.",
    answerLi: [
      "Margin: Öğeler arasındaki mesafeyi ayarlar.",
      "Padding: İçerik ile kenarları arasındaki boşluğu belirler.",
      "Margin, öğeler arasında; padding, öğe içinde çalışır.",
    ],
    answerCode: "",
    hint: ["Margin sınır dışı boşluk", "padding sınır içi boşluk"],
  },
  {
    id: "css09",
    category: "CSS",
    subCategory: "z-index",
    question: "z-index ten kısaca bahseder misiniz ?",
    qCode: "",
    answer: "z-index, öğelerin üst üste bindirilme sırasını belirler.",
    answerLi: [
      "Pozitif değerler öne, negatif değerler arkaya iter.",
      "Sadece position (relative, absolute, fixed) ile çalışır.",
      "Daha yüksek z-index değeri, daha üstte görünür.",
    ],
    answerCode: "div {\n  position: absolute;\n  z-index: 10;\n}",
    hint: [
      "Yığılma sırası",
      "Pozisyonlanmış öğelerde çalışır",
      "Negatif değer geriye iter",
    ],
  },
  {
    id: "css10",
    category: "CSS",
    subCategory: "display vs visibilty",
    question: "'display:none' ile 'visibilty:hidden' in temel farkı nedir ?",
    qCode: "",
    answer:
      "'display: none' öğeyi tamamen gizler, 'visibility: hidden' ise görünmez yapar ama alanını korur.",
    answerLi: [
      "display: none öğeyi DOM'dan çıkarır, yer kaplamaz.",
      "visibility: hidden görünmez yapar ama boş alan bırakır.",
      "display: none performans açısından daha hızlıdır.",
    ],
    answerCode: "",
    hint: ["display:none Yok Olmak", "visibility:hidden Görünmez Olmak"],
  },
  {
    id: "css11",
    category: "CSS",
    subCategory: "Flexbox",
    question: "Flexbox nedir ?",
    qCode: "",
    answer:
      "Flexbox, öğeleri bir konteyner içinde esnek bir şekilde hizalamak ve düzenlemek için kullanılan bir CSS düzen modelidir.",
    answerLi: [
      "`display: flex;` ile aktif edilir.",
      "`justify-content` yatay hizalamayı kontrol eder.",
      "`align-items` dikey hizalamayı belirler.",
    ],
    answerCode: "",
    hint: ["Esnek düzen modeli", "Yatay ve dikey hizalama"],
  },
  {
    id: "css12",
    category: "CSS",
    subCategory: "overflow(css)",
    question: "CSS overflow özelliği nedir ?",
    qCode: "",
    answer:
      "Overflow, bir öğenin içeriği taşarsa nasıl görüntüleneceğini kontrol eder.",
    answerLi: [
      "visible: Taşan içerik görünür.",
      "hidden: Taşan içerik gizlenir.",
      "scroll: Kaydırma çubuğu eklenir.",
      "auto: İçeriğe göre kaydırma çubuğu otomatik belirlenir.",
    ],
    answerCode: "div.box {\n  overflow: auto;\n  max-height: 200px;\n}",
    hint: [
      "Taşan içeriği yönetme",
      "`visible`, `hidden`, `scroll`, `auto` değerleri",
    ],
  },
  {
    id: "css13",
    category: "CSS",
    subCategory: "transitions(css)",
    question: "CSS transitions özelliği nedir ?",
    qCode: "",
    answer:
      "Renk, boyut, konum gibi özellikler arasında animasyonlu geçişler sağlar.",
    answerLi: [
      "`transition: all 0.3s ease;` → Tüm değişiklikleri 0.3 saniyede uygular.",
      "`transition-property`: Hangi özelliğin animasyonlanacağını belirler.",
      "`transition-duration`: Geçiş süresini tanımlar.",
    ],
    answerCode: "",
    hint: ["Yumuşak geçişler", "`transition-property`, `duration`, `ease`"],
  },
  {
    id: "css14",
    category: "CSS",
    subCategory: "@keyframes",
    question: "@keyframes nedir ?",
    qCode: "",
    answer:
      "@keyframes, CSS animasyonları için hareketin aşamalarını tanımlar.",
    answerLi: [
      "`@keyframes animasyonAdı {}` ile tanımlanır.",
      "`0%` ve `100%` gibi yüzde değerleriyle aşamalar belirlenir.",
      "`animation` ile öğeye uygulanır.",
    ],
    answerCode: "",
    hint: ["CSS animasyonları", "`@keyframes` ile aşamalar belirleme"],
  },
  {
    id: "css15",
    category: "CSS",
    subCategory: "positioning(css)",
    question:
      "CSS teki 'Positioning Properties' nelerdir ? Default ayarda hangisi seçilidir ?",
    qCode: "",
    answer:
      "Positioning, öğelerin konumlandırılmasını sağlar. Varsayılan değer static'tir.",
    answerLi: [
      "static (varsayılan): Normal akışta yer alır.",
      "relative: Normal konumdan göreceli hareket eder.",
      "absolute: En yakın positioned kapsayıcıya göre konumlanır.",
      "fixed: Görünüm alanına göre sabitlenir.",
      "sticky: Kaydırma ile birlikte yapışkan davranır.",
    ],
    answerCode: "",
    hint: ["`position` özellikleri", "Varsayılan değer `static`"],
  },
  {
    id: "css16",
    category: "CSS",
    subCategory: "Responsive Design",
    question: "CSS ile nasıl responsive tasarımlar üretirsiniz ?",
    qCode: "",
    answer:
      "Responsive tasarımlar için media queries, flexbox, grid ve yüzdelik değerler kullanılır.",
    answerLi: [
      "Media Queries (`@media (max-width: 768px) {}`) ile farklı ekran boyutlarına göre stiller tanımlanır.",
      "Flexbox ve Grid ile esnek düzen sağlanır.",
      "Yüzde (%), vw, vh gibi birimler kullanılır.",
    ],
    answerCode: "",
    hint: ["@media sorguları", "Flex & Grid", "Ölçeklenebilir birimler"],
  },
  {
    id: "css17",
    category: "CSS",
    subCategory: "!important",
    question: "'!important' nedir ?",
    qCode: "",
    answer: "!important, CSS kuralının öncelikli olarak uygulanmasını sağlar.",
    answerLi: [
      "Diğer tüm stil kurallarını geçersiz kılar.",
      "Spesifiklikten bağımsız çalışır.",
      "Gereksiz yere kullanmak karmaşıklığa yol açabilir.",
    ],
    answerCode: "p {\n  color: red !important;\n}",
    hint: "!important, bir tartışmada son sözü söyleyen kişi gibidir.",
  },
  {
    id: "css18",
    category: "CSS",
    subCategory: "adaptive vs responsive",
    question:
      "'adaptive design' ile 'responsive design' arasındaki farklar nelerdir ?",
    qCode: "",
    answer:
      "Adaptive design sabit kırılma noktaları kullanır, responsive design esnek yapıya sahiptir.",
    answerLi: [
      "Adaptive: Belirli cihaz boyutlarına göre sabit düzenler.",
      "Responsive: Ekran boyutuna göre otomatik uyum sağlar.",
      "Responsive daha esnek ve kullanıcı dostudur.",
    ],
    answerCode: "",
    hint: ["Adaptive, kalıplı kot", "responsive ise elastik bir tayt"],
  },
  {
    id: "css19",
    category: "CSS",
    subCategory: "sass",
    question: "'sass' nedir ? Css yerine hangi durumlarda tercih ederdiniz ?",
    qCode: "",
    answer:
      "SASS (Syntactically Awesome Stylesheets), CSS'in daha güçlü ve modüler hale getirilmiş bir ön işlemcisidir.  Büyük ve karmaşık projelerde kod karmaşasını azaltmak için tercih edilir.",
    answerLi: [
      "Değişkenler, mixinler ve nesting özellikleri sağlar.",
      "CSS'e derlenir, daha modüler ve okunabilir kod yazılır.",
      "Fonksiyonlar ve mantıksal yapılar desteklenir.",
    ],
    answerCode: "",
    hint: ["CSS ön işlemcisi", "Büyük projeler", "Kod tekrarını azaltma"],
  },

  // Temel Javascript
  {
    id: "js01",
    category: "Javascript",
    subCategory: "Variable tipleri",
    question: "Variable tipleri nelerdir ?",
    qCode: "",
    answer:
      "Javascript'te değişkenler primitive ve reference olmak üzere iki ana tipe ayrılır.",
    answerLi: [
      "Primitive: Number, String, Boolean, Null, Undefined, Symbol, BigInt",
      "Reference: Object, Array, Function, Date, RegExp, Map, Set",
    ],
    answerCode: "",
    hint: [
      "Primitive değerler basit veri tipleridir",
      "Reference değerler karmaşık veri yapılarıdır.",
    ],
  },
  {
    id: "js02",
    category: "Javascript",
    subCategory: "primative vs reference",
    question: "Primitive ve Reference data tiplerinin farkları nelerdir ?",
    qCode: "",
    answer:
      "Primitive değerler doğrudan bellekte saklanır, reference değerler bellekte bir adres üzerinden tutulur.",
    answerLi: [
      "Primitive: Kopyalandığında Değer kopyalanır, orjinal değer değişmez.",
      "Reference: Bellek adresi kopyalanır, değişiklik orijinali etkiler.",
      "Primitive immutable, reference mutable olabilir.",
    ],
    answerCode: "",
    hint: [
      "Bellekte saklanma farkı",
      "Primitive → Değer kopyalanır",
      "Reference → Adres paylaşılır",
    ],
  },
  {
    id: "js03",
    category: "Javascript",
    subCategory: "immutable/mutable",
    question:
      "Javascript'teki Immutable ve Mutable veri tipleri nelerdir ? Immutable ve Mutable farkı nedir ?",
    qCode: "",
    answer:
      "Immutable veri tipleri değiştirilemez, mutable veri tipleri değiştirilebilir.",
    answerLi: [
      "Immutable: String, Number, Boolean, Null, Undefined, Symbol",
      "Mutable: Object, Array, Function",
      "Immutable'da değer değiştirildiğinde yeni bir değer oluşur, mutable'da doğrudan değişiklik yapılır.",
    ],
    answerCode: "",
    hint: ["Immutable değişmez - Primative", "Mutable değişir - Reference"],
  },
  {
    id: "js04",
    category: "Javascript",
    subCategory: "var-let-const",
    question: "Var-Let-Const farklarını açıklar mısınız ?",
    qCode: "",
    answer:
      "var, let ve const Javascript'te değişken tanımlamak(variable decleration) için kullanılır, ancak kapsam ve değiştirilebilirlik açısından farklılık gösterirler.",
    answerLi: [
      "var: Function scope, hoisting ile yukarı taşınır. (mutable-yeniden atanabilir)",
      "let: Block scope, (mutable)yeniden atanabilir.",
      "const: Block scope, sabit değerler için kullanılır ve (immutable)yeniden atanamaz.",
      "while HOISTING > var : // undefined",
      "while HOISTING > let | const : // ReferenceError: _ is not defined",
    ],
    answerCode: "",
    hint: [
      "Kapsam farkları",
      "Hoisting",
      "`const` immutable",
      "`var | let` mutable",
    ],
  },
  {
    id: "js05",
    category: "Javascript",
    subCategory: "truthy vs falsy",
    question: "Javascript'teki 'truthy' - 'falsy' değer nedir ?",
    qCode: "",
    answer:
      "Truthy, boolean bağlamında true olarak değerlendirilen; falsy ise false olarak değerlendirilen değerlerdir.",
    answerLi: [
      "Falsy: `false`, `0`, `''`, `null`, `undefined`, `NaN`.N",
      "Truthy: Boş olmayan stringler, sayılar (0 hariç), objeler, diziler",
      "Koşul ifadelerinde sıkça kullanılır.",
    ],
    answerCode: "",
    hint: ["Truthy → true", "Falsy → false"],
  },
  {
    id: "js06",
    category: "Javascript",
    subCategory: "closure/kapsülleme",
    question: "Bir variable'ı nasıl korursunuz ?",
    qCode: "",
    answer:
      "Bir değişkeni korumak için const kullanabilir veya kapsülleme (closure) ile erişimi sınırlayabilirsiniz.",
    answerLi: [
      "const ile yeniden atanmasını engelleyebilirsiniz.",
      "Kapsülleme(Closure) için fonksiyon ya da IIFE(immediately invoked function express) kullanarak değişkene dışarıdan erişimi kısıtlayabilirsiniz.",
      "Object.freeze() ile nesneleri değiştirilemez hale getirebilirsiniz.",
    ],
    answerCode: "",
    hint: ["`const` immutable", "Kapsülleme", "Object.freeze()"],
  },
  {
    id: "js07",
    category: "Javascript",
    subCategory: "Event Loop",
    question: "Event Loop Nedir ?",
    qCode: "",
    answer:
      "Event Loop, Javascript'in asenkron işlemleri yönetmesini sağlayan mekanizmadır.",
    answerLi: [
      "Call Stack ve Task Queue arasında çalışır.",
      "Senkrondan asenkrona geçişi yönetir.",
      "Tarayıcı veya Node.js ortamında sürekli çalışır.",
      "onClick, onLoad, onDone",
    ],
    answerCode: "",
    hint: ["Asenkron yönetim", "Call Stack < Event Loop > Task Queue"],
  },
  {
    id: "js08",
    category: "Javascript",
    subCategory: "static or dinamic ? js",
    question:
      "Javascript 'staticaly typed' mi 'dynamically typed' bir dil midir ?",
    qCode: "",
    answer:
      "Javascript, dynamically typed bir dildir, değişkenlerin türü çalışma zamanında belirlenir.",
    answerLi: [
      "Değişkenlerin türü çalışma zamanında belirlenir.",
      "Bir değişken farklı türlerde değerler alabilir.",
      "TypeScript, Javascript'in statically typed sürümüdür.",
    ],
    answerCode: "let x = 42;\nx = 'hello'; // Geçerli",
    hint: ["Dynamically typed", "Türler çalışma zamanında belirlenir"],
  },
  {
    id: "js09",
    category: "Javascript",
    subCategory: "compiled/interpreted",
    question:
      "Javascript compiled(derlenmiş) mi yoksa interpreted(yorumlanmış) bir dil midir ?",
    qCode: "",
    answer:
      "Javascript hem interpreted(yorumlanmış) hem de Just-In-Time (JIT) compiled bir dildir.",
    answerLi: [
      "Javascript, bir metni hem okuyup hem de gerektiğinde hızlı bir özet çıkaran biri gibidir.",
      "Tarayıcılar JS kodunu satır satır yorumlar (interpreted).",
      "Modern motorlar (V8) performans için JIT compilation(derleme) kullanır.",
      "Bu sayede hem hızlı hem de esnek çalışır.",
    ],
    answerCode: "",
    hint: ["Interpreted > satır satır", "Modern motorlar > compilation"],
  },
  {
    id: "js10",
    category: "Javascript",
    subCategory: "js vs ts",
    question: "Javascript ve Typescript farkı kısaca nedir ?",
    qCode: "",
    answer:
      "Javascript dinamik tipli bir dilken, TypeScript statik tip desteği sağlar.",
    answerLi: [
      "TypeScript, Javascript'in süper setidir.",
      "TypeScript derlenir, Javascript yorumlanır.",
      "TS statik tip sistemine sahip olduğu için daha güvenlidir ve hataları yazarken önleyen mantık ile kod yazılır.",
    ],
    answerCode: "",
    hint: [
      "Statik vs Dinamik Tipleme",
      "TS derlenir",
      "Büyük projeler için uygun",
    ],
  },
  {
    id: "js11",
    category: "Javascript",
    subCategory: "handlers",
    question: "onClick ile onSubmit'in farkları nedir?",
    qCode: "",
    answer:
      "onClick bir tıklama olayını tetiklerken, onSubmit bir form gönderme olayını tetikler.",
    answerLi: [
      "`onClick`: Herhangi bir HTML elemanına tıklanınca çalışır (`<button onClick={handleClick}>`).",
      "`onSubmit`: Form gönderildiğinde çalışır (`<form onSubmit={handleSubmit}>`).",
      "`onSubmit`, varsayılan olarak sayfayı yeniler, bunu önlemek için `event.preventDefault()` kullanılır.",
    ],
    answerCode: "",
    hint: [
      "onClick → Herhangi bir öğeye tıklama",
      "onSubmit → Form gönderimi",
      "onSubmit >> event.preventDefault()",
    ],
  },
  {
    id: "js12",
    category: "Javascript",
    subCategory: "Window obj",
    question: "Window objesini açıklar mısınız ?",
    qCode: "",
    answer:
      "Window objesi, tarayıcıdaki en üst düzey global nesnedir ve tüm global değişkenleri, fonksiyonları ve özellikleri içerir.",
    answerLi: [
      "Global scope'daki her şey window objesinin bir parçasıdır.",
      "Tarayıcıyla ilgili özelliklere erişim sağlar (alert, confirm, localStorage).",
      "window.console.log() = console.log() ile aynıdır.",
    ],
    answerCode: "",
    hint: ["Tarayıcıdaki global obje", "DOM, storage, zamanlayıcılar"],
  },
  {
    id: "js13",
    category: "Javascript",
    subCategory: "callStack",
    question: "Call Stack kavramını açıklar mısınız ?",
    qCode: "",
    answer:
      "Call Stack, JavaScript'in fonksiyonları sırasıyla işlediği yerdir. Event Loop, Call Stack boşaldığında Task Queue ve Microtask Queue’daki işlemleri call stack'e iletir.",
    answerLi: [
      "Call Stack: LIFO (Last in First Out) mantığıyla çalışan fonksiyon yürütme mekanizmasıdır.",
      "Task Queue: SetTimeout, DOM olayları gibi görevleri sıraya alır.",
      "Microtask Queue: Promise ve MutationObserver gibi yüksek öncelikli görevleri içerir.",
      "Event Loop: Call Stack boşaldığında Task Queue ve Microtask Queue’dan işlemleri alır.",
    ],
    answerCode:
      "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');",
    hint: [
      "Call Stack → Senkron task",
      "Event Loop → Micro-macro task >> Callstack",
      "Macro & Micro task Queue",
    ],
  },
  {
    id: "js14",
    category: "Javascript",
    subCategory: "js object",
    question: "Javascript'te nasıl obje oluşturursunuz ?",
    qCode: "",
    answer:
      "JavaScript’te nesneler `object literal`, `new Object()`, veya `constructor function` gibi yöntemlerle oluşturulabilir.",
    answerLi: [
      "Object Literal: `const obj = { key: 'value' };`",
      "Constructor: `function Person(name) { this.name = name; }`",
      "Object.create(): const obj = Object.create(null);",
    ],
    answerCode: "",
    hint: ["key-pair", "Object Literal", "Constructor Function", "Class"],
  },
  {
    id: "js15",
    category: "Javascript",
    subCategory: "js Arrays",
    question: "Javascript'te nasıl array oluşturursunuz ?",
    qCode: "",
    answer:
      "JavaScript’te diziler `array literal` veya `new Array()` ile oluşturulabilir.",
    answerLi: [
      "Array Literal: `const arr = [1, 2, 3];`",
      "Array Constructor: `const arr = new Array(1, 2, 3);`",
      "Boş Dizi: `const emptyArr = [];`",
      "Karışık veri tipleri saklanabilir.",
    ],
    answerCode: "",
    hint: ["Array Literal", "Array Constructor", "Boş dizi"],
  },
  {
    id: "js16",
    category: "Javascript",
    subCategory: "document vs window",
    question: "Document ile Window arasındaki farklar nelerdir ?",
    qCode: "",
    answer:
      "Window, tarayıcı penceresini temsil ederken; Document, o pencerenin içindeki HTML içeriğini temsil eder.",
    answerLi: [
      "window bir ev, document o evin içindeki mobilyalar gibidir.",
      "window, global nesnedir; tüm tarayıcı API'lerini içerir.",
      "document, DOM ağacına erişim sağlar.",
      "window.document ile document aynı DOM içeriğine erişir.",
    ],
    answerCode: "console.log(window.innerWidth);\nconsole.log(document.title);",
    hint: [
      "window → Global obje",
      "document → Sayfa içeriği",
      "window.document → HTML erişimi",
    ],
  },
  {
    id: "js17",
    category: "Javascript",
    subCategory: "HOC vs FCF",
    question:
      "Higher Order Functions ile First Class Functions arasındaki farklar nelerdir ?",
    qCode: "",
    answer:
      "First-Class Functions, fonksiyonların değişken olarak saklanmasını sağlar; Higher-Order Functions ise başka fonksiyonları argüman-parametre olarak alır veya döner.",
    answerLi: [
      "First-Class Functions: Fonksiyonlar değişkenlere atanabilir (`const fn = function() {}`), parametre olarak geçilebilir.",
      "Higher-Order Functions: Bir fonksiyon başka bir fonksiyonu parametre olarak alır veya fonksiyon döndürür (`array.map(fn)`).",
      "map, filter, reduce Higher-Order örnekleridir.",
    ],
    answerCode:
      "const greet = () => console.log('Hello'); // First-Class\n\n[1, 2, 3].map(x => x * 2); // Higher-Order",
    hint: [
      "First-Class → Fonksiyonlar değişken gibi kullanılır",
      "Higher-Order → Fonksiyon döndüren veya alan fonksiyon",
    ],
  },
  {
    id: "js18",
    category: "Javascript",
    subCategory: "'use strict'",
    question: "Strict Mode nedir ?",
    qCode: "",
    answer:
      "Strict Mode, Javascript'te daha sıkı bir hata kontrolü sağlar ve hatalı kodları yakalamaya yardımcı olur.",
    answerLi: [
      "'use strict'; ifadesiyle etkinleştirilir.",
      "Sessiz hataları görünür hale getirir.",
      "Yanlış değişken atamaları gibi hataları engeller.",
    ],
    answerCode: "",
    hint: ["Hata denetimi", "`use strict`", "Daha güvenli kod"],
  },
  {
    id: "js19",
    category: "Javascript",
    subCategory: "spread/rest",
    question: "(...) spread/rest operator nedir ?",
    qCode: "",
    answer:
      "Spread dizileri ve nesneleri genişletirken, Rest fonksiyon parametrelerini tek bir diziye toplar.",
    answerLi: [
      "Spread: `const arr2 = [...arr1, 4, 5];` → arr1 kopyalanır ve arr2'yi Diziyi genişletir.",
      "Rest: `function sum(...numbers) {}` → Parametreleri diziye toplar.",
    ],
    answerCode:
      "const arr = [1, 2, 3];\nconst newArr = [...arr, 4]; // Spread\n\nfunction sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); } // Rest",
    hint: ["Spread → Yayma", "Rest → Toplama"],
  },
  {
    id: "js20",
    category: "Javascript",
    subCategory: "equality scopes",
    question: "= , == ve === arasındaki fark nedir ?",
    qCode: "",
    answer:
      "== (eşitlik), tür dönüşümü yaparak karşılaştırır; === (sıkı eşitlik) tür dönüşümü yapmadan karşılaştırır.",
    answerLi: [
      "`=`: Değer atamak için kullanılır (`let x = 5;`).",
      "`==`: Tür dönüşümü yaparak karşılaştırır (`5 == '5' // true`).",
      "`===`: Hem türü hem de değeri karşılaştırır (`5 === '5' // false`).",
    ],
    answerCode: "",
    hint: [
      "`=` atama",
      "`==` değer karşılaştırma",
      "`===` tür ve değer karşılaştırma",
    ],
  },
  {
    id: "js21",
    category: "Javascript",
    subCategory: ".this()",
    question: ".this() nedir ? Nasıl kullanırsınız, nelere dikkat edersiniz ?",
    qCode: "",
    answer:
      "`this`, bir fonksiyonun çağrıldığı bağlama (context) göre referans veren özel bir anahtar(referans) kelimedir.",
    answerLi: [
      "`this`, global scope'da `window` objesine referans verir (strict mode'da `undefined`).",
      "Bir obje yöntemi içinde, `this` o objeyi gösterir.",
      "Normal fonksiyonlarda `this`, çağrıldığı bağlama göre değişir.",
      "Arrow function, `this` değerini üst seviyedeki scope’tan alır.",
      "Örneğin, bir obje metodu içinde `function` yerine arrow function kullanılırsa, `this` objeyi referans etmek yerine dıştaki bağlamı korur.",
    ],
    answerCode: "",
    hint: [
      "Bağlama göre değişir",
      "Globalde `window`",
      "Arrow function kendi `this` ini oluşturmaz, üst kapsamdan(scope) alır ve bağlamı korur",
    ],
  },
  {
    id: "js22",
    category: "Javascript",
    subCategory: "object.freeze()",
    question: "Object.freeze() nedir ?",
    qCode: "",
    answer: "`Object.freeze()`, bir nesneyi değiştirilemez hale getirir.",
    answerLi: [
      "Nesneye yeni özellik eklenemez, var olanlar silinemez veya değiştirilemez.",
      "Sadece yüzeysel (shallow) seviyede çalışır; iç içe geçmiş nesneler etkilenmez.",
      "Immutable veri yapıları oluşturmak için kullanılır.",
    ],
    answerCode: "",
    hint: [
      "Nesneyi dondurur",
      "Özellik değiştirilemez",
      "Derin dondurma yapmaz",
    ],
  },
  {
    id: "js23",
    category: "Javascript",
    subCategory: "closure/kapsülleme",
    question:
      "Javascript'teki 'closure' konseptini açıklar mısınız ? Bir 'closure' örneği verebilir misiniz ?",
    qCode: "",
    answer:
      "Closure, değişkenleri dışarıdan erişilemez şekilde saklamak veya bir fonksiyonun önceki durumunu hatırlaması gereken durumlarda kullanılır.",
    answerLi: [
      "Bir iç fonksiyon, dış fonksiyonun değişkenlerine erişebilir.",
      "Veri gizleme ve kapsülleme için kullanılır.",
      "Callback ve event handler'larda yaygın olarak kullanılır.",
    ],
    answerCode:
      "function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getCount: () => count\n  };\n}\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.getCount()); // 1",
    hint: [
      "Değişkenleri gizleme",
      "Önceki durumu hatırlama",
      "Fonksiyon içinde fonksiyon",
    ],
  },
  {
    id: "js24",
    category: "Javascript",
    subCategory: "template literals ${}",
    question: "Template literals nedir ?",
    qCode: "",
    answer:
      "Template literals, çok satırlı stringler oluşturmak ve ifadeleri kolayca gömmek için kullanılan bir sözdizimidir.",
    answerLi: [
      "Backtick (``) karakteri ile tanımlanır.",
      "`${expression}` ile değişken veya ifade eklenebilir.",
      "Çok satırlı metinler için uygundur.",
    ],
    answerCode:
      "const name = 'John';\nconst message = `Hello, ${name}!`;\nconsole.log(message); // 'Hello, John!'",
    hint: [
      "${expression}",
      "Backtick (`) kullanımı",
      "Değişken interpolasyonu",
      "Çok satırlı string",
    ],
  },
  {
    id: "js25",
    category: "Javascript",
    subCategory: "shallow vs deep copy",
    question: "Shallow vs Deep copy farkları nelerdir ?",
    qCode: "",
    answer:
      "Shallow copy, sadece ilk seviyedeki referansları kopyalar; deep copy ise tüm iç içe geçmiş yapıları da kopyalar.",
    answerLi: [
      "Shallow Copy: `Object.assign()`, spread (`{...obj}`) ile yapılır  → İç içe nesneler referans olarak kalır.",
      "Deep Copy: `JSON.parse(JSON.stringify(obj))` veya `structuredClone()` ile yapılır → Tüm seviyeleri bağımsız olarak kopyalar.",
      "Shallow copy iç içe geçmiş nesnelerde referans paylaşır, deep copy tamamen bağımsız bir kopya oluşturur.",
    ],
    answerCode: "",
    hint: [
      "Shallow → Üst seviye kopya",
      "Deep → Tüm nesneyi bağımsız kopyalar",
    ],
  },
  {
    id: "js26",
    category: "Javascript",
    subCategory: "değer kopyalama",
    question:
      "referans olarak taşıma ile değer olarak taşımayı açıklar mısınız ?",
    qCode: "",
    answer:
      "Javascript'te primitive veri tipleri değer olarak, referans veri tipleri ise referans olarak taşınır.",
    answerLi: [
      "Değer (Primitive): Number, String, Boolean, Null, Undefined doğrudan kopyalanır.",
      "Referans (Object, Array, Function): Bellekteki adrese referans gösterir.",
      "Referans örneği: `let obj1 = { x: 10 }; let obj2 = obj1;` → `obj2` aynı belleği paylaşır.",
      "Primitive kopyalanır, referanslar paylaşılır.",
    ],
    answerCode: "",
    hint: ["Primitive → Değer olarak", "Objects/Arrays → Referans olarak"],
  },
  {
    id: "js27",
    category: "Javascript",
    subCategory: "ECMAScript",
    question: "ECMAScript nedir kısaca açıklayınız ?",
    qCode: "",
    answer: "ECMAScript, Javascript'in standartlarını tanımlayan bir dildir.",
    answerLi: [
      "Javascript, ECMAScript standardına dayalıdır.",
      "ES5, ES6 (ES2015) gibi sürümlerle geliştirilmiştir.",
      "ECMAScript, dilin kurallarını, sözdizimini ve özelliklerini belirler.",
      "2015 ten sonra yıla göre isimlendirilmeye başlamıştır. Her yıl güncellenir; en son sürüm ECMAScript 2024'tür.",
    ],
    answerCode: "",
    hint: "Javascript'in anayasası",
  },
  {
    id: "js28",
    category: "Javascript",
    subCategory: "Hata tipleri (JS)",
    question: "Javascript hata tipleri nelerdir ?",
    qCode: "",
    answer:
      "Javascript'te çeşitli hata türleri vardır ve her biri farklı bir durumu ifade eder.",
    answerLi: [
      "SyntaxError: Sözdizimi hatası.",
      "ReferenceError: Tanımsız değişkene erişim.",
      "TypeError: Yanlış veri tipi kullanımı.",
      "RangeError: Geçersiz aralık kullanımı.",
      "EvalError: eval() fonksiyonu ile ilgili hatalar.",
      "URIError: Geçersiz URI işleme hatası.",
    ],
    answerCode: "",
    hint: [
      "SyntaxError",
      "TypeError",
      "ReferenceError",
      "RangeError",
      "URIError",
    ],
  },
  {
    id: "js29",
    category: "Javascript",
    subCategory: "scope (JS)",
    question: "Javascript'te scope denildiğinde ne anlıyorsunuz ?",
    qCode: "",
    answer:
      "Scope, değişkenlerin ve fonksiyonların nerede erişilebilir olduğunu belirleyen kapsam kurallarıdır.",
    answerLi: [
      "Global Scope: Tüm kod tarafından erişilebilir.",
      "Function Scope: Fonksiyon içinde tanımlanan değişkenler sadece o fonksiyonda geçerlidir.",
      "Block Scope: `let` ve `const` ile tanımlanan değişkenler `{}` içindeki blokta geçerlidir.",
      "Lexical Scope: İç içe fonksiyonlar dıştaki değişkenlere erişebilir.",
    ],
    answerCode: "",
    hint: ["Global", "Function", "Block", "Lexical Scope"],
  },
  {
    id: "js30",
    category: "Javascript",
    subCategory: "Optional Chaining",
    question: "Optional chaining nedir ?",
    qCode: "",
    answer:
      "Optional chaining (`?.`), bilinmeyen veya isteğe bağlı veriler içeren nesnelere erişirken hata almamak için kullanılır.",
    answerLi: [
      "?. operatörüyle güvenli şekilde derin nesne erişimi yapılır.",
      "Null veya undefined durumunda hata vermez, undefined döner.",
      "Yapısı: obj?.property?.subProperty",
      "API’den dönen verilerde: `response?.data?.user?.name` → API yanıtı eksikse hata vermez.",
      "Dinamik içerikli nesnelerde: `settings?.theme?.color` → `settings` tanımlı değilse hata yerine `undefined` döner.",
      "DOM öğelerine güvenli erişim: `document.querySelector('.btn')?.click()` → Buton yoksa hata vermez.",
    ],
    answerCode: "",
    hint: [
      "API verisi işleme",
      "Opsiyonel özellik erişimi",
      "DOM öğelerine güvenli erişim",
    ],
  },
  {
    id: "js31",
    category: "Javascript",
    subCategory: "destructuring",
    question: "destructuring nedir ? nasıl kullanırsınız ?",
    qCode: "",
    answer:
      "Destructuring, diziler veya nesnelerden değerleri kolayca çıkarmak için kullanılan bir sözdizimidir.",
    answerLi: [
      "Dizi destructuring: const [a, b] = [1, 2];",
      "Nesne destructuring: const {name, age} = person;",
      "Karmaşık veri yapılarını basitleştirir.",
    ],
    answerCode: "",
    hint: [
      "Dizi ve nesne parçalama",
      "Kolay veri erişimi",
      "Varsayılan değer atama",
    ],
  },
  {
    id: "js32",
    category: "Javascript",
    subCategory: "Type coercion",
    question: "Type Coercion nedir ?",
    qCode: "",
    answer:
      "Type Coercion, Javascript'in otomatik olarak bir veri türünü başka bir türe dönüştürmesidir.",
    answerLi: [
      "Implicit (örtük) ve explicit (açık) dönüşüm olabilir.",
      "Implicit (örtük) dönüşüm: `'5' + 3 → '53'` (string birleştirme).",
      "Explicit (açık) dönüşüm: `Number('5') → 5` (manuel dönüşüm).",
      "Falsy değerler `0`, `''`, `null`, `undefined`, `NaN` olarak değerlendirilir.",
    ],
    answerCode: "",
    hint: [
      "Otomatik tür dönüşümü",
      "Implicit & Explicit Coercion",
      "Falsy değerler",
    ],
  },
  {
    id: "js33",
    category: "Javascript",
    subCategory: "null vs undef",
    question: "'null' ile 'undefined' arasındaki fark nedir ?",
    qCode: "",
    answer:
      "'null', bilerek boş bırakılmış bir değeri temsil eder; 'undefined', bir değişken tanımlandığı halde değer atanmamışsa oluşur.",
    answerLi: [
      "null: Bilinçli olarak atanmış boş değerdir.",
      "undefined: Değer atanmamış veya tanımlı olmayan değişkenlerde görülür.",
      "typeof null === 'object', typeof undefined === 'undefined'.",
    ],
    answerCode: "",
    hint: [
      "`null` bilinçli boş değer",
      "`undefined` tanımlanmamış değişken",
      "typeof farkı",
    ],
  },
  {
    id: "js34",
    category: "Javascript",
    subCategory: "splice vs slice",
    question: ".splice ile .slice arasındaki fark nedir ?",
    qCode: "",
    answer:
      ".splice() diziyi değiştirir, .slice() diziyi değiştirmeden bir kopyasını oluşturur.",
    answerLi: [
      "`splice()` diziyi değiştirirken, `slice()` sadece kopyasını alır.",
      "`splice(start, count)`: Belirtilen aralıktaki elemanları çıkarır veya ekler.",
      "`slice(start, end)`: Orijinal diziyi değiştirmeden belirli aralıktaki elemanları döndürür.",
    ],
    answerCode: "",
    hint: [
      "`splice` diziyi değiştirir",
      "`slice` yeni bir dizi döndürür",
      "Kesme ve değiştirme farkı",
    ],
  },
  {
    id: "js35",
    category: "Javascript",
    subCategory: "functional decleration vs expression",
    question:
      "Function Decleration ile Function Expression arasındaki fark nedir ?",
    qCode: "",
    answer:
      "Function Declaration, hoisting ile yukarı taşınırken, Function Expression yalnızca tanımlandıktan sonra çağrılabilir.",
    answerLi: [
      "Function Declaration: `function foo() {}` → Hoisting ile yukarı taşınır.",
      "Function Expression: `const foo = function() {};` → Tanımlandıktan sonra kullanılabilir.",
      "Arrow Function: `const foo = () => {};` → Function Expression’ın kısa gösterimi.",
      "Declaration hoisted, expression ise hoisted değildir.",
    ],
    answerCode: "",
    hint: [
      "Hoisting farkı",
      "Declaration önceden çağrılabilir",
      "Expression tanımlandıktan sonra çalışır",
    ],
  },
  {
    id: "js36",
    category: "Javascript",
    subCategory: "anonymous functions",
    question: "Anonymous function nedir ?",
    qCode: "",
    answer:
      "Anonymous function, ismi olmayan fonksiyonlardır ve genellikle callback olarak kullanılır.",
    answerLi: [
      "Bir değişkene atanabilir veya doğrudan çağrılabilir.",
      "Genellikle event handler'larda veya array metodlarında kullanılır.",
      "Tanımsız isimle oluşturulur: `const fn = function() {};`",
      "Callback olarak kullanılabilir: `setTimeout(function() { console.log('Merhaba'); }, 1000);`",
      "Arrow function olarak da yazılabilir: `const fn = () => {};`",
    ],
    answerCode: "",
    hint: [
      "İsimsiz fonksiyon",
      "Değişkene atanabilir",
      "Callback olarak kullanılabilir",
    ],
  },
  {
    id: "js37",
    category: "Javascript",
    subCategory: "arrow fn",
    question:
      "Arrow function ile regular funciton arasındaki temel fark nedir ? Ne zaman arrow fonksiyon kullanırsınız ?",
    qCode: "",
    answer:
      "Arrow function’lar daha kısa sözdizimi sunar ve `this` bağlamını korurken, regular function’lar kendi `this` değerini oluşturur.",
    answerLi: [
      "Arrow function: `const sum = (a, b) => a + b;` → Daha kısa yazım.",
      "Regular function: `function sum(a, b) { return a + b; }` → Kendi `this` bağlamını oluşturur.",
      "Arrow function, `this` bağlamını kaybetmemesi gereken yerlerde tercih edilir (örneğin, callback fonksiyonlarında).",
    ],
    answerCode:
      "const add = (a, b) => a + b;\n\nfunction regularAdd(a, b) {\n  return a + b;\n}",
    hint: [
      "`this` bağlamı korunur",
      "Callback ve iç içe fonksiyonlarda tercih edilir",
    ],
  },
  {
    id: "js38",
    category: "Javascript",
    subCategory: "callback fn",
    question: "callback fonksiyon nedir ?",
    qCode: "",
    answer:
      "Callback fonksiyon, başka bir fonksiyona argüman olarak verilen ve o fonksiyon tamamlandığında çağrılan bir fonksiyondur.",
    answerLi: [
      "Asenkron işlemlerde (setTimeout, API çağrıları) yaygın olarak kullanılır.",
      "Array metotlarında kullanılır (`arr.map(item => console.log(item));`).",
      "Fonksiyonun çalışma sırasını kontrol etmeye yardımcı olur.",
    ],
    answerCode: "",
    hint: [
      "Fonksiyon içinde fonksiyon",
      "Asenkron işlemler",
      "Array metotlarında kullanım",
    ],
  },
  {
    id: "js39",
    category: "Javascript",
    subCategory: "Promise",
    question: "Promise'ler nedir ?",
    qCode: "",
    answer:
      "Promise, Javascript'te asenkron işlemleri yönetmek için kullanılan bir yapıdır.",
    answerLi: [
      "3 durumu vardır: pending, fulfilled, rejected.",
      "then(), catch(), finally() ile sonuç işlenir.",
      "Callback hell'i önlemek için kullanılır.",
    ],
    answerCode: "",
    hint: [
      "Asenkron işlemler",
      "Pending, fulfilled, rejected",
      "then, catch, finally",
    ],
  },
  {
    id: "js40",
    category: "Javascript",
    subCategory: "Promise vs callbackfn",
    question: "Promise'ler ile callback fonksiyonların farkları nedir ?",
    qCode: "",
    answer:
      "Promise’ler, callback fonksiyonlara kıyasla daha okunabilir ve yönetilebilir bir asenkron işlem yapısı sunar.",
    answerLi: [
      "Callback hell'i önler, zincirleme (chaining) yapılabilir.",
      "then/catch ile daha temiz hata yönetimi sağlar.",
      "Promise, birden fazla asenkron işlemi yönetmeyi kolaylaştırır.",
    ],
    answerCode: "",
    hint: [
      "Promise → Daha düzenli",
      "Callback → İç içe karmaşıklık",
      "then/catch ile hata yönetimi",
    ],
  },
  {
    id: "js41",
    category: "Javascript",
    subCategory: "callback hell",
    question: "'callback hell' nedir ?",
    qCode: "",
    answer:
      "Callback hell, iç içe geçmiş çok sayıda callback fonksiyonunun okunması ve yönetilmesi zor hale gelmesidir.",
    answerLi: [
      "Kod okunabilirliği düşer.",
      "Hata ayıklamak zorlaşır.",
      "Promise ve async/await ile önlenebilir.",
    ],
    answerCode: "",
    hint: [
      "İç içe callback'ler",
      "Okunabilirlik sorunu",
      "Promise veya async/await ile çözüm",
    ],
  },
  {
    id: "js42",
    category: "Javascript",
    subCategory: "Storage",
    question: "Session storage ve Local Storage arasındaki fark nedir ?",
    qCode: "",
    answer: "Session Storage geçici veri saklar, Local Storage ise kalıcıdır.",
    answerLi: [
      "Session Storage, tarayıcı kapatıldığında silinir.",
      "Local Storage, tarayıcı kapatılsa bile verileri saklar.",
      "Her ikisi de `setItem`, `getItem`, `removeItem` metodlarını kullanır.",
    ],
    answerCode: "",
    hint: [
      "Local Storage kalıcı",
      "Session Storage oturum süresi",
      "Aynı API metodları",
    ],
  },
  {
    id: "js43",
    category: "Javascript",
    subCategory: "Client Side, Server Side",
    question: "client ile server side arasındaki fark nedir ?",
    qCode: "",
    answer:
      "Client-side işlemler tarayıcıda çalışır, server-side işlemler ise sunucuda gerçekleşir.",
    answerLi: [
      "Client-side: HTML, CSS, Javascript ile kullanıcı tarafında çalışır.",
      "Server-side: Veritabanı işlemleri, API yönetimi gibi arka planda çalışır.",
      "Client hızlıdır, server daha güvenlidir.",
      "SEO ve ilk yükleme süresi için server-side rendering tercih edilebilir.",
    ],
    answerCode: "",
    hint: ["Client → Tarayıcı", "Server → Sunucu", "Hız ve güvenlik farkı"],
  },
  {
    id: "js44",
    category: "Javascript",
    subCategory: "Ajax",
    question: "Ajax nedir kısaca açıklayınız ?",
    qCode: "",
    answer:
      "AJAX (Asynchronous Javascript and XML), sayfa yeniden yüklenmeden sunucudan veri almak için kullanılan tekniktir.",
    answerLi: [
      "XHR (HxmHttpRequest) veya Fetch API ile çalışır.",
      "Sayfa yenilemeden veri günceller (dinamik sayfa).",
      "JSON formatı yaygın olarak kullanılır.",
    ],
    answerCode: "",
    hint: [
      "Asenkron veri alışverişi",
      "Sayfa yenilenmeden işlem",
      "Fetch & XMLHttpRequest",
    ],
  },
  {
    id: "js45",
    category: "Javascript",
    subCategory: "IIFE",
    question: "IIFE nedir kısaca açıklayınız ?",
    qCode: "",
    answer:
      "IIFE (Immediately Invoked Function Expression), tanımlandığı anda çalışan fonksiyondur.",
    answerLi: [
      "`(function() { console.log('Çalıştı'); })();` → Hemen çalıştırılır.",
      "Global scope'taki değişkenlerle çakışmayı önler.",
      "Modüler yapı kurmada kullanılabilir.",
      "Kapülleme ile veri korunması amacıyla kullanılabilir.",
    ],
    answerCode: "",
    hint: [
      "closure/kapsülleme",
      "Anında çalışan fonksiyon",
      "Global scope'tan izole",
      "Modüler yapı",
    ],
  },
  {
    id: "js46",
    category: "Javascript",
    subCategory: "Async / Await",
    question: "async / await nedir ? Asenkron bir kodu nasıl basitleştirir ?",
    qCode: "",
    answer:
      "`async/await`, asenkron işlemleri daha okunaklı hale getiren bir JavaScript yapısıdır.",
    answerLi: [
      "`async` fonksiyonlar her zaman bir `Promise` döner.",
      "`await`, bir `Promise` çözülene kadar bekler.",
      "Callback hell veya uzun `.then()` zincirlerini önleyerek kodu daha düzenli hale getirir.",
    ],
    answerCode: "",
    hint: [
      "Promise yönetimi",
      "Kod okunabilirliği artırır",
      "`await` işlemi bekler",
    ],
  },
  {
    id: "js47",
    category: "Javascript",
    subCategory: "Hoisting",
    question: "Hoisting nedir ?",
    qCode: "",
    answer:
      "Hoisting, Javascript'te değişken ve fonksiyon bildirimlerinin kod çalışmadan önce üst kısma taşınmasıdır.",
    answerLi: [
      "Var ile tanımlanan değişkenler hoisted edilir ama undefined olur.",
      "Let ve const da hoisted edilir ama temporal dead zone (TDZ) yüzünden ReferenceError: _ is not defined hatası verir, hemen kullanılamaz.",
      "Fonksiyon deklarasyonları tamamen hoisted edilir.",
    ],
    answerCode: "",
    hint: [
      "Değişken ve fonksiyon taşınması",
      "`var` → undefined ile taşınır",
      "`let/const` → Hata verir",
    ],
  },
  {
    id: "js48",
    category: "Javascript",
    subCategory: "Json.stringify()",
    question: "Json.stringify() ne yapar ? nasıl kullanırsınız ?",
    qCode: "",
    answer:
      "`JSON.stringify()` bir Javascript nesnesini veya dizisini JSON formatında bir stringe dönüştürür.",
    answerLi: [
      "Veriyi JSON formatında dışa aktarmak için kullanılır.",
      "API'ye veri gönderirken yaygındır.",
      "Dizi, nesne ve primitive değerlerde çalışır.",
      "iç içe nesneleri referans kaynağını etkilemeden kopyalamak için kullanılabilir.",
    ],
    answerCode:
      'const obj = { name: \'John\', age: 30 };\nconst jsonString = JSON.stringify(obj);\nconsole.log(jsonString); // \'{"name":"John","age":30}\'',
    hint: "`JSON.stringify()`, bir defterdeki notları dijital bir metne dönüştürmek gibidir.",
  },
  {
    id: "js49",
    category: "Javascript",
    subCategory: "Heap",
    question: "Heaps nedir ?",
    qCode: "",
    answer:
      "Heap, Javascript'in bellek yönetiminde nesnelerin ve referans veri türlerinin depolandığı bellek alanıdır.",
    answerLi: [
      "Primitive değerler Stack’te, nesneler ve referans veri türleri Heap’te saklanır.",
      "Heap, büyük ve karmaşık veri yapılarını saklamak için kullanılır.",
      "Nesneler, fonksiyonlar ve kapalı (closure) değişkenler burada tutulur.",
      "Javascript'in Garbage Collector'ı heap'teki gereksiz verileri temizler.",
    ],
    answerCode: "",
    hint: [
      "Bellek yönetimi",
      "Nesneler & Referans ver tipleri Heap’te saklanır",
      "Garbage Collector ile yönetilir",
    ],
  },
  {
    id: "js50",
    category: "Javascript",
    subCategory: "single thread",
    question:
      "JS nasıl çalışır ? Single Thread kavramını açıklar mısınız ? İkinici bir thread nasıl açardınız ?",
    qCode: "",
    answer: "",
    answerLi: [
      "JavaScript, Single Thread çalışan bir dildir, işlemleri aynı anda tek işlem olacak şekilde sıralayıp çalıştırır.",
      "Tek call stack'i vardır. senkron işlemler doğrudan beklemeden callstack e gider.",
      "Asenkron işlemler Task queue'ye yönlendirlir. (Macro task queue)",
      "Promise'ler - asyc - await - queueMicrotask() ve MutationObserver işlemler Micro Task Queue'ye yönlendirilir.",
      "Queue işlemleri Event Loop ile callStack sırasına dahil edilir. Event loop her zaman micro task queue'yi önce boşaltır.",
      "Öncelik : Senkron İşlemler > Micro Task Q > (Macro) Task Q şeklinde callstack e sıralanır.",
      "Web Worker kullanarak ikinci bir thread oluşturulabilir (`new Worker('worker.js')`).",
    ],
    answerCode: "",
    hint: [
      "Single Thread",
      "Event Loop ile asenkron çalışma",
      "Web Worker ile ikinci thread",
    ],
  },
  {
    id: "js51",
    category: "Javascript",
    subCategory: "Execution order exmaple",
    question: "Console değeri ne olur ?",
    qCode: `
    console.log("A");

    setTimeout(() => {
      console.log("B");
    }, 0);

    Promise.resolve().then(() => console.log("C"));

    console.log("D");
    `,
    answer:
      "Synced operasyonlar için ilk sırada lognanır iken devamındaki öncelik Mikro Que sırasındadır ( Promise() ) en son Makro Que sırası gelir ( setTimeout() ).",
    answerLi: [
      '1. A - `console.log("A")` → Senkron, hemen çalışır.',
      '2. D - `console.log("D")` → Senkron, hemen çalışır.',
      '3. C - `Promise.then(() => console.log("C"))` → Microtask Queue\'ya eklenir ve önce çalışır.',
      '4. B - `setTimeout(() => console.log("B"), 0);` → Task Queue\'ya eklenir ve en son çalışır.',
    ],
    answerCode: "",
    hint: [
      "Event Loop",
      "Microtask >> MackroTask",
      "Promise >> MicroTask",
      "setTimeout() >> MacroTask",
    ],
  },
  {
    id: "js52",
    category: "Javascript",
    subCategory: "Var-Let value by Scope",
    question: "Console değerleri ne olur ?",
    qCode: `
    for (var i = 0; i < 3; i++) {
      setTimeout(function() {
        console.log("var" , i);
      }, 1000);
    }

    for (let i = 0; i < 3; i++) {
      setTimeout(function() {
        console.log("let" , i);
      }, 1000);
    }
    `,
    answer:
      "`var` ile tanımlanan `i` döngü bittikten sonra son değerini alırken, `let` her iterasyonda ayrı bir blok kapsamına sahiptir.",
    answerLi: [
      "let block scope olduğu için her iterasyon yeni block-skoped i oluşturur ve console bu referanslı i çıktısını verir",
      "var fonksiyon scope olduğu için setTimeout fonskiyonu execute olana kadar loop tamamlanmış ve i değeri 3 olmuş olur, dolayısı ile her iterasyonda 3 değerini alır",
    ],
    answerCode: `
    var 3
    var 3
    var 3
    let 0
    let 1
    let 2
  `,
    hint: [
      "var → Global scope",
      "let → Block scope",
      "setTimeout asenkron çalışır",
    ],
  },
  {
    id: "js53",
    category: "Javascript",
    subCategory: "let value mutable/immutable",
    question: "Console değeri ne olur ?",
    qCode: "let a = 5, b = a; b = 10; console.log(a, b);",
    answer:
      "Primitive değerler (number, string, boolean) immutable'dır ve kopyalandığında referans değil değer kopyalanır.",
    answerLi: [
      "a = 5 olarak kalır çünkü b, a'nın değerini kopyalar.",
      "b = 10 olarak değiştirilir.",
      "Çıktı: 5 10",
    ],
    answerCode: "5 10",
    hint: ["Primitive değerler kopyalanır", "Referans değerler taşınır"],
  },
  {
    id: "js54",
    category: "Javascript",
    subCategory: "JS Coding - Equal Value Check",
    question:
      "İki değerin aynı olup olmadığını Javascript kullanarak nasıl anlarsınız?",
    qCode: "",
    answer:
      "İki değerin eşitliğini kontrol etmek için `===`, `Object.is()`, veya JSON yöntemi kullanılabilir.",
    answerLi: [
      "`a === b` → Hem tür hem değer kontrol edilir.",
      "`Object.is(a, b)` → `===` gibidir ama `NaN === NaN` durumunu doğru değerlendirir.",
      "`JSON.stringify(obj1) === JSON.stringify(obj2)` → Nesneleri karşılaştırmak için kullanılabilir ama sıralama farkını dikkate almaz.",
    ],
    answerCode: "",
    hint: [
      "`===` tür ve değer kontrolü",
      "`Object.is()` özel durumları yakalar",
      "JSON yöntemi nesneler için",
    ],
  },
  {
    id: "js55",
    category: "Javascript",
    subCategory: "Palindrome",
    question:
      "Verilen string'in PALINDROME olup olmadığını anlayan bir fonksiyon yazın.",
    qCode: "",
    answer:
      "Bir string'in palindrome olup olmadığını kontrol etmek için ters çevirip orijinaliyle karşılaştırabilirsiniz.",
    answerLi: [],
    answerCode: `
    function isPalindrome(str) {
      const cleanStr = str.toLowerCase();
      return cleanStr === cleanStr.split('').reverse().join('');
    }

    console.log(isPalindrome('madam')); // true
    console.log(isPalindrome('hello')); // false
  `,
    hint: [
      "String’i ters çevir ve karşılaştır",
      "Büyük/küçük harf duyarlılığı var ise >> .toLowerCase()",
    ],
  },

  {
    id: "js56",
    category: "Javascript",
    subCategory: "map vs forEach",
    question:
      "numbers arrayını forEach ve map methodu kullanarak her elemanını 2 ile çarpıp sonucunu resForEach , resMap arrayına kaydedin, ve forEach ve map methodunun oluşturduğu farklardan bahsedin.",
    qCode: `
      const numbers = [1, 2, 3, 4, 5];
    `,
    answer:
      "`map`, yeni bir dizi döndürürken, `forEach` orijinal diziyi değiştirmeden işlemi gerçekleştirir.",
    answerLi: [
      "`forEach` mevcut diziyi değiştirmez ama dışarıdan müdahale gerektirir (`push`).",
      "`map`, yeni bir dizi döndürerek daha fonksiyonel ve temiz bir yöntem sunar.",
      "`map`, zincirleme işlemler için uygundur, `forEach` ise sadece yan etkiler oluşturur.",
    ],
    answerCode: `
    const numbers = [1, 2, 3, 4, 5];

    let resForEach = [];
    numbers.forEach(num => resForEach.push(num * 2));

    let resMap = numbers.map(num => num * 2);

    console.log(resForEach); // [2, 4, 6, 8, 10]
    console.log(resMap); // [2, 4, 6, 8, 10]
  `,
    hint: [
      "forEach → Yeni dizi oluşturmaz",
      "map → Yeni bir dizi döndürür",
      "map daha fonksiyonel",
    ],
  },
  {
    id: "js57",
    category: "Javascript",
    subCategory: "prime number ?",
    question:
      "Verilen number'in prime olup olmadığını belirten bir fonksiyon yazın.",
    qCode: "",
    answer:
      "1 ve kendisinden başka böleni olmayan sayılar asaldır. Fonksiyon 2'den başlayarak kendine kadar olan sayılara bölünebilirliğine bakmalıdır.",
    answerLi: [
      "Blok aralığını tanımlarken sayının kendine kadar olanlara bölünebilirliği kod performansı açısından kötü sonuç verecektir",
      "Bu bağlamda bir sayının çiflet şeklindeki çarpanlarından bir tanesi, her daim karekökünden küçük olmak zorunda olduğu için Math.sqrt() metodu önemli bir performans kazanımı sağlar",
    ],
    answerCode: `
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }

    console.log(isPrime(7)); // true
    console.log(isPrime(10)); // false
  `,
    hint: [
      "Asal sayı 1 ve kendisi hariç böleni olmayan sayıdır",
      "Performans için `Math.sqrt(num)` kullanılabilir",
    ],
  },
  {
    id: "js58",
    category: "Javascript",
    subCategory: "ünlü sesleri çıkarma",
    question: "Verilen string'den ünlü sesleri çıkaran bir fonksiyon yazın.",
    qCode: "",
    answer:
      "Bir string'deki ünlü harfleri (a, e, i, o, u) çıkarmak için replace ve regex kullanılabilir.",
    answerLi: [
      "Regex ile ünlü harfleri tespit edebiliriz.",
      "replace metodu ile bu karakterler silinir.",
      "Büyük-küçük harf duyarlılığı için 'i' flag kullanılır.",
    ],
    answerCode: `
    function removeVowels(str) {
      return str.replace(/[aeiouAEIOU]/g, '');
    }

    console.log(removeVowels('Merhaba Dünya')); // "Mrhb Dny"
  `,
    hint: [
      "Ünlü harfleri kaldırma",
      "Regex ile `[aeiou]` kullanımı",
      "`replace()` ile düzenleme",
    ],
  },
  {
    id: "js59",
    category: "Javascript",
    subCategory: "Arrays vs Objects",
    question: "Array ile Object arasındaki fark nedir?",
    qCode: "",
    answer:
      "Array, sıralı veri koleksiyonlarını tutar; Object ise anahtar-değer (key-value) çiftlerini depolar.",
    answerLi: [
      "Array, indeks tabanlıdır (0, 1, 2, ...); Object ise anahtar tabanlıdır.",
      "Array, listeleme için uygundur; Object, özellikleri tanımlamak için kullanılır.",
      "Array'de push, pop, map gibi metodlar bulunur; Object'te ise key, value, entries gibi metodlar kullanılır.",
    ],
    answerCode: `
    const arr = [1, 2, 3]; // Array
    const obj = { key: 'value', age: 25 }; // Object",
    `,
    hint: [
      "Array → Sıralı ve indeksli",
      "Object → Anahtar-değer saklama",
      "Metot farklılıkları",
    ],
  },
  {
    id: "js60",
    category: "Javascript",
    subCategory: "try-catch",
    question: "'try-catch' nedir? Ne zaman kullanırınız ?",
    qCode: "",
    answer:
      "`try...catch`, JavaScript’te hata yakalamak ve yönetmek için kullanılan bir yapılandırmadır.",
    answerLi: [
      "Kod bloklarını hatalara karşı koruyarak uygulamanın çökmesini engeller.",
      "Örneğin, `try` bloğunda hata oluşursa `catch` bloğu çalışarak hatayı yönetir.",
      "`async/await` işlemlerinde hata yakalamak için `try...catch` kullanılmalıdır.",
    ],
    answerCode: `
    try {
      let result = 10 / 0; 
      console.log("Sonuç:", result);
    } catch (error) {
      console.error("Bir hata oluştu:", error.message);
    }
  `,
    hint: [
      "Hata yönetimi",
      "Kodun çökmesini engelleme",
      "`async/await` ile hata yakalama",
    ],
  },
  {
    id: "js61",
    category: "Javascript",
    subCategory: "Array vs Set",
    question: "Array ile set farkını açıklayabilir misiniz ?",
    qCode: "",
    answer:
      "Array ve set farklı elemanlar tutabilme ve indeksle erişim açısından farklılaşırlar.",
    answerLi: [
      "Array elemanları sıralıdır ve indeksle erişilir, tekrar eden öğeler içerebilir.",
      "Set benzersiz öğeler tutar ve indeksle erişim sağlamaz.",
    ],
    answerCode: `
    const arr = [1, 2, 2, 3]; // Tekrar eden elemanlar var
    const set = new Set([1, 2, 2, 3]); // Set, tekrar eden '2'yi tek olarak saklar
    console.log(arr.includes(2)); // true (Array'de var mı kontrol edilebilir)
    console.log(set.has(2)); // true (Set'te var mı kontrol edilebilir)
    console.log(arr[1]); // 2 (Array indeks ile erişim sağlar)
    // console.log(set[1]); // Hata! (Set indeksle erişim desteklemez)
  `,
    hint: [
      "Array sıralıdır, indeksli erişim vardır",
      "Set benzersizdir, indeksli erişim yoktur",
    ],
  },
  {
    id: "js62",
    category: "Javascript",
    subCategory: "first-last element arr",
    question: "Bir Array'in ilk ve son elemanına nasıl erişirsiniz ?",
    qCode: "",
    answer:
      "Array'in ilk elemanına `array[0]`, son elemanına `array[array.length - 1]` ile erişilir.",
    answerLi: [""],
    answerCode: `
    const arr = [10, 20, 30, 40];\nconsole.log(arr[0]); // İlk eleman: 10
    console.log(arr[arr.length - 1]); // Son eleman: 40",
  `,
    hint: ["İlk eleman için indeks 0", "Son eleman için length - 1"],
  },

  // REACT
  {
    id: "react01",
    category: "REACT",
    subCategory: "tanım react",
    question: "React nedir, nasıl çalışır?",
    qCode: "",
    answer:
      "React bileşen (component) tabanlı bir yapı ile UI (kullanıcı arayüzü) oluşturmaya odaklanan, Sanal DOM kullanan bir JavaScript kütüphanesidir.",
    answerLi: [
      "Component yapısı ile yeniden kullanılabilir arayüzler oluşturur.",
      "Virtual DOM sayesinde performanslı güncellemeler yapar.",
      "State ve Props kullanarak dinamik içerikler yönetilir.",
    ],
    answerCode: "",
    hint: [
      "Component tabanlı yapı",
      "Virtual DOM kullanımı",
      "State & Props ile yönetim",
    ],
  },
  {
    id: "react02",
    category: "REACT",
    subCategory: "MVC (modelviewcontroller)",
    question: "MVC Mimarisini kısaca açıklar mısınız?",
    qCode: "",
    answer:
      "MVC (Model-View-Controller), yazılım uygulamalarında veri yönetimi, kullanıcı arayüzü ve iş mantığını birbirinden ayıran bir mimaridir.",
    answerLi: [
      "Model: Veriyi ve iş mantığını yönetir.",
      "View: Kullanıcı arayüzünü gösterir.",
      "Controller: Model ve View arasında köprü kurar.",
    ],
    answerCode: "",
    hint: [
      "Model → Veri yönetimi",
      "View → Arayüz",
      "Controller → Veri-akış kontrolü",
    ],
  },
  {
    id: "react03",
    category: "REACT",
    subCategory: "skillset (react)",
    question: "Hangi react becerileri FrontEND için önemlidir?",
    qCode: "",
    answer:
      "Front-end geliştirme için React’te bileşen yapısı, state yönetimi ve performans optimizasyonu gibi beceriler önemlidir.",
    answerLi: [
      "Component-Based Architecture → Modüler yapı oluşturma.",
      "State Management (useState, useReducer, Redux) → Veri akışını yönetme.",
      "React Hooks → `useEffect`, `useRef`, `useMemo` gibi fonksiyonları kullanma.",
      "Virtual DOM ve Render Optimization → Performans iyileştirme.",
      "Next.js → SSR ve SEO için framework kullanımı.",
      "Routing (React Router) bilgisi.",
      "API entegrasyonu (Axios, Fetch).",
    ],
    answerCode: "",
    hint: [
      "Component yapısı",
      "State Management",
      "Hooks",
      "Performance Optimization",
      "Next.js",
    ],
  },
  {
    id: "react04",
    category: "REACT",
    subCategory: "React.js Concepts",
    question: "Gelişmiş React.js concept'leri denince ne anlıyorsunuz?",
    qCode: "",
    answer:
      "Gelişmiş React kavramları, performans optimizasyonu ve ölçeklenebilir uygulamalar geliştirmek için kullanılan tekniklerdir.",
    answerLi: [
      "Higher-Order Components (HOC).",
      "React Context API & Redux → Global state yönetimi.",
      "useMemo & useCallback → Performans optimizasyonu.",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG) → Next.js ile SEO ve performans iyileştirme.",
      "Custom Hooks → Tekrar eden mantıkları soyutlama.",
      "Code Splitting ve Lazy Loading.",
    ],
    answerCode: "",
    hint: [
      "State Management",
      "Performance Optimization",
      "Custom Hooks",
      "SSR & SSG",
    ],
  },
  {
    id: "react05",
    category: "REACT",
    subCategory: "(react) site nasıl çalışır ?",
    question: "React ile yazılmış bir siteye girdiğinizde neler olur?",
    qCode: "",
    answer:
      "React ile yazılmış bir siteye girildiğinde, tarayıcı index.html yükler ve JavaScript uygulamayı başlatır.",
    answerLi: [
      "Browser html dosyasını indirir ve root elementi oluşturulur",
      "JavaScript dosyaları yüklenir ve React bileşenleri Virtual DOM'a işlenir.",
      "React, Virtual DOM’u güncelleyerek gerçek DOM’da minimum değişiklik yapar.",
      "State değiştikçe bileşenler yeniden render edilir ama sadece değişen kısımlar güncellenir.",
    ],
    answerCode: "",
    hint: [
      "Browser >> index.html",
      "JavaScript çalışır",
      "Virtual DOM güncellenir",
      "Bileşenler render edilir",
      "sadece ilgili bileşenler re-render edilir",
    ],
  },
  {
    id: "react06",
    category: "REACT",
    subCategory: "VDOM",
    question: "React VDOM nedir? Nasıl çalışır?",
    qCode: "",
    answer:
      "Virtual DOM (VDOM), gerçek DOM'un hafif bir kopyasıdır ve performansı artırmak için React tarafından kullanılır.",
    answerLi: [
      "Gerçek DOM yerine hafif bir sanal DOM oluşturulur.",
      "VDOM, UI değişikliklerini izler ve sadece değişen kısımları günceller.",
      "Diffing(eski-yeni karşılaştırması) algoritması ile eski ve yeni VDOM karşılaştırılır.",
      "En az sayıda gerçek DOM güncellemesi yapılır.",
    ],
    answerCode: "",
    hint: [
      "Eski & Yeni VDOM karşılaştırması",
      "Minimal güncelleme",
      "Performans optimizasyonu",
    ],
  },
  {
    id: "react07",
    category: "REACT",
    subCategory: "JSX",
    question: "React JSX nedir? Browser'lar jsx dosyalarını nasıl okurlar?",
    qCode: "",
    answer:
      "JSX, JavaScript içinde HTML benzeri bir sözdizimi sunan ve React bileşenlerini daha okunabilir hale getiren bir yapıdır.",
    answerLi: [
      "Tarayıcılar JSX’i doğrudan anlayamaz, Babel gibi bir derleyici tarafından `React.createElement()` çağrılarına çevrilir.",
      "Örneğin, `<h1>Hello</h1>` → `React.createElement('h1', null, 'Hello')` haline gelir.",
      "Bu sayede JSX, JavaScript fonksiyonları içinde HTML benzeri bir yapı kullanmayı mümkün kılar.",
    ],
    answerCode: "",
    hint: [
      "JSX → JavaScript içinde HTML",
      "Babel derleyicisi",
      "React.createElement() dönüşümü",
    ],
  },
  {
    id: "react08",
    category: "REACT",
    subCategory: "Components (react)",
    question:
      "React'te components nedir? Bildiğiniz component tiplerinden kısaca bahsedebilir misiniz?",
    qCode: "",
    answer:
      "React’te bileşenler (components), tekrar kullanılabilir UI parçalarıdır ve iki ana türü vardır: Fonksiyonel ve Class bileşenler.",
    answerLi: [
      "Fonksiyonel Bileşen: `const Button = () => <button>Click</button>;` → Hooks ile state yönetimi yapılabilir.",
      "Class Bileşen: `class Button extends React.Component {}` → Eski sürümlerde state ve lifecycle yönetimi için kullanılırdı.",
      "Pure Component: Gereksiz render işlemlerini önleyen optimizasyonlu bileşendir.",
      "Higher-Order Component (HOC): Bir bileşene ek özellikler kazandıran fonksiyonlardır.",
    ],
    answerCode: "",
    hint: ["Fonksiyon & Class bileşenler", "Pure Component", "HOC"],
  },
  {
    id: "react09",
    category: "REACT",
    subCategory: "styled-components",
    question: "styled-components nedir?",
    qCode: "",
    answer:
      "styled-components, React uygulamalarında CSS'i Javascript içinde yazmaya olanak tanıyan bir kütüphanedir.",
    answerLi: [
      "Component bazlı stil oluşturmayı sağlar.",
      "CSS kodlarını Javascript içine gömerek daha dinamik stiller yaratır.",
      "Scoped CSS sağlar, global stil çakışmalarını önler.",
    ],
    answerCode: `
    //styled component
    import styled from 'styled-components';

    const Button = styled.button\`
      background: blue;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: darkblue;
      }
    \`;

    //component:
    function App() {
      return <Button>Click Me</Button>;
    }

    export default App;
  `,
    hint: ["CSS-in-JS yaklaşımı", "Modüler stiller", "Dinamik props kullanımı"],
  },
  {
    id: "react10",
    category: "REACT",
    subCategory: "re-render",
    question: "React re-render nedir? Neden olur? Çözüm için methodlar neler ?",
    qCode: "",
    answer:
      "React’te re-render, bir bileşenin state veya props değiştiğinde yeniden çalıştırılmasıdır. 4 temel sebebi vardır.",
    answerLi: [
      "Parent bileşen yeniden render edilirse, tüm child bileşenleri de etkileyebilir. **React.memo ile gereksiz render'lar önlenebilir.**",
      "State değişirse bileşen tekrar render edilir. **State’i minimum seviyede tutarak ve useState yerine useRef kullanarak gereksiz güncellemeler azaltılır.**",
      "Props değişirse, alt bileşenler de güncellenir. **useMemo ve useCallback ile props değişimleri kontrol altına alınır.**",
      "useEffect kullanımı, fonksiyonlar gereksiz yere re-render tetikletebilir.**Dependency array’ini kontrol edilir - gereksiz bağımlılıklar kaldırılır. Fonksiyonlar re-render tetikletme kapsamında incelenir.**",
    ],
    answerCode: "",
    hint: [
      "Parent-child etkisi",
      "State & Props değişimi",
      "Performans optimizasyonu",
      "Fonksiyonlar & useEffect",
    ],
  },
  {
    id: "react11",
    category: "REACT",
    subCategory: "Hooks (react)",
    question: "React Hook'ları nelerdir?",
    qCode: "",
    answer:
      "React Hooks, fonksiyonel bileşenlerde state ve lifecycle yönetimini sağlayan özel fonksiyonlardır.",
    answerLi: [
      "`useState` → Bileşen içinde state yönetimi.",
      "`useEffect` → Side effect (API çağrısı, DOM manipülasyonu) yönetimi.",
      "`useContext` → Global state yönetimi için context kullanımını sağlar.",
      "`useRef` → DOM öğelerine veya değişmeyen referanslara erişim sağlar.",
      "`useMemo & useCallback` → Performans optimizasyonu yapar.",
    ],
    answerCode: "",
    hint: [
      "State & Effect yönetimi",
      "Context API",
      "Performans optimizasyonu",
    ],
  },
  {
    id: "react12",
    category: "REACT",
    subCategory: "custom Hooks",
    question: "custom hook nedir? nasıl kullanırsınız?",
    qCode: "",
    answer:
      "Custom hook'lar, birden fazla bileşende tekrar kullanılabilir mantık oluşturmak için yazılan özel hook'lardır.",
    answerLi: [
      "use ile başlar (örneğin: useFetch, useAuth).",
      "Kendi hook'unuzda useState, useEffect gibi diğer hook'ları kullanabilirsiniz.",
      "DRY (Don't Repeat Yourself) prensibini uygular.",
    ],
    answerCode: "",
    hint: [
      "Tekrar eden mantıkları soyutlar",
      "use ile başlar",
      "State & Effect yönetimi içerir",
    ],
  },
  {
    id: "react13",
    category: "REACT",
    subCategory: "useState",
    question: "useState hook nedir?",
    qCode: "",
    answer:
      "useState, React'te fonksiyonel bileşenlerde durum (state) yönetimi yapmak için kullanılan bir hook'tur.",
    answerLi: [
      "State tanımlamak için kullanılır: `const [count, setCount] = useState(0);`",
      "setState fonksiyonu ile değer değiştirilir: `setCount(count + 1);`",
      "State değiştiğinde bileşen yeniden render edilir.",
    ],
    answerCode: "",
    hint: ["State yönetimi", "setState ile güncelleme", "Re-render tetiklenir"],
  },
  {
    id: "react14",
    category: "REACT",
    subCategory: "useEffect",
    question: "useEffect hook nedir ? useLayoutEffect ile farkı kısaca nedir ?",
    qCode: "",
    answer:
      "`useEffect`, React bileşenlerinde side effect’leri yönetmek için kullanılır. `useLayoutEffect`, DOM güncellendikten hemen sonra çalışır.",
    answerLi: [
      "`useEffect`: Asenkron çalışır, render sonrası çalışır.",
      "`useLayoutEffect`: Senkron çalışır, DOM güncellenir güncellenmez çalışır.",
      "`useLayoutEffect`, ölçüm veya DOM manipülasyonu gibi işlemlerde tercih edilir.",
    ],
    answerCode: "",
    hint: [
      "Side effect yönetimi",
      "useEffect → Asenkron",
      "useLayoutEffect → Senkron",
    ],
  },
  {
    id: "react15",
    category: "REACT",
    subCategory: "useContext",
    question: "useContext hook nedir ?",
    qCode: "",
    answer:
      "`useContext`, React’te global state yönetimi için kullanılan bir hook’tur.",
    answerLi: [
      "Context API içindeki değerlere doğrudan erişim sağlar.",
      "`const value = useContext(MyContext);` şeklinde kullanılır.",
      "Props drilling olmadan state’i alt bileşenlere aktarmayı kolaylaştırır.",
    ],
    answerCode: "",
    hint: [
      "Global state yönetimi",
      "Context API erişimi",
      "Props drilling azaltma",
    ],
  },
  {
    id: "react16",
    category: "REACT",
    subCategory: "useCallback",
    question: "useCallback hook nedir ?",
    qCode: "",
    answer:
      "`useCallback`, bir fonksiyonun gereksiz yeniden oluşturulmasını önlemek için kullanılan bir React hook'udur.",
    answerLi: [
      "Bellekte aynı fonksiyon referansını korur: `const memoizedFn = useCallback(() => {...}, [deps]);`",
      "Component her render edildiğinde fonksiyonun yeniden tanımlanmasını engeller.",
      "Callback fonksiyonları optimize ederek performans artışı sağlar.",
      "Özellikle sık re-render edilen bileşenlerde kullanışlıdır.",
    ],
    answerCode: "",
    hint: [
      "Fonksiyon referansını korur",
      "Gereksiz yeniden oluşturmayı önler",
      "Performans optimizasyonu",
    ],
  },
  {
    id: "react17",
    category: "REACT",
    subCategory: "useMemo",
    question: "useMemo hook nedir ?",
    qCode: "",
    answer:
      "`useMemo`, hesaplanan değerleri hafızada tutarak gereksiz hesaplamaları önleyen bir React hook'udur.",
    answerLi: [
      "Yüksek maliyetli işlemleri optimize etmek için kullanılır.",
      "Sadece bağımlılıklar (`deps`) değiştiğinde yeniden hesaplanır: `const value = useMemo(() => computeExpensiveValue(a, b), [a, b]);`",
      "Performansı artırarak gereksiz renderları engeller.",
    ],
    answerCode: "",
    hint: [
      "Hafızada değer saklama",
      "Gereksiz hesaplamaları önler",
      "Performans optimizasyonu",
    ],
  },
  {
    id: "react18",
    category: "REACT",
    subCategory: "useReducer",
    question: "useReducer hook nedir ?",
    qCode: "",
    answer:
      "`useReducer`, `useState`’e alternatif olarak daha karmaşık state yönetimi için kullanılan bir React hook'udur.",
    answerLi: [
      "Redux'a benzer mantıkla çalışır.",
      "State güncellemeleri için action ve dispatch kullanılır.",
      "Büyük ve karmaşık state yönetimlerinde tercih edilir.",
    ],
    answerCode: "",
    hint: [
      "Karmaşık state yönetimi",
      "Reducer fonksiyonu",
      "Redux benzeri yapı",
    ],
  },
  {
    id: "react19",
    category: "REACT",
    subCategory: "useRef",
    question: "useRef hook nedir ?",
    qCode: "",
    answer:
      "`useRef`, React’te DOM elemanlarına veya bileşenler arasında değişmeyen referanslar saklamak için kullanılan bir hook'tur.",
    answerLi: [
      "DOM erişimi için kullanılabilir (örneğin input odaklama).",
      "Render tetiklemeden veri saklayabilir, state gibi re-render tetiklemez.",
      "Mutable bir ref nesnesi döndürür.",
    ],
    answerCode: `
    //input odaklama
    const inputRef = useRef(null); 

    //Dom öğesine odaklama (input)
    function InputFocus() {
      const inputRef = useRef(null);

      useEffect(() => {
        inputRef.current.focus();
      }, []);

      return <input ref={inputRef} placeholder="Otomatik odaklanır" />;
    }

    export default InputFocus;
    `,
    hint: [
      "DOM erişimi",
      "Render tetiklemez",
      "useEffect ile birlikte kullanılabilir",
      "`useEffect` ile birlikte kullanılarak bileşen yüklendiğinde bir öğeye odaklanmak için kullanılabilir.",
    ],
  },
  {
    id: "react20",
    category: "REACT",
    subCategory: "useMemo vs useEffect",
    question:
      "useMemo ile useEffect farkları nelerdir? Hangi durumlarda hangisini tercih ederdiniz?",
    qCode: "",
    answer:
      "useMemo, hesaplanan değerleri önbelleğe alır; useEffect ise yan etkileri (API çağrıları, DOM manipülasyonu) yönetir.",
    answerLi: [
      "Ağır hesaplamalar için useMemo, yan etkiler için useEffect tercih edilir.",
      "`useMemo`, sadece bağımlılıklar değiştiğinde yeniden hesaplanır, `useEffect` ise bağımlılıklar değiştikçe kodu tekrar çalıştırır.",
      "`useMemo`: Yüksek maliyetli hesaplamaların gereksiz tekrarını önler.",
      "`useEffect`: API çağrıları, DOM manipülasyonu gibi side effect işlemlerinde kullanılır.",
      "useMemo performans optimizasyonu için kullanılır.",
      "useEffect, bileşen yaşam döngüsünü yönetir.",
    ],
    answerCode: "",
    hint: [
      "useMemo → Hesaplama optimizasyonu",
      "useEffect → Side effect yönetimi",
      "Bağımlılıklara göre tetiklenme farkı",
    ],
  },
  {
    id: "react21",
    category: "REACT",
    subCategory: "redux tanım",
    question: "Redux nedir ? Neden kullanılır ?",
    qCode: "",
    answer:
      "Redux, Javascript uygulamalarında global state yönetimi için kullanılan bir kütüphanedir.",
    answerLi: [
      "Uygulamanın durumunu merkezi bir store'da tutar.",
      "Component’ler arası veri paylaşımını kolaylaştırır.",
      "State değişiklikleri sadece belirli action ve reducer'lar aracılığıyla yapılır.",
      "Predictable state management (öngörülebilir veri akışı) sağlar.",
      "Büyük uygulamalarda veri akışını yönetmeyi kolaylaştırır.",
    ],
    answerCode: "",
    hint: [
      "Merkezi state yönetimi",
      "Component'ler arası veri paylaşımı",
      "Predictable state management",
    ],
  },
  {
    id: "react22",
    category: "REACT",
    subCategory: "redux vs context api vs useState",
    question:
      "Redux vs Context API vs useState kıyaslayınız, Hangi durumlarda hangisini tercih ederdiniz?",
    qCode: "",
    answer:
      "Redux, Context API ve useState, React'te state yönetimi için kullanılır ancak farklı ölçeklerde tercih edilir.",
    answerLi: [
      "`useState`: Lokal state yönetimi için uygundur, küçük bileşenlerde hızlıdır.",
      "`Context API`: Component’ler arası veri paylaşımını sağlar, ancak büyük state yönetimi için performans dezavantajı olabilir.",
      "`Redux`: Büyük ve karmaşık uygulamalarda global state yönetimini optimize eder, ancak boilerplate kod miktarı fazladır.",
      "Küçük bileşenler için `useState`, orta ölçekli projelerde `Context API`, büyük ölçekli projelerde `Redux` tercih edilir.",
    ],
    answerCode: "",
    hint: [
      "useState → Lokal state",
      "Context API → Global state",
      "Redux → Büyük ölçekli uygulamalar",
    ],
  },
  {
    id: "react23",
    category: "REACT",
    subCategory: "REACT Native",
    question: "React'ın React Native'den farkı nedir?",
    qCode: "",
    answer:
      "React, web tabanlı kullanıcı arayüzleri oluşturmak için kullanılırken, React Native mobil uygulamalar geliştirmek için kullanılır.",
    answerLi: [
      "React, HTML ve CSS ile çalışır.",
      "React Native, iOS ve Android için native bileşenler kullanır.",
      "React Native'de stil, CSS yerine StyleSheet ile tanımlanır.",
      "React DOM yerine, React Native platforma özgü bileşenler (`View`, `Text`, `Button`) kullanır.",
    ],
    answerCode: "",
    hint: ["React → Web", "React Native → Mobil"],
  },
  {
    id: "react24",
    category: "REACT",
    subCategory: "Router (React)",
    question: "'React Router' nedir ? Nasıl kullanırsınız ?",
    qCode: "",
    answer:
      "React Router, React uygulamalarında sayfalar arası gezinmeyi sağlamak için kullanılan bir kütüphanedir.",
    answerLi: [
      "SPA (Single Page Application) için uygundur. (MPA-multiplePageApplication'da da kullanılabilir)",
      "<BrowserRouter>, <Routes>, <Route> bileşenleri ile çalışır.",
      "`useNavigate`(url'ye yönlendirir) ve `useParams`(url'den parametre çeker) gibi hook'lar ile dinamik yönlendirmeler yapılabilir.",
    ],
    answerCode: `  
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
    `,
    hint: ["SPA yönlendirme", "Route tanımlama", "useNavigate & useParams"],
  },
  {
    id: "react25",
    category: "REACT",
    subCategory: "Router components (react)",
    question: "'React Router'ın ana componentleri nelerdir?",
    qCode: "",
    answer:
      "React Router'ın ana bileşenleri uygulama içinde gezinmeyi yönetmek için kullanılır.",
    answerLi: [
      "`BrowserRouter`: Tarayıcı tabanlı yönlendirme sağlar.",
      "`Routes`: İçinde `Route` bileşenlerini gruplamak için kullanılır.",
      "`Route`: Belirli bir path için bileşen belirler (`<Route path='/home' element={<Home />} />`).",
      "`Link` & `NavLink`: Sayfa yenilenmeden yönlendirme yapar.",
      "`useParams`: Parametre (url'den)kullanımı sağlar.",
      "`useNavigate`: Programatik (url)yönlendirme sağlar.",
    ],
    answerCode: "",
    hint: ["BrowserRouter", "Routes & Route", "Link & useNavigate"],
  },
  {
    id: "react26",
    category: "REACT",
    subCategory: "Api Request (react)",
    question: "Bir React uygulamasında nasıl API Request yaparsınız?",
    qCode: "",
    answer:
      "React'te API istekleri genellikle fetch API veya Axios kütüphanesiyle yapılır.",
    answerLi: [
      "Fetch API ile: `fetch('https://api.example.com/data').then(res => res.json())`",
      "Axios ile: `axios.get('https://api.example.com/data').then(res => console.log(res.data))`",
      "`useEffect` içinde çağrılarak bileşen yüklendiğinde veri çekilebilir.",
    ],
    answerCode: `
    function FetchData() {
      const [data, setData] = useState(null);

      // Fetch API ile veri çekme
      useEffect(() => {
        fetch("https://api.example.com/data")
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error("Hata:", error));
      }, []);

      // Axios ile veri çekme
      useEffect(() => {
        axios.get("https://api.example.com/data")
          .then(response => setData(response.data))
          .catch(error => console.error("Hata:", error));
      }, []);

      return <div>{data ? JSON.stringify(data) : "Yükleniyor..."}</div>;
    }

    export default FetchData;
  `,
    hint: ["Fetch API", "Axios", "useEffect içinde çağrı"],
  },
  {
    id: "react27",
    category: "REACT",
    subCategory: "Error Boundries",
    question: "Error Boundries nedir ? Projenizde nasıl yönetirsiniz ",
    qCode: "",
    answer:
      "Error Boundaries, React uygulamalarında bileşen hatalarını yakalayıp UI'nin çökmesini önleyen özel class bileşenleridir. `componentDidCatch` ve `getDerivedStateFromError` metodları ile hata durumlarını yönetir.",
    answerLi: [
      "Error Boundaries, yalnızca class bileşenlerinde tanımlanır ve alt bileşenlerde oluşan hataları yakalar.",
      "`componentDidCatch(error, info)` metodu hata detaylarını loglamak için kullanılır.",
      "`getDerivedStateFromError(error)` ile hata sonrası özel bir UI göstermek mümkündür.",
      "Event handler'lar ve async kodlar için Error Boundaries çalışmaz, bunları manuel try-catch ile yönetmek gerekir.",
    ],
    answerCode:
      "class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, info) {\n    console.error('Hata yakalandı:', error, info);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h2>Bir hata oluştu!</h2>;\n    }\n    return this.props.children;\n  }\n}\n\n// Kullanımı\n<ErrorBoundary>\n  <MyComponent />\n</ErrorBoundary>",
    hint: [
      "React hata yakalama",
      "componentDidCatch & getDerivedStateFromError",
      "Sadece class bileşenlerinde kullanılabilir",
    ],
  },
  {
    id: "react28",
    category: "REACT",
    subCategory: "Unit testing",
    question: "'Unit Testing' nedir?",
    qCode: "",
    answer:
      "Unit Testing, uygulamanın en küçük birimlerini (fonksiyonlar, bileşenler) bağımsız olarak test etmeye yarayan bir yazılım testi yöntemidir.",
    answerLi: [
      "Jest, React Testing Library gibi araçlar kullanılır.",
      "Küçük kod parçalarının beklenen şekilde çalışıp çalışmadığı kontrol edilir.",
      "Hataları erken tespit etmek için önemlidir.",
    ],
    answerCode: "",
    hint: [
      "Küçük birimi test etme",
      "React Testing Library",
      "Jest ile test yazma",
    ],
  },
  {
    id: "react29",
    category: "REACT",
    subCategory: "Lifting State Up",
    question: "'Lifting state up' terimi ne anlama gelir?",
    qCode: "",
    answer:
      "Lifting state up, React'te iki veya daha fazla bileşenin ortak state'e erişmesi gerektiğinde state'in en yakın ortak parent bileşene taşınmasıdır.",
    answerLi: [
      "Alt bileşenlerde kullanılan state’i, ortak bir ebeveyne taşımayı ifade eder.",
      "Ebeveyn bileşen state’i yönetir ve props ile alt bileşenlere aktarır.",
      "State senkronizasyonunu sağlamak ve prop drilling’i azaltmak için kullanılır.",
    ],
    answerCode: "",
    hint: [
      "State’i üst bileşene taşıma",
      "Ortak state yönetimi",
      "Prop drilling azaltma",
    ],
  },
  {
    id: "react30",
    category: "REACT",
    subCategory: "Keys in lists",
    question: "'key'lerin list'lerde kullanım amacı nedir?",
    qCode: "",
    answer:
      "React'te 'key' prop'u, liste öğelerini benzersiz şekilde tanımlamak için kullanılır. Bu, React'in hangi öğelerin değiştiğini, eklendiğini veya silindiğini anlamasına yardımcı olur.",
    answerLi: [
      "React, her öğeyi benzersiz bir `key` ile takip ederek değişiklikleri optimize eder.",
      "`key` kullanılmazsa performans düşebilir ve yanlış güncellemeler olabilir.",
      "Genellikle benzersiz `id` kullanılır: `<li key={item.id}>`",
    ],
    answerCode: "",
    hint: [
      "Listelerde benzersiz kimlik",
      "Render optimizasyonu",
      "Yanlış güncellemeleri önleme",
    ],
  },
  {
    id: "react31",
    category: "REACT",
    subCategory: "Contitonal Rendering",
    question: "'Conditional Rendering' nedir? Nasıl kullanılır?",
    qCode: "",
    answer:
      "Conditional Rendering, React'te koşullara göre farklı UI öğeleri göstermeyi sağlar.",
    answerLi: [
      "Ternary Operator: `{isLoggedIn ? <Dashboard /> : <Login />}`",
      "Logical AND (`&&`): `{isAdmin && <AdminPanel />}`",
      "Early Return: `if (!data) return null;`",
    ],
    answerCode: "",
    hint: ["Koşula bağlı render", "Ternary Operator", "Logical AND"],
  },
  {
    id: "react32",
    category: "REACT",
    subCategory: "Functional Components (react)",
    question: "'Functional Component'lerin temel konsepti nedir?",
    qCode: "",
    answer:
      "Functional Components, React'te UI'yi tanımlamak için kullanılan basit Javascript fonksiyonlarıdır.",
    answerLi: [
      "Sadece bir fonksiyon olarak tanımlanır: `const Button = () => <button>Click</button>;`",
      "Hooks (`useState`, `useEffect`) ile state ve lifecycle yönetimi yapılabilir.",
      "Daha okunaklı, hafif ve performanslıdır.",
    ],
    answerCode: `
    function Greeting(props) {
      return <h1>Hello, {props.name}</h1>;
    };
    `,
    hint: [
      "Fonksiyon tabanlı bileşen",
      "Hooks kullanımı",
      "Okunaklı ve performanslı yapı",
    ],
  },
  {
    id: "react33",
    category: "REACT",
    subCategory: "Class Components (react)",
    question: "'Class Component'lerin temel konsepti nedir?",
    qCode: "",
    answer:
      "Class Components, React'te daha önce state ve lifecycle metodlarını kullanmak için kullanılan ES6 sınıflarıdır.",
    answerLi: [
      "React.Component sınıfından türetilir.",
      "render() metodu ile JSX döner.",
      "State ve lifecycle metodları içerir.",
      "Class Component: `this.state` ile state yönetilir, lifecycle metotları kullanılır.",
      "Functional Component'ler performans açısından daha iyidir ve modern React yaklaşımına daha uygundur.",
    ],
    answerCode: "",
    hint: [
      "Functional → Daha sade ve modern",
      "Class → Eski React (ES6 sınıf) yapısı",
      "State yönetimi",
      "Lifecycle metotları",
    ],
  },
  {
    id: "react34",
    category: "REACT",
    subCategory: "RCC - RFC - RAFC",
    question:
      "'React Class Components' ile 'React Functional Components' ile 'React Arrow Function Components' farkları nelerdir?",
    qCode: "",
    answer:
      "React'te Class Components, eski yöntem olup state ve lifecycle metotlarıyla çalışırken, Functional Components daha sade ve hooks ile yönetilir. Arrow Function Components ise Functional Components'in kısayoludur.",
    answerLi: [
      "Class Components → `Component` sınıfından türetilir, `this.state` ve lifecycle metotları kullanılır.",
      "Functional Components → Daha okunaklıdır, hooks (`useState`, `useEffect`) ile state ve yan etkiler yönetilir.",
      "Arrow Function Components → Functional Component'in ES6 ok fonksiyonu ile yazılmış versiyonudur, bağlamı (this) otomatik alır.",
    ],
    answerCode: `
    // React Class Component
    import React, { Component } from 'react';

    export default class Example extends Component {
      state = { count: 0 };

      render() {
        return (
          <div>
            <p>Count: {this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
              Increase
            </button>
          </div>
        );
      }
    }

    // React Functional Component
    import React, { useState } from 'react';

    export default function Example() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increase
          </button>
        </div>
      );
    }

    // React Arrow Functional Component
    import React, { useState } from 'react';

    export const Example = () => {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increase
          </button>
        </div>
      );
    };
  `,
    hint: [
      "Functional → Daha sade ve modern",
      "Arrow Function Components: Functional kısayol",
      "Class → Eski React yapısı",
      "Hook'lar vs Lifecycle Methods",
    ],
  },
  {
    id: "react35",
    category: "REACT",
    subCategory: "REACT vs Angular vs Vue",
    question:
      "React / Angular / Vue , sizce temel farkları nelerdir, neden React?",
    qCode: "",
    answer:
      "React, Angular ve Vue modern UI geliştirme için kullanılan popüler Javascript frameworkleridir, ancak farklı yaklaşımlara sahiptirler.",
    answerLi: [
      "React: Component tabanlıdır, Virtual DOM kullanır ve öğrenmesi kolaydır.",
      "Angular: Tam teşekküllü bir framework'tür, TypeScript ile birlikte gelir ve kapsamlıdır.",
      "Vue: Basit bir öğrenme eğrisine sahiptir, hafif yapıdadır ve reaktif state() yönetimi içerir.",
      "React, büyük topluluğu, esnekliği ve ekosistemi nedeniyle tercih edilir.",
    ],
    answerCode: "",
    hint: [
      "React → Esnek ve geniş ekosistem",
      "Angular → Komple framework",
      "Vue → Hafif ve kolay öğrenilir",
    ],
  },
  {
    id: "react36",
    category: "REACT",
    subCategory: "React.memo",
    question:
      "React.memo nedir kısaca açıklar mısınız? useMemo() ile aynı mıdır ?",
    qCode: "",
    answer:
      "React.memo, fonksiyonel bileşenlerin yalnızca props değiştiğinde yeniden render edilmesini sağlayan bir performans optimizasyon tekniğidir.",
    answerLi: [
      "`React.memo(Component)`: Bileşeni sarmalayarak (memorization) gereksiz render’ları önler.",
      "Props değişmediği sürece bileşeni yeniden render etmez.",
      "`useMemo`: Yüksek maliyetli işlemleri optimize etmek için kullanılır.",
      "React.memo bileşen seviyesinde çalışırken, useMemo sadece belirli bir değerin hesaplanmasını optimize eder.",
    ],
    answerCode: "",
    hint: [
      "React.memo → Bileşen optimizasyonu",
      "useMemo → Değer optimizasyonu",
      "React.memo >> Gereksiz render’ları önleme",
    ],
  },
  {
    id: "react37",
    category: "REACT",
    subCategory: "HOC",
    question:
      "React'teki Higher Order Component nedir, Pure Componentten farkı nedir? kısaca açıklar mısınız?",
    qCode: "",
    answer:
      "Higher-Order Component (HOC), başka bir bileşeni saran ve ona ek özellikler kazandıran bir fonksiyondur. PureComponent ise props veya state değişmediğinde yeniden render'ı önler.",
    answerLi: [
      "HOC, bileşenleri sarmalayan fonksiyonlar oluşturur.",
      "PureComponent, performans optimizasyonu için shallow comparison yapar.",
      "HOC yapısal, PureComponent performans odaklıdır.",
    ],
    answerCode: "",
    hint: [
      "HOC → Bileşeni saran fonksiyon",
      "Pure Component → Gereksiz render’ları önler",
      "Genişletme vs Optimizasyon",
    ],
  },
  {
    id: "react38",
    category: "REACT",
    subCategory: "Hydration error (react)",
    question: "'hydration' hatası nedir?",
    qCode: "",
    answer:
      "Hydration hatası genellikle gerekli verinin zamanında sağlanamaması veya bileşenin beklenenden farklı bir state ile render edilmesi nedeniyle oluşur.",
    answerLi: [
      "Güncellenmesi gereken state veya prop geç gelirse hydration hatası olabilir.",
      "Örneğin, SSR ile sayfa yüklendiğinde beklenen veri eksikse, istemcide render edilen içerik sunucu ile uyuşmayabilir.",
      "Bunu önlemek için `useEffect` içinde veri yüklemeyi beklemek veya yüklenene kadar `null` döndürmek iyi bir pratiktir.",
    ],
    answerCode: "ReactDOM.hydrate(<App />, document.getElementById('root'));",
    hint: [
      "Zamanında gelmeyen veri",
      "SSR ve istemci farklılıkları",
      "useEffect ile veriyi bekleme",
    ],
  },
  {
    id: "react39",
    category: "REACT",
    subCategory: "element vs component",
    question: "'Element' ile 'Component' in farkı nedir?",
    qCode: "",
    answer:
      "React Element, kullanıcı arayüzünde neyin gösterileceğini tanımlayan basit bir objedir. React Component ise bir işlev veya sınıf olarak tanımlanan ve bir UI öğesi döndüren yapılardır.",
    answerLi: [
      "Element → `React.createElement('h1', null, 'Hello')` veya `<h1>Hello</h1>` gibi JSX ifadeleridir.",
      "Component → Fonksiyon veya sınıf olarak tanımlanır ve JSX döndürür (`function MyComponent() { return <h1>Hello</h1>; }`).",
      "Elementler değiştirilemez, ancak bileşenler state ve props ile dinamik olabilir.",
    ],
    answerCode: "",
    hint: [
      "Element → Saf nesne",
      "Component → JSX döndüren fonksiyon/sınıf",
      "State ve props farkı",
    ],
  },
  {
    id: "react40",
    category: "REACT",
    subCategory: "Authentication security",
    question:
      "'User Authentication' yazarken dikkat etmeniz gereken güvenlik prensipleri nelerdir?",
    qCode: "",
    answer:
      "User Authentication'da güvenliği sağlamak için birçok önlem alınmalıdır.",
    answerLi: [
      "Şifreler Hashlenmeli ve Salt eklenmeli (`bcrypt` gibi kütüphaneler kullanılmalı).",
      "JWT veya OAuth gibi güvenli kimlik doğrulama yöntemleri tercih edilmeli.",
      "CORS ve CSRF saldırılarına karşı koruma sağlanmalı.",
      "Brute Force saldırılarını önlemek için giriş deneme limiti eklenmeli.",
      "HTTPS kullanılarak veri iletimi şifrelenmeli.",
    ],
    answerCode: "",
    hint: [
      "Şifre güvenliği",
      "JWT/OAuth kullanımı",
      "CSRF & CORS koruması",
      "Brute Force önlemi",
    ],
  },
  {
    id: "react41",
    category: "REACT",
    subCategory: "Progressive Web Apps",
    question: "'Progressive Web Apps' kavramından kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Progressive Web Apps (PWA), web uygulamalarına mobil uygulama benzeri yetenekler kazandıran bir teknolojidir.",
    answerLi: [
      "Service Worker kullanarak çevrimdışı çalışma imkanı sunar.",
      "Push bildirimleri ve arka planda veri senkronizasyonu yapabilir.",
      "Mobil cihazlarda native uygulama gibi yüklenebilir (`Add to Home Screen`).",
    ],
    answerCode: "",
    hint: ["Çevrimdışı çalışma", "Service Worker", "Mobil uygulama deneyimi"],
  },
  {
    id: "react42",
    category: "REACT",
    subCategory: "App Performance",
    question:
      "React uygulamanızın performansını arttıracak stratejilerinizden kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "React uygulamalarında performansı artırmak için çeşitli stratejiler kullanılır.",
    answerLi: [
      "React.memo kullanarak bileşenlerin gereksiz render edilmesini önlemek.",
      "useMemo ve useCallback ile ağır hesaplamalar ve fonksiyon referanslarını optimize etmek.",
      "Lazy loading ile bileşenleri ve resimleri ihtiyaca göre yüklemek.",
      "Virtualization (`react-window` gibi kütüphaneler) ile büyük listeleri verimli işlemek.",
      "State yönetimini optimize etmek ve gereksiz context veya prop geçişlerini azaltmak.",
    ],
    answerCode: "",
    hint: [
      "React.memo",
      "useMemo & useCallback",
      "Lazy loading",
      "Virtualization",
      "State optimizasyonu",
    ],
  },

  // DOM & Browser
  {
    id: "dom01",
    category: "DOM & Browser",
    subCategory: "tanım (DOM)",
    question: "Dom nedir?",
    qCode: "",
    answer:
      "DOM (Document Object Model), HTML ve XML belgelerinin yapısal bir temsilidir ve Javascript ile bu belgeleri dinamik olarak manipüle etmemizi sağlar.",
    answerLi: [
      "Belgedeki her öğeyi bir nesne olarak temsil eder.",
      "Programatik olarak öğeleri ekleme, silme, değiştirme imkanı verir.",
      "Hiyerarşik bir ağaç yapısına sahiptir.",
    ],
    answerCode: "",
    hint: [
      "Web sayfasının programatik haritası gibi",
      "Öğeleri düzenleme-ekleme-silme : manipulasyon",
      "hiyerarşik",
    ],
  },
  {
    id: "dom02",
    category: "DOM & Browser",
    subCategory: "DOM Manipulation",
    question: "DOM nasıl Manipule edilir?",
    qCode: "",
    answer:
      "DOM, Javascript kullanılarak seçme, değiştirme, oluşturma ve silme işlemleriyle manipüle edilir.",
    answerLi: [
      "document.getElementById(), querySelector() ile öğeleri seçme.",
      "textContent, innerHTML ile içerik değiştirme.",
      "createElement(), appendChild() ile yeni öğeler ekleme.",
      "remove() ile öğeleri silme.",
    ],
    answerCode:
      "const element = document.getElementById('demo');\nelement.textContent = 'Merhaba Dünya!';",
    hint: [
      "DOM manipülasyonu, bir Word belgesindeki metni düzenlemek gibidir.",
    ],
  },
  {
    id: "dom03",
    category: "DOM & Browser",
    subCategory: "website'si nasıl çalışır",
    question: "Bir siteye girdiğinizde hangi işlemler gerçekleşir?",
    qCode: "",
    answer:
      "Bir siteye girişte DNS çözümlemesi, HTTP isteği, sunucu yanıtı ve tarayıcıda render işlemleri gerçekleşir.",
    answerLi: [
      "DNS çözümlemesi ile IP adresi bulunur.",
      "Tarayıcı HTTP isteği gönderir.",
      "Sunucu yanıt verir (HTML, CSS, JS dosyaları).",
      "Tarayıcı DOM ve CSSOM oluşturur, ardından render eder.",
    ],
    answerCode: "",
    hint: [
      "DNS > IP",
      "HTTP Request",
      "Server Response",
      "UI > DOM & rendering",
    ],
  },
  {
    id: "dom04",
    category: "DOM & Browser",
    subCategory: "UI Rendering",
    question: "Browser UI'ı nasıl render eder?",
    qCode: "",
    answer:
      "Tarayıcı, HTML'den DOM ağacını, CSS'den CSSOM ağacını oluşturur ve ardından bu ağaçları birleştirerek render tree oluşturur.",
    answerLi: [
      "HTML parse edilerek DOM oluşturulur.",
      "CSS parse edilerek CSSOM oluşturulur.",
      "Render tree oluşturulur.",
      "Layout ve Paint işlemleriyle ekrana çizilir.",
    ],
    answerCode: "",
    hint: ["HTML > CSS > Render tree > Layout & Painting"],
  },
  {
    id: "dom05",
    category: "DOM & Browser",
    subCategory: "JS Bundle",
    question: "JS Bundle Nedir? Birden fazla JS Bundle olabilir mi?",
    qCode: "",
    answer:
      "JS Bundle, Javascript dosyalarının optimize edilip tek bir dosya haline getirilmesidir.",
    answerLi: [
      "Performansı artırmak için kullanılır.",
      "Webpack, Parcel gibi araçlarla oluşturulur.",
      "Birden fazla bundle olabilir (örneğin: vendor.js, app.js) ;",
      "Kod-splitting uygulanmış ve her sayfa veya özellik için ayrı bundle oluşturulmuş olabilir.",
      "SSR veya CSR tabanlı bir yapı olabilir, sunucu ve istemci için farklı bundle’lar olabilir.",
      "Microfrontend mimarisi kullanılıyor olabilir ve her mikro uygulama kendi bundle’ına sahip olabilir.",
      "Web worker veya service worker gibi yardımcı thread'ler için ayrı bundle'lar oluşturulmuş olabilir.",
    ],
    answerCode: "",
    hint: ["Performans", "Code-Splitting", "MicroFrontend mimarisi", "workers"],
  },
  {
    id: "dom06",
    category: "DOM & Browser",
    subCategory: "Lazy Loading",
    question: "Lazy Loading nedir? Neden ve nasıl kullanırsınız?",
    qCode: "",
    answer:
      "Lazy Loading, gerekli olmayan içeriklerin yalnızca ihtiyaç duyulduğunda yüklenmesini sağlar.",
    answerLi: [
      "Sayfa yüklenme hızını artırır.",
      "Görseller ve ağır veri yükleri için kullanılır.",
      "loading='lazy' özelliğiyle kolayca uygulanabilir.",
    ],
    answerCode: "<img src='image.jpg' loading='lazy' alt='Lazy Loaded Image'>",
    hint: ["loading=lazy", "ağır media yükleri için"],
  },
  {
    id: "dom07",
    category: "DOM & Browser",
    subCategory: "Service & Web Worker",
    question: "Service Worker, Web Worker nedir?",
    qCode: "",
    answer:
      "Service Worker, arka planda çalışan bir proxy gibidir; Web Worker ise arka planda çalışan çoklu iş parçacıkları sağlar.",
    answerLi: [
      "Service Worker: Offline çalışabilirlik, push bildirimleri sağlar.",
      "Web Worker: Ana iş parçacığını bloklamadan kod çalıştırır.",
      "Her ikisi de performansı artırmak için kullanılır.",
    ],
    answerCode: "",
    hint: ["Service Worker - arka plan hizmeti", "Web Worker - ek bir çalışan"],
  },
  {
    id: "dom08",
    category: "DOM & Browser",
    subCategory: "DOM & Browser",
    question: "CDN nedir?",
    qCode: "",
    answer:
      "CDN (Content Delivery Network), web içeriklerini coğrafi olarak dağıtılmış sunucularda depolayarak hızlı erişim sağlar.",
    answerLi: [
      "Daha hızlı yükleme süreleri sağlar.",
      "Sunucu yükünü azaltır.",
      "Güvenilirlik ve ölçeklenebilirlik sunar.",
    ],
    answerCode: "",
    hint: ["yakın sunucu - daha hızlı", "sunucu yükünü azaltır"],
  },

  //API & Backend Interaction
  {
    id: "api01",
    category: "API & Backend Interaction",
    subCategory: "REST",
    question:
      "Rest Web servisleri nedir ? Kısaca avantajlarından bahseder misiniz?",
    qCode: "",
    answer:
      "REST (Representational State Transfer), istemci-sunucu mimarisi üzerinde HTTP protokolü kullanarak veri alışverişi yapılmasını sağlayan bir web servisidir.",
    answerLi: [
      "Basit ve hafif yapısı sayesinde hızlıdır.",
      "HTTP protokolü üzerinden GET, POST, PUT, DELETE metodlarıyla çalışır.",
      "Platform bağımsızdır ve kolayca entegre edilebilir.",
    ],
    answerCode: "",
    hint: ["Bağımsız Platform", "Http protokolü", "Kolay Entegrasyon"],
  },
  {
    id: "api02",
    category: "API & Backend Interaction",
    subCategory: "Axios",
    question: "Axios nedir ? Nasıl kullanırsınız?",
    qCode: "",
    answer:
      "Axios, tarayıcı ve Node.js ortamlarında HTTP istekleri göndermek için kullanılan popüler bir Javascript kütüphanesidir.",
    answerLi: [
      "Promise tabanlıdır ve asenkron çalışır.",
      "GET, POST, PUT, DELETE gibi HTTP isteklerini kolayca yapar.",
      "Hata yönetimi ve isteğe özel yapılandırma sağlar.",
    ],
    answerCode:
      "axios.get('https://api.example.com/data')\n  .then(response => console.log(response.data))\n  .catch(error => console.error(error));",
    hint: ["Promise tabanlı - asenkron", "HTTP istekleri için"],
  },
  {
    id: "api03",
    category: "API & Backend Interaction",
    subCategory: "Restful API",
    question: "Restful API nedir?",
    qCode: "",
    answer:
      "RESTful API, istemci ve sunucu arasında veri alışverişini sağlayan, REST mimarisine dayanan bir API türüdür.",
    answerLi: [
      "HTTP metodları (GET, POST, PUT, DELETE) ile çalışır.",
      "Veri formatı olarak genellikle JSON kullanılır.",
      "Stateless bir yapıya sahiptir, her istek bağımsızdır.",
    ],
    answerCode: "",
    hint: ["GET POST PUT DELETE", "Stateless yapı"],
  },
  {
    id: "api04",
    category: "API & Backend Interaction",
    subCategory: "Get Post Put Delete",
    question:
      "GET - POST - PUT - DELETE methodlarını açıklayınız ? Her bir işlem için POST methodu kullanılabilir mi?",
    qCode: "",
    answer:
      "GET, POST, PUT ve DELETE HTTP metodları RESTful API'lerde temel veri işlemleri için kullanılır.",
    answerLi: [
      "GET: Veri almak için kullanılır, veri değiştirmez.",
      "POST: Yeni veri oluşturmak için kullanılır.",
      "PUT: Var olan veriyi güncellemek için kullanılır.",
      "DELETE: Veriyi silmek için kullanılır.",
      "Her işlem için POST kullanılabilir, ancak REST mimarisine uygun değildir.",
    ],
    answerCode: "",
    hint: ["GET okumak", "POST eklemek", "PUT güncellemek", "DELETE silmek"],
  },

  //PERFORMANS & OPTİMİZASYON
  {
    id: "perf01",
    category: "Performans & Optimizasyon",
    subCategory: "App Lagging",
    question: "Bir sitedeki performans-lagging sorunlarını nasıl düzeltirsin?",
    qCode: "",
    answer:
      "Bir sitedeki performans sorunlarını analiz etmek ve düzeltmek için öncelikle performans ölçümleri yapılır, ardından optimizasyon teknikleri uygulanır.",
    answerLi: [
      "Chrome DevTools ile performans analizi yapmak.",
      "Gereksiz render'ları önlemek için React.memo(bileşen), useMemo(veri) ve useCallback kullanmak.",
      "Lazy loading ile büyük dosyaların yüklenmesini gerektiğinde yapmak.",
      "Ağ isteklerini azaltmak için caching mekanizmaları ve CDN kullanmak.",
      "Görselleri optimize etmek (örneğin, WebP formatı kullanmak, imgProxy kullanmak).",
      "JavaScript ve CSS dosyalarını minimize edip (bundle size), gereksiz yüklemeleri azaltmak.",
      "Tree shaking ile kullanılmayan fonksiyon ve değişkenleri final bundle'dan temizleyemek.",
    ],
    answerCode: "",
    hint: [
      "DevTools ile analiz",
      "React optimizasyonları",
      "Görsel ve network optimizasyonları",
      "CDN & Cache kullanımı",
      "Bundle size & three shaking",
    ],
  },
  {
    id: "perf02",
    category: "Performans & Optimizasyon",
    subCategory: "React Developer Tool",
    question: "React Developer Tool nedir? Nasıl kullanırsınız?",
    qCode: "",
    answer:
      "React Developer Tools, React uygulamalarının bileşen yapısını incelemek, state ve props'ları görüntülemek için kullanılan bir tarayıcı eklentisidir.",
    answerLi: [
      "Bileşen hiyerarşisini görselleştirir.",
      "State ve props değerlerini inceleyip değiştirmeye olanak tanır.",
      "React Profiler ile performans analizleri (re-render analizleri) yapılabilir.",
    ],
    answerCode: "",
    hint: [
      "React bileşenleri inceleme",
      "State & props görüntüleme",
      "Performans analizi",
    ],
  },
  {
    id: "perf03",
    category: "Performans & Optimizasyon",
    subCategory: "React profiler",
    question: "React Profiler nedir? Nasıl kullanırsınız?",
    qCode: "",
    answer:
      "React Profiler, React bileşenlerinin render sürelerini ölçmek ve performans darboğazlarını tespit etmek için kullanılan bir araçtır.",
    answerLi: [
      "React Developer Tools ile birlikte gelir, **Profiler** sekmesinden erişilebilir.",
      "Hangi bileşenin ne kadar süre harcadığını, kaç kez render edildiğini gösterir.",
      "Gereksiz render işlemlerini tespit edip `React.memo`, `useMemo`, `useCallback` gibi optimizasyonlar uygulamak için kullanılır.",
    ],
    answerCode: "",
    hint: [
      "Render süresi analizi",
      "Gereksiz render'ları tespit etme",
      "React Developer Tools içinde bulunur",
    ],
  },
  {
    id: "perf04",
    category: "Performans & Optimizasyon",
    subCategory: "img Optimizasyon",
    question: "imgProxy nedir, ne zaman kullanırsınız?",
    qCode: "",
    answer:
      "imgProxy, görselleri optimize etmek, yeniden boyutlandırmak ve sıkıştırmak için kullanılan bir görüntü proxy sunucusudur.",
    answerLi: [
      "Büyük boyutlu görselleri optimize ederek performansı artırır.",
      "Dinamik olarak resim boyutlandırma ve format dönüştürme yapılmasını sağlar.",
      "CDN entegrasyonuyla hızlı görsel yükleme sunar.",
    ],
    answerCode: "",
    hint: [
      "Görsel optimizasyon",
      "CDN cache kullanımı",
      "Güvenli görsel sunumu",
    ],
  },
  {
    id: "perf05",
    category: "Performans & Optimizasyon",
    subCategory: "Three Shaking",
    question:
      "Javascript te three shaking kavramını hiç duydunuz mu ? Kısaca açıklar mısınız",
    qCode: "",
    answer:
      "Evet, tree shaking JavaScript'te kullanılmayan kodları (dead code) kaldırarak bundle boyutunu optimize eden bir tekniktir. Özellikle ES6 modülleri (`import` ve `export`) kullanılarak gerçekleştirilen bu işlem, performansı artırır ve gereksiz kod yükünü azaltır.",
    answerLi: [
      "Tree shaking, kullanılmayan fonksiyon ve değişkenleri final bundle'dan temizler.",
      "Webpack, Rollup ve Vite gibi modern bundler'lar tree shaking desteği sunar.",
      "ES6 modülleri statik analiz ile çalıştığı için tree shaking daha verimli olur.",
      "Yan etkisi olmayan (pure) fonksiyonlar tree shaking için daha uygundur.",
    ],
    answerCode: "",
    hint: [
      "Tree shaking'in amacı: gereksiz kodları temizlemek",
      "ES6 modülleri ile daha etkili",
      "Webpack, Rollup gibi araçlar destekler",
    ],
  },

  // FRAMEWORKS
  {
    id: "framework01",
    category: "FRAMEWORKS",
    subCategory: "tanım (Frameworks)",
    question: "Framework kavramını açıklar mısınız? Library ile farkı nedir?",
    qCode: "",
    answer:
      "Framework, belirli bir yazılım geliştirme metodolojisi sunarken, Library belirli işlevleri yerine getiren bağımsız kod koleksiyonudur.",
    answerLi: [
      "Framework: Uygulamanın genel yapısını ve akışını belirler (örn. Angular, Next.js).",
      "Library: Belli bir işlevi yerine getirmek için kullanılır ve geliştirici tarafından çağrılır (örn. React, Lodash).",
      "Framework, kodun nasıl yazılacağını belirlerken, Library geliştiriciye daha fazla özgürlük sunar.",
      "React bağımsız bir kütüphanedir ve herhangi bir framework’e bağlı değildir.",
    ],
    answerCode: "",
    hint: [
      "Framework → Yapı ve akış belirler",
      "Library → Belirli işlevler sunar",
      "Kontrol farkı",
      "React → bağımsız kütüphane",
    ],
  },
  {
    id: "framework02",
    category: "FRAMEWORKS",
    subCategory: "bilinen Frameworks",
    question: "Hangi framework'lere aşinasınız?",
    qCode: "",
    answer:
      "React, Next.js, Redux Toolkit gibi Javascript tabanlı framework'lere aşinayım. Ayrıca Tailwind CSS gibi CSS framework'lerinde de deneyimim var.",
    answerLi: [
      "React: UI oluşturmak için güçlü bir kütüphane.",
      "Next.js: React tabanlı, SSR ve SSG özellikleriyle öne çıkar.",
      "Redux Toolkit: React uygulamalarında state yönetimi için kullanılır.",
      "Tailwind CSS: Utility-first yaklaşımıyla hızlı ve esnek stil oluşturmayı sağlar.",
    ],
    answerCode: "",
    hint: ["Next.js", "RTK", "NextJS", "Tailwind CSS"],
  },

  //Node.js
  {
    id: "node01",
    category: "Node.js",
    subCategory: "tanım (Node.js)",
    question: "Node.js nedir ? Javascript'ten ne farkı var ?",
    qCode: "",
    answer:
      "Node.js, tarayıcı dışında Javascript çalıştırmak için kullanılan, Chrome'un V8 motoru üzerine kurulmuş bir çalışma ortamıdır. Javascript genellikle tarayıcıda çalışırken, Node.js sunucu tarafında çalışır.",
    answerLi: [
      "Node.js sunucu tarafında, Javascript tarayıcıda çalışır.",
      "Node.js dosya sistemi, HTTP sunucusu gibi API'ler sağlar.",
      "Asenkron, event-driven (olaylar tetiklenir, sıralanır, yürütülür) bir mimariye sahiptir.",
    ],
    answerCode: "",
    hint: [
      "Node.js → Sunucu tarafında çalışır",
      "JavaScript → Tarayıcıda çalışır",
      "Event-driven, asenkron yapı",
    ],
  },
  {
    id: "node02",
    category: "Node.js",
    subCategory: "package.json",
    question: "'package.json' nedir ?",
    qCode: "",
    answer:
      "`package.json`, bir Node.js veya JavaScript projesinin bağımlılıklarını, script’lerini ve metadata bilgilerini tutan yapılandırma dosyasıdır.",
    answerLi: [
      "`dependencies` → Projede kullanılan kütüphaneleri içerir.",
      "`scripts` → Özel komutlar tanımlamak için kullanılır (npm komutları `npm start`, `npm test` gibi).",
      "`version`, `author`, `license` gibi proje bilgilerini barındırır.",
    ],
    answerCode: "",
    hint: ["Bağımlılıklar", "Npm Script'leri", "Proje bilgileri"],
  },
  {
    id: "node03",
    category: "Node.js",
    subCategory: "NODE_ENV",
    question: "'NODE_ENV' ne için kullanılır ?",
    qCode: "",
    answer:
      "NODE_ENV, bir Node.js uygulamasının hangi ortamda (development, production, test) çalıştığını belirlemek için kullanılan bir ortam değişkenidir.",
    answerLi: [
      "Performans ayarlarını optimize etmek için kullanılır.",
      "`NODE_ENV=development` → Geliştirme ortamı, hata ayıklama açık.",
      "`NODE_ENV=production` → Canlı ortam, performans optimizasyonları aktif.",
      "`NODE_ENV=test` → Test süreçleri için özel yapılandırmalar kullanılır.",
    ],
    answerCode: "",
    hint: [
      "Çalışma ortamı belirleme",
      "Development vs Production",
      "Performans ve hata ayıklama yönetimi",
    ],
  },
  {
    id: "node04",
    category: "Node.js",
    subCategory: "NPM",
    question: "'NPM' nedir ?",
    qCode: "",
    answer:
      "NPM (Node Package Manager), Node.js paketlerini yönetmek için kullanılan bir araçtır. Paket yüklemek, güncellemek ve projeye entegre etmek için kullanılır.",
    answerLi: [
      "Javascript paketlerini yüklemek için kullanılır.",
      "package.json ile entegrasyon sağlar.",
      "Global ve local paket yönetimi yapılabilir.",
    ],
    answerCode: "",
    hint: [
      "Node.js paket yöneticisi",
      "Bağımlılık yönetimi",
      "Script çalıştırma",
    ],
  },
  {
    id: "node05",
    category: "Node.js",
    subCategory: "Node.js Libraries",
    question:
      "Kullandığınız Node.js Library'lerinden örnekler verebilir misiniz?",
    qCode: "",
    answer: "Node.js projelerinde çeşitli kütüphaneler kullanılır. Örnekler:",
    answerLi: [
      "Nest.js: (kütüphane değil) node.js üzerinde çalışan bir framework, backend oluşturmak için.",
      "Mongoose: MongoDB ile çalışmak için.",
      "Axios: HTTP istekleri yapmak için.",
      "Jest: Test yazmak için.",
      "Axios → HTTP istekleri yapmak için kullanılan popüler bir kütüphane.",
      "jsonwebtoken → JWT tabanlı kimlik doğrulama için kullanılır.",
    ],
    answerCode: "",
    hint: [
      "Nest.js(framework olarak)",
      "Mongoose",
      "Axios",
      "jsonwebtoken",
      "jest",
    ],
  },
  {
    id: "node06",
    category: "Node.js",
    subCategory: "Express.js",
    question: "'Express Js' uygulaması nedir kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Express.js, Node.js üzerinde web uygulamaları ve API'ler geliştirmek için kullanılan minimalist bir web framework'üdür.",
    answerLi: [
      "HTTP isteklerini kolayca yönetir.",
      "Middleware desteği ile genişletilebilir.",
      "RESTful API'ler oluşturmak için idealdir.",
      "NestJS, Express.js üzerine inşa edilebilir ve ben de NestJS kullanırken Express ile çalışma fırsatım oldu.",
    ],
    answerCode: "",
    hint: [
      "Express.js → Minimal backend framework",
      "Middleware yapısı",
      "NestJS ile birlikte kullanılabilir",
    ],
  },
  {
    id: "node07",
    category: "ESLINT",
    subCategory: "Node.js fundamentals",
    question: "'ESLint' nedir ?",
    qCode: "",
    answer:
      "ESLint, JavaScript ve TypeScript kodlarının standartlara uygun yazılmasını sağlayan bir linting(statik kod analizi yapma) aracıdır.",
    answerLi: [
      "Kod standartlarını korur.",
      "Hata yakalama ve kod kalitesini artırır.",
      "Özelleştirilebilir kurallar sunar.",
    ],
    answerCode: "",
    hint: ["Kod analizi", "Standart belirleme", "Otomatik hata yakalama"],
  },

  //TypeScript
  {
    id: "ts01",
    category: "tanım (TypeScript)",
    subCategory: "TypeScript Fundamentals",
    question:
      "TypeScript nedir ? Kısaca avantaj ve dezavantajlarından bahseder misiniz?",
    qCode: "",
    answer:
      "TypeScript, Javascript'in üzerine inşa edilmiş, statik tip denetimi sağlayan bir programlama dilidir.",
    answerLi: [
      "**Avantajlar:**",
      "Statik tipleme ile hata yakalama ve bakım kolaylığı sağlar.",
      "Gelişmiş IDE desteği sunarak otocomplete ve hata kontrolü yapar.",
      "Büyük ölçekli projelerde kod organizasyonunu iyileştirir.",
      "**Dezavantajlar:**",
      "Derleme süreci gerektirir (`tsc` kullanımı).",
      "Yeni başlayanlar için öğrenme eğrisi JavaScript’e göre daha yüksektir.",
      "Bazı npm paketleri için type tanımlamaları eksik olabilir.",
    ],
    answerCode: "",
    hint: [
      "Statik tip desteği",
      "Hata yakalama & IDE desteği",
      "Derleme gerektirir",
    ],
  },
  {
    id: "ts02",
    category: "TypeScript",
    subCategory: "TS Variable Decleration",
    question:
      "TypeScript ile bir variable'ı nasıl deklare edersiniz ? Kısaca Javascript'ten farkı nedir?",
    qCode: "",
    answer:
      "TypeScript'te değişkenler type belirtilerek tanımlanır, Javascript'te ise type belirtmek gerekmez.",
    answerLi: [
      "JavaScript: `let age = 30;` → Dinamik tip ataması vardır, hata kontrolü yoktur.",
      "TypeScript: `let age: number = 30;` → Tür tanımlaması ile hata önlenir.",
      "TypeScript, derleme aşamasında tür uyuşmazlıklarını tespit ederek daha güvenli kod yazmayı sağlar.",
    ],
    answerCode: "let name: string = 'John';",
    hint: [
      "TypeScript → Tür tanımlama",
      "JavaScript → Dinamik tip atama",
      "TS: >> Güvenli ve hatasız kod yazımı",
    ],
  },
  {
    id: "ts03",
    category: "TypeScript",
    subCategory: "TSX",
    question: "TSX nedir?",
    qCode: "",
    answer:
      "TSX, TypeScript ile yazılmış React bileşenlerinde kullanılan JSX uzantılı dosya türüdür.",
    answerLi: [
      "JSX'in TypeScript destekli hali olarak çalışır.",
      "Tip güvenliği sağlar.",
      "React projelerinde `.tsx` uzantısı kullanılarak TypeScript ile JSX birleştirilir.",
    ],
    answerCode: "",
    hint: [
      "TypeScript + JSX",
      "Güvenli bileşen tanımlama",
      "React projelerinde `.tsx` uzantısı",
    ],
  },

  {
    id: "ts04",
    category: "TypeScript",
    subCategory: "Create Obj TS",
    question:
      "TypeScript ile bir objeyi nasıl oluşturursunuz, Javascript'ten kısaca farkı nedir?",
    qCode: "",
    answer:
      "TypeScript'te objeler tip tanımlamaları ile oluşturulur, Javascript'te ise serbesttir.",
    answerLi: [
      "TypeScript: `const user: { name: string; age: number } = { name: 'Ali', age: 30 };`",
      "JavaScript: `const user = { name: 'Ali', age: 30 };` → Tür denetimi yoktur.",
      "TypeScript, yanlış tür atamalarını engelleyerek daha güvenli kod yazmayı sağlar.",
    ],
    answerCode: "",
    hint: [
      "TypeScript → Tür tanımlı objeler",
      "JavaScript → Dinamik objeler",
      "Hata önleme ve güvenlik",
    ],
  },
  {
    id: "ts05",
    category: "TypeScript",
    subCategory: "TS Target Compability",
    question:
      "TypeScript kodunun eski tarayıcılarla uyumluluk için ES5'e aktarıldığından nasıl emin olabilirsiniz?",
    qCode: "",
    answer:
      "TypeScript'te tsconfig.json dosyasında 'target' ayarı kullanılarak kodun hangi Javascript sürümüne derleneceği belirlenir.",
    answerLi: [
      "tsconfig.json içinde target: 'ES5' olarak ayarlanır.",
      "Derleme sırasında tsc kullanılır.",
      "Babel gibi transpiler araçlarıyla da uyumluluk sağlanabilir.",
    ],
    answerCode: "",
    hint: ["tsconfig.json → target: ES5", "TypeScript derleyicisi (`tsc`)"],
  },
  {
    id: "ts06",
    category: "TypeScript",
    subCategory: ".ts vs .tsx",
    question: "'.ts' ile '.tsx' uzantılarının farkını kısaca açıklar mısınız?",
    qCode: "",
    answer:
      ".ts, saf TypeScript dosyaları için kullanılırken, .tsx React ile TypeScript kullanan dosyalar için JSX desteği sağlar.",
    answerLi: [
      ".ts sadece TypeScript kodlarını içerir.",
      ".tsx hem TypeScript hem de JSX kodlarını destekler.",
      "React projelerinde .tsx kullanılır.",
    ],
    answerCode: "",
    hint: [
      "`.ts` → JSX içermez",
      "`.tsx` → JSX destekler",
      "React projelerinde `.tsx` kullanılır",
    ],
  },
  {
    id: "ts07",
    category: "TypeScript",
    subCategory: "readonly",
    question:
      "readonly modifier nedir, immutable properties oluşturmak için nasıl kullanırsınız?",
    qCode: "",
    answer:
      "readonly, TypeScript'te bir değişkenin veya objenin özelliklerinin değiştirilemez olmasını sağlar.",
    answerLi: [
      "readonly ile tanımlanan bir property sadece tanımlandığı anda atanabilir, yanlışlıkla değişiklik yapılmasını engeller.",
      "Immutable veri yapıları oluşturmak için kullanılır.",
      "Özellikle constant objeler için faydalıdır.",
    ],
    answerCode: "",
    hint: [
      "Değiştirilemez property",
      "Tanımlama sırasında atanabilir",
      "Veri bütünlüğünü korur",
    ],
  },

  {
    id: "ts08",
    category: "TypeScript",
    subCategory: "tsc",
    question:
      "TypeScript kodunun Javascript koduna nasıl compile oluşunu kısaca açıklar mısınız?",
    qCode: "",
    answer:
      "TypeScript kodu, TypeScript Compiler (tsc) kullanılarak Javascript'e dönüştürülür.",
    answerLi: [
      "tsc komutu ile derlenir.",
      "tsconfig.json dosyası ile derleyici ayarları yapılır.",
      "Target ayarı ile ES5 veya ES6 gibi farklı Javascript sürümlerine dönüştürülebilir.",
    ],
    answerCode: "tsc app.ts // app.js dosyası oluşturur",
    hint: ["tsc", "target"],
  },

  {
    id: "ts09",
    category: "TypeScript",
    subCategory: "type inference",
    question: "type inference nedir?",
    qCode: "",
    answer:
      "Type inference, TypeScript'in bir değişkenin türünü otomatik olarak tahmin etmesidir.",
    answerLi: [
      "Belirli bir değer atandığında TypeScript tipi otomatik olarak belirler.",
      "Kod daha kısa ve temiz olur.",
      "Örnek: let name = 'John'; // TypeScript otomatik olarak string olarak algılar.",
    ],
    answerCode: "",
    hint: ["Türü otomatik belirleme"],
  },

  {
    id: "ts10",
    category: "TypeScript",
    subCategory: "ts types",
    question: "TypeScript'teki type'lar nelerdir?",
    qCode: "",
    answer:
      "TypeScript'te birçok tür bulunmaktadır ve bunlar temel, birleşimsel ve özel türler olarak ayrılabilir.",
    answerLi: [
      "Temel Türler: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`",
      "Any & Unknown: `any` (herhangi bir tür), `unknown` (bilinmeyen tür, güvenli any)",
      "Literal Türler: Sabit değerler (`'hello'`, `42`, `true` gibi belirli değerler)",
      "Union & Intersection: `union (|)` (birden fazla tür), `intersection (&)` (tüm türleri birleştirir)",
      "Object & Array: `{}` (nesne), `Array<T>` veya `T[]` (dizi)",
      "Tuple: `[number, string]` gibi belirli uzunluk ve türlere sahip diziler",
      "Enum: `enum Color { Red, Green, Blue }` gibi önceden tanımlı değer kümeleri",
      "Void & Never: `void` (geri dönüşü olmayan fonksiyonlar), `never` (hiçbir şey döndürmeyen, hata fırlatan fonksiyonlar)",
      "Type & Interface: `type` ve `interface` ile özel tür tanımlamaları",
      "Mapped & Conditional Types: `keyof`, `typeof`, `infer`, `extends` gibi gelişmiş tür sistemleri",
    ],
    answerCode: "",
    hint: [
      "Temel türler",
      "Any ve Unknown",
      "Union ve Intersection",
      "Enum, Tuple, Void, Never",
      "Type & Interface",
    ],
  },
  {
    id: "ts11",
    category: "TypeScript",
    subCategory: "primative ts types",
    question: "'Temel' (Primative) Ts türleri nelerdir?",
    qCode: "",
    answer:
      "TypeScript'teki temel (primitive) türler, değişmez ve doğrudan değer tutan türlerdir.",
    answerLi: [
      "string → Metinsel verileri temsil eder.",
      "number → Sayısal değerler (tamsayı ve ondalık).",
      "boolean → `true` veya `false` değerlerini alır.",
      "null → Boş veya atanmış değeri olmayan bir değişken.",
      "undefined → Tanımlanmamış değişkenleri ifade eder.",
      "bigint → Büyük tamsayı değerleri tutar.",
      "symbol → Benzersiz ve değiştirilemez değerler oluşturur.",
    ],

    answerCode: "",
    hint: [
      "Primative Data Types",
      "String, Number, Boolean",
      "Null ve Undefined",
      "BigInt ve Symbol",
    ],
  },
  {
    id: "ts12",
    category: "TypeScript",
    subCategory: "literal ts types",
    question: "'Literal' Ts türleri nelerdir?",
    qCode: "",
    answer:
      "Literal türler, belirli değerlerle sınırlı değişken türleridir ve sadece tanımlanan değerleri alabilirler.",
    answerLi: [
      "String Literal → `'yes' | 'no' | 'maybe'` gibi belirli string değerleri.",
      "Number Literal → `0 | 1 | 2` gibi belirli sayısal değerler.",
      "Boolean Literal → `true | false` sadece belirtilen boolean değerlerini alır.",
      "Template Literal → `` `Hello ${string}` `` gibi dinamik string türleri oluşturur.",
    ],
    answerCode: "",
    hint: [
      "Belirli string, number ve boolean değerleri",
      "Sınırlı değer kümesi",
      "Template literal türleri",
    ],
  },
  {
    id: "ts13",
    category: "TypeScript",
    subCategory: "union vs intersection",
    question: "'Union ve Intersection Ts türleri nedir?",
    qCode: "",
    answer:
      "Union (`|`) birden fazla türden birini kabul ederken, Intersection (`&`) birden fazla türü birleştirerek tek bir tür oluşturur.",
    answerLi: [
      "Union (`|`) → `type Status = 'active' | 'inactive' | 'pending'` gibi birden fazla türü içerebilir.",
      "Intersection (`&`) → `type User = Person & Admin` gibi iki türün özelliklerini birleştirir.",
      "Union daha esnek ve geniş kapsamlıdır, Intersection ise daha spesifik ve sıkı bir tür oluşturur.",
    ],
    answerCode: "",
    hint: [
      "Union: Birden fazla türden biri",
      "Intersection: Türleri birleştirir",
    ],
  },
  {
    id: "ts14",
    category: "TypeScript",
    subCategory: "tuple ts type",
    question: "'Tuple Ts türü nedir?",
    qCode: "",
    answer:
      "Tuple, TypeScript'te sabit uzunlukta ve belirli türlerde elemanlardan oluşan dizilerdir.",
    answerLi: [
      "Belirli sırada farklı türler içerebilir: `[string, number]`",
      "Diziye göre daha katıdır, belirlenen tür ve sıraya uymak zorundadır.",
      "Rest parametreleri ile genişletilebilir: `[number, ...string[]]`",
    ],
    answerCode: "",
    hint: [
      "Sırasına göre tanımlanmış türler",
      "Sabit uzunluk",
      "Farklı türleri içerebilir",
      "Diziye göre daha katıdır",
    ],
  },
  {
    id: "ts15",
    category: "TypeScript",
    subCategory: "enum ts type",
    question: "'Enum Ts türü nedir?",
    qCode: "",
    answer:
      "Enum, TypeScript'te isimlendirilmiş sabit değerler kümesi oluşturmaya yarayan bir türdür.",
    answerLi: [
      "Numeric Enum → Varsayılan olarak sayısal değerler alır: `enum Color { Red, Green, Blue }`",
      "String Enum → String değerlerle kullanılabilir: `enum Role { Admin = 'ADMIN', User = 'USER' }`",
      "Const Enum → Performans için derleme zamanı sabitleri oluşturur: `const enum Size { Small, Medium, Large }`",
    ],
    answerCode: `enum Role { Admin = 'ADMIN', User = 'USER' }`,
    hint: [
      "İsimlendirilmiş sabit değerler",
      "Numeric ve String Enum",
      "Const Enum ile performans artışı",
    ],
  },
  {
    id: "ts16",
    category: "TypeScript",
    subCategory: "void vs never",
    question:
      "'Void' , 'Never' TS türlerini açıklar mısınız? Nasıl kullanırsınız ?",
    qCode: "",
    answer:
      "Void, fonksiyonların değer döndürmediğini ifade ederken, Never hiçbir zaman bir değer üretmeyen fonksiyonlar için kullanılır.",
    answerLi: [
      "Void → `function logMessage(): void { console.log('Hello'); }`",
      "Never → `function throwError(): never { throw new Error('Hata!'); }`",
      "Void genellikle yan etkili (console.log vb.) işlemler için, Never ise hata fırlatan veya sonsuz döngüye giren fonksiyonlar için kullanılır.",
    ],
    answerCode: `
      function logMessage(): void {
        console.log('Bu fonksiyon bir değer döndürmez');
      }
        
      function throwError(): never {
        throw new Error('Bu fonksiyon asla tamamlanmaz');
      }
      `,
    hint: [
      "Void: Değer döndürmeyen fonksiyon",
      "Never: Hiçbir zaman tamamlanmayan fonksiyonlar",
    ],
  },
  {
    id: "ts17",
    category: "TypeScript",
    subCategory: "mapped & conditional ts types",
    question:
      "'Mapped (`keyof`, `typeof`,) & Conditional Types: (`infer`, `extends`) kullanımlarını açıklar mısınız? Nasıl kullanırsınız ?",
    qCode: "",
    answerLi: [
      "`keyof` → Bir nesnenin anahtarlarını tür olarak döndürür: `type Keys = keyof User;`",
      "`typeof` → Bir değişkenin türünü alır: `type T = typeof someVar;`",
      "`extends` → Tür karşılaştırması yaparak koşullu türler tanımlar: `T extends string ? string : number;`",
      "`infer` → Koşullu türler içinde tür çıkarımı yapar: `T extends Promise<infer R> ? R : never;`",
    ],
    answerCode: `
      type User = { name: string; age: number };
      type UserKeys = keyof User; // 'name' | 'age'
      
      const obj = { name: 'Alice', age: 30 };
      type ObjType = typeof obj; // { name: string; age: number }
      
      type Check<T> = T extends string ? 'String' : 'Not String';
      type Result = Check<number>; // 'Not String'

      type ExtractPromise<T> = T extends Promise<infer R> ? R : never;
      type Data = ExtractPromise<Promise<number>>; // number`,
    hint: [
      "keyof: Nesne anahtarlarını alır",
      "typeof: Değişken türünü alır",
      "extends: Tür karşılaştırması yapar",
      "infer: Tür çıkarımı yapar",
    ],
  },
  {
    id: "ts18",
    category: "TypeScript",
    subCategory: "interface vs type",
    question: "'interface' ile 'type alias' farkı nedir?",
    qCode: "",
    answer:
      "interface, nesne yapıları tanımlamak için kullanılırken, type alias hem nesneleri hem de birleşik (union) türleri tanımlamak için kullanılır.",
    answerLi: [
      "interface genişletilebilir (extends), type birleşik (union) ve kesişim (intersection) türler için uygundur.",
      "type ile primitive türler, tuple veya union type tanımlanabilir.",
      "interface, class'lar için daha uygundur.",
      "Primitive, tuple ve union türleri `type` ile tanımlanabilir ama `interface` ile tanımlanamaz.",
    ],
    answerCode: "",
    hint: [
      "interface → Genişletilebilir",
      "type → Daha esnek kullanım",
      "Union & Tuple farkı",
    ],
  },
  {
    id: "ts19",
    category: "TypeScript",
    subCategory: "generics, interface, class, decorators, module",
    question:
      "TypeScript'teki 'Generics', 'interface', 'Class', 'Decorators', 'Module' kavramlarından kısaca bahseder misiniz ?",
    qCode: "",
    answer:
      "TypeScript'te Generics, Interface, Class, Decorators ve Module, ölçeklenebilir ve esnek kod yazmayı sağlayan temel yapılardır.",
    answerLi: [
      "Generics → Türü dinamik olarak belirleyerek yeniden kullanılabilir kod yazmayı sağlar.",
      "Interface → Nesne yapısını tanımlayan şema belirler.",
      "Class → Nesne yönelimli programlamada kullanılan yapı.",
      "Decorators → Metadata ekleyerek class'ları veya metodları genişletir.",
      "Module → Kodun bölümlere ayrılmasını sağlar.",
    ],
    answerCode: `
    function identity<T>(arg: T): T { return arg; } //Generics

    interface User { name: string; age: number; } //Interface

    class Person { constructor(public name: string) {} } //Class

    @Controller() class MyController {} //@Controller

    export function sayHello() {} //(./module)
    import { sayHello } from './module';
    `,
    hint: [
      "Generics: Türü dinamik belirler",
      "Interface: Nesne şeması oluşturur",
      "Class: OOP yapısı",
      "Decorators: Metadata ekler",
      "Module: Kod modülerliği sağlar",
    ],
  },
  {
    id: "ts20",
    category: "TypeScript",
    subCategory: "decorators",
    question: "'decorators' nedir?",
    qCode: "",
    answer:
      "Decorator, class'lar veya class üyelerine ek işlevsellik kazandırmak için kullanılan özel bir TypeScript özelliğidir.",
    answerLi: [
      "Class, method, property veya parameter üzerinde çalışabilir.",
      "Fonksiyon olarak tanımlanır ve `@decoratorName` şeklinde kullanılır (`@Component({...})`).",
      "Sınıflara, metodlara, property’lere eklenerek davranışlarını değiştirebilir.",
      "Genellikle meta-programlama ve dependency injection için kullanılır.",
    ],
    answerCode: `
    function Logger(constructor: Function) {
      console.log('Logging...');
    }
    
    @Logger
    class Person {}
    `,
    hint: ["Class'lara eklenir", "Davranış değiştirme"],
  },
  {
    id: "ts21",
    category: "TypeScript",
    subCategory: "as const",
    question: "'as const' assertion'u kısaca açıklar mısınız?",
    qCode: "",
    answer:
      "'as const', bir değer veya objeyi immutable (değiştirilemez) hale getiren TypeScript özelliğidir.",
    answerLi: [
      "Veriyi readonly olarak işaretler.",
      "Array ve object’lerde immutable hale getirerek değişiklik yapılmasını engeller.",
    ],
    answerCode: `
      const roles = ['admin', 'user'] as const;

      //readonly olarak tanımlanır
      readonly ['admin', 'user']. 
      `,
    hint: [
      "Literal tür belirleme",
      "Immutable hale getirme",
      "Readonly nesne ve diziler",
    ],
  },

  //SECURITY
  {
    id: "security01",
    category: "XSS",
    subCategory: "Cross-Site Scripting",
    question:
      "Web güvenliğindeki Cross-Site Scripting (XSS) nedir , nasıl engellersiniz?",
    qCode: "",
    answer:
      "Cross-Site Scripting (XSS), kötü niyetli kullanıcıların web uygulamalarına zararlı script eklemesi saldırısıdır.",
    answerLi: [
      "Girdi doğrulama (input validation) ile kullanıcı verilerini filtrelemek.",
      "Çıktı kodlama (output encoding) kullanarak HTML içine gömülen verileri güvenli hale getirmek.",
      "Content Security Policy (CSP) uygulayarak zararlı komut dosyalarının çalışmasını engellemek.",
      "Javascript kütüphanelerinde güvenli API'ler kullanmak.",
    ],
    answerCode: "",
    hint: [
      "Zararlı script enjeksiyonu",
      "Girdi sanitizasyonu",
      "CSP kullanımı",
    ],
  },
  {
    id: "security02",
    category: "Security",
    subCategory: "CORS Policy",
    question:
      "Cross-Origin Resource Sharing (CORS) policy nedir , nasıl çalışır?",
    qCode: "",
    answer:
      "CORS (Cross-Origin Resource Sharing), farklı origin’ler (kaynaklar) arasında yapılan HTTP isteklerine tarayıcı tarafından uygulanan güvenlik politikasıdır.",
    answerLi: [
      "Tarayıcı, başka bir origin’den gelen isteklere varsayılan olarak izin vermez.",
      "CORS, HTTP başlıkları aracılığıyla hangi domain'lerin belirli kaynaklara erişebileceğini belirler.",
      "Access-Control-Allow-Origin başlığı ile hangi domain'lere izin verileceği ayarlanır.",
      "Sunucu, gelen isteğin kaynağını kontrol eder ve izin verirse tarayıcıya yanıt gönderir.",
    ],
    answerCode: "",
    hint: [
      "Farklı origin’ler arası istek",
      "Tarayıcı güvenlik politikası",
      "Access-Control-Allow-Origin başlığı",
    ],
  },
  //git
  {
    id: "git01",
    category: "git version control",
    subCategory: "git version control",
    question: "versiyon kontrol sistemlerinden kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Versiyon kontrol sistemleri, yazılım projelerinde kod değişikliklerini takip etmek ve yönetmek için kullanılan araçlardır.",
    answerLi: [
      "Kod geçmişini tutar ve farklı versiyonlara dönmeyi sağlar.",
      "Takım çalışmasında iş birliğini kolaylaştırır.",
      "Örneğin: Git, SVN.",
      "GitHub, GitLab, Bitbucket gibi platformlar Git tabanlı kod paylaşımı ve iş birliği sağlar.",
    ],
    answerCode: "",
    hint: [
      "Kod değişikliklerini takip etme",
      "Git & SVN",
      "GitHub, GitLab gibi Git Tabanlı platformlar",
    ],
  },
  {
    id: "git02",
    category: "git version control",
    subCategory: "Github kullanımı",
    question: "Github kullanırken dikkat ettiğiniz detaylar nelerdir ?",
    qCode: "",
    answer:
      "GitHub kullanırken proje yönetimi, versiyon kontrolü ve ekip iş birliği açısından bazı önemli noktalara dikkat ederim.",
    answerLi: [
      "Düzenli commit mesajları (`feat: yeni özellik eklendi`, `fix: hata düzeltildi`).",
      "Branch stratejisi (main, develop, feature branches) kullanımı.",
      "Pull request ve code review süreçlerine dikkat etmek.",
      "README, .gitignore, LICENSE gibi dosyalar ile projenin düzenini sağlamak.",
    ],
    answerCode: "",
    hint: [
      "Düzenli commit mesajları",
      "Branch yönetimi",
      "Pull request & code review",
      "README ve .gitignore kullanımı",
    ],
  },
  {
    id: "git03",
    category: "git version control",
    subCategory: "branch",
    question: "Branch nedir?",
    qCode: "",
    answer:
      "Branch, projedeki kod tabanının bağımsız bir kopyasını oluşturmak için kullanılır. Bu sayede yeni özellikler geliştirilebilir veya hatalar düzeltilebilir.",
    answerLi: [
      "Ana koddan bağımsız olarak çalışmayı sağlar.",
      "Merge işlemleriyle tekrar ana dal (main branch) ile birleştirilebilir.",
      "Git'te 'main' veya 'master' genellikle ana branch'tir.",
    ],
    answerCode: "",
    hint: [
      "Bağımsız geliştirme ortamı",
      "Ana branch: main/master",
      "Feature & bugfix branch'leri",
    ],
  },
  {
    id: "git04",
    category: "git version control",
    subCategory: "Pull Request",
    question: "Pull Request nedir?",
    qCode: "",
    answer:
      "Pull Request (PR), bir branch'teki değişikliklerin ana koda entegre edilmesi için yapılan bir istek sürecidir.",
    answerLi: [
      "Kod inceleme ve tartışma imkanı sağlar. (Code Review)",
      "Takım içi iş birliğini destekler.",
      "Genellikle GitHub, GitLab gibi platformlarda kullanılır.",
      "Merge işlemiyle değişiklikler `main` veya `develop` branch’ine eklenir.",
    ],
    answerCode: "",
    hint: [
      "Branch değişikliklerini ana koda ekleme",
      "Kod inceleme süreci",
      "Merge işlemi",
    ],
  },
  {
    id: "git05",
    category: "git version control",
    subCategory: "git komutları",
    question:
      "'git push', 'git pull', 'git add', 'git reset', 'git merge', 'git fetch' komutlarından kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Bu komutlar Git'te kod versiyon kontrolü için temel işlemleri gerçekleştirir.",
    answerLi: [
      "`git add` → Değişiklikleri commit için hazırlayan (staging) komut.",
      "`git commit -m 'mesaj'` → Değişiklikleri lokal depoya kaydeder.",
      "`git push` → Lokal commit'leri uzak (remote) depoya gönderir.",
      "`git pull` → Uzak depodaki güncellemeleri alıp yerel branch’e birleştirir.",
      "`git merge` → Farklı branch’leri birleştirir.",
      "`git reset` → Commit’leri veya staging alanını geri alır.",
      "`git fetch` → Uzak depodan değişiklikleri alır ama çalışma dizinine uygulamaz.",
    ],
    answerCode: "",
    hint: [
      "`git add` → Staging",
      "`git commit` → Lokal kayıt",
      "`git push` → Remote’a gönderme",
      "`git pull` → Güncellemeleri çekme",
      "`git merge` → Branch birleştirme",
    ],
  },
  {
    id: "git06",
    category: "git version control",
    subCategory: "git komutları",
    question:
      "'git config', 'git init',  'git status' komutlarından kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Bu komutlar, Git yapılandırması ve sürüm kontrolü işlemleri için kullanılır.",
    answerLi: [
      "`git config` → Git kullanıcı ayarlarını yapılandırır (`git config --global user.name 'Adınız'`).",
      "`git init` → Yeni bir Git deposu oluşturur.",
      "`git status` → Çalışma alanındaki değişiklikleri ve takip edilmeyen dosyaları gösterir.",
    ],
    answerCode: "",
    hint: [
      "`git config` → Kullanıcı ayarları",
      "`git init` → Yeni repo oluşturma",
      "`git status` → Değişiklikleri görüntüleme",
    ],
  },
  {
    id: "git07",
    category: "git version control",
    subCategory: "git komutları",
    question: "'git pull', 'git fetch' farkı nedir?",
    qCode: "",
    answer:
      "`git pull`, uzak depodaki değişiklikleri alıp çalışma dizinine uygular, `git fetch` ise sadece güncellemeleri indirir ama birleştirme yapmaz.",
    answerLi: [
      "`git pull` = `git fetch` + `git merge`, uzak değişiklikleri doğrudan çalışma dizinine entegre eder.",
      "`git fetch` sadece değişiklikleri indirir ama mevcut branch’e etkilemez.",
      "Eğer manuel olarak değişiklikleri incelemek istiyorsanız `git fetch`, direkt güncellemek için `git pull` kullanılır.",
    ],
    answerCode: "",
    hint: [
      "`git pull` → Güncellemeleri indirir ve uygular",
      "`git fetch` → Güncellemeleri indirir ama birleştirme yapmaz",
      "Manuel kontrol için `git fetch` tercih edilir",
    ],
  },
  {
    id: "git08",
    category: "git version control",
    subCategory: "merge conflict",
    question:
      "'merge conflict', nedir? Bir conflict'i nasıl çözümlendirirsiniz?",
    qCode: "",
    answer:
      "Merge conflict, iki farklı branch’te yapılan değişikliklerin çakışması sonucu Git’in otomatik birleştirme yapamaması durumudur.",
    answerLi: [
      "Çakışmalar genellikle aynı satırda yapılan farklı değişikliklerden kaynaklanır.",
      "Çözüm için: `git status` ile hangi dosyalarda conflict olduğu kontrol edilir.",
      "İlgili dosyayı açarak hangi versiyonun merge edilmesi gerektiği kararı alınır.",
      "Çakışmaları çözdükten sonra `git add .` ve `git commit -m 'Conflict resolved'` ile süreç tamamlanır.",
    ],
    answerCode: "",
    hint: [
      "Farklı branch’lerdeki değişikliklerin çakışması",
      "`git status` ile çakışma kontrolü",
      "Manuel düzenleme ve commit işlemi",
    ],
  },

  //Others
  {
    id: "oth01",
    category: "others",
    subCategory: "D.R.Y. Concept",
    question: "D.R.Y. Concept'ten kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "D.R.Y. (Don't Repeat Yourself), kod tekrarını önleyerek daha temiz, modüler ve yönetilebilir yazılım geliştirme prensibidir.",
    answerLi: [
      "Tekrarlanan kodları ortak fonksiyonlar, bileşenler ve helper modüller haline getirerek projelerde uyguluyorum.",
      "State yönetiminde merkezi çözümler (Redux, Zustand) kullanarak aynı veriyi farklı bileşenlerde tekrar tanımlamıyorum.",
      "Custom hooks yazarak tekrar eden mantıkları soyutluyorum.",
      "SCSS'te değişkenler kullanarak (`$primary-color`) stil tekrarını minimize ediyorum.",
      "Tekrar eden buton, kart gibi bileşenleri `StyledButton`, `StyledCard` gibi reusable component'lere ayırıyorum.",
    ],
    answerCode: "",
    hint: [
      "Kod tekrarını önleme",
      "Modüler fonksiyonlar ve bileşenler",
      "Merkezi State yönetimi",
      "Custom hook ve helper fonksiyonlar",
      "styled-components",
    ],
  },
  {
    id: "oth02",
    category: "others",
    subCategory: "MongoDB",
    question: "Hiç MongoDB kullandınız mı? kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Evet, MongoDB kullandım. MongoDB, belge odaklı (document-based) bir NoSQL veritabanıdır.",
    answerLi: [
      "Verileri JSON benzeri BSON formatında saklar.",
      "Esnek bir veri yapısına sahiptir.",
      "Özellikle büyük veri ve ölçeklenebilir uygulamalarda tercih edilir.",
    ],
    answerCode: "",
    hint: ["NoSQL veritabanı", "BSON veri formatı"],
  },
  {
    id: "oth03",
    category: "others",
    subCategory: "MySQL",
    question: "MySQL nedir? kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "MySQL, açık kaynaklı bir ilişkisel veritabanı yönetim sistemidir, verileri tablo halinde saklar.",
    answerLi: [
      "Verileri **tablolar** halinde saklar ve SQL sorguları ile yönetilir.",
      "İlişkisel yapısı sayesinde farklı tablolar arasında veri bağlantıları kurar.",
      "Büyük ölçekli sistemlerde performanslı ve güvenilir bir veritabanı çözümüdür.",
    ],
    answerCode: "",
    hint: [
      "İlişkisel veritabanı",
      "SQL tabanlı sorgular",
      "Güvenilir ve ölçeklenebilir yapı",
    ],
  },
  {
    id: "oth04",
    category: "others",
    subCategory: "JQuery",
    question: "JQuery nedir? kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "jQuery, JavaScript ile DOM manipülasyonunu kolaylaştıran hafif bir kütüphanedir.",
    answerLi: [
      "Selektörler (`$('selector')`) ile HTML öğelerini kolayca seçip değiştirebilir.",
      "Tarayıcı uyumluluğu sağlar.",
      "Modern projelerde popülerliği azalmış olsa da hala bazı eski projelerde kullanılır (Eski Tarayıcı Desteği).",
    ],
    answerCode: "",
    hint: ["DOM manipülasyonu", "Eski tarayıcı desteği"],
  },
  {
    id: "oth05",
    category: "others",
    subCategory: "KISS Principle",
    question: "KISS Principle nedir?",
    qCode: "",
    answer:
      "KISS (Keep It Simple, Stupid) prensibi, yazılım geliştirme süreçlerinde basitlikten yana olmayı savunur.",
    answerLi: [
      "Kodun anlaşılır ve sade olması önemlidir.",
      "Gereksiz karmaşıklıktan kaçınmak hedeflenir.",
      "Bakımı ve test edilmesi daha kolay hale gelir.",
    ],
    answerCode: "",
    hint: ["Gereksiz karmaşıklıktan kaçın", "Az Öz"],
  },
  {
    id: "oth06",
    category: "others",
    subCategory: "Cookies",
    question: "Cookies'den ne anlıyorsunuz?",
    qCode: "",
    answer:
      "Cookies, kullanıcı bilgilerinin küçük veri parçaları halinde tarayıcıda saklanmasını sağlayan dosyalardır.",
    answerLi: [
      "Kullanıcı tercihleri veya oturum bilgileri tutulabilir.",
      "HTTP istekleriyle birlikte sunucuya otomatik olarak gönderilir.",
      "Genellikle kimlik doğrulama ve takip işlemleri için kullanılır.",
    ],
    answerCode: "",
    hint: ["Tarayıcıda veri saklama", "Oturum yönetimi"],
  },
  {
    id: "oth07",
    category: "others",
    subCategory: "General web dev vs web designer",
    question: "Web developer ile web designer arasındaki fark nedir?",
    qCode: "",
    answer:
      "Web developer, web sitelerinin işlevselliğini geliştirirken, web designer sitenin görünümünü ve kullanıcı deneyimini tasarlar.",
    answerLi: [
      "Web developer: HTML, CSS, Javascript, backend dilleri ile çalışır.",
      "Web designer: UI/UX tasarımı, renk teorisi ve görsel estetik odaklıdır.",
      "Developer, dinamik özellikleri kodlarken; Designer, görselliği planlar.",
    ],
    answerCode: "",
    hint: [
      "Web Developer → Kodlama",
      "Web Designer → Görsel tasarım",
      "UI/UX vs Fonksiyonellik",
    ],
  },
  {
    id: "oth08",
    category: "others",
    subCategory: "BACKEND",
    question: "Backend nedir?",
    qCode: "",
    answer:
      "Backend, bir uygulamanın sunucu tarafında çalışan, veritabanı işlemleri ve iş mantığını yöneten bölümdür.",
    answerLi: [
      "Kullanıcıdan gelen istekleri işler ve uygun yanıtları döndürür.",
      "Sunucu, veritabanı ve API yönetimi yapılır.",
      "Veri işleme ve doğrulama backend tarafında gerçekleşir.",
      "Node.js, Express.js, MongoDB, NestJS gibi teknolojiler kullanılır.",
    ],
    answerCode: "",
    hint: [
      "Sunucu tarafı işlemler",
      "Veri yönetimi & API geliştirme",
      "Kimlik doğrulama & güvenlik",
      "MongoDb",
      "NestJS",
      "Express.js",
    ],
  },
  {
    id: "oth09",
    category: "others",
    subCategory: "ClickJagging",
    question: "ClickJagging nedir?",
    qCode: "",
    answer:
      "Clickjacking, kullanıcıyı aldatıcı arayüzlerle manipüle ederek, istenmeyen işlemleri fark etmeden yapmasını sağlayan bir güvenlik saldırısıdır.",
    answerLi: [
      "Kötü niyetli siteler, başka bir sayfanın görünmez iframe’ini kullanarak tuşlara veya butonlara kullanıcı fark etmeden tıklamasını sağlayabilir.",
      "UI Redressing olarak da bilinir.",
      "Güvenlik başlıkları (X-Frame-Options) ile korunabilir.",
    ],
    answerCode: "",
    hint: ["Görünmez Clickable iframe"],
  },
  {
    id: "oth10",
    category: "others",
    subCategory: "User Centered Design",
    question: "User Centered Design nedir?",
    qCode: "",
    answer:
      "User Centered Design (UCD), tasarımda kullanıcı ihtiyaçlarını ve deneyimlerini merkeze alan bir yaklaşımdır.",
    answerLi: [
      "Kullanıcı geri bildirimlerine dayanır.",
      "Kullanıcı dostu arayüzler oluşturur.",
      "Sürekli test ve iyileştirme süreçleri içerir.",
    ],
    answerCode: "",
    hint: "UCD, bir ürünün tasarımında kullanıcıyı merkeze koymak gibidir.",
  },
  {
    id: "oth11",
    category: "others",
    subCategory: "webpack",
    question: "Webpack nedir? Ne zaman kullanmalısınız?",
    qCode: "",
    answer:
      "Webpack, Javascript uygulamaları için modül paketleyicidir. Kodları, stilleri ve varlıkları optimize ederek tek bir dosyada toplar.",
    answerLi: [
      "Javascript, CSS ve diğer dosyaları paketler.",
      "Performansı artırmak için kodu küçültür (minify) ve optimize eder.",
      "Büyük projelerde modüler yapıyı yönetmek için kullanılır.",
    ],
    answerCode: "",
    hint: "Webpack, tüm dosyaları bir araya getirip optimize eden bir derleyici gibidir.",
  },
  {
    id: "oth12",
    category: "others",
    subCategory: "Nest.js",
    question: "Nest.js nedir?",
    qCode: "",
    answer:
      "Evet, Nest.js ile çalıştım. Nest.js, modüler yapısı, TypeScript desteği, dekoratör tabanlı programlama ve bağımlılık enjeksiyonu gibi özellikleriyle ölçeklenebilir backend uygulamaları geliştirmek için ideal bir framework.",
    answerLi: [
      "Nest.js, TypeScript ile yazılmış, ölçeklenebilir ve modüler bir Node.js framework'üdür. MVC yapısını ve dekoratör tabanlı programlamayı destekler.",
      "TypeScript desteği ile güçlü tip kontrolü sağlar.",
      "Modüler yapısı sayesinde büyük projelerde yönetilebilirliği artırır.",
      "JWT ile kimlik basit user authentication yazdım",
      "Mongoose ile MongoDB bağlantısı ve product yönetimi sağladım.",
      "Docker ile ortam oluşturup ve dağıtım kolaylığı sağladım.",
      "Stripe entegrasyonu ile sanal ödeme sistemi dahil ettim.",
    ],
    answerCode: "",
    hint: [
      "Nest.js modüler yapı",
      "JWT auth",
      "Mongoose ve MongoDB",
      "Stripe entegrasyonu",
      "Docker kullanımı",
    ],
  },
  {
    id: "oth13",
    category: "others",
    subCategory: "NoSQl",
    question: "NoSQl nedir?",
    qCode: "",
    answer:
      "NoSQL, esnek şemaya sahip, ilişkisel olmayan bir veritabanı türüdür.",
    answerLi: [
      "REST veya GraphQL API üzerinden NoSQL veritabanından veri çekilebilir.",
      "MongoDB gibi NoSQL veritabanlarında saklanan verileri UI'de kullanılabilir.",
      "Kimlik doğrulama süreçlerinde NoSQL tabanlı kullanıcı verilerini işlenebilir.",
      "Gerçek zamanlı uygulamalarda Firebase veya MongoDB Atlas gibi NoSQL çözümleri kullanılabilir.",
    ],
    answerCode: "",
    hint: [
      "API üzerinden NoSQL ile veri alışverişi",
      "MongoDB ve Firebase entegrasyonu",
      "Kimlik doğrulama verileri",
      "Gerçek zamanlı veri akışı",
    ],
  },
];
