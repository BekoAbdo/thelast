   // بيانات الكورسات
   const courses = [
    {
        id: 1,
        enTitle: "Cardiology Fundamentals",
        arTitle: "أساسيات طب القلب",
        image: "https://source.unsplash.com/random/300x200/?cardiology",
        instructor: {
            name: "Dr. Ahmed Mahmoud",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            bio: "استشاري أمراض القلب بمستشفى الجامعة، خبير في تشخيص وعلاج أمراض القلب الخلقية."
        },
        description: {
            short: "هذا الكورس يغطي أساسيات طب القلب بما في ذلك التشريح، الفيزيولوجيا، والأمراض الشائعة...",
            full: "هذا الكورس يغطي أساسيات طب القلب بما في ذلك التشريح، الفيزيولوجيا، والأمراض الشائعة. سيتعلم الطلاب كيفية تشخيص الحالات القلبية الأساسية، قراءة تخطيط القلب الكهربائي، وفهم مبادئ العلاج الدوائي. الكورس مناسب لطلاب الطب والمقيمين في السنوات الأولى."
        },
        mode: "online",
        duration: "6 weeks",
        hasCertificate: true,
        price: "$199"
    },
    {
        id: 2,
        enTitle: "Pediatric Emergency Care",
        arTitle: "الرعاية الطارئة للأطفال",
        image: "https://source.unsplash.com/random/300x200/?pediatric",
        instructor: {
            name: "Dr. Sarah Johnson",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "أخصائية طب الأطفال الطارئ بمستشفى الأطفال، متخصصة في حالات الطوارئ والرعاية الحرجة للأطفال."
        },
        description: {
            short: "كورس متكامل عن إدارة الحالات الطارئة في طب الأطفال بما في ذلك الصدمات، التسممات...",
            full: "كورس متكامل عن إدارة الحالات الطارئة في طب الأطفال بما في ذلك الصدمات، التسممات، والاختلاجات. يتضمن الكورس تدريبات عملية على الإنعاش القلبي الرئوي للأطفال، إدارة مجرى الهواء، والوصول الوريدي في حالات الطوارئ. الكورس معتمد من المجلس العربي لطب الطوارئ."
        },
        mode: "offline",
        duration: "2 days",
        hasCertificate: true,
        price: "$350"
    },
    {
        id: 3,
        enTitle: "Neurosurgery Techniques",
        arTitle: "تقنيات جراحة الأعصاب",
        image: "https://source.unsplash.com/random/300x200/?neurosurgery",
        instructor: {
            name: "Dr. Michael Chen",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            bio: "جراح أعصاب بمستشفى التخصصي، خبير في جراحات العمود الفقري وأورام الدماغ."
        },
        description: {
            short: "هذا الكورس المتقدم يغطي أحدث التقنيات في جراحة الأعصاب بما في ذلك الجراحة...",
            full: "هذا الكورس المتقدم يغطي أحدث التقنيات في جراحة الأعصاب بما في ذلك الجراحة بالمنظار، الجراحة المجهرية، والجراحة الوظيفية. سيتضمن الكورس دراسات حالة حقيقية، محاكاة جراحية، ومناقشات تفاعلية حول التحديات في مجال جراحة الأعصاب. مطلوب خبرة سابقة في الجراحة العامة."
        },
        mode: "offline",
        duration: "3 months",
        hasCertificate: true,
        price: "$1200"
    },
    {
        id: 4,
        enTitle: "Medical Imaging Basics",
        arTitle: "أساسيات التصوير الطبي",
        image: "https://source.unsplash.com/random/300x200/?radiology",
        instructor: {
            name: "Dr. Ali Hassan",
            image: "https://randomuser.me/api/portraits/men/63.jpg",
            bio: "أستاذ الأشعة التشخيصية بكلية الطب، متخصص في التصوير بالرنين المغناطيسي والأشعة المقطعية."
        },
        description: {
            short: "تعلم أساسيات قراءة وتفسير الصور الطبية بما في ذلك الأشعة السينية، الموجات...",
            full: "تعلم أساسيات قراءة وتفسير الصور الطبية بما في ذلك الأشعة السينية، الموجات فوق الصوتية، والأشعة المقطعية. الكورس سيركز على المظاهر الطبيعية والشائعة للأمراض في مختلف أنواع التصوير. مناسب للأطباء العامين والمقيمين في التخصصات غير الأشعة."
        },
        mode: "online",
        duration: "4 weeks",
        hasCertificate: false,
        price: "$149"
    },
    {
        id: 5,
        enTitle: "Clinical Pharmacology",
        arTitle: "الفارماكولوجيا السريرية",
        image: "https://source.unsplash.com/random/300x200/?pharmacy",
        instructor: {
            name: "Dr. Emily Wilson",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            bio: "أستاذة علم الأدوية السريري، باحثة في التفاعلات الدوائية والعلاجات الشخصية."
        },
        description: {
            short: "هذا الكورس يغطي المبادئ الأساسية لاستخدام الأدوية في الممارسة السريرية مع التركيز...",
            full: "هذا الكورس يغطي المبادئ الأساسية لاستخدام الأدوية في الممارسة السريرية مع التركيز على آلية العمل، التأثيرات الجانبية، والتفاعلات الدوائية. سيتضمن الكورس دراسات حالة تفاعلية لاتخاذ القرارات العلاجية المثلى بناءً على خصائص المريض."
        },
        mode: "online",
        duration: "5 weeks",
        hasCertificate: true,
        price: "$179"
    },
    {
        id: 6,
        enTitle: "Dermatology for GPs",
        arTitle: "الأمراض الجلدية للأطباء العامين",
        image: "https://source.unsplash.com/random/300x200/?dermatology",
        instructor: {
            name: "Dr. Omar Khalid",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            bio: "استشاري الأمراض الجلدية، متخصص في تشخيص وعلاج الأمراض الجلدية الشائعة والنادرة."
        },
        description: {
            short: "كورس عملي مصمم خصيصًا للأطباء العامين لتمكينهم من تشخيص وعلاج الحالات الجلدية...",
            full: "كورس عملي مصمم خصيصًا للأطباء العامين لتمكينهم من تشخيص وعلاج الحالات الجلدية الشائعة في العيادة الأولية. سيتعلم المشاركون كيفية التعرف على الطفح الجلدي، آفات الجلد، والأمراض المعدية الجلدية. الكورس يشمل ورش عمل عملية على الحقن الجلدية والعلاجات الموضعية."
        },
        mode: "hybrid",
        duration: "3 weeks",
        hasCertificate: true,
        price: "$220"
    }
];

