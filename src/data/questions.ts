import { questionProps } from "@/types/types";

export const questions: questionProps[] = [
  //Personal
  {
    id: "pers1",
    category: "Personal",
    subCategory: "Personal intro",
    question: "Kendinizden bahseder misiniz ?",
    qCode: "",
    answer: "",
    answerLi: [],
    answerCode: "",
    hint: "",
  },
  {
    id: "pers2",
    category: "Personal",
    subCategory: "Personal progress",
    question:
      "Mimarlık kariyerinizi neden bıraktınız ? Neden yazılım alanına yöneldiniz ?",
    qCode: "",
    answer: "",
    answerLi: [],
    answerCode: "",
    hint: "",
  },
  {
    id: "pers3",
    category: "Personal",
    subCategory: "Personal why",
    question: "neden sizi işe alalım ?",
    qCode: "",
    answer: "",
    answerLi: [],
    answerCode: "",
    hint: "",
  },

  // HTML :
  {
    id: "html1",
    category: "HTML",
    subCategory: "Html Fundamentals",
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
    hint: "Bir bina planı gibi; sayfanın temel yapısını belirler.",
  },
  {
    id: "html2",
    category: "HTML",
    subCategory: "Html5",
    question: "HTML5 in önemli yeni özellikleri neler ?",
    qCode: "",
    answer:
      "HTML5, modern web uygulamaları için geliştirilmiş yeni API'lar ve semantik etiketler sunar.",
    answerLi: [
      "Semantik etiketler: <header>, <footer>, <article>, <section>",
      "Multimedya desteği: <audio>, <video>",
      "Canvas API: 2D grafik çizimi",
      "Local Storage ve Session Storage",
      "Geolocation API",
    ],
    answerCode: "",
    hint: "HTML5, eski HTML'in modernleştirilmiş sürümüdür; tıpkı eski bir arabanın elektrikli hale getirilmesi gibi.",
  },
  {
    id: "html3",
    category: "HTML",
    subCategory: "Html tags",
    question: "HTML tag'leri nelerdir ?",
    qCode: "",
    answer:
      "HTML tag'leri, web sayfalarındaki içerikleri tanımlamak için kullanılan işaretleme etiketleridir.",
    answerLi: [
      "Başlık etiketleri: <h1> - <h6>",
      "Paragraf: <p>",
      "Bağlantı: <a>",
      "Görsel: <img>",
      "Liste: <ul>, <ol>, <li>",
    ],
    answerCode: "",
    hint: "Bir belgedeki başlıklar veya paragraflar gibi içerik yapı taşlarıdır.",
  },
  {
    id: "html4",
    category: "HTML",
    subCategory: "Html tags vs elements",
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
    hint: "Tag bir çerçeve ise, element o çerçevedeki tablo ve resimlerle dolu bir sanat eseridir.",
  },
  {
    id: "html5",
    category: "HTML",
    subCategory: "Html DOCTYPE",
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
    hint: "Bir kitabın başındaki içerik sayfası gibidir; ne tür bir belgeyle karşı karşıya olduğunuzu gösterir.",
  },
  {
    id: "html6",
    category: "HTML",
    subCategory: "Html tags",
    question: "HTML de bir text'i nasıl ayırabilirsiniz ?",
    qCode: "",
    answer:
      "HTML'de bir metni ayırmak için yapısal ve biçimsel etiketler kullanılır.",
    answerLi: [
      "<br> ile satır sonu ekleyerek",
      "<p> ile paragraflar oluşturularak",
      "<hr> ile yatay çizgiyle bölerek",
      "<div> veya <span> ile blok veya satır içi ayırarak",
    ],
    answerCode: "",
    hint: "Bir kitapta bölümler için başlıklar veya paragraflar nasıl kullanılıyorsa, HTML’de de benzer etiketlerle metin ayrılır.",
  },
  {
    id: "html7",
    category: "HTML",
    subCategory: "Html tags",
    question: "div ile span arasındaki fark nedir ?",
    qCode: "",
    answer: "div blok düzeyinde, span satır içi bir HTML etiketidir.",
    answerLi: [
      "div: Blok düzeyinde, tam satırı kaplar.",
      "span: Satır içi, sadece içeriği kadar yer kaplar.",
      "div yapısal düzen için, span küçük metin parçalarını stil vermek için kullanılır.",
    ],
    answerCode: "",
    hint: "div bir kutu gibidir, span ise kutunun içindeki etiket gibi küçük bir detaydır.",
  },
  {
    id: "html8",
    category: "HTML",
    subCategory: "Html Coding",
    question: "3 kolon ve 3 sıradan oluşan bir table oluşturabilir misiniz ?",
    qCode: "",
    answer: "Evet, aşağıdaki HTML kodu 3x3'lük bir tablo oluşturur.",
    answerLi: [],
    answerCode:
      "<table border='1'>\n  <tr>\n    <td>1,1</td><td>1,2</td><td>1,3</td>\n  </tr>\n  <tr>\n    <td>2,1</td><td>2,2</td><td>2,3</td>\n  </tr>\n  <tr>\n    <td>3,1</td><td>3,2</td><td>3,3</td>\n  </tr>\n</table>",
    hint: "Tablolar satırlar (<tr>) ve hücreler (<td>) ile oluşturulur.",
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
    hint: "SSR hazır bir yemeği sunmak gibidir; CSR ise malzemeleri verip yemeği kullanıcıya yaptırmak gibidir.",
  },
  {
    id: "html10",
    category: "HTML",
    subCategory: "Html class",
    question: "HTML deki 'class' özelleiğini kısaca açıklar mısınız?",
    qCode: "",
    answer:
      "HTML'de class, birden fazla öğeye stil veya işlevsellik uygulamak için kullanılan bir özelliktir.",
    answerLi: [
      "CSS ile stillendirme yapılmasını sağlar.",
      "Javascript ile öğeleri seçmek için kullanılır.",
      "Birden fazla öğeye aynı anda uygulanabilir.",
    ],
    answerCode: '<div class="container">İçerik</div>',
    hint: "Class, bir grup öğrenciye aynı dersi vermek gibidir; hepsi aynı özellikleri paylaşır.",
  },
  {
    id: "html11",
    category: "HTML",
    subCategory: "Html Fundamentals",
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
    answerCode:
      '<html lang="tr">\n<head>\n  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">\n  <style> body { font-family: \'Roboto\', sans-serif; } </style>\n</head>\n<body>Merhaba Dünya</body>\n</html>',
    hint: "Dil ayarı bir kitabın dilini belirtmek gibidir, font ise yazı tipini seçmek gibi.",
  },
  {
    id: "html12",
    category: "HTML",
    subCategory: "Html Fundamentals",
    question: "<meta> tag'inin HTML'deki rolü nedir ?",
    qCode: "",
    answer:
      "<meta> etiketi, sayfa hakkında meta veriler tanımlamak için kullanılır.",
    answerLi: [
      'Karakter seti belirtir: <meta charset="UTF-8">',
      'SEO için açıklama ekler: <meta name="description" content="Açıklama">',
      'Responsive tasarım için: <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    ],
    answerCode:
      '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    hint: "<meta>, bir kitabın arka kapağındaki özet gibidir; sayfa hakkında bilgi verir.",
  },
  {
    id: "html13",
    category: "HTML",
    subCategory: "Html Fundamentals",
    question: "'id' ile 'class' özelliklerinin farkı nedir ?",
    qCode: "",
    answer:
      "'id' benzersiz bir öğeyi tanımlar, 'class' birden fazla öğeye uygulanabilir.",
    answerLi: [
      "id benzersizdir, bir sayfada yalnızca bir kez kullanılır.",
      "class, aynı stil veya işlevi paylaşan birden fazla öğede kullanılabilir.",
      "CSS ve JS'de id için #, class için . kullanılır.",
    ],
    answerCode:
      '<div id="header">Başlık</div>\n<div class="box">Kutu 1</div>\n<div class="box">Kutu 2</div>',
    hint: "id, bir kişinin kimlik numarası gibidir; class ise bir grubun ortak adı gibidir.",
  },
  {
    id: "html14",
    category: "HTML",
    subCategory: "Html Fundamentals",
    question: "Javascript kodunu HTML'ye nasıl entegre edersiniz ?",
    qCode: "",
    answer: "Javascript kodu, HTML'ye <script> etiketiyle gömülür.",
    answerLi: [
      "İçerik olarak eklenebilir: <script>console.log('Hello');</script>",
      'Harici dosya olarak eklenebilir: <script src="app.js"></script>',
      "Genellikle <body> veya <head> içinde yer alır.",
    ],
    answerCode:
      "<script>\n  alert('Merhaba Dünya!');\n</script>\n\n<script src=\"script.js\"></script>",
    hint: "<script>, HTML'ye interaktif özellikler eklemek için bir köprü gibidir.",
  },

  //CSS
  {
    id: "css01",
    category: "CSS",
    subCategory: "CSS Fundamentals",
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
    hint: "CSS, bir web sayfasına makyaj yapmak gibidir; içerik aynı kalır, görünüm değişir.",
  },
  {
    id: "css02",
    category: "CSS",
    subCategory: "CSS Fundamentals",
    question: "CSS selectors nelerdir kısaca açıklar mısınız ?",
    qCode: "",
    answer:
      "CSS seçiciler, HTML öğelerini hedefleyerek stil uygulamak için kullanılır.",
    answerLi: [
      "Element seçici: p { color: red; }",
      "Class seçici: .box { padding: 10px; }",
      "ID seçici: #header { background: blue; }",
      "Descendant seçici: div p { font-size: 14px; }",
      'Attribute seçici: [type="text"] { border: 1px solid; }',
    ],
    answerCode: "",
    hint: "CSS seçiciler, bir kitapta belirli kelimeleri işaretlemek gibi çalışır.",
  },
  {
    id: "css03",
    category: "CSS",
    subCategory: "CSS Fundamentals",
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
    hint: "Flex, bir sıra dizmek gibidir; Grid ise bir satranç tahtası gibi çalışır.",
  },
  {
    id: "css04",
    category: "CSS",
    subCategory: "CSS Fundamentals",
    question: "Css styling i HTML ye aktarmanın yolları neler ?",
    qCode: "",
    answer: "CSS stillerini HTML'ye üç farklı şekilde uygulayabilirsiniz.",
    answerLi: [
      'Inline CSS: <p style="color: red;">Metin</p>',
      "Internal CSS: <style> p { color: blue; } </style> etiketiyle",
      'External CSS: <link rel="stylesheet" href="styles.css"> ile harici dosya kullanarak',
    ],
    answerCode: "",
    hint: "Inline CSS bir not almak gibidir, internal kısa bir özet, external ise ayrı bir defter gibi çalışır.",
  },
  {
    id: "css05",
    category: "CSS",
    subCategory: "CSS Fundamentals",
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
    hint: "Birden fazla kural olduğunda, tıpkı ailede en son sözü annenin söylemesi gibi, en güçlü veya en son kural kazanır.",
  },
  {
    id: "css06",
    category: "CSS",
    subCategory: "CSS Frameworks",
    question: "Kullandığınız css framework'lerden bahsedebilir misiniz ?",
    qCode: "",
    answer:
      "Tailwind CSS ve Radix UI gibi modern CSS framework'lerini kullanıyorum.",
    answerLi: [
      "Tailwind CSS: Utility-first yapısıyla hızlı ve esnek tasarım sağlar.",
      "Radix UI: Erişilebilir ve özelleştirilebilir UI bileşenleri sunar.",
      "Bootstrap: Hızlı prototipleme için popüler bir framework.",
    ],
    answerCode: "",
    hint: "Bootstrap, Tailwind CSS",
  },
  {
    id: "css07",
    category: "CSS",
    subCategory: "CSS Fundamentals",
    question: "Mobile cihazlar için media stillerini nasıl düzenlersiniz ?",
    qCode: "",
    answer: "Responsive tasarım için media query kullanırım.",
    answerLi: [
      "Min-width ve max-width ile cihaz boyutlarına göre stil uygulanır.",
      "Flexbox ve Grid ile uyumlu çalışır.",
      "Örnek: @media (max-width: 768px) { body { font-size: 14px; } }",
    ],
    answerCode:
      "@media (max-width: 768px) {\n  body {\n    font-size: 14px;\n  }\n}",
    hint: "Farklı ekran boyutlarına uyum sağlamak için kullanılır.",
  },
  {
    id: "css08",
    category: "CSS",
    subCategory: "CSS Fundamentals",
    question: "Margin ile Padding arasındaki fark nedir ?",
    qCode: "",
    answer: "Margin, dış boşluk; padding ise iç boşluktur.",
    answerLi: [
      "Margin: Öğeler arasındaki mesafeyi ayarlar.",
      "Padding: İçerik ile kenarları arasındaki boşluğu belirler.",
      "Margin, öğeler arasında; padding, öğe içinde çalışır.",
    ],
    answerCode: "",
    hint: "Margin iki kutu arasındaki boşluk, padding ise kutunun içindeki yastık gibidir.",
  },
  {
    id: "css09",
    category: "CSS",
    subCategory: "CSS Fundamentals",
    question: "z-index ten kısaca bahseder misiniz ?",
    qCode: "",
    answer: "z-index, öğelerin üst üste bindirilme sırasını belirler.",
    answerLi: [
      "Pozitif değerler öne, negatif değerler arkaya iter.",
      "Sadece position (relative, absolute, fixed) ile çalışır.",
      "Daha yüksek z-index değeri, daha üstte görünür.",
    ],
    answerCode: "div {\n  position: absolute;\n  z-index: 10;\n}",
    hint: "Bir tabloya tabak yerleştirmek gibi; en yüksek z-index en üstte olur.",
  },
  {
    id: "css10",
    category: "CSS",
    subCategory: "CSS Fundamentals",
    question: "'display:none' ile 'visibilty:hidden' in temel farkı nedir ?",
    qCode: "",
    answer:
      "'display: none' öğeyi tamamen gizler, 'visibility: hidden' ise görünmez yapar ama alanını korur.",
    answerLi: [
      "display: none öğeyi DOM'dan çıkarır, yer kaplamaz.",
      "visibility: hidden görünmez yapar ama boş alan bırakır.",
      "display: none performans açısından daha hızlıdır.",
    ],
    answerCode:
      "div.hidden {\n  display: none;\n}\n\ndiv.invisible {\n  visibility: hidden;\n}",
    hint: "display:none tamamen kaybolmak, visibility:hidden ise görünmez bir hayalet gibi olmak gibidir.",
  },
  {
    id: "css11",
    category: "CSS",
    subCategory: "CSS Fundamentals",
    question: "Flexbox nedir ?",
    qCode: "",
    answer:
      "Flexbox, öğeleri bir konteyner içinde esnek bir şekilde hizalamak ve düzenlemek için kullanılan bir CSS düzen modelidir.",
    answerLi: [
      "Tek boyutlu (yatay veya dikey) düzen sağlar.",
      "Öğeleri kolayca ortalar, sıralar ve hizalar.",
      "Kapsayıcıda display: flex kullanılır.",
    ],
    answerCode:
      "div.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
    hint: "Flexbox, bir kutunun içindeki öğeleri esnek bir şekilde taşımak gibidir.",
  },
  {
    id: "css12",
    category: "CSS",
    subCategory: "CSS Fundamentals",
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
    hint: "Bir kutuya fazla eşya koymak gibi; taşanı gizleyebilir, gösterebilir veya kaydırabilirsiniz.",
  },
  {
    id: "css13",
    category: "CSS",
    subCategory: "CSS Fundamentals",
    question: "CSS transitions özelliği nedir ?",
    qCode: "",
    answer: "Transitions, CSS özelliklerinde yumuşak geçiş efektleri sağlar.",
    answerLi: [
      "Renk, boyut, konum gibi özellikler arasında animasyonlu geçiş yapılır.",
      "transition: property duration ease-in-out şeklinde kullanılır.",
      "Hover efektleri için yaygındır.",
    ],
    answerCode:
      "button {\n  transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n  background-color: blue;\n}",
    hint: "Bir ışığın aniden açılması yerine yavaşça yanması gibi geçiş sağlar.",
  },
  {
    id: "css14",
    category: "CSS",
    subCategory: "CSS Fundamentals",
    question: "@keyframes nedir ?",
    qCode: "",
    answer:
      "@keyframes, CSS animasyonları için hareketin aşamalarını tanımlar.",
    answerLi: [
      "Animasyonun başlangıç ve bitiş noktalarını belirler.",
      "% ile ara adımlar tanımlanabilir.",
      "animation özelliği ile birlikte kullanılır.",
    ],
    answerCode:
      "@keyframes slide {\n  from { transform: translateX(0); }\n  to { transform: translateX(100px); }\n}\n\ndiv {\n  animation: slide 2s infinite;\n}",
    hint: "@keyframes bir dans koreografisi gibidir; her adımı tanımlar.",
  },
  {
    id: "css15",
    category: "CSS",
    subCategory: "CSS Fundamentals",
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
    answerCode: "div {\n  position: absolute;\n  top: 10px;\n  left: 20px;\n}",
    hint: "Position, bir harita üzerindeki işaretler gibi öğeleri yerleştirir.",
  },
  {
    id: "css16",
    category: "CSS",
    subCategory: "CSS Fundamentals",
    question: "CSS ile nasıl responsive tasarımlar üretirsiniz ?",
    qCode: "",
    answer:
      "Responsive tasarımlar için media queries, flexbox, grid ve yüzdelik değerler kullanılır.",
    answerLi: [
      "Media Queries ile farklı ekran boyutlarına göre stiller tanımlanır.",
      "Flexbox ve Grid ile esnek düzen sağlanır.",
      "Yüzde (%), vw, vh gibi birimler kullanılır.",
    ],
    answerCode:
      "@media (max-width: 768px) {\n  body {\n    font-size: 14px;\n  }\n}",
    hint: "Responsive tasarım, su gibi; bulunduğu kaba uyum sağlar.",
  },
  {
    id: "css17",
    category: "CSS",
    subCategory: "CSS Fundamentals",
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
    subCategory: "CSS Fundamentals",
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
    hint: "Adaptive, önceden dikilmiş bir kıyafet gibidir; responsive ise elastik kumaş gibi her bedene uyar.",
  },
  {
    id: "css19",
    category: "CSS",
    subCategory: "CSS Fundamentals sass",
    question: "'sass' nedir ? css ile farkı nedir ?",
    qCode: "",
    answer:
      "SASS (Syntactically Awesome Stylesheets), CSS için güçlü özellikler sunan bir ön işlemcidir.",
    answerLi: [
      "Değişkenler, mixinler ve nesting özellikleri sağlar.",
      "CSS'e derlenir, daha modüler ve okunabilir kod yazılır.",
      "Fonksiyonlar ve mantıksal yapılar desteklenir.",
    ],
    answerCode:
      "$primary-color: #3498db;\n\nbody {\n  background-color: $primary-color;\n}",
    hint: "SASS, CSS'in süper güçlerle donatılmış hali gibidir.",
  },

  // Temel Javascript
  {
    id: "js01",
    category: "Javascript",
    subCategory: "Variables",
    question: "Variable tipleri nelerdir ?",
    qCode: "",
    answer:
      "Javascript'te değişkenler primitive ve reference olmak üzere iki ana tipe ayrılır.",
    answerLi: [
      "Primitive: Number, String, Boolean, Null, Undefined, Symbol, BigInt",
      "Reference: Object, Array, Function, Date, RegExp, Map, Set",
    ],
    answerCode: "",
    hint: "Primitive değerler basit veri tipleridir, reference değerler karmaşık veri yapılarıdır.",
  },
  {
    id: "js02",
    category: "Javascript",
    subCategory: "Variables",
    question: "Primitive ve Reference data tiplerinin farkları nelerdir ?",
    qCode: "",
    answer:
      "Primitive değerler doğrudan saklanır, reference değerler bellekte bir adres üzerinden tutulur.",
    answerLi: [
      "Primitive: Değer kopyalanır.",
      "Reference: Bellek adresi kopyalanır, değişiklik orijinali etkiler.",
      "Primitive immutable, reference mutable olabilir.",
    ],
    answerCode: "",
    hint: "Primitive bir kağıttaki yazı gibidir, reference ise bir dosyaya olan bağlantı gibi çalışır.",
  },
  {
    id: "js03",
    category: "Javascript",
    subCategory: "Variables",
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
    hint: "Immutable bir taş tablete yazmak gibidir, mutable bir deftere yazmak gibidir.",
  },
  {
    id: "js04",
    category: "Javascript",
    subCategory: "Variables",
    question: "Var-Let-Const farklarını açıklar mısınız ?",
    qCode: "",
    answer:
      "var, let ve const Javascript'te değişken tanımlamak için kullanılır, ancak kapsam ve değiştirilebilirlik açısından farklılık gösterirler.",
    answerLi: [
      "var: Function scope, hoisting yapılır.",
      "let: Block scope, yeniden atanabilir.",
      "const: Block scope, sabit değerler için kullanılır ve yeniden atanamaz.",
    ],
    answerCode: "var x = 10;\nlet y = 20;\nconst z = 30;",
    hint: "var eski model bir araç, let modern bir araç, const ise sabit bir bisiklet gibidir; hareket eder ama değişmez.",
  },
  {
    id: "js05",
    category: "Javascript",
    subCategory: "Variables",
    question: "Javascript'teki 'truthy' - 'falsy' değer nedir ?",
    qCode: "",
    answer:
      "Truthy, boolean bağlamında true olarak değerlendirilen; falsy ise false olarak değerlendirilen değerlerdir.",
    answerLi: [
      "Falsy: false, 0, '', null, undefined, NaN",
      "Truthy: Boş olmayan stringler, sayılar (0 hariç), objeler, diziler",
      "Koşul ifadelerinde sıkça kullanılır.",
    ],
    answerCode:
      "if (0) { console.log('Falsy'); } else { console.log('Bu ifade çalışır'); }",
    hint: "Truthy bir ışığın yanması gibi, falsy ise ışığın tamamen kapalı olması gibidir.",
  },
  {
    id: "js06",
    category: "Javascript",
    subCategory: "Variables",
    question: "Bir variable'ı nasıl korursunuz ?",
    qCode: "",
    answer:
      "Bir değişkeni korumak için const kullanabilir veya kapsülleme (closure) ile erişimi sınırlayabilirsiniz.",
    answerLi: [
      "const ile yeniden atanmasını engelleyebilirsiniz.",
      "Closure kullanarak değişkene dışarıdan erişimi kısıtlayabilirsiniz.",
      "Object.freeze() ile nesneleri değiştirilemez hale getirebilirsiniz.",
    ],
    answerCode:
      "const PI = 3.14;\n\nfunction secureVar() {\n  let secret = 'protected';\n  return function() {\n    return secret;\n  }\n}",
    hint: "const bir kilit gibidir, closure ise gizli bir kasa gibi.",
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
    ],
    answerCode:
      "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');",
    hint: "Event Loop bir garson gibidir; siparişleri sırayla alır, hızlı olanları hemen getirir.",
  },
  {
    id: "js08",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question:
      "Javascript 'staticaly typed' mi 'dynamically typed' bir dil midir ?",
    qCode: "",
    answer: "Javascript, dynamically typed bir dildir.",
    answerLi: [
      "Değişkenlerin tipi çalışma zamanında belirlenir.",
      "Bir değişken farklı türlerde değerler alabilir.",
      "TypeScript, Javascript'in statically typed sürümüdür.",
    ],
    answerCode: "let x = 42;\nx = 'hello'; // Geçerli",
    hint: "Dynamically typed bir dil, kılık değiştiren bir karakter gibidir; her an farklı bir role bürünebilir.",
  },
  {
    id: "js09",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question:
      "Javascript compiled(derlenmiş) mi yoksa interpreted(yorumlanmış) bir dil midir ?",
    qCode: "",
    answer:
      "Javascript hem interpreted hem de Just-In-Time (JIT) compiled bir dildir.",
    answerLi: [
      "Tarayıcılar JS kodunu yorumlar (interpreted).",
      "Modern motorlar (V8) performans için JIT compilation kullanır.",
      "Bu sayede hem hızlı hem de esnek çalışır.",
    ],
    answerCode: "",
    hint: "Javascript, bir metni hem okuyup hem de gerektiğinde hızlı bir özet çıkaran biri gibidir.",
  },
  {
    id: "js10",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Javascript ve Typescript farkı kısaca nedir ?",
    qCode: "",
    answer:
      "Javascript dinamik tipli bir dilken, TypeScript statik tip desteği sağlar.",
    answerLi: [
      "TypeScript, Javascript'in süper setidir.",
      "TypeScript derlenir, Javascript yorumlanır.",
      "TS ile daha güvenli ve hatasız kod yazılır.",
    ],
    answerCode: "let message: string = 'Hello TypeScript';",
    hint: "Javascript serbest bir sanatçıysa, TypeScript bir mühendis gibidir; kurallara bağlıdır.",
  },
  {
    id: "js11",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Bir Javascript kodunu HTML dosyasına nasıl eklersiniz ?",
    qCode: "",
    answer:
      "Javascript kodunu HTML'ye <script> etiketiyle entegre edebilirsiniz.",
    answerLi: [
      "Inline olarak: <script>console.log('Hello');</script>",
      "Harici dosya olarak: <script src='app.js'></script>",
      "Genellikle <body> veya <head> içinde kullanılır.",
    ],
    answerCode:
      "<script>\n  alert('Merhaba Dünya!');\n</script>\n\n<script src=\"script.js\"></script>",
    hint: "<script> etiketi, HTML ile JS arasında bir köprü gibidir.",
  },
  {
    id: "js12",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Window objesini açıklar mısınız ?",
    qCode: "",
    answer:
      "Window objesi, tarayıcıdaki global nesnedir ve tüm global değişkenleri, fonksiyonları ve özellikleri içerir.",
    answerLi: [
      "Global scope'daki her şey window objesinin bir parçasıdır.",
      "Tarayıcıyla ilgili özelliklere erişim sağlar (alert, confirm, localStorage).",
      "window.console.log() = console.log() ile aynıdır.",
    ],
    answerCode:
      "console.log(window.innerWidth); // Tarayıcı genişliğini gösterir",
    hint: "Window, bir odayı temsil eder; odadaki her şey ona bağlıdır.",
  },
  {
    id: "js13",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Event Loop'u açıklar mısınız ?",
    qCode: "",
    answer:
      "Event Loop, Javascript'in asenkron işlemleri yönetmesini sağlayan mekanizmadır.",
    answerLi: [
      "Call Stack ve Task Queue arasında çalışır.",
      "Senkrondan asenkrona geçişi yönetir.",
      "Sürekli döngü halinde çalışır.",
    ],
    answerCode:
      "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');",
    hint: "Event Loop, bir garson gibidir; siparişleri sırayla alır, hızlı olanları hemen getirir.",
  },
  {
    id: "js14",
    category: "Javascript",
    subCategory: "Javascript Fundamentals Objects",
    question: "Javascript'te nasıl obje oluşturursunuz ?",
    qCode: "",
    answer:
      "Javascript'te obje literal, constructor veya Object.create() ile oluşturulabilir.",
    answerLi: [
      "Literal: const obj = { key: 'value' };",
      "Constructor: const obj = new Object();",
      "Object.create(): const obj = Object.create(null);",
    ],
    answerCode: "const person = {\n  name: 'John',\n  age: 30\n};",
    hint: "Bir obje, etiketli kutular gibi; her kutuda bir bilgi saklanır.",
  },
  {
    id: "js15",
    category: "Javascript",
    subCategory: "Javascript Fundamentals Arrays",
    question: "Javascript'te nasıl array oluşturursunuz ?",
    qCode: "",
    answer:
      "Javascript'te dizi (array) köşeli parantez [] veya Array constructor'ı ile oluşturulur.",
    answerLi: [
      "Literal: const arr = [1, 2, 3];",
      "Constructor: const arr = new Array(1, 2, 3);",
      "Karışık veri tipleri saklanabilir.",
    ],
    answerCode: "const fruits = ['apple', 'banana', 'cherry'];",
    hint: "Bir array, içine farklı nesneler konulabilen bir kutu gibidir.",
  },
  {
    id: "js16",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Document ile Window arasındaki farklar nelerdir ?",
    qCode: "",
    answer:
      "Window, tarayıcı penceresini temsil ederken; Document, o pencerenin içindeki HTML içeriğini temsil eder.",
    answerLi: [
      "window, global nesnedir; tüm tarayıcı API'lerini içerir.",
      "document, DOM ağacına erişim sağlar.",
      "window.document ile document aynı DOM içeriğine erişir.",
    ],
    answerCode: "console.log(window.innerWidth);\nconsole.log(document.title);",
    hint: "window bir ev, document o evin içindeki mobilyalar gibidir.",
  },
  {
    id: "js17",
    category: "Javascript",
    subCategory: "Javascript Fundamentals Functions",
    question:
      "Higher Order Functions ile First Class Functions arasındaki farklar nelerdir ?",
    qCode: "",
    answer:
      "First-Class Functions, fonksiyonların değişken olarak saklanmasını sağlar; Higher-Order Functions ise başka fonksiyonları argüman olarak alır veya döner.",
    answerLi: [
      "First-Class: Fonksiyonlar değişkenlere atanabilir, argüman olarak geçilebilir.",
      "Higher-Order: Fonksiyonları parametre olarak alır veya fonksiyon döndürür.",
      "map, filter, reduce Higher-Order örnekleridir.",
    ],
    answerCode:
      "const greet = () => console.log('Hello'); // First-Class\n\n[1, 2, 3].map(x => x * 2); // Higher-Order",
    hint: "First-Class fonksiyonlar bir kitap gibidir, Higher-Order fonksiyonlar o kitabı okuyan bir öğretmen gibidir.",
  },
  {
    id: "js18",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Strict Mode nedir ?",
    qCode: "",
    answer:
      "Strict Mode, Javascript'te daha sıkı bir hata kontrolü sağlar ve hatalı kodları yakalamaya yardımcı olur.",
    answerLi: [
      "'use strict'; ifadesiyle etkinleştirilir.",
      "Sessiz hataları görünür hale getirir.",
      "Yanlış değişken atamaları gibi hataları engeller.",
    ],
    answerCode: "'use strict';\n\nx = 3.14; // Hata: x tanımlanmadı",
    hint: "Strict Mode, sınıfta kuralların daha sıkı olduğu bir ders gibi çalışır.",
  },
  {
    id: "js19",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "(...) spread/rest operator nedir ?",
    qCode: "",
    answer:
      "Spread, dizileri veya nesneleri genişletir; Rest, fonksiyon parametrelerini tek bir diziye toplar.",
    answerLi: [
      "Spread: [...arr] ile diziyi kopyalar veya birleştirir.",
      "Rest: function(...args) ile belirsiz sayıdaki argümanı toplar.",
      "Aynı sözdizimiyle farklı amaçlar için kullanılır.",
    ],
    answerCode:
      "const arr = [1, 2, 3];\nconst newArr = [...arr, 4]; // Spread\n\nfunction sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); } // Rest",
    hint: "Spread bir dizi kartı açmak, Rest ise kartları bir desteye toplamak gibidir.",
  },
  {
    id: "js20",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "== ile === arasındaki fark nedir ?",
    qCode: "",
    answer:
      "== (eşitlik), tür dönüşümü yaparak karşılaştırır; === (sıkı eşitlik) tür dönüşümü yapmadan karşılaştırır.",
    answerLi: [
      "== gevşek karşılaştırma yapar (type coercion).",
      "=== hem değer hem de tür karşılaştırması yapar.",
      "=== daha güvenilir sonuçlar verir.",
    ],
    answerCode:
      "console.log(2 == '2');  // true (type coercion)\nconsole.log(2 === '2'); // false (farklı türler)",
    hint: "== iki farklı dil konuşan kişilerin çeviriyle anlaşmasıdır, === ise aynı dili konuşmaları gibidir.",
  },
  {
    id: "js21",
    category: "Javascript",
    subCategory: ".this()",
    question: ".this() nedir ? Nasıl kullanırsınız, nelere dikkat edersiniz ?",
    qCode: "",
    answer:
      "`this`, bir fonksiyonun çağrıldığı bağlama (context) göre referans veren özel bir anahtar kelimedir.",
    answerLi: [
      "`this`, global scope'da `window` nesnesine referans verir (strict mode'da `undefined`).",
      "Bir nesne yöntemi içinde, `this` o nesneyi gösterir.",
      "Arrow function'lar `this` bağlamını üst kapsamdan alır (lexical binding).",
    ],
    answerCode:
      "const obj = {\n  name: 'John',\n  greet: function() {\n    console.log(this.name);\n  }\n};\nobj.greet(); // 'John'",
    hint: "`this`, bir davette kimin konuştuğunu belirlemek gibidir; bağlama göre değişir.",
  },
  {
    id: "js22",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Object.freeze() nedir ?",
    qCode: "",
    answer: "`Object.freeze()`, bir nesneyi değiştirilemez hale getirir.",
    answerLi: [
      "Nesneye yeni özellik eklenemez, var olanlar silinemez veya değiştirilemez.",
      "Sadece yüzeysel (shallow) seviyede çalışır; iç içe geçmiş nesneler etkilenmez.",
      "Immutable veri yapıları oluşturmak için kullanılır.",
    ],
    answerCode:
      "const obj = Object.freeze({ name: 'Alice' });\nobj.name = 'Bob'; // Değişiklik yapılmaz",
    hint: "`Object.freeze()`, bir buz kalıbına su koymak gibidir; bir kez donduktan sonra şeklini değiştiremezsiniz.",
  },
  {
    id: "js23",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question:
      "Javascript'teki 'closure' konseptini açıklar mısınız ? Bir 'closure' örneği verebilir misiniz ?",
    qCode: "",
    answer:
      "Closure, bir fonksiyonun, tanımlandığı kapsamın (lexical scope) dışından bile değişkenlere erişebilme yeteneğidir.",
    answerLi: [
      "Bir iç fonksiyon, dış fonksiyonun değişkenlerine erişebilir.",
      "Veri gizleme ve kapsülleme için kullanılır.",
      "Callback ve event handler'larda yaygın olarak kullanılır.",
    ],
    answerCode:
      "function outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = outer();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2",
    hint: "Closure, bir defterin içindeki notlara her zaman erişebilmek gibidir, defter kapalı olsa bile.",
  },
  {
    id: "js24",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Template literals nedir ?",
    qCode: "",
    answer:
      "Template literals, çok satırlı stringler oluşturmak ve ifadeleri kolayca gömmek için kullanılan bir sözdizimidir.",
    answerLi: [
      "Backtick (`) karakteri ile tanımlanır.",
      "`${expression}` ile değişken veya ifade eklenebilir.",
      "Çok satırlı metinler için uygundur.",
    ],
    answerCode:
      "const name = 'John';\nconst message = `Hello, ${name}!`;\nconsole.log(message); // 'Hello, John!'",
    hint: "Template literals, metin yazmak için bir beyaz tahta gibidir; istediğiniz gibi doldurabilirsiniz.",
  },
  {
    id: "js25",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Shallow vs Deep copy farkları nelerdir ?",
    qCode: "",
    answer:
      "Shallow copy, sadece ilk seviyedeki referansları kopyalar; deep copy ise tüm iç içe geçmiş yapıları da kopyalar.",
    answerLi: [
      "Shallow Copy: `Object.assign()`, spread (`{...obj}`) ile yapılır.",
      "Deep Copy: `JSON.parse(JSON.stringify(obj))` veya `structuredClone()` ile yapılır.",
      "Shallow copy iç içe geçmiş nesnelerde referans paylaşır, deep copy tamamen bağımsız bir kopya oluşturur.",
    ],
    answerCode:
      "const original = { a: 1, b: { c: 2 } };\nconst shallowCopy = { ...original };\nconst deepCopy = JSON.parse(JSON.stringify(original));",
    hint: "Shallow copy bir kitabın fotokopisini almak gibidir, deep copy ise her sayfayı yeniden yazmak gibidir.",
  },
  {
    id: "js26",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question:
      "referans olarak taşıma ile değer olarak taşımayı açıklar mısınız ? Javascript referans olarak mı yoksa değer olarak mı taşınız ? (passed)",
    qCode: "",
    answer:
      "Javascript'te primitive veri tipleri değer olarak, referans veri tipleri ise referans olarak taşınır.",
    answerLi: [
      "Değer (Primitive): Number, String, Boolean, Null, Undefined doğrudan kopyalanır.",
      "Referans (Object, Array, Function): Bellekteki adrese referans gösterir.",
      "Primitive kopyalanır, referanslar paylaşılır.",
    ],
    answerCode:
      "let a = 10;\nlet b = a;\nb = 20; // a hala 10\n\nconst obj1 = { key: 'value' };\nconst obj2 = obj1;\nobj2.key = 'new value'; // obj1.key de değişir",
    hint: "Değer taşıma bir mektup göndermek gibidir; referans taşıma ise bir harita fotokopisini paylaşmak gibidir.",
  },
  {
    id: "js27",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "ECMAScript nedir kısaca açıklayınız ?",
    qCode: "",
    answer: "ECMAScript, Javascript'in standartlarını tanımlayan bir dildir.",
    answerLi: [
      "Javascript, ECMAScript standardına dayalıdır.",
      "ES5, ES6 (ES2015) gibi sürümlerle geliştirilmiştir.",
      "ECMAScript, dilin kurallarını, sözdizimini ve özelliklerini belirler.",
    ],
    answerCode: "",
    hint: "ECMAScript, Javascript'in anayasası gibidir; dilin kurallarını belirler.",
  },
  {
    id: "js28",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
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
    answerCode: "console.log(x); // ReferenceError: x is not defined",
    hint: "Hatalar, bir yolculukta karşılaşılan engeller gibidir; her biri farklı bir sorunu gösterir.",
  },
  {
    id: "js29",
    category: "Javascript",
    subCategory: "Javascript Fundamentals scope",
    question: "Javascript'te scope denildiğinde ne anlıyorsunuz ?",
    qCode: "",
    answer:
      "Scope, değişkenlerin tanımlandığı ve erişilebildiği kapsama alanıdır.",
    answerLi: [
      "Global Scope: Tüm kodda erişilebilir.",
      "Function Scope: Fonksiyon içinde tanımlanan değişkenler sadece o fonksiyonda erişilir.",
      "Block Scope: let ve const ile tanımlanan değişkenler blok ({}) içinde geçerlidir.",
    ],
    answerCode:
      "let x = 10; // Global Scope\n\nfunction test() {\n  let y = 20; // Function Scope\n}\n\nif (true) {\n  const z = 30; // Block Scope\n}",
    hint: "Scope, bir odadaki anahtar gibidir; anahtar sadece belirli kapıları açabilir.",
  },
  {
    id: "js30",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Optional chaining nedir ?",
    qCode: "",
    answer:
      "Optional chaining (?.), nesne hiyerarşisinde ara değerler null veya undefined olduğunda hatayı önler.",
    answerLi: [
      "?. operatörüyle güvenli şekilde derin nesne erişimi yapılır.",
      "Null veya undefined durumunda hata vermez, undefined döner.",
      "Yapısı: obj?.property?.subProperty",
    ],
    answerCode:
      "const user = { profile: { name: 'Alice' } };\nconsole.log(user?.profile?.name); // 'Alice'\nconsole.log(user?.address?.city); // undefined, hata vermez",
    hint: "Optional chaining, bozuk bir anahtarın kapıyı zorlamaması gibi; çalışmazsa sessizce geçer.",
  },
  {
    id: "js31",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "destructuring nedir ? nasıl kullanırsınız ?",
    qCode: "",
    answer:
      "Destructuring, diziler veya nesnelerden değerleri kolayca çıkarmak için kullanılan bir sözdizimidir.",
    answerLi: [
      "Dizi destructuring: const [a, b] = [1, 2];",
      "Nesne destructuring: const {name, age} = person;",
      "Karmaşık veri yapılarını basitleştirir.",
    ],
    answerCode:
      "const person = { name: 'Alice', age: 25 };\nconst { name, age } = person;\nconsole.log(name); // 'Alice'",
    hint: "Destructuring, bir kutudaki eşyaları hızlıca ayırmak gibidir.",
  },
  {
    id: "js32",
    category: "Javascript",
    subCategory: "Javascript Fundamentals",
    question: "Type Coercion nedir ?",
    qCode: "",
    answer:
      "Type Coercion, Javascript'in otomatik olarak bir veri türünü başka bir türe dönüştürmesidir.",
    answerLi: [
      "Implicit (örtük) ve explicit (açık) dönüşüm olabilir.",
      "'5' + 2 ifadesinde string'e dönüşür (implicit).",
      "Number('123') ile sayı dönüşümü yapılır (explicit).",
    ],
    answerCode:
      "console.log('5' + 2); // '52' (implicit)\nconsole.log(Number('5') + 2); // 7 (explicit)",
    hint: "Type Coercion, bir dilde farklı aksanları otomatik olarak anlamak gibidir.",
  },
  {
    id: "js33",
    category: "Javascript",
    subCategory: "Variables",
    question: "'null' ile 'undefined' arasındaki fark nedir ?",
    qCode: "",
    answer:
      "'null', bilerek boş bırakılmış bir değeri temsil eder; 'undefined', bir değişken tanımlandığı halde değer atanmamışsa oluşur.",
    answerLi: [
      "null: Bilinçli olarak atanmış boş değerdir.",
      "undefined: Değer atanmamış veya tanımlı olmayan değişkenlerde görülür.",
      "typeof null === 'object', typeof undefined === 'undefined'.",
    ],
    answerCode:
      "let a;\nconsole.log(a); // undefined\n\nlet b = null;\nconsole.log(b); // null",
    hint: "'null' boş bir kutu bırakmak gibidir, 'undefined' ise kutunun hiç olmaması gibi.",
  },
  {
    id: "js34",
    category: "Javascript",
    subCategory: "Javascript Methods",
    question: ".splice ile .slice arasındaki fark nedir ?",
    qCode: "",
    answer:
      ".splice() diziyi değiştirir, .slice() diziyi değiştirmeden bir kopyasını oluşturur.",
    answerLi: [
      "splice: Orijinal diziyi değiştirir, eleman ekler/siler.",
      "slice: Orijinal dizi değişmeden belirli bir aralık döner.",
      "splice(mutation), slice(pure function) olarak düşünülebilir.",
    ],
    answerCode:
      "const arr = [1, 2, 3, 4];\narr.splice(1, 2); // [2, 3] siler\n\nconst newArr = arr.slice(0, 2); // [1, 4] döner",
    hint: "splice bir pastayı kesip çıkarmak gibidir, slice pastadan bir dilim almak gibidir (ama pastayı bozmadan).",
  },
  {
    id: "js35",
    category: "Javascript",
    subCategory: "Functions in JS",
    question:
      "Function Decleration ile Function Expression arasındaki fark nedir ?",
    qCode: "",
    answer:
      "Function Declaration hoisting ile çalışır, Function Expression ise yalnızca tanımlandığı yerde çalışır.",
    answerLi: [
      "Declaration: function foo() {} şeklinde yazılır.",
      "Expression: const foo = function() {} veya arrow function olarak tanımlanır.",
      "Declaration hoisted, expression ise hoisted değildir.",
    ],
    answerCode:
      "// Function Declaration\nfunction greet() {\n  return 'Hello';\n}\n\n// Function Expression\nconst greet2 = function() {\n  return 'Hi';\n};",
    hint: "Declaration bir tarif defterindeki hazır bir tarif gibidir, expression ise o anda yazılmış bir not gibidir.",
  },
  {
    id: "js36",
    category: "Javascript",
    subCategory: "Functions in JS",
    question: "Anonymous function nedir ?",
    qCode: "",
    answer:
      "Anonymous function, ismi olmayan fonksiyonlardır ve genellikle callback olarak kullanılır.",
    answerLi: [
      "Bir değişkene atanabilir veya doğrudan çağrılabilir.",
      "Genellikle event handler'larda veya array metodlarında kullanılır.",
      "Arrow function'lar da anonymous olabilir.",
    ],
    answerCode:
      "const greet = function() {\n  console.log('Hello');\n};\n\n[1, 2, 3].forEach(function(item) {\n  console.log(item);\n});",
    hint: "Anonymous function, isimsiz bir not bırakmak gibidir; önemli olan içeriktir, kimin yazdığı değil.",
  },
  {
    id: "js37",
    category: "Javascript",
    subCategory: "Functions in JS",
    question:
      "Arrow function ile regular funciton arasındaki temel fark nedir ? Ne zaman arrow fonksiyon kullanırsınız ?",
    qCode: "",
    answer:
      "Arrow function daha kısa bir sözdizimine sahiptir ve `this` bağlamını üst kapsamdan alır.",
    answerLi: [
      "Arrow function'da `this` lexically bağlanır, regular function'da dinamik olarak değişir.",
      "Arrow function constructor olarak kullanılamaz.",
      "Kısa ve basit işlemler için arrow function tercih edilir.",
    ],
    answerCode:
      "const add = (a, b) => a + b;\n\nfunction regularAdd(a, b) {\n  return a + b;\n}",
    hint: "Arrow function bir kestirme yol gibidir; daha hızlı ve basittir ama her durumda uygun değildir.",
  },
  {
    id: "js38",
    category: "Javascript",
    subCategory: "Functions in JS",
    question: "callback fonksiyon nedir ?",
    qCode: "",
    answer:
      "Callback fonksiyon, başka bir fonksiyona argüman olarak verilen ve o fonksiyon tamamlandığında çağrılan bir fonksiyondur.",
    answerLi: [
      "Asenkron işlemlerde (setTimeout, API çağrıları) yaygın olarak kullanılır.",
      "Bir işlemin sonucuna göre çalışır.",
      "Array metodlarında (map, filter, forEach) kullanılır.",
    ],
    answerCode:
      "function greet(name, callback) {\n  console.log('Hello ' + name);\n  callback();\n}\n\ngreet('Alice', function() {\n  console.log('Callback executed!');\n});",
    hint: "Callback, bir etkinlikte konuşmasını bitiren birine mikrofonu devretmek gibidir.",
  },
  {
    id: "js39",
    category: "Javascript",
    subCategory: "Functions in JS",
    question: "Promise'ler nedir ?",
    qCode: "",
    answer:
      "Promise, Javascript'te asenkron işlemleri yönetmek için kullanılan bir yapıdır.",
    answerLi: [
      "3 durumu vardır: pending, fulfilled, rejected.",
      "then(), catch(), finally() ile işlenir.",
      "Callback hell'i önlemek için kullanılır.",
    ],
    answerCode:
      "const promise = new Promise((resolve, reject) => {\n  const success = true;\n  success ? resolve('Done!') : reject('Error!');\n});\n\npromise.then(result => console.log(result)).catch(error => console.log(error));",
    hint: "Promise, bir söz gibidir; ya tutulur (fulfilled) ya da bozulur (rejected).",
  },
  {
    id: "js40",
    category: "Javascript",
    subCategory: "Functions in JS",
    question: "Promise'ler ile callback fonksiyonların farkları nedir ?",
    qCode: "",
    answer:
      "Promise'ler, callback'lere göre daha okunabilir kod sağlar ve hata yönetimini kolaylaştırır.",
    answerLi: [
      "Callback hell'i önler, zincirleme (chaining) yapılabilir.",
      "then/catch ile daha temiz hata yönetimi sağlar.",
      "Promise, birden fazla asenkron işlemi yönetmeyi kolaylaştırır.",
    ],
    answerCode:
      "// Callback örneği\nfunction fetchData(callback) {\n  setTimeout(() => callback('Data'), 1000);\n}\n\n// Promise örneği\nconst fetchPromise = new Promise(resolve => {\n  setTimeout(() => resolve('Data'), 1000);\n});",
    hint: "Callback bir basamaklı merdiven gibidir, Promise ise düz bir asansör yolculuğu gibi.",
  },
  {
    id: "js41",
    category: "Javascript",
    subCategory: "Functions in JS",
    question: "'callback hell' nedir ?",
    qCode: "",
    answer:
      "Callback hell, iç içe geçmiş çok sayıda callback fonksiyonunun okunması ve yönetilmesi zor hale gelmesidir.",
    answerLi: [
      "Kod okunabilirliği düşer.",
      "Hata ayıklamak zorlaşır.",
      "Promise ve async/await ile önlenebilir.",
    ],
    answerCode:
      "doSomething(function(result1) {\n  doSomethingElse(result1, function(result2) {\n    doAnotherThing(result2, function(result3) {\n      console.log(result3);\n    });\n  });\n});",
    hint: "Callback hell, iç içe geçmiş labirent gibi karmaşık kod yapılarıdır.",
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
      "Her ikisi de 5-10MB kapasiteye sahiptir ve key-value çiftleri ile çalışır.",
    ],
    answerCode:
      "sessionStorage.setItem('key', 'value');\nlocalStorage.setItem('key', 'value');",
    hint: "Session Storage bir post-it gibidir, Local Storage bir not defteri gibi kalıcıdır.",
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
    ],
    answerCode: "",
    hint: "Client-side bir restorandaki müşteri, server-side ise mutfakta çalışan şef gibidir.",
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
      "XHR veya Fetch API ile çalışır.",
      "Sayfa yenilemeden veri günceller.",
      "JSON formatı yaygın olarak kullanılır.",
    ],
    answerCode:
      "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data));",
    hint: "AJAX, bir sayfa yenilemeden sipariş vermek gibi; sadece ihtiyacın olan bilgi gelir.",
  },
  {
    id: "js45",
    category: "Javascript",
    subCategory: "EcmaScript",
    question: "ECMAScript nedir kısaca açıklayınız ?",
    qCode: "",
    answer: "ECMAScript, Javascript'in standartlarını belirleyen bir dildir.",
    answerLi: [
      "Javascript, ECMAScript spesifikasyonuna dayanır.",
      "ES5, ES6 (ES2015) gibi sürümlerle güncellenmiştir.",
      "Yeni özellikler ECMAScript ile tanımlanır.",
    ],
    answerCode: "",
    hint: "ECMAScript, Javascript'in temel kurallar kitabıdır.",
  },
  {
    id: "js46",
    category: "Javascript",
    subCategory: "Async / Await",
    question: "async / await nedir ? Asenkron bir kodu nasıl basitleştirir ?",
    qCode: "",
    answer:
      "`async/await`, Javascript'te asenkron kodu daha okunabilir ve yönetilebilir hale getiren bir yapıdır.",
    answerLi: [
      "`async` fonksiyonlar her zaman bir `Promise` döner.",
      "`await`, bir `Promise` çözülene kadar bekler.",
      "Callback hell'i önler, kodu senkron gibi gösterir.",
    ],
    answerCode:
      "async function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}",
    hint: "`async/await`, bir kuyruğa sırayla hizmet eden bir garson gibi çalışır.",
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
      "Let ve const da hoisted edilir ama temporal dead zone (TDZ) yüzünden hemen kullanılamaz.",
      "Fonksiyon deklarasyonları tamamen hoisted edilir.",
    ],
    answerCode:
      "console.log(a); // undefined\nvar a = 5;\n\nsayHello(); // Çalışır\nfunction sayHello() { console.log('Hello!'); }",
    hint: "Hoisting, bir kitabın içindekiler kısmının başa taşınması gibidir.",
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
      "Heap, büyük ve karmaşık veri yapılarını saklamak için kullanılır.",
      "Nesneler, fonksiyonlar ve kapalı (closure) değişkenler burada tutulur.",
      "Javascript'in Garbage Collector'ı heap'teki gereksiz verileri temizler.",
    ],
    answerCode: "",
    hint: "Heap, büyük bir depo gibi çalışır; burada nesneler serbestçe depolanır.",
  },
  {
    id: "js50",
    category: "Javascript",
    subCategory: "Javascript Thread",
    question:
      "JS nasıl çalışır ? Single Thread kavramını açıklar mısınız ? İkinici bir thread nasıl açardınız ?",
    qCode: "",
    answer:
      "Javascript tek iş parçacığı (single-thread) üzerinde çalışır, bu da aynı anda sadece bir işlem yürütülebileceği anlamına gelir.",
    answerLi: [
      "Tek bir call stack kullanır, işlemler sırayla işlenir.",
      "Asenkron işlemler event loop ve callback queue ile yönetilir.",
      "Web Workers kullanarak ikinci bir thread oluşturabilirsiniz.",
    ],
    answerCode:
      "// worker.js\nself.onmessage = function(e) {\n  self.postMessage('Data received: ' + e.data);\n};\n\n// main.js\nconst worker = new Worker('worker.js');\nworker.postMessage('Hello Worker');",
    hint: "Javascript bir kasiyer gibidir; sırayla müşterilere hizmet verir. Web Worker eklemek ikinci bir kasiyer açmak gibidir.",
  },
  {
    id: "js51",
    category: "Javascript",
    subCategory: "JS Coding - Execution order",
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
    answerLi: ["A", "D", "C", "B"],
    answerCode: "",
    hint: "",
  },
  {
    id: "js52",
    category: "Javascript",
    subCategory: "JS Coding - Var-Let value by Scope",
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
      "let block scope olduğu için her iterasyon yeni block-skoped i oluşturur ve console bu referanslı i çıktısını verir iken, var fonksiyon scope olduğu için setTimeout fonskiyonu execute olana kadar loop tamamlanmış ve i değeri 3 olmuş olur, dolayısı ile her iterasyonda 3 değerini alır",
    answerLi: [
      `
      Output after 1 second:
        var 3
        var 3
        var 3
      `,
      `
      Output after 1 second:
        let 0
        let 1
        let 2
      `,
    ],
    answerCode: "",
    hint: "",
  },
  {
    id: "js53",
    category: "Javascript",
    subCategory: "JS Coding - let value mutable/immutable",
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
    hint: "Primitive değerler bir kopyasını alır, referansı değil.",
  },
  {
    id: "js54",
    category: "Javascript",
    subCategory: "JS Coding - Equal Value Check",
    question:
      "İki değerin aynı olup olmadığını Javascript kullanarak nasıl anlarsınız?",
    qCode: "",
    answer:
      "İki değeri karşılaştırmak için `===` (strict equality) veya `Object.is()` kullanılabilir.",
    answerLi: [
      "=== hem değer hem de tür karşılaştırması yapar.",
      "Object.is() NaN ve -0 gibi özel durumları doğru değerlendirir.",
      "== gevşek karşılaştırma yapar ve tip dönüşümü yapabilir.",
    ],
    answerCode:
      "console.log(5 === '5'); // false\nconsole.log(Object.is(NaN, NaN)); // true",
    hint: "=== iki nesneyi aynı mı diye kontrol etmek gibidir, Object.is() ise daha derin bir kontrol sağlar.",
  },
  {
    id: "js55",
    category: "Javascript",
    subCategory: "JS Coding - Palindrome",
    question:
      "Verilen string'in PALINDROME olup olmadığını anlayan bir fonksiyon yazın.",
    qCode: "",
    answer:
      "Bir string'in palindrome olup olmadığını kontrol etmek için ters çevirip orijinaliyle karşılaştırabilirsiniz.",
    answerLi: [
      "String'i split, reverse ve join ile ters çevirin.",
      "Orijinal string ile ters çevrilmiş hali karşılaştırın.",
      "Eşitse palindrome'dur.",
    ],
    answerCode:
      "function isPalindrome(str) {\n  const reversed = str.split('').reverse().join('');\n  return str === reversed;\n}\n\nconsole.log(isPalindrome('racecar')); // true\nconsole.log(isPalindrome('hello'));   // false",
    hint: "Palindrome, bir kelimeyi tersten okuduğunuzda aynı kalması gibidir (örneğin 'madam').",
  },

  {
    id: "js56",
    category: "Javascript",
    subCategory: "JS Coding - Reverse a String",
    question: "Verilen string'in tersten yazan bir fonksiyon yazın.",
    qCode: "",
    answer:
      "Bir string'i tersten yazmak için split, reverse ve join metodları kullanılabilir.",
    answerLi: [
      "String'i karakterlerine ayırmak için split kullanılır.",
      "reverse ile ters çevrilir.",
      "join ile tekrar birleştirilir.",
    ],
    answerCode:
      "function reverseString(str) {\n  return str.split('').reverse().join('');\n}\n\nconsole.log(reverseString('hello')); // 'olleh'",
    hint: "Bir kelimeyi tersten okumak gibidir.",
  },
  {
    id: "js57",
    category: "Javascript",
    subCategory: "JS Coding - prime number",
    question:
      "Verilen number'in prime olup olmadığını belirten bir fonksiyon yazın.",
    qCode: "",
    answer:
      "Bir sayının asal olup olmadığını kontrol etmek için 2'den başlayarak kareköküne kadar bölünebilirliğine bakılır.",
    answerLi: [
      "1 ve kendisinden başka böleni olmayan sayılar asaldır.",
      "2 en küçük asal sayıdır.",
      "Sayıyı kareköküne kadar kontrol etmek daha verimlidir.",
    ],
    answerCode:
      "function isPrime(num) {\n  if (num < 2) return false;\n  for (let i = 2; i <= Math.sqrt(num); i++) {\n    if (num % i === 0) return false;\n  }\n  return true;\n}\n\nconsole.log(isPrime(7)); // true\nconsole.log(isPrime(10)); // false",
    hint: "Asal sayı, yalnızca 1 ve kendisine bölünebilen bir sayıdır.",
  },
  {
    id: "js58",
    category: "Javascript",
    subCategory: "JS Coding - prime number",
    question: "Verilen string'den ünlü sesleri çıkaran bir fonksiyon yazın.",
    qCode: "",
    answer:
      "Bir string'deki ünlü harfleri (a, e, i, o, u) çıkarmak için replace ve regex kullanılabilir.",
    answerLi: [
      "Regex ile ünlü harfleri tespit edebiliriz.",
      "replace metodu ile bu karakterler silinir.",
      "Büyük-küçük harf duyarlılığı için 'i' flag kullanılır.",
    ],
    answerCode:
      "function removeVowels(str) {\n  return str.replace(/[aeiouAEIOU]/g, '');\n}\n\nconsole.log(removeVowels('Hello World')); // 'Hll Wrld'",
    hint: "Ünlü harfleri çıkarmak, bir metinden belirli harfleri silmek gibidir.",
  },
  {
    id: "js59",
    category: "Javascript",
    subCategory: "Arrays & Objects",
    question: "Array ile Object arasındaki fark nedir?",
    qCode: "",
    answer:
      "Array, sıralı veri koleksiyonlarını tutar; Object ise anahtar-değer (key-value) çiftlerini depolar.",
    answerLi: [
      "Array, indeks tabanlıdır (0, 1, 2, ...); Object ise anahtar tabanlıdır.",
      "Array, listeleme için uygundur; Object, özellikleri tanımlamak için kullanılır.",
      "Array'de push, pop, map gibi metodlar bulunur; Object'te ise key, value, entries gibi metodlar kullanılır.",
    ],
    answerCode:
      "const arr = [1, 2, 3]; // Array\nconst obj = { key: 'value', age: 25 }; // Object",
    hint: "Array bir kitap rafı gibidir (sıralı), Object ise bir sözlük gibidir (anahtar-değer eşleşmesi).",
  },

  // DOM & Browser
  {
    id: "dom01",
    category: "DOM & Browser",
    subCategory: "DOM",
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
    hint: "DOM, bir web sayfasının programatik haritası gibidir.",
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
    hint: "DOM manipülasyonu, bir Word belgesindeki metni düzenlemek gibidir.",
  },
  {
    id: "dom03",
    category: "DOM & Browser",
    subCategory: "DOM & Browser",
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
    hint: "Bir siteye girmek, bir restoranda sipariş vermek ve yemeğin hazırlanmasını beklemek gibidir.",
  },
  {
    id: "dom04",
    category: "DOM & Browser",
    subCategory: "DOM & Browser",
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
    hint: "Tarayıcı, bir ressam gibi önce taslağı çizer (DOM), sonra renklendirir (CSSOM), ardından detayları ekler (render).",
  },
  {
    id: "dom05",
    category: "DOM & Browser",
    subCategory: "DOM & Browser",
    question: "JS Bundle Nedir? Birden fazla JS Bundle olabilir mi?",
    qCode: "",
    answer:
      "JS Bundle, Javascript dosyalarının optimize edilip tek bir dosya haline getirilmesidir.",
    answerLi: [
      "Performansı artırmak için kullanılır.",
      "Birden fazla bundle olabilir (örneğin: vendor.js, app.js).",
      "Webpack, Parcel gibi araçlarla oluşturulur.",
    ],
    answerCode: "",
    hint: "JS Bundle, birçok dosyanın tek bir zip dosyasında toplanması gibidir.",
  },
  {
    id: "dom06",
    category: "DOM & Browser",
    subCategory: "DOM & Browser",
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
    hint: "Lazy Loading, sadece ihtiyacın olduğunda açılan bir dolap gibidir.",
  },
  {
    id: "dom07",
    category: "DOM & Browser",
    subCategory: "DOM & Browser",
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
    hint: "Service Worker bir arka plan hizmeti gibidir, Web Worker ise ek bir çalışan gibi çalışır.",
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
    hint: "CDN, dünyanın farklı noktalarına yayılmış kütüphaneler gibidir; en yakınından kitap alırsınız.",
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
    hint: "REST, farklı cihazların aynı dili konuşmasını sağlayan bir tercüman gibidir.",
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
    hint: "Axios, bir API ile mesajlaşmak için kullanılan bir postacı gibidir.",
  },
  {
    id: "api03",
    category: "API & Backend Interaction",
    subCategory: "Restful API",
    question: "Restful API nedir?",
    qCode: "",
    answer:
      "RESTful API, REST mimari prensiplerine uygun şekilde tasarlanmış API'lerdir ve HTTP protokolünü kullanarak veri alışverişi yapar.",
    answerLi: [
      "Kaynaklara URL üzerinden erişim sağlar.",
      "Stateless çalışır, her istek bağımsızdır.",
      "JSON veya XML formatında veri gönderip alır.",
    ],
    answerCode: "",
    hint: "RESTful API, bir kitap kütüphanesinde belirli kitaplara erişmek için kullandığınız bir katalog gibidir.",
  },
  {
    id: "api04",
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
    hint: "RESTful API, bir restoranda menüden sipariş vermek gibidir; her sipariş (istek) bağımsızdır.",
  },
  {
    id: "api05",
    category: "API & Backend Interaction",
    subCategory: "Restful API",
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
    answerCode:
      "axios.get('/api/items'); // Veri getirir\naxios.post('/api/items', { name: 'Item' }); // Yeni veri ekler\naxios.put('/api/items/1', { name: 'Updated Item' }); // Veri günceller\naxios.delete('/api/items/1'); // Veri siler",
    hint: "GET okumak, POST eklemek, PUT güncellemek, DELETE ise silmek gibidir.",
  },

  // REACT
  {
    id: "react01",
    category: "REACT",
    subCategory: "REACT",
    question: "React nedir, nasıl çalışır?",
    qCode: "",
    answer:
      "React, kullanıcı arayüzleri oluşturmak için kullanılan bir Javascript kütüphanesidir. Bileşen (component) tabanlıdır ve tek yönlü veri akışını kullanır.",
    answerLi: [
      "Virtual DOM kullanarak hızlı ve verimli UI güncellemeleri sağlar.",
      "Component yapısı ile yeniden kullanılabilir kodlar yazılır.",
      "State ve props ile veri yönetimi yapılır.",
    ],
    answerCode: "",
    hint: "React, dinamik bir web sayfasını yönetmek için optimize edilmiş bir çerçevedir.",
  },
  {
    id: "react02",
    category: "REACT",
    subCategory: "REACT MVC",
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
    hint: "MVC, bir restoran gibi düşünülebilir; model malzemeler, view sunum, controller ise garsondur.",
  },
  {
    id: "react03",
    category: "REACT",
    subCategory: "REACT",
    question: "Hangi react becerileri F-END için önemlidir?",
    qCode: "",
    answer:
      "Yaygın React kütüphanelerine hakim olmak, React hook kullanımı, state management ve gelişmiş React.js kavramlarına aşina olmak önemlidir.",
    answerLi: [
      "Component tabanlı mimariyi anlamak.",
      "Hooks (useState, useEffect) kullanımı.",
      "State yönetimi (Redux, Context API).",
      "Routing (React Router) bilgisi.",
      "API entegrasyonu (Axios, Fetch).",
    ],
    answerCode: "",
    hint: "React becerileri, modern web uygulamalarının yapı taşlarını oluşturur.",
  },
  {
    id: "react04",
    category: "REACT",
    subCategory: "React.js Concept",
    question: "Gelişmiş React.js concept'leri denince ne anlıyorsunuz?",
    qCode: "",
    answer:
      "Gelişmiş React kavramları, performans optimizasyonu ve ölçeklenebilir uygulamalar geliştirmek için kullanılan tekniklerdir.",
    answerLi: [
      "Higher-Order Components (HOC).",
      "Render Props.",
      "Custom Hooks.",
      "Context API ile global state yönetimi.",
      "Code Splitting ve Lazy Loading.",
    ],
    answerCode: "",
    hint: "Gelişmiş React kavramları, temel bilgilerin üzerine inşa edilen ileri düzey becerilerdir.",
  },
  {
    id: "react05",
    category: "REACT",
    subCategory: "REACT APP",
    question: "React ile yazılmış bir siteye girdiğinizde neler olur?",
    qCode: "",
    answer:
      "React ile yazılmış bir siteye girildiğinde Javascript dosyası yüklenir, ardından React bileşenleri tarayıcıda render edilir.",
    answerLi: [
      "HTML dosyası yüklenir ve root elementi oluşturulur.",
      "React DOM, bu root içine bileşenleri render eder.",
      "Virtual DOM değişiklikleri takip eder ve UI güncellenir.",
      "API istekleri yapılır ve veri işlenir.",
    ],
    answerCode: "",
    hint: "React uygulaması, bir kitabın sayfalarını yeniden yazmak yerine sadece değişen bölümleri günceller.",
  },
  {
    id: "react06",
    category: "REACT",
    subCategory: "REACT VDOM",
    question: "React VDOM nedir? Nasıl çalışır?",
    qCode: "",
    answer:
      "Virtual DOM (VDOM), gerçek DOM'un hafif bir kopyasıdır ve performansı artırmak için React tarafından kullanılır.",
    answerLi: [
      "Gerçek DOM yerine hafif bir sanal DOM oluşturulur.",
      "VDOM, UI değişikliklerini izler ve sadece değişen kısımları günceller.",
      "Diffing algoritması ile eski ve yeni VDOM karşılaştırılır.",
      "En az sayıda gerçek DOM güncellemesi yapılır.",
    ],
    answerCode: "",
    hint: "Virtual DOM, gerçek bir tabloyu değiştirmek yerine önce bir taslakta düzenlemek gibidir.",
  },
  {
    id: "react07",
    category: "REACT",
    subCategory: "REACT JSX",
    question: "React JSX nedir? Browser'lar jsx dosyalarını nasıl okurlar?",
    qCode: "",
    answer:
      "JSX, Javascript içinde HTML benzeri sözdizimiyle kullanıcı arayüzü tanımlamayı sağlayan bir yazım şeklidir. Tarayıcılar doğrudan JSX'i anlayamaz, bu nedenle Babel gibi derleyiciler kullanılarak Javascript'e dönüştürülür.",
    answerLi: [
      "JSX, Javascript + XML sözdizimi sağlar.",
      "Babel ile transpile edilerek tarayıcının anlayacağı Javascript koduna çevrilir.",
      "Daha okunabilir ve yazımı kolay hale getirir.",
    ],
    answerCode: "const element = <h1>Hello, world!</h1>;",
    hint: "JSX, Javascript içinde HTML yazmak gibidir, ancak tarayıcıda çalışması için Babel tarafından çevrilmesi gerekir.",
  },
  {
    id: "react08",
    category: "REACT",
    subCategory: "REACT Components",
    question:
      "React'te components nedir? Bildiğiniz component tiplerinden kısaca bahsedebilir misiniz?",
    qCode: "",
    answer:
      "React'te componentler, kullanıcı arayüzünü küçük ve yeniden kullanılabilir parçalara bölmek için kullanılır. İki ana türü vardır: Functional Components ve Class Components.",
    answerLi: [
      "Functional Components: Basit yapılı, hook'lar ile state ve lifecycle yönetimi yapılabilir.",
      "Class Components: State ve lifecycle metodlarıyla çalışır, ES6 sınıflarına dayanır.",
      "Reusable ve modular yapı sağlarlar.",
    ],
    answerCode: "function Greeting() {\n  return <h1>Hello, World!</h1>;\n}",
    hint: "Componentler, bir web sayfasının Lego parçaları gibidir; bağımsız ve yeniden kullanılabilirler.",
  },
  {
    id: "react09",
    category: "REACT",
    subCategory: "REACT Components styled-components",
    question: "styled-components nedir?",
    qCode: "",
    answer:
      "styled-components, React uygulamalarında CSS'i Javascript içinde yazmaya olanak tanıyan bir kütüphanedir.",
    answerLi: [
      "Component bazlı stil oluşturmayı sağlar.",
      "CSS kodlarını Javascript içine gömerek daha dinamik stiller yaratır.",
      "Scoped CSS sağlar, global stil çakışmalarını önler.",
    ],
    answerCode:
      "import styled from 'styled-components';\n\nconst Button = styled.button`\n  background: blue;\n  color: white;\n  padding: 10px;\n`;\n\n<Button>Click Me</Button>",
    hint: "styled-components, CSS'i Javascript'in içine entegre ederek stilleri daha yönetilebilir hale getirir.",
  },
  {
    id: "react10",
    category: "REACT",
    subCategory: "React re-render",
    question: "React re-render nedir? Neden olur?",
    qCode: "",
    answer:
      "Re-render, bir React bileşeninin yeniden çizilmesi (güncellenmesi) anlamına gelir. State veya prop'larda değişiklik olduğunda tetiklenir.",
    answerLi: [
      "State veya prop değişiklikleri.",
      "Parent component'in yeniden render edilmesi.",
      "Context API'de değer değişimi.",
    ],
    answerCode: "",
    hint: "Re-render, bir tabloya yeni bilgi eklemek gibidir; sadece değişen bilgiler güncellenir.",
  },
  {
    id: "react11",
    category: "REACT",
    subCategory: "REACT Hooks",
    question: "React Hook'ları nelerdir?",
    qCode: "",
    answer:
      "React Hook'ları, fonksiyonel bileşenlerde state ve yaşam döngüsü özelliklerini kullanmayı sağlar.",
    answerLi: [
      "useState: State yönetimi için.",
      "useEffect: Yan etkileri yönetmek için.",
      "useContext: Global state'e erişim için.",
      "useRef, useMemo, useCallback gibi performans odaklı hook'lar.",
    ],
    answerCode: "import { useState, useEffect } from 'react';",
    hint: "Hook'lar, React'in süper güçleri gibidir; fonksiyonel bileşenlere ekstra yetenekler kazandırır.",
  },
  {
    id: "react12",
    category: "REACT",
    subCategory: "REACT Hooks custom Hooks",
    question: "custom hook nedir? nasıl kullanırsınız?",
    qCode: "",
    answer:
      "Custom hook'lar, birden fazla bileşende tekrar kullanılabilir mantık oluşturmak için yazılan özel hook'lardır.",
    answerLi: [
      "use ile başlar (örneğin: useFetch, useAuth).",
      "Kendi hook'unuzda useState, useEffect gibi diğer hook'ları kullanabilirsiniz.",
      "DRY (Don't Repeat Yourself) prensibini uygular.",
    ],
    answerCode:
      "function useCounter(initialValue = 0) {\n  const [count, setCount] = useState(initialValue);\n  const increment = () => setCount(count + 1);\n  return { count, increment };\n}\n\nconst { count, increment } = useCounter();",
    hint: "Custom hook'lar, tekrarlayan kodları azaltmak için yazılmış kişisel React araçları gibidir.",
  },
  {
    id: "react13",
    category: "REACT",
    subCategory: "React Hooks useState",
    question: "useState hook nedir?",
    qCode: "",
    answer:
      "useState, React'te fonksiyonel bileşenlerde durum (state) yönetimi yapmak için kullanılan bir hook'tur.",
    answerLi: [
      "Bir durum (state) değişkeni ve onu güncelleyen bir fonksiyon döner.",
      "Başlangıç değeri verilebilir.",
      "State değiştiğinde bileşen yeniden render edilir.",
    ],
    answerCode:
      "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      {count}\n    </button>\n  );\n}",
    hint: "useState, bir bileşenin durumunu saklayan ve güncelleyen bir bellek gibidir.",
  },
  {
    id: "react14",
    category: "REACT",
    subCategory: "React Hooks useEffect",
    question: "useEffect hook nedir ? useLayoutEffect ile farkı kısaca nedir ?",
    qCode: "",
    answer:
      "useEffect, bileşenlerin yan etkilerini (API çağrıları, DOM manipülasyonu vb.) yönetmek için kullanılır. useLayoutEffect, DOM güncellemeleri yapılmadan hemen önce çalışır.",
    answerLi: [
      "useEffect, render sonrası çalışır ve performans dostudur.",
      "useLayoutEffect, DOM güncellemeleri uygulanmadan önce çalışır ve senkron çalışır.",
      "useLayoutEffect, layout ile ilgili ölçümler yaparken tercih edilir.",
    ],
    answerCode:
      "useEffect(() => {\n  console.log('Effect çalıştı');\n}, []);\n\nuseLayoutEffect(() => {\n  console.log('Layout effect çalıştı');\n}, []);",
    hint: "useEffect arka planda çalışırken, useLayoutEffect bir animasyon başlamadan hemen önce çalışır.",
  },
  {
    id: "react15",
    category: "REACT",
    subCategory: "React Hooks useContext",
    question: "useContext hook nedir ?",
    qCode: "",
    answer:
      "useContext, React'in Context API'sine erişmek ve global state yönetimi sağlamak için kullanılan bir hook'tur.",
    answerLi: [
      "Context oluşturmak için createContext kullanılır.",
      "Provider ile context verisi paylaşılır.",
      "useContext ile bu verilere doğrudan erişim sağlanır.",
    ],
    answerCode:
      "const ThemeContext = React.createContext('light');\n\nfunction App() {\n  const theme = useContext(ThemeContext);\n  return <div>{theme}</div>;\n}",
    hint: "useContext, global veriye doğrudan erişim sağlayan bir kısa yol gibidir.",
  },
  {
    id: "react16",
    category: "REACT",
    subCategory: "React Hooks useCallback",
    question: "useCallback hook nedir ?",
    qCode: "",
    answer:
      "useCallback, bir fonksiyonun referansının yeniden oluşturulmasını önleyerek performans optimizasyonu sağlar.",
    answerLi: [
      "Memoize edilmiş bir fonksiyon döndürür.",
      "Props veya dependency array değişmediği sürece aynı referans kullanılır.",
      "Özellikle sık re-render edilen bileşenlerde kullanışlıdır.",
    ],
    answerCode:
      "const handleClick = useCallback(() => {\n  console.log('Clicked!');\n}, []);",
    hint: "useCallback, aynı fonksiyonu tekrar tekrar oluşturmamak için bir hafıza aracı gibidir.",
  },
  {
    id: "react17",
    category: "REACT",
    subCategory: "React Hooks useMemo",
    question: "useMemo hook nedir ?",
    qCode: "",
    answer:
      "useMemo, hesaplanan bir değeri önbelleğe alarak gereksiz yeniden hesaplamaları önler.",
    answerLi: [
      "Performans optimizasyonu için kullanılır.",
      "Dependency array değişmediği sürece memoize edilmiş değeri döner.",
      "Ağır hesaplamalar için uygundur.",
    ],
    answerCode:
      "const memoizedValue = useMemo(() => expensiveCalculation(a, b), [a, b]);",
    hint: "useMemo, pahalı işlemleri yeniden hesaplamamak için bir önbellek gibi çalışır.",
  },
  {
    id: "react18",
    category: "REACT",
    subCategory: "React Hooks useReducer",
    question: "useReducer hook nedir ?",
    qCode: "",
    answer:
      "useReducer, karmaşık state yönetimi için kullanılan bir hook'tur. Bir reducer fonksiyonu ve başlangıç durumu ile çalışır.",
    answerLi: [
      "Redux'a benzer mantıkla çalışır.",
      "State güncellemeleri için action ve dispatch kullanılır.",
      "Büyük ve karmaşık state yönetimlerinde tercih edilir.",
    ],
    answerCode:
      "const [state, dispatch] = useReducer(reducer, initialState);\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment': return { count: state.count + 1 };\n    default: return state;\n  }\n}",
    hint: "useReducer, bir state makinesi gibi çalışır; eylemlerle durumu değiştirir.",
  },
  {
    id: "react19",
    category: "REACT",
    subCategory: "React Hooks useRef",
    question: "useRef hook nedir ?",
    qCode: "",
    answer:
      "useRef, DOM elemanlarına referans vermek veya bileşen yeniden render edilmeden değişken saklamak için kullanılır.",
    answerLi: [
      "DOM erişimi için kullanılabilir (örneğin input odaklama).",
      "Render tetiklemeden değer saklamak için kullanılır.",
      "Mutable bir ref nesnesi döndürür.",
    ],
    answerCode:
      "const inputRef = useRef(null);\n\nfunction focusInput() {\n  inputRef.current.focus();\n}\n\n<input ref={inputRef} type='text' />",
    hint: "useRef, bir kutuda değer saklamak gibidir; kutunun içi değişse bile kutu sabit kalır.",
  },
  {
    id: "react20",
    category: "REACT",
    subCategory: "React Hooks",
    question:
      "useMemo ile useEffect farkları nelerdir? Hangi durumlarda hangisini tercih ederdiniz?",
    qCode: "",
    answer:
      "useMemo, hesaplanan değerleri önbelleğe alır; useEffect ise yan etkileri (API çağrıları, DOM manipülasyonu) yönetir.",
    answerLi: [
      "useMemo performans optimizasyonu için kullanılır.",
      "useEffect, bileşen yaşam döngüsünü yönetir.",
      "Ağır hesaplamalar için useMemo, yan etkiler için useEffect tercih edilir.",
    ],
    answerCode:
      "const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);\n\nuseEffect(() => {\n  fetchData();\n}, []);",
    hint: "useMemo bir hesap makinesi gibidir, useEffect ise bir ajanda gibi çalışır.",
  },
  {
    id: "react21",
    category: "REACT",
    subCategory: "State Management Redux",
    question: "Redux nedir ? Neden kullanılır ?",
    qCode: "",
    answer:
      "Redux, Javascript uygulamalarında global state yönetimi için kullanılan bir kütüphanedir.",
    answerLi: [
      "Uygulamanın durumunu merkezi bir store'da tutar.",
      "State değişiklikleri sadece belirli action ve reducer'lar aracılığıyla yapılır.",
      "Büyük uygulamalarda veri akışını yönetmeyi kolaylaştırır.",
    ],
    answerCode: "",
    hint: "Redux, bir uygulamanın tüm verilerini tek bir merkezde tutan bir veri bankası gibidir.",
  },
  {
    id: "react22",
    category: "REACT",
    subCategory: "State Management",
    question:
      "Redux vs Context API vs useState kıyaslayınız, Hangi durumlarda hangisini tercih ederdiniz?",
    qCode: "",
    answer:
      "Redux, Context API ve useState, React'te state yönetimi için kullanılır ancak farklı ölçeklerde tercih edilir.",
    answerLi: [
      "useState: Küçük bileşenlerde lokal state için kullanılır.",
      "Context API: Küçük-orta ölçekli uygulamalarda global state için uygundur.",
      "Redux: Karmaşık ve büyük uygulamalarda state yönetimini optimize eder.",
    ],
    answerCode: "",
    hint: "useState küçük dosyaları, Context API bir klasörü, Redux ise büyük bir veri tabanını yönetmek gibidir.",
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
    ],
    answerCode: "",
    hint: "React web sayfaları için, React Native ise mobil uygulamalar için bir araç kutusudur.",
  },
  {
    id: "react24",
    category: "REACT",
    subCategory: "REACT Router",
    question: "'React Router' nedir ? Nasıl kullanırsınız ?",
    qCode: "",
    answer:
      "React Router, React uygulamalarında sayfalar arası gezinmeyi sağlamak için kullanılan bir kütüphanedir.",
    answerLi: [
      "SPA (Single Page Application) için uygundur.",
      "<BrowserRouter>, <Routes>, <Route> bileşenleri ile çalışır.",
      "useNavigate ve useParams gibi hook'larla birlikte kullanılır.",
    ],
    answerCode:
      "import { BrowserRouter, Routes, Route } from 'react-router-dom';\n\n<BrowserRouter>\n  <Routes>\n    <Route path='/' element={<Home />} />\n    <Route path='/about' element={<About />} />\n  </Routes>\n</BrowserRouter>",
    hint: "React Router, bir kitapta sayfa atlamak gibi çalışır; uygulama yeniden yüklenmeden farklı içerik gösterir.",
  },
  {
    id: "react25",
    category: "REACT",
    subCategory: "REACT Router components",
    question: "'React Router'ın ana componentleri nelerdir?",
    qCode: "",
    answer:
      "React Router'ın ana bileşenleri uygulama içinde gezinmeyi yönetmek için kullanılır.",
    answerLi: [
      "BrowserRouter: Tarayıcı tabanlı routing sağlar.",
      "Routes: Route bileşenlerini kapsayan yapı.",
      "Route: Belirli bir URL'yi bir bileşenle eşleştirir.",
      "Link: Sayfalar arasında geçiş yapmayı sağlar.",
      "useNavigate, useParams: Programatik gezinme ve parametre yönetimi için kullanılır.",
    ],
    answerCode: "",
    hint: "React Router bileşenleri, bir kitapta bölümleri düzenleyen başlıklar gibidir.",
  },
  {
    id: "react26",
    category: "REACT",
    subCategory: "REACT Api Request",
    question: "Bir React uygulamasında nasıl API Request yaparsınız?",
    qCode: "",
    answer:
      "React'te API istekleri genellikle fetch API veya Axios kütüphanesiyle yapılır.",
    answerLi: [
      "useEffect ile API isteği yapılabilir.",
      "fetch veya Axios kullanılarak veri alınır.",
      "State kullanılarak alınan veri ekranda gösterilir.",
    ],
    answerCode:
      "useEffect(() => {\n  fetch('https://api.example.com')\n    .then(response => response.json())\n    .then(data => console.log(data));\n}, []);",
    hint: "API isteği yapmak, bir restoranda sipariş vermek gibidir; veriyi almak için bir istek gönderirsiniz.",
  },
  {
    id: "react27",
    category: "REACT",
    subCategory: "REACT handlers",
    question: "onClick ile onSubmit'in farkları nedir?",
    qCode: "",
    answer:
      "onClick bir tıklama olayını tetiklerken, onSubmit bir form gönderme olayını tetikler.",
    answerLi: [
      "onClick: Buton veya herhangi bir öğeye tıklandığında çalışır.",
      "onSubmit: Form gönderildiğinde çalışır.",
      "onSubmit genellikle preventDefault ile birlikte kullanılır.",
    ],
    answerCode: "",
    hint: "onClick bir düğmeye basmak gibidir, onSubmit ise bir formu göndermek gibidir.",
  },
  {
    id: "react28",
    category: "REACT",
    subCategory: "REACT Testing",
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
    hint: "Unit Testing, bir makinenin küçük parçalarını ayrı ayrı test etmek gibidir.",
  },
  {
    id: "react29",
    category: "REACT",
    subCategory: "REACT Testing",
    question: "'Lifting state up' terimi ne anlama gelir?",
    qCode: "",
    answer:
      "Lifting state up, React'te iki veya daha fazla bileşenin ortak state'e erişmesi gerektiğinde state'in en yakın ortak parent bileşene taşınmasıdır.",
    answerLi: [
      "Ortak state yönetimi için kullanılır.",
      "Child bileşenler props ile state'e erişir.",
      "Veri akışını kontrol altında tutar.",
    ],
    answerCode: "",
    hint: "Lifting state up, ailedeki tüm çocukların ortak bir kurala uyması için kararın ebeveyn tarafından verilmesi gibidir.",
  },
  {
    id: "react30",
    category: "REACT",
    subCategory: "REACT Keys",
    question: "'key'lerin list'lerde kullanım amacı nedir?",
    qCode: "",
    answer:
      "React'te 'key' prop'u, liste öğelerini benzersiz şekilde tanımlamak için kullanılır. Bu, React'in hangi öğelerin değiştiğini, eklendiğini veya silindiğini anlamasına yardımcı olur.",
    answerLi: [
      "Performans optimizasyonu sağlar.",
      "Virtual DOM'un daha verimli güncellenmesini sağlar.",
      "Her öğeye benzersiz bir key atanmalıdır.",
    ],
    answerCode:
      "const items = ['A', 'B', 'C'];\nreturn (\n  <ul>\n    {items.map((item, index) => (\n      <li key={index}>{item}</li>\n    ))}\n  </ul>\n);",
    hint: "Key, bir listede öğeleri tanımlayan benzersiz bir kimlik gibidir.",
  },
  {
    id: "react31",
    category: "REACT",
    subCategory: "REACT Rendering",
    question: "'Conditional Rendering' nedir? Nasıl kullanılır?",
    qCode: "",
    answer:
      "Conditional Rendering, React'te koşullara göre farklı UI öğeleri göstermeyi sağlar.",
    answerLi: [
      "if-else, ternary operator (?:) veya && operatörüyle yapılabilir.",
      "Koşula bağlı olarak bileşen veya JSX döndürülür.",
      "UI'da dinamik içerikler oluşturmak için kullanılır.",
    ],
    answerCode:
      "const isLoggedIn = true;\nreturn (\n  <div>{isLoggedIn ? <p>Welcome!</p> : <p>Please log in.</p>}</div>\n);",
    hint: "Conditional Rendering, bir düğmeye basınca gösterilen farklı mesajlar gibidir.",
  },
  {
    id: "react32",
    category: "REACT",
    subCategory: "REACT Functional Components",
    question: "'Functional Component'lerin temel konsepti nedir?",
    qCode: "",
    answer:
      "Functional Components, React'te UI'yi tanımlamak için kullanılan basit Javascript fonksiyonlarıdır.",
    answerLi: [
      "React Hooks ile birlikte state ve lifecycle özellikleri eklenebilir.",
      "Props alır ve JSX döner.",
      "Daha sade ve okunabilir kod sağlar.",
    ],
    answerCode:
      "function Greeting(props) {\n  return <h1>Hello, {props.name}</h1>;\n}",
    hint: "Functional Components, bir fonksiyon gibi çalışır; giriş olarak props alır, çıkış olarak JSX verir.",
  },
  {
    id: "react33",
    category: "REACT",
    subCategory: "REACT Class Components",
    question: "'Class Component'lerin temel konsepti nedir?",
    qCode: "",
    answer:
      "Class Components, React'te daha önce state ve lifecycle metodlarını kullanmak için kullanılan ES6 sınıflarıdır.",
    answerLi: [
      "React.Component sınıfından türetilir.",
      "render() metodu ile JSX döner.",
      "State ve lifecycle metodları içerir.",
    ],
    answerCode:
      "class Greeting extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}",
    hint: "Class Components, bir sınıfın özelliklerini ve yöntemlerini kullanan yapılardır.",
  },
  {
    id: "react34",
    category: "REACT",
    subCategory: "REACT Class Components",
    question:
      "'Class Components' ile 'Functional Components' farkları nelerdir?",
    qCode: "",
    answer:
      "Class Components ve Functional Components, React'te bileşen oluşturmanın iki farklı yoludur.",
    answerLi: [
      "Class Components state ve lifecycle metodları içerir, Functional Components ise Hooks ile bunları sağlar.",
      "Class Components daha karmaşıktır, Functional Components daha sade ve okunabilir.",
      "Functional Components performans açısından daha iyidir.",
    ],
    answerCode: "",
    hint: "Class Components büyük bir makine gibiyken, Functional Components basit bir araç gibidir.",
  },
  {
    id: "react35",
    category: "REACT",
    subCategory: "REACT / Angular / Vue",
    question:
      "React / Angular / Vue , sizce temel farkları nelerdir, neden React?",
    qCode: "",
    answer:
      "React, Angular ve Vue modern UI geliştirme için kullanılan popüler Javascript frameworkleridir, ancak farklı yaklaşımlara sahiptirler.",
    answerLi: [
      "React: Component tabanlıdır, Virtual DOM kullanır ve öğrenmesi kolaydır.",
      "Angular: Tam teşekküllü bir framework'tür, TypeScript ile birlikte gelir ve kapsamlıdır.",
      "Vue: Basit bir öğrenme eğrisine sahiptir, esnek ve hafif bir yapıya sahiptir.",
      "React, büyük topluluğu, esnekliği ve ekosistemi nedeniyle tercih edilir.",
    ],
    answerCode: "",
    hint: "React, modüler yapısıyla Lego gibidir; Angular, bir fabrikaya benzer; Vue ise basit bir kutu oyunu gibidir.",
  },
  {
    id: "react36",
    category: "REACT",
    subCategory: "React.memo",
    question: "React.memo nedir kısaca açıklar mısınız?",
    qCode: "",
    answer:
      "React.memo, fonksiyonel bileşenlerin yalnızca props değiştiğinde yeniden render edilmesini sağlayan bir performans optimizasyon tekniğidir.",
    answerLi: [
      "Memoization ile gereksiz render'ları önler.",
      "Shallow comparison (yüzeysel karşılaştırma) yapar.",
      "Props değişmediği sürece bileşeni yeniden render etmez.",
    ],
    answerCode: "const MemoizedComponent = React.memo(MyComponent);",
    hint: "React.memo, bir sayfanın sadece değişen kısmını güncellemek gibidir.",
  },
  {
    id: "react37",
    category: "REACT",
    subCategory: "REACT HOC",
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
    answerCode:
      "const EnhancedComponent = withExtraProps(MyComponent);\n\nclass MyComponent extends React.PureComponent {}",
    hint: "HOC bir bileşeni süsleyen paket, PureComponent ise gereksiz güncellemeleri engelleyen bir filtre gibidir.",
  },
  {
    id: "react38",
    category: "REACT",
    subCategory: "REACT Hydration",
    question: "React'teki 'hydration' nedir?",
    qCode: "",
    answer:
      "Hydration, sunucu tarafında oluşturulmuş HTML'in tarayıcıda React ile etkileşimli hale getirilmesi sürecidir.",
    answerLi: [
      "SSR (Server-Side Rendering) sonrası kullanılır.",
      "Statik HTML'e React'in eklenmesini sağlar.",
      "ReactDOM.hydrate() metodu ile yapılır.",
    ],
    answerCode: "ReactDOM.hydrate(<App />, document.getElementById('root'));",
    hint: "Hydration, bir heykelin içini doldurmak ve ona hayat vermek gibidir.",
  },
  {
    id: "react39",
    category: "REACT",
    subCategory: "REACT",
    question: "'Element' ile 'Component' in farkı nedir?",
    qCode: "",
    answer:
      "React Element, kullanıcı arayüzünde neyin gösterileceğini tanımlayan basit bir objedir. React Component ise bir işlev veya sınıf olarak tanımlanan ve bir UI öğesi döndüren yapılardır.",
    answerLi: [
      "Element basit bir yapı taşını temsil eder, Component daha karmaşık yapılar oluşturur.",
      "Elementler immutable'dır, Componentler state ve lifecycle metodlarına sahiptir.",
      "Componentler Elementleri oluşturur.",
    ],
    answerCode:
      "const element = <h1>Hello</h1>;\n\nfunction MyComponent() {\n  return <h1>Hello from Component</h1>;\n}",
    hint: "Element bir tuğla, Component ise bu tuğlalarla yapılan bir bina gibidir.",
  },
  {
    id: "react40",
    category: "REACT",
    subCategory: "REACT Security",
    question:
      "'User Authentication' yazarken dikkat etmeniz gereken güvenlik prensipleri nelerdir?",
    qCode: "",
    answer:
      "User Authentication'da güvenliği sağlamak için birçok önlem alınmalıdır.",
    answerLi: [
      "JWT veya OAuth kullanarak güvenli token tabanlı kimlik doğrulama.",
      "XSS ve CSRF saldırılarına karşı korunma.",
      "Parola ve hassas verileri şifreleme (encryption).",
      "HTTPS kullanımı ve güvenli veri iletimi.",
    ],
    answerCode: "",
    hint: "Kullanıcı kimlik doğrulama, bir kasayı güvenli kilitlerle korumak gibidir.",
  },
  {
    id: "react41",
    category: "REACT",
    subCategory: "REACT PWA",
    question: "'Progressive Web Apps' kavramından kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Progressive Web Apps (PWA), web teknolojilerini kullanarak native mobil uygulama deneyimi sunan web uygulamalarıdır.",
    answerLi: [
      "Offline çalışma desteği sunar.",
      "Hızlı yüklenir ve performans odaklıdır.",
      "Push bildirimleri ve cihaz özelliklerine erişim sağlar.",
      "Responsive ve platform bağımsız çalışır.",
    ],
    answerCode: "",
    hint: "PWA, web uygulamalarına mobil uygulama özellikleri kazandıran bir köprü gibidir.",
  },
  {
    id: "react42",
    category: "REACT",
    subCategory: "REACT Performance",
    question:
      "React uygulamanızın performansını arttıracak stratejilerinizden kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "React uygulamalarında performansı artırmak için çeşitli stratejiler kullanılır.",
    answerLi: [
      "React.memo, useMemo ve useCallback ile yeniden render'ları azaltmak.",
      "Code splitting ve lazy loading kullanmak.",
      "Sanal DOM güncellemelerini optimize etmek.",
      "React Profiler ile performans analizleri yapmak.",
      "Unnecessary re-renders'ı önlemek için PureComponent kullanmak.",
    ],
    answerCode: "",
    hint: "React performansı optimize etmek, bir arabanın yakıt tüketimini düşürmek için motoru verimli çalıştırmak gibidir.",
  },
  //PERFORMANS & OPTİMİZASYON
  {
    id: "perf01",
    category: "Performans & Optimizasyon",
    subCategory: "Performans & Optimizasyon",
    question: "Bir sitedeki performans-lagging sorunlarını nasıl düzeltirsin?",
    qCode: "",
    answer:
      "Bir sitedeki performans sorunlarını analiz etmek ve düzeltmek için öncelikle performans ölçümleri yapılır, ardından optimizasyon teknikleri uygulanır.",
    answerLi: [
      "Lighthouse veya Chrome DevTools ile performans analizi yapmak.",
      "Gereksiz render'ları önlemek için React.memo, useMemo ve useCallback kullanmak.",
      "Lazy loading ile büyük dosyaların yüklenmesini ertelemek.",
      "Görselleri optimize etmek (örneğin, WebP formatı kullanmak).",
      "CSS ve Javascript dosyalarını küçültmek (minify) ve sıkıştırmak (gzip, brotli).",
    ],
    answerCode: "",
    hint: "Performans optimizasyonu, bir arabanın motorunu inceleyip gereksiz yükleri azaltmak gibidir.",
  },
  {
    id: "perf02",
    category: "Performans & Optimizasyon",
    subCategory: "React Debugger",
    question: "React Developer Tool nedir? Nasıl kullanırsınız?",
    qCode: "",
    answer:
      "React Developer Tools, React uygulamalarının bileşen yapısını incelemek, state ve props'ları görüntülemek için kullanılan bir tarayıcı eklentisidir.",
    answerLi: [
      "Bileşen hiyerarşisini görselleştirir.",
      "State ve props değerlerini inceleyip değiştirmeye olanak tanır.",
      "React Profiler ile performans analizleri yapılabilir.",
    ],
    answerCode: "",
    hint: "React Developer Tools, bir arabanın motorunu incelemek için kullanılan bir diagnostik cihaz gibidir.",
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
      "React Developer Tools ile birlikte gelir.",
      "Her bileşenin ne kadar sürede render olduğunu gösterir.",
      "Gereksiz render'ları tespit etmeye yardımcı olur.",
    ],
    answerCode: "",
    hint: "React Profiler, bir arabanın hız göstergesi gibi hangi bileşenin ne kadar hızlı çalıştığını gösterir.",
  },
  {
    id: "perf04",
    category: "Performans & Optimizasyon",
    subCategory: "Optimizasyon",
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
    hint: "imgProxy, yüksek kaliteli bir fotoğrafı web için optimize eden bir resim düzenleyici gibidir.",
  },

  // FRAMEWORKS
  {
    id: "framework01",
    category: "FRAMEWORKS",
    subCategory: "Frameworks",
    question: "Framework kavramını açıklar mısınız? Library ile farkı nedir?",
    qCode: "",
    answer:
      "Framework, belirli kurallar ve yapılar içinde uygulama geliştirmeye olanak tanıyan bir yapıdır. Library (kütüphane) ise belirli işlevleri gerçekleştiren kod koleksiyonudur.",
    answerLi: [
      "Framework uygulamanın genel akışını kontrol eder (Inversion of Control), library ise geliştirici tarafından çağrılır.",
      "Framework, yapı iskeleti sunar; library ise spesifik işlemler için kullanılır.",
      "Örnek: React (library), Angular (framework).",
    ],
    answerCode: "",
    hint: "Framework bir iskelet gibidir, library ise bu iskelete eklenen araçlardır.",
  },
  {
    id: "framework02",
    category: "FRAMEWORKS",
    subCategory: "Frameworks",
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
    hint: "Deneyimim olan framework'ler, projelerde performans ve esneklik sağlamaya odaklıdır.",
  },

  //Node.js
  {
    id: "node01",
    category: "Node.js",
    subCategory: "Node.js fundamentals",
    question: "Node.js nedir ? Javascript'ten ne farkı var ?",
    qCode: "",
    answer:
      "Node.js, tarayıcı dışında Javascript çalıştırmak için kullanılan, Chrome'un V8 motoru üzerine kurulmuş bir çalışma ortamıdır. Javascript genellikle tarayıcıda çalışırken, Node.js sunucu tarafında çalışır.",
    answerLi: [
      "Node.js sunucu tarafında, Javascript tarayıcıda çalışır.",
      "Node.js dosya sistemi, HTTP sunucusu gibi API'ler sağlar.",
      "Asenkron, event-driven bir mimariye sahiptir.",
    ],
    answerCode: "",
    hint: "Node.js, Javascript'in tarayıcıdan çıkarılıp sunucuya taşınmış hali gibidir.",
  },
  {
    id: "node02",
    category: "Node.js",
    subCategory: "Node.js fundamentals",
    question: "'package.json' dosyası nedir ?",
    qCode: "",
    answer:
      "package.json, bir Node.js projesinin yapılandırma dosyasıdır. Proje bağımlılıklarını, betikleri (scripts) ve proje meta verilerini tanımlar.",
    answerLi: [
      "Proje bağımlılıklarını yönetir (dependencies).",
      "Versiyon bilgilerini tutar.",
      "npm komutları için script tanımlamaları içerir.",
    ],
    answerCode: "",
    hint: "package.json, bir projenin kimlik kartı gibidir; gerekli tüm bilgileri içerir.",
  },
  {
    id: "node03",
    category: "Node.js",
    subCategory: "Node.js fundamentals",
    question: "'NODE_ENV' ne için kullanılır ?",
    qCode: "",
    answer:
      "NODE_ENV, bir Node.js uygulamasının hangi ortamda (development, production, test) çalıştığını belirlemek için kullanılan bir ortam değişkenidir.",
    answerLi: [
      "Performans ayarlarını optimize etmek için kullanılır.",
      "Development ve production ortamlarını ayırt etmeye yarar.",
      "Örneğin, production ortamında hata mesajları gizlenebilir.",
    ],
    answerCode: "",
    hint: "NODE_ENV, uygulamanın hangi modda çalıştığını belirten bir yol gösterici gibidir.",
  },
  {
    id: "node04",
    category: "Node.js",
    subCategory: "Node.js fundamentals",
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
    hint: "NPM, bir süpermarket gibi; ihtiyacınız olan Javascript paketlerini alabilirsiniz.",
  },
  {
    id: "node05",
    category: "Node.js",
    subCategory: "Node.js fundamentals",
    question:
      "Kullandığınız Node.js Library'lerinden örnekler verebilir misiniz?",
    qCode: "",
    answer: "Node.js projelerinde çeşitli kütüphaneler kullanılır. Örnekler:",
    answerLi: [
      "Express.js: Sunucu oluşturmak için.",
      "Mongoose: MongoDB ile çalışmak için.",
      "Dotenv: Ortam değişkenlerini yönetmek için.",
      "Axios: HTTP istekleri yapmak için.",
      "Jest: Test yazmak için.",
    ],
    answerCode: "",
    hint: "Bu kütüphaneler, Node.js projelerinde farklı işlevleri yerine getirmek için araçlar gibidir.",
  },
  {
    id: "node06",
    category: "Node.js",
    subCategory: "Node.js fundamentals",
    question: "'Express Js' uygulaması nedir kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Express.js, Node.js üzerinde web uygulamaları ve API'ler geliştirmek için kullanılan minimalist bir web framework'üdür.",
    answerLi: [
      "HTTP isteklerini kolayca yönetir.",
      "Middleware desteği ile genişletilebilir.",
      "RESTful API'ler oluşturmak için idealdir.",
    ],
    answerCode: "",
    hint: "Express.js, Node.js üzerinde hızlı bir şekilde web sunucuları kurmanıza yardımcı olan bir araç kutusu gibidir.",
  },
  {
    id: "node07",
    category: "Node.js",
    subCategory: "Node.js fundamentals",
    question: "'ESLint' nedir ?",
    qCode: "",
    answer:
      "ESLint, Javascript kodunu analiz ederek hataları ve tutarsızlıkları tespit eden bir statik kod analiz aracıdır.",
    answerLi: [
      "Kod standartlarını korur.",
      "Hata yakalama ve kod kalitesini artırır.",
      "Özelleştirilebilir kurallar sunar.",
    ],
    answerCode: "",
    hint: "ESLint, kod yazarken dilbilgisi denetimi yapan bir öğretmen gibidir.",
  },

  //TypeScript
  {
    id: "ts01",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question:
      "TypeScript nedir ? Kısaca avantaj ve dezavantajlarından bahseder misiniz?",
    qCode: "",
    answer:
      "TypeScript, Javascript'in üzerine inşa edilmiş, statik tip denetimi sağlayan bir programlama dilidir.",
    answerLi: [
      "Avantajları: Hata yakalama kolaylığı, daha iyi IDE desteği, büyük projelerde kod bakımını kolaylaştırır.",
      "Dezavantajları: Daha fazla öğrenme eğrisi, derleme süresi ekler, küçük projelerde fazla karmaşık olabilir.",
    ],
    answerCode: "",
    hint: "TypeScript, Javascript'in daha güvenli ve yapılandırılmış bir sürümüdür.",
  },
  {
    id: "ts02",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question:
      "TypeScript ile bir variable'ı nasıl deklare edersiniz ? Kısaca Javascript'ten farkı nedir?",
    qCode: "",
    answer:
      "TypeScript'te değişkenler type belirtilerek tanımlanır, Javascript'te ise type belirtmek gerekmez.",
    answerLi: [
      "TypeScript: let age: number = 25;",
      "Javascript: let age = 25;",
      "TypeScript, type hatalarını derleme aşamasında yakalar.",
    ],
    answerCode: "let name: string = 'John';",
    hint: "TypeScript'te tip belirterek daha güvenli kod yazılır.",
  },
  {
    id: "ts03",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question: "TSX nedir?",
    qCode: "",
    answer:
      "TSX, TypeScript ile yazılmış React bileşenlerinde kullanılan JSX uzantılı dosya türüdür.",
    answerLi: [
      "JSX'in TypeScript destekli hali olarak çalışır.",
      "Tip güvenliği sağlar.",
      "React projelerinde kullanılır.",
    ],
    answerCode: "const element: JSX.Element = <h1>Hello, TypeScript!</h1>;",
    hint: "TSX, React'in JSX sözdizimini TypeScript ile birleştirir.",
  },
  {
    id: "ts04",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question: "type inference nedir?",
    qCode: "",
    answer:
      "Type inference, TypeScript'in bir değişkenin türünü otomatik olarak tahmin etmesidir.",
    answerLi: [
      "Belirli bir değer atandığında TypeScript tipi otomatik olarak belirler.",
      "Kod daha kısa ve temiz olur.",
      "Örnek: let name = 'John'; // TypeScript otomatik olarak string olarak algılar.",
    ],
    answerCode:
      "let count = 10; // TypeScript, 'count' değişkenini number olarak algılar.",
    hint: "Type inference, TypeScript'in kodu daha güvenli hale getirmek için tahmin yürütmesidir.",
  },
  {
    id: "ts05",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question:
      "TypeScript ile bir objeyi nasıl oluşturursunuz, Javascript'ten kısaca farkı nedir?",
    qCode: "",
    answer:
      "TypeScript'te objeler tip tanımlamaları ile oluşturulur, Javascript'te ise serbesttir.",
    answerLi: [
      "TypeScript: interface veya type kullanılarak tanımlanır.",
      "Javascript: tip kısıtlaması olmadan obje oluşturulur.",
      "TypeScript, tip güvenliği sağlar.",
    ],
    answerCode:
      "interface User {\n  name: string;\n  age: number;\n}\n\nconst user: User = { name: 'John', age: 30 };",
    hint: "TypeScript objeleri, veri yapılarını daha güvenli hale getirir.",
  },
  {
    id: "ts06",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
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
    answerCode: '{ "compilerOptions": { "target": "ES5" } }',
    hint: "TypeScript kodunu eski tarayıcılarla uyumlu hale getirmek için derleme hedefini ayarlamak önemlidir.",
  },
  {
    id: "ts07",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question: "TypeScript'teki type'lar nelerdir?",
    qCode: "",
    answer:
      "TypeScript'te temel type'lar veri türlerini tanımlamak için kullanılır.",
    answerLi: [
      "Primitive Types: string, number, boolean, null, undefined.",
      "Array Types: number[], string[].",
      "Tuple, Enum, Any, Unknown, Void, Never, Object.",
      "Custom Types: interface ve type ile tanımlanabilir.",
    ],
    answerCode:
      "let name: string = 'Alice';\nlet age: number = 30;\nlet isActive: boolean = true;",
    hint: "TypeScript'teki type'lar, verileri daha güvenli ve tahmin edilebilir hale getirir.",
  },
  {
    id: "ts08",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question:
      "readonly modifier nedir, immutable properties oluşturmak için nasıl kullanırsınız?",
    qCode: "",
    answer:
      "readonly, TypeScript'te bir değişkenin veya objenin özelliklerinin değiştirilemez olmasını sağlar.",
    answerLi: [
      "readonly ile tanımlanan bir property sadece tanımlandığı anda atanabilir.",
      "Immutable veri yapıları oluşturmak için kullanılır.",
      "Özellikle constant objeler için faydalıdır.",
    ],
    answerCode:
      "interface User {\n  readonly id: number;\n  name: string;\n}\n\nconst user: User = { id: 1, name: 'John' };\n// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.",
    hint: "readonly, değişmemesi gereken verileri korumak için bir kilit gibidir.",
  },
  {
    id: "ts09",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question: "'interface' ile 'type alias' farkı nedir?",
    qCode: "",
    answer:
      "interface, nesne yapıları tanımlamak için kullanılırken, type alias hem nesneleri hem de birleşik (union) türleri tanımlamak için kullanılır.",
    answerLi: [
      "interface genişletilebilir (extends), type birleşik (union) ve kesişim (intersection) türler için uygundur.",
      "type ile primitive türler, tuple veya union type tanımlanabilir.",
      "interface, class'lar için daha uygundur.",
    ],
    answerCode:
      "interface User { name: string; age: number; }\ntype UserType = { name: string; age: number; };",
    hint: "interface bir yapı iskelesi gibidir, type ise daha esnek bir tasarım şablonudur.",
  },
  {
    id: "ts10",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question:
      "TypeScript kodunun Javascript koduna nasıl compile oluşunu kısaca açıklar mısınız?",
    qCode: "",
    answer:
      "TypeScript kodu, TypeScript Compiler (tsc) kullanılarak Javascript'e dönüştürülür.",
    answerLi: [
      "tsc komutu ile derlenir.",
      "tsconfig.json dosyası ile derleyici ayarları yapılır.",
      "ES5 veya ES6 gibi farklı Javascript sürümlerine dönüştürülebilir.",
    ],
    answerCode: "tsc app.ts // app.js dosyası oluşturur",
    hint: "TypeScript derlemesi, bir tarifin son halini hazırlamak gibidir.",
  },
  {
    id: "ts11",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question: "'tuples' nedir?",
    qCode: "",
    answer:
      "Tuple, sabit sayıda ve belirli türlerde öğeler içeren bir veri yapısıdır.",
    answerLi: [
      "Her elemanın veri türü önceden belirlenir.",
      "Farklı türdeki verileri bir arada tutar.",
      "Array'e benzer fakat tür sıralaması önemlidir.",
    ],
    answerCode: "let user: [string, number] = ['Alice', 25];",
    hint: "Tuple, bir kimlik kartında isim ve yaş gibi sabit verileri tutmak gibidir.",
  },
  {
    id: "ts12",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question: "'decorators' nedir?",
    qCode: "",
    answer:
      "Decorator, class'lar veya class üyelerine ek işlevsellik kazandırmak için kullanılan özel bir TypeScript özelliğidir.",
    answerLi: [
      "Class, method, property veya parameter üzerinde çalışabilir.",
      "Fonksiyon olarak tanımlanır ve @ sembolü ile kullanılır.",
      "Genellikle meta-programlama ve dependency injection için kullanılır.",
    ],
    answerCode:
      "function Logger(constructor: Function) {\n  console.log('Logging...');\n}\n\n@Logger\nclass Person {}",
    hint: "Decorator, bir pastayı süslemek gibi; class'lara ekstra özellikler ekler.",
  },
  {
    id: "ts13",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question:
      "'enum', 'any', 'void', 'never', 'Omit' kavramlarını kısaca açıklar mısınız?",
    qCode: "",
    answer: "Bu TypeScript türleri farklı amaçlar için kullanılır.",
    answerLi: [
      "enum: Sabit değerleri gruplayarak daha okunabilir kod sağlar.",
      "any: Herhangi bir türü temsil eder, tip güvenliğini devre dışı bırakır.",
      "void: Fonksiyonun geri dönüş değeri olmadığını belirtir.",
      "never: Asla gerçekleşmeyecek bir durumu ifade eder (ör. hata fırlatma).",
      "Omit: Bir türden belirli özellikleri hariç tutmak için kullanılır.",
    ],
    answerCode:
      "enum Role { Admin, User }\nlet value: any = 5;\nfunction log(): void {}\nfunction error(): never { throw new Error('Error'); }\ntype Person = { name: string; age: number };\ntype PersonWithoutAge = Omit<Person, 'age'>;",
    hint: "Bu türler, kodda daha doğru tip kontrolü sağlamak için kullanılır.",
  },
  {
    id: "ts14",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question: "'.ts' ile '.tsx' uzantılarının farkını kısaca açıklar mısınız?",
    qCode: "",
    answer:
      ".ts, saf TypeScript dosyaları için kullanılırken, .tsx React ile TypeScript kullanan dosyalar için JSX desteği sağlar.",
    answerLi: [
      ".ts sadece TypeScript kodlarını içerir.",
      ".tsx hem TypeScript hem de JSX kodlarını destekler.",
      "React projelerinde .tsx kullanılır.",
    ],
    answerCode:
      "// .ts dosyası\nlet message: string = 'Hello';\n\n// .tsx dosyası\nconst element = <h1>Hello, TypeScript!</h1>;",
    hint: ".tsx, React'in JSX sözdizimini TypeScript ile birleştiren özel bir dosya türüdür.",
  },
  {
    id: "ts15",
    category: "TypeScript",
    subCategory: "TypeScript Fundamentals",
    question: "'as const' assertion'u kısaca açıklar mısınız?",
    qCode: "",
    answer:
      "'as const', bir değer veya objeyi immutable (değiştirilemez) hale getiren TypeScript özelliğidir.",
    answerLi: [
      "Veriyi readonly olarak işaretler.",
      "Literal tipler üzerinde çalışır.",
      "Union type'lar için kesin değerler sağlar.",
    ],
    answerCode:
      "const colors = ['red', 'green', 'blue'] as const;\n// colors[0] = 'yellow'; // Error: Cannot assign to '0' because it is a read-only property.",
    hint: "'as const', veriyi dondurmak gibidir; artık değiştirilemez hale gelir.",
  },

  //SECURITY
  {
    id: "security01",
    category: "Security",
    subCategory: "Cross-Site Scripting",
    question:
      "Web güvenliğindeki Cross-Site Scripting (XSS) nedir , nasıl engellersiniz?",
    qCode: "",
    answer:
      "Cross-Site Scripting (XSS), kötü niyetli kullanıcıların web sayfasına zararlı Javascript kodları enjekte ederek kullanıcı verilerini çalmasına veya uygulama davranışını değiştirmesine neden olan bir güvenlik açığıdır.",
    answerLi: [
      "Girdi doğrulama (input validation) ile kullanıcı verilerini filtrelemek.",
      "Çıktı kodlama (output encoding) kullanarak HTML içine gömülen verileri güvenli hale getirmek.",
      "Content Security Policy (CSP) uygulayarak zararlı komut dosyalarının çalışmasını engellemek.",
      "Javascript kütüphanelerinde güvenli API'ler kullanmak.",
    ],
    answerCode: "",
    hint: "XSS, bir web sitesine gizlice zararlı bir kod eklemek gibidir; bunu önlemek için gelen verileri filtrelemek gerekir.",
  },
  {
    id: "security02",
    category: "Security",
    subCategory: "CORS Policy",
    question:
      "Cross-Origin Resource Sharing (CORS) policy nedir , nasıl çalışır?",
    qCode: "",
    answer:
      "CORS (Cross-Origin Resource Sharing), bir web sayfasının farklı bir alan adı (origin) üzerinden kaynaklara erişmesini kontrol eden bir güvenlik mekanizmasıdır.",
    answerLi: [
      "Tarayıcılar, güvenlik amacıyla aynı köken (same-origin) politikası uygular.",
      "CORS, HTTP başlıkları aracılığıyla hangi domain'lerin belirli kaynaklara erişebileceğini belirler.",
      "Access-Control-Allow-Origin başlığı ile hangi domain'lere izin verileceği ayarlanır.",
      "Sunucu, gelen isteğin kaynağını kontrol eder ve izin verirse tarayıcıya yanıt gönderir.",
    ],
    answerCode:
      "app.use((req, res, next) => {\n  res.header('Access-Control-Allow-Origin', '*');\n  next();\n});",
    hint: "CORS, bir sitenin başka bir siteden veri alıp almayacağını belirleyen bir sınır kapısı gibidir.",
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
      "Örneğin: Git, SVN, Mercurial.",
    ],
    answerCode: "",
    hint: "Versiyon kontrol sistemi, bir belgenin değişim geçmişini tutan bir kayıt defteri gibidir.",
  },
  {
    id: "git02",
    category: "git version control",
    subCategory: "git version control",
    question:
      "Merkezi ve dağıtılmış versiyon kontrol sistemlerinin farkı nedir?",
    qCode: "",
    answer:
      "Merkezi versiyon kontrol sistemi (CVCS) tek bir sunucuya bağlı çalışırken, dağıtılmış versiyon kontrol sistemi (DVCS) her kullanıcıda tam bir kopya barındırır.",
    answerLi: [
      "CVCS: Subversion (SVN) gibi araçlar, merkezi bir sunucuya bağlıdır.",
      "DVCS: Git gibi araçlar, her geliştiricinin tam bir depo kopyası ile çalışmasına izin verir.",
      "DVCS, çevrimdışı çalışmayı desteklerken CVCS desteklemez.",
    ],
    answerCode: "",
    hint: "CVCS bir merkez kütüphane gibidir, DVCS ise her kişinin kendi kitap arşivine sahip olması gibidir.",
  },
  {
    id: "git03",
    category: "git version control",
    subCategory: "git version control",
    question: "Branch nedir?",
    qCode: "",
    answer:
      "Branch, projedeki kod tabanının bağımsız bir kopyasını oluşturmak için kullanılır. Bu sayede yeni özellikler geliştirilebilir veya hatalar düzeltilebilir.",
    answerLi: [
      "Ana koddan bağımsız olarak çalışmayı sağlar.",
      "Kod birleştirme (merge) işlemleriyle tekrar ana dal ile birleştirilebilir.",
      "Git'te 'main' veya 'master' genellikle ana branch'tir.",
    ],
    answerCode: "",
    hint: "Branch, bir ağacın dalı gibi; ana gövdeden ayrılarak farklı bir yol izler.",
  },
  {
    id: "git04",
    category: "git version control",
    subCategory: "git version control",
    question: "Pull Request nedir?",
    qCode: "",
    answer:
      "Pull Request (PR), bir branch'teki değişikliklerin ana koda entegre edilmesi için yapılan bir istek sürecidir.",
    answerLi: [
      "Kod inceleme ve tartışma imkanı sağlar.",
      "Takım içi iş birliğini destekler.",
      "Genellikle GitHub, GitLab gibi platformlarda kullanılır.",
    ],
    answerCode: "",
    hint: "Pull Request, bir takım üyesinin yaptığı değişiklikleri inceleme ve onay için göndermesi gibidir.",
  },
  {
    id: "git05",
    category: "git version control",
    subCategory: "git version control",
    question:
      "'git push', 'git pull', 'git add', 'git reset', 'git merge', 'git fetch' komutlarından kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Bu komutlar Git'te kod versiyon kontrolü için temel işlemleri gerçekleştirir.",
    answerLi: [
      "git push: Yerel değişiklikleri uzak depoya gönderir.",
      "git pull: Uzak depodaki değişiklikleri yerel depoya çeker.",
      "git add: Değişiklikleri staging alanına ekler.",
      "git reset: Değişiklikleri geri alır veya staging alanından çıkarır.",
      "git merge: Farklı branch'leri birleştirir.",
      "git fetch: Uzak depodaki güncellemeleri alır ama otomatik birleştirme yapmaz.",
    ],
    answerCode: "",
    hint: "Bu komutlar, bir kitabın taslağını yazmak, düzenlemek ve yayımlamak gibi kod üzerinde çalışmayı kolaylaştırır.",
  },
  {
    id: "git06",
    category: "git version control",
    subCategory: "git version control",
    question:
      "'git config', 'git init', 'git commit', 'git status' komutlarından kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Bu komutlar, Git yapılandırması ve sürüm kontrolü işlemleri için kullanılır.",
    answerLi: [
      "git config: Git yapılandırma ayarlarını yönetir (örneğin kullanıcı adı ve e-posta).",
      "git init: Yeni bir Git deposu başlatır.",
      "git commit: Yapılan değişiklikleri kaydeder.",
      "git status: Depodaki mevcut durum hakkında bilgi verir.",
    ],
    answerCode: "",
    hint: "Bu komutlar, bir projeyi başlatmak, düzenlemek ve ilerlemesini takip etmek için kullanılır.",
  },
  {
    id: "git07",
    category: "git version control",
    subCategory: "git version control",
    question: "'git pull', 'git fetch' farkı nedir?",
    qCode: "",
    answer:
      "git pull, uzak depodaki değişiklikleri çeker ve otomatik olarak birleştirir. git fetch ise sadece değişiklikleri indirir ama birleştirme yapmaz.",
    answerLi: [
      "git pull = git fetch + git merge",
      "git fetch, daha güvenlidir çünkü otomatik birleştirme yapmaz.",
      "git pull, daha hızlıdır ancak merge çatışmalarına neden olabilir.",
    ],
    answerCode: "",
    hint: "git pull tüm dosyaları indirip güncellerken, git fetch yalnızca kopyasını indirir ama dosyaları değiştirmez.",
  },
  {
    id: "git08",
    category: "git version control",
    subCategory: "git version control",
    question:
      "'merge conflict', nedir? Bir conflict'i nasıl çözümlendirirsiniz?",
    qCode: "",
    answer:
      "Merge conflict, iki branch birleştirilirken aynı dosyada çakışan değişiklikler olduğunda ortaya çıkar.",
    answerLi: [
      "Manuel olarak çakışan dosyaları düzenleyerek çözülür.",
      "Çakışma işaretleri (<<<<<<<, =======, >>>>>>>) kaldırılır.",
      "Düzenleme sonrası 'git add' ile dosya eklenir ve 'git commit' ile tamamlanır.",
    ],
    answerCode: "",
    hint: "Merge conflict, iki kişinin aynı dokümanı farklı şekilde düzenlemesiyle oluşan bir çakışma gibidir.",
  },

  //Others
  {
    id: "dry01",
    category: "D.R.Y. Concept",
    subCategory: "D.R.Y. Concept",
    question: "D.R.Y. Concept'ten kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "D.R.Y. (Don't Repeat Yourself) prensibi, kod tekrarını önleyerek daha okunabilir, sürdürülebilir ve hatasız kod yazmayı hedefler.",
    answerLi: [
      "Tekrarlayan kodlar yerine fonksiyonlar veya modüller kullanılır.",
      "Kodun bakımı daha kolay hale gelir.",
      "Hata olasılığı azalır ve kod tutarlılığı artar.",
    ],
    answerCode: "",
    hint: "D.R.Y., aynı işlemi defalarca yazmak yerine tek bir yerde tanımlamak gibidir.",
  },
  {
    id: "mongodb01",
    category: "MangoDB",
    subCategory: "MangoDB",
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
    hint: "MongoDB, verileri tablo değil belgeler halinde saklayan esnek bir veritabanıdır.",
  },
  {
    id: "mysql01",
    category: "MySQL",
    subCategory: "MySQL",
    question: "Hiç MySQL kullandınız mı? kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "Evet, MySQL kullandım. MySQL, ilişkisel veritabanı yönetim sistemidir ve verileri tablo halinde saklar.",
    answerLi: [
      "SQL dili ile veri sorgulama ve yönetim işlemleri yapılır.",
      "ACID uyumlu olup veri bütünlüğü sağlar.",
      "Genellikle web uygulamalarında arka planda çalışır.",
    ],
    answerCode: "",
    hint: "MySQL, verileri düzenli tablolarda tutan popüler bir veritabanıdır.",
  },
  {
    id: "jquery01",
    category: "JQuery",
    subCategory: "JQuery",
    question: "JQuery nedir? kısaca bahseder misiniz?",
    qCode: "",
    answer:
      "jQuery, Javascript'in DOM manipülasyonunu, olay yönetimini ve Ajax işlemlerini kolaylaştırmak için geliştirilmiş hafif bir kütüphanedir.",
    answerLi: [
      "Basit sözdizimi ile HTML elementleri üzerinde kolayca işlem yapılabilir.",
      "Tarayıcı uyumluluğu sağlar.",
      "Modern projelerde popülerliği azalmış olsa da hala bazı eski projelerde kullanılır.",
    ],
    answerCode: "",
    hint: "jQuery, Javascript kodlarını daha kısa ve basit yazmayı sağlar.",
  },
  {
    id: "kiss01",
    category: "KISS Principle",
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
    hint: "KISS, karmaşıklığı azaltıp basit çözümler üretmeyi teşvik eder.",
  },
  {
    id: "cookies01",
    category: "Cookies",
    subCategory: "Cookies",
    question: "Cookies'den ne anlıyorsunuz?",
    qCode: "",
    answer:
      "Cookies, kullanıcı bilgilerinin küçük veri parçaları halinde tarayıcıda saklanmasını sağlayan dosyalardır.",
    answerLi: [
      "Kullanıcı tercihleri veya oturum bilgileri tutulabilir.",
      "HTTP başlıklarıyla gönderilir.",
      "Genellikle kimlik doğrulama ve takip işlemleri için kullanılır.",
    ],
    answerCode: "",
    hint: "Cookies, bir kullanıcının tarayıcı geçmişinde saklanan küçük bilgi notları gibidir.",
  },
  {
    id: "general01",
    category: "General",
    subCategory: "General web dev vs web designer",
    question: "Web developer ile web designer arasındaki fark nedir?",
    qCode: "",
    answer:
      "Web developer, web sitelerinin işlevselliğini geliştirirken, web designer sitenin görünümünü ve kullanıcı deneyimini tasarlar.",
    answerLi: [
      "Web developer: HTML, CSS, Javascript, backend dilleri ile çalışır.",
      "Web designer: UI/UX tasarımı, renk teorisi ve görsel estetik odaklıdır.",
      "Developer işlevselliği, designer ise estetiği ön planda tutar.",
    ],
    answerCode: "",
    hint: "Web developer bir binanın inşaatını yapar, web designer ise iç tasarımını yapar.",
  },
  {
    id: "backend01",
    category: "BACKEND",
    subCategory: "BACKEND",
    question: "Backend nedir?",
    qCode: "",
    answer:
      "Backend, bir uygulamanın sunucu tarafında çalışan, veritabanı işlemleri ve iş mantığını yöneten bölümdür.",
    answerLi: [
      "Sunucu, veritabanı ve API yönetimi yapılır.",
      "Veri işleme ve doğrulama backend tarafında gerçekleşir.",
      "Node.js, Express, MongoDB gibi teknolojiler kullanılır.",
    ],
    answerCode: "",
    hint: "Backend, bir sitenin kullanıcıya görünmeyen ama çalışan motor kısmıdır.",
  },
  {
    id: "clickjacking01",
    category: "ClickJagging",
    subCategory: "ClickJagging",
    question: "ClickJagging nedir?",
    qCode: "",
    answer:
      "Clickjacking, kullanıcıyı aldatıcı arayüzlerle manipüle ederek istenmeyen işlemler yapmasını sağlayan bir güvenlik saldırısıdır.",
    answerLi: [
      "Gizlenmiş bir iframe veya düğme ile kullanıcıyı tuzağa düşürür.",
      "Güvenlik başlıkları (X-Frame-Options) ile korunabilir.",
      "UI Redressing olarak da bilinir.",
    ],
    answerCode: "",
    hint: "Clickjacking, görünmeyen bir düğmeye istemeden tıklatmak gibidir.",
  },
  {
    id: "ucd01",
    category: "User Centered Design",
    subCategory: "User Centered Design",
    question: "User Centered Design nedir?",
    qCode: "",
    answer:
      "User Centered Design (UCD), ürün veya hizmetlerin tasarımında kullanıcı ihtiyaçlarını ve deneyimlerini önceliklendiren bir yaklaşımdır.",
    answerLi: [
      "Kullanıcı geri bildirimlerine dayanır.",
      "Kullanıcı dostu arayüzler oluşturur.",
      "Sürekli test ve iyileştirme süreçleri içerir.",
    ],
    answerCode: "",
    hint: "UCD, bir ürünün tasarımında kullanıcıyı merkeze koymak gibidir.",
  },
  {
    id: "webpack01",
    category: "webpack",
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
];
