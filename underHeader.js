const reasons = [
  { title: " محتوى متنوع",
     image: "   office-removebg-preview.png",
      text: "محتوانا يشمل طلاب الشهادة الثانوية ، الجامعة و الباحثين عن تطوير الذات" },
  { title: "سهولة و تنوع طرق التدريس",
     image: "   file-removebg-preview.png",
      text: "تعلم عبر الفيديوهات ، الملفات الصور التوضيحية و المزيد." },
      { title: "سهولة الوصول",
        image: "   timetable-removebg-preview.png",
         text: "تعلم في اي مكان و زمان بضغطة زر" },
  { title: "شهادات و اسئلة لتحديد مستواك",
     image: "   certifi-removebg-preview.png", 
     text: "شارك شهاداتك و درجاتك بعد نهاية كل كورس" },
  { title: "نوادي مناقشة و فرص للتواصل مع المدرسين",
     image: "   clubs.png", 
     text: " لدراسة فعالة و تدريب على التقديم ، و زرع روح العمل الجماعي" },
  { title: "الكثير من العروض المجانية",
     image: "   wallet-removebg-preview.png", 
     text: "كورسات ، ورش ، ندوات ، بودكاست ، و   المزيد"},
  { title: "مدرسين و مخاطبين متمييزين", 
    image: "   jalabia.jpeg", 
    text: "ليضعوا بين ايديكم حصيلة خبراتهم التي لا تنتهي" },
  { title: "جوائز و هدايا", 
    image: "   gift-removebg-preview.png", 
    text: "تكريما لكل مجتهد و مثابر و صابر على قعدات العلم" },
];

const container = document.getElementById("cardContainer");

reasons.forEach(reason => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${reason.title}</h3>
    <img src="${reason.image}" alt="Card image">
    <p>${reason.text}</p>
  `;
  container.appendChild(card);
});




//people

class Card1 {
  constructor(name, job, desc, imgSrc) {
    this.name = name;
    this.job = job;
    this.desc = desc;
    this.imgSrc = imgSrc;
  }

  createCardElement1(isActive) {
    const div = document.createElement('div');
    div.className = 'card1' + (isActive ? ' active1' : '');

    div.innerHTML = `
      <img src="${this.imgSrc}" class="profile-img1" alt="الصورة الشخصية">
      <h2 class="name1">${this.name}</h2>
      <h4 class="job1">${this.job}</h4>
      <p class="desc1">${this.desc}</p>
    `;

    return div;
  }
}

class Slider1 {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.cardsData = [];
    this.currentIndex = 0;
  }

  addCard1(cardObj) {
    this.cardsData.push(cardObj);
  }

  renderCards1() {
    this.cardsData.forEach((card, index) => {
      const cardEl = card.createCardElement1(index === 0);
      this.container.insertBefore(cardEl, document.getElementById('buttons1'));
    });
  }

  showCard1(index) {
    const cards = this.container.querySelectorAll('.card1');
    cards.forEach((card, i) => {
      card.classList.toggle('active1', i === index);
    });
  }

  next1() {
    this.currentIndex = (this.currentIndex + 1) % this.cardsData.length;
    this.showCard1(this.currentIndex);
  }

  prev1() {
    this.currentIndex = (this.currentIndex - 1 + this.cardsData.length) % this.cardsData.length;
    this.showCard1(this.currentIndex);
  }
}

// إنشاء السلايدر
const slider1 = new Slider1('slider1');

// إضافة البطاقات
slider1.addCard1(new Card1(
  'محمد أحمد',
  'طبيب عام',
  'محمد طبيب يعمل في مستشفى حكومي، يهتم بصحة الأطفال ويطمح للتخصص في طب الأطفال.',
  '   headerimg.png'
));

slider1.addCard1(new Card1(
  'سارة علي',
  'ممرضة',
  'سارة لديها خبرة كبيرة في رعاية المرضى، وتحب مساعدة الآخرين في التعافي وتحسين صحتهم.',
  'headerimg.png'
));

slider1.addCard1(new Card1(
  'خالد يوسف',
  'صيدلي',
  'خالد يعمل في صيدلية مجتمعية ويحرص على تقديم أفضل النصائح الدوائية للمرضى.',
  'headerimg.png'
));

// عرض الكروت على الصفحة
slider1.renderCards1();