// تهيئة Fuse.js للبحث المرن
const fuseOptions = {
    keys: [
        'enTitle',
        'arTitle',
        'description.full',
    ],
    includeScore: true,
    threshold: 0.3,
    ignoreLocation: true,
    minMatchCharLength: 3
};

const fuse = new Fuse(courses, fuseOptions);

// عرض الكورسات في الصفحة
function displayCourses(coursesToDisplay) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';

    if (coursesToDisplay.length === 0) {
        container.innerHTML = '<div class="no-results">لا توجد نتائج مطابقة لبحثك</div>';
        return;
    }

    coursesToDisplay.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course-card';
        courseElement.innerHTML = `
            <img src="${course.image}" alt="${course.enTitle}" class="course-image">
            <div class="course-content">
                <div class="course-title">
                    <h3>${course.enTitle}</h3>
                    <span class="ar-title">${course.arTitle}</span>
                </div>
                
                <div class="instructor">
                    <img src="${course.instructor.image}" alt="${course.instructor.name}">
                    <span class="instructor-name">${course.instructor.name}</span>
                </div>
                
                <p class="course-description">${course.description.short}</p>
                <span class="read-more" onclick="toggleDescription(this)">قراءة المزيد</span>
                
                <div class="course-meta">
                    <span class="meta-item">
                        <i class="fas ${course.mode === 'online' ? 'fa-laptop' : course.mode === 'offline' ? 'fa-building' : 'fa-laptop-house'}"></i>
                        <span class="${course.mode === 'online' ? 'online' : course.mode === 'offline' ? 'offline' : 'online'}">
                            ${course.mode === 'online' ? 'أونلاين' : course.mode === 'offline' ? 'أوفلاين' : 'هجين'}
                        </span>
                    </span>
                    
                    <span class="meta-item">
                        <i class="far fa-clock"></i>
                        <span>${course.duration}</span>
                    </span>
                    
                    <span class="meta-item">
                        <i class="fas ${course.hasCertificate ? 'fa-certificate certificate-available' : 'fa-times-circle certificate-not-available'}"></i>
                        <span>${course.hasCertificate ? 'شهادة متوفرة' : 'لا توجد شهادة'}</span>
                    </span>
                </div>
                
                <div class="course-price">${course.price}</div>
                
                <div class="full-description" style="display: none;">
                    <h4>تفاصيل الكورس:</h4>
                    <p>${course.description.full}</p>
                    
                    <h4>معلومات الدكتور:</h4>
                    <p>${course.instructor.bio}</p>
                </div>
            </div>
        `;
        container.appendChild(courseElement);
    });
}

// تبديل عرض الوصف الكامل
function toggleDescription(element) {
    const fullDescription = element.nextElementSibling.nextElementSibling.nextElementSibling;
    
    if (fullDescription.style.display === 'none') {
        fullDescription.style.display = 'block';
        element.textContent = 'قراءة أقل';
    } else {
        fullDescription.style.display = 'none';
        element.textContent = 'قراءة المزيد';
    }
}

// البحث عند الكتابة
document.getElementById('search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.trim();
    
    if (searchTerm.length === 0) {
        displayCourses(courses);
        return;
    }
    
    const results = fuse.search(searchTerm);
    const filteredCourses = results.map(result => result.item);
    displayCourses(filteredCourses);
});

// عرض جميع الكورسات عند تحميل الصفحة
window.onload = function() {
    displayCourses(courses);
};