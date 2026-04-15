// Proje Verileri ve Durumu
const state = {
    currentScreen: 'screen-consent',
    isBlocked: false,
    // --- VERİ TOPLAMA AYARI ---
    // Buraya Google Apps Script'ten aldığınız URL'yi yapıştırın
    scriptURL: "https://script.google.com/macros/s/AKfycbynbwnOwfP3Qr3cX5hfoFFnyKxPKx1G10nfchYFttmZHNTgGjb0hmbdxy5WCRr6-aXE2g/exec", 
    responses: {
        demographics: {},
        faceTask: [],
        rsq: []
    },
    faceTask: {
        currentIndex: 0,
        images: [
            { id: 'angry_25_1', url: 'images/2525angry_1.png' },
            { id: 'angry_25_10', url: 'images/25angry_10.png' },
            { id: 'angry_25_2', url: 'images/25angry_2.png' },
            { id: 'angry_25_3', url: 'images/25angry_3.png' },
            { id: 'angry_25_4', url: 'images/25angry_4.png' },
            { id: 'angry_25_5', url: 'images/25angry_5.png' },
            { id: 'angry_25_6', url: 'images/25angry_6.png' },
            { id: 'angry_25_7', url: 'images/25angry_7.png' },
            { id: 'angry_25_8', url: 'images/25angry_8.png' },
            { id: 'angry_25_9', url: 'images/25angry_9.png' },
            { id: 'happy_25_1', url: 'images/25happy_1.png' },
            { id: 'happy_25_10', url: 'images/25happy_10.jpeg' },
            { id: 'happy_25_2', url: 'images/25happy_2.png' },
            { id: 'happy_25_3', url: 'images/25happy_3.png' },
            { id: 'happy_25_4', url: 'images/25happy_4.png' },
            { id: 'happy_25_5', url: 'images/25happy_5.png' },
            { id: 'happy_25_6', url: 'images/25happy_6.jpeg' },
            { id: 'happy_25_7', url: 'images/25happy_7.png' },
            { id: 'happy_25_8', url: 'images/25happy_8.png' },
            { id: 'happy_25_9', url: 'images/25happy_9.png' },
            { id: 'angry_75_1', url: 'images/75angry_1.png' },
            { id: 'angry_75_10', url: 'images/75angry_10.png' },
            { id: 'angry_75_2', url: 'images/75angry_2.png' },
            { id: 'angry_75_3', url: 'images/75angry_3.png' },
            { id: 'angry_75_4', url: 'images/75angry_4.png' },
            { id: 'angry_75_5', url: 'images/75angry_5.png' },
            { id: 'angry_75_6', url: 'images/75angry_6.png' },
            { id: 'angry_75_7', url: 'images/75angry_7.png' },
            { id: 'angry_75_8', url: 'images/75angry_8.png' },
            { id: 'angry_75_9', url: 'images/75angry_9.png' },
            { id: 'happy_75_1', url: 'images/75happy_1.png' },
            { id: 'happy_75_10', url: 'images/75happy_10.png' },
            { id: 'happy_75_2', url: 'images/75happy_2.png' },
            { id: 'happy_75_3', url: 'images/75happy_3.png' },
            { id: 'happy_75_4', url: 'images/75happy_4.png' },
            { id: 'happy_75_5', url: 'images/75happy_5.png' },
            { id: 'happy_75_6', url: 'images/75happy_6.png' },
            { id: 'happy_75_7', url: 'images/75happy_7.png' },
            { id: 'happy_75_8', url: 'images/75happy_8.png' },
            { id: 'happy_75_9', url: 'images/75happy_9.png' },
            { id: 'notr_1', url: 'images/notr_1.JPG' },
            { id: 'notr_10', url: 'images/notr_10.JPG' },
            { id: 'notr_2', url: 'images/notr_2.JPG' },
            { id: 'notr_3', url: 'images/notr_3.JPG' },
            { id: 'notr_4', url: 'images/notr_4.JPG' },
            { id: 'notr_5', url: 'images/notr_5.JPG' },
            { id: 'notr_6', url: 'images/notr_6.JPG' },
            { id: 'notr_7', url: 'images/notr_7.JPG' },
            { id: 'notr_8', url: 'images/notr_8.JPG' },
            { id: 'notr_9', url: 'images/notr_9.JPG' }
        ]
    },
    rsqItems: [
        { id: 1, scenario: "Sınıftaki birine notlarını ödünç alıp alamayacağınızı soruyorsunuz.", questionA: "Bu kişinin tepkisiyle ilgili ne kadar endişe veya kaygı duyarsınız?", questionB: "Bu kişinin notlarını bana isteyerek vermesini beklerdim." },
        { id: 2, scenario: "Romantik partnerinizden sizinle aynı eve taşınmasını istiyorsunuz.", questionA: "Romantik partnerinizin sizinle aynı eve taşınmayı isteyip istemeyeceği ile ilgili ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Romantik partnerimin benimle aynı eve taşınmayı istemesini beklerdim." },
        { id: 3, scenario: "Yurtdışı gezisine gitmek için ebeveynlerinizden destek istiyorsunuz.", questionA: "Ebeveynlerinizin size yardımcı olmayı isteyip istemeyebileceği ile ilgili ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Onların (Ebeveynlerimin) bana yardım etmek için istekli olmalarını beklerdim." },
        { id: 4, scenario: "Yeni tanıştığınız birine çıkma teklif ediyorsunuz.", questionA: "Kişinin sizinle çıkmak isteyip istemeyebileceği ile ilgili ne kadar endişe eder veya kaygı duyarsınız?", questionB: "O kişinin benimle çıkmayı istemesini beklerdim." },
        { id: 5, scenario: "Romantik partneriniz bütün arkadaşlarla birlikte dışarı çıkmayı planlıyor, ancak siz geceyi sadece partnerinizle geçirmek istiyorsunuz, ve bunu ona söylediniz.", questionA: "Romantik partnerinizin bu isteğinizi kabul edip etmeyebileceği ile ilgili ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Romantik partnerimin bu isteğimi kabul etmeye istekli olmasını beklerdim." },
        { id: 6, scenario: "Günlük harcamalarınızı karşılamak için ebeveynlerinizden harçlığınızı arttırmalarını istiyorsunuz.", questionA: "Ebeveynlerinizin bu isteğinizi kabul edip etmeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Ebeveynlerimin yardımcı olmaya istekli olmalarını beklerdim." },
        { id: 7, scenario: "Derste yeni tanıştığınız birine birlikte kahve içmeyi teklif ediyorsunuz.", questionA: "Kişinin sizinle gelmeyi isteyip istemeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Diğer kişinin benimle gelmeyi istemesini beklerdim." },
        { id: 8, scenario: "Yakın bir arkadaşınıza onu ciddi şekilde üzecek bir şey söyledikten ya da yaptıktan sonra, yaklaşıyor ve konuşmak istiyorsunuz.", questionA: "Arkadaşınızın bu durumda sizinle konuşmak isteyip istemeyeceği ile ilgili ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Hemen benimle konuşup sorunlarımızı çözmek istemesini beklerdim." },
        { id: 9, scenario: "Dersten sonra hocanıza anlamadığınız bir konuda soru yöneltip size fazladan zaman ayırıp ayıramayacağını soruyorsunuz.", questionA: "Hocanızın size yardım etmeyi isteyip istemeyeceği ile ilgili ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Hocamın bana yardımcı olmak için istekli olmasını beklerdim." },
        { id: 10, scenario: "Okulunuzu bitirdikten sonraki yıllarda ailenizden para istiyorsunuz.", questionA: "Ebeveynlerinizin size para vermeyi isteyip istemeyebilecekleri konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Ebeveynlerimin para talebimi kabul etmek konusunda istekli olmalarını beklerdim." },
        { id: 11, scenario: "Okul tatilinde bir arkadaşınıza birlikte tatile gitmeyi teklif ediyorsunuz.", questionA: "Arkadaşınızın sizinle tatile gelmeyi isteyip istemeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Teklifimin memnuniyetle kabul edilmesini beklerdim." },
        { id: 12, scenario: "Çok kırıcı bir tartışmadan sonra romantik partnerinize telefon ediyor ve onu görmek istediğinizi söylüyorsunuz.", questionA: "Romantik partnerinizin sizi görmeyi isteyip istemeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Romantik partnerimin de beni görmeye istekli olmasını beklerdim." },
        { id: 13, scenario: "Arkadaşınıza ondan bir şeyini ödünç alıp alamayacağınızı soruyorsunuz.", questionA: "Arkadaşınızın size istediğiniz şeyi verip vermeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Arkadaşımın istediğim şeyi ödünç vermeye istekli olmasını beklerdim." },
        { id: 14, scenario: "Ebeveynlerinizden sizin için önemli ancak onlar için sıkıcı ve gelmesi zahmetli olabilecek bir etkinliğe sizinle beraber gelmelerini istiyorsunuz.", questionA: "Ebeveynlerinizin sizinle gelmeyi isteyip istemeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Ebeveynlerimin benimle gelmeyi kabul etmelerini beklerdim." },
        { id: 15, scenario: "Bir arkadaşınızdan size ciddi bir yardımda bulunmasını istiyorsunuz.", questionA: "Arkadaşınızın bu yardımı yapmak isteyip istemeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Arkadaşımın bu yardım isteğimi kabul etmesini beklerdim." },
        { id: 16, scenario: "Romantik partnerinize sizi gerçekten sevip sevmediğini soruyorsunuz.", questionA: "Romantik partnerinizin sizi gerçekten sevdiğini söyleyip söylemeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Romantik partnerimin beni gerçekten çok sevdiğini söylemeye istekli olmasını beklerdim." },
        { id: 17, scenario: "Bir partiye gidiyorsunuz ve odanın diğer köşesinde birini fark ediyorsunuz, sonra ona beraber dans etmeyi teklif ediyorsunuz.", questionA: "Dans etmeyi teklif ettiğiniz kişinin teklifinizi kabul edip etmeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Dans etmeyi teklif ettiğim kişinin bu teklifimi memnuniyetle kabul etmesini beklerdim." },
        { id: 18, scenario: "Ailenizle tanıştırmak üzere romantik partnerinizden sizinle eve gelmesini istiyorsunuz.", questionA: "Romantik partnerinizin ailenizle tanışmayı isteyip istemeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Romantik partnerimin ailemle buluşmayı memnuniyetle kabul etmesini beklerdim." },
        { id: 19, scenario: "Başka bir şehirde yaşayan bir arkadaşınıza evinde 10 gün kalmak istediğinizi söylüyorsunuz.", questionA: "Arkadaşınızın bu isteğinizi kabul edip etmeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Arkadaşımın evinde kalma isteğimi memnuniyetle kabul etmesini beklerdim." },
        { id: 20, scenario: "Yeni tanıştığınız bir hemcinsinize birlikte bir şeyler yapmayı öneriyorsunuz.", questionA: "Bu kişinin önerinizi kabul edip etmeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Arkadaşımın benimle dışarı çıkmayı memnuniyetle kabul etmesini beklerdim." },
        { id: 21, scenario: "Romantik partnerinizden sizi ailesiyle tanıştırmasını istiyorsunuz.", questionA: "Romantik partnerinizin sizi ailesiyle tanıştırmayı isteyip istemeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Romantik partnerimin bu isteğimi memnuniyetle kabul etmesini beklerdim." },
        { id: 22, scenario: "Evde arkadaşlarınızla parti yapmak için anne ve babanızın akşam için başka bir yere gitmelerini istiyorsunuz.", questionA: "Ebeveynlerinizin bu isteğinizi kabul edip etmeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Ebeveynlerimin bu isteğimi kabul etmelerini beklerdim." },
        { id: 23, scenario: "Ebeveynlerinize romantik partnerinizle tatile gitmek istediğinizi söylüyorsunuz.", questionA: "Ebeveynlerinizin bu isteğinizi kabul edip etmeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Ebeveynlerimin romantik partnerimle tatile çıkmamı kabul etmelerini beklerdim." },
        { id: 24, scenario: "Ebeveynlerinize mezuniyetten sonra onlardan farklı bir şehirde yaşamak istediğinizi söylüyorsunuz.", questionA: "Ebeveynlerinizin bu isteğinizi kabul edip etmeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Ebeveynlerimin kararımı kabul etmelerini beklerdim." },
        { id: 25, scenario: "Çok iyi yemek yapan bir akrabanızdan (hala, teyze, vb.) çok iyi yaptığı bir yemeği sizin için özel olarak yapmasını istiyorsunuz.", questionA: "Akrabanızın sizin için özel olarak yemek yapmayı isteyip istemeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Akrabamın bu isteğimi memnuniyetle kabul etmesini beklerdim." },
        { id: 26, scenario: "Sınavdan bir gün önce sizinle aynı sınava girecek olan bir arkadaşınızdan anlamadığınız konuları size anlatmasını istiyorsunuz.", questionA: "Arkadaşınızın bu isteğinizi kabul edip etmeyebileceği konusunda ne kadar endişe eder veya kaygı duyarsınız?", questionB: "Arkadaşımın yardım etmeye istekli olmasını beklerdim." }
    ]
};

// Yardımcı Fonksiyon: Karıştırma (Shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// DOM Elemanları
const screens = document.querySelectorAll('.screen');
const consentCheckbox = document.getElementById('consent-checkbox');
const btnConsentNext = document.getElementById('btn-consent-next');
const btnDemoNext = document.getElementById('btn-demo-next');
const btnTaskStart = document.getElementById('btn-task-start');
const btnRSQFinish = document.getElementById('btn-rsq-finish');

// Ekran Değiştirme Fonksiyonu
function showScreen(screenId) {
    // Eğer cihaz engellenmişse ve gitmek istediği ekran engelleme ekranı değilse, engelle
    if (state.isBlocked && screenId !== 'screen-mobile-blocked') {
        return;
    }
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    state.currentScreen = screenId;
    window.scrollTo(0, 0);
}

// 0. CİHAZ KONTROLÜ (SADECE MASAÜSTÜ)
function checkDevice() {
    // iPad'ler (iOS 13+) kendini cihaz özellikleri olarak Mac bilgisayar gösterir. MaxTouchPoints ile ayırt ederiz.
    const isIOS13PlusTablet = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0;
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|Kindle|Playbook|Silk/i.test(navigator.userAgent);
    
    const isMobileDevice = window.innerWidth < 1024 || isMobileUA || isIOS13PlusTablet;

    if (isMobileDevice) {
        state.isBlocked = true;
        showScreen('screen-mobile-blocked');
    } else {
        state.isBlocked = false;
        // Eğer engelleme ekranındaysa ama artık masaüstündeyse (resize vb) onama dön
        if (state.currentScreen === 'screen-mobile-blocked') {
            showScreen('screen-consent');
        }
    }
}

// Cihazı hemen kontrol et ve resize olayına bağla
window.addEventListener('load', checkDevice);
window.addEventListener('resize', checkDevice);

// GÖRSEL ÖNYÜKLEME (PRELOAD) - Gecikmeleri ve yavaş yüklenmeleri önlemek için
function preloadImages() {
    state.faceTask.images.forEach(img => {
        const preloadedImage = new Image();
        preloadedImage.src = img.url;
    });
}
// Sayfa açılır açılmaz arka planda resimleri indirmeye başla
window.addEventListener('load', preloadImages);

// 1. ONAM FORMU MANTIĞI
consentCheckbox.addEventListener('change', () => {
    btnConsentNext.disabled = !consentCheckbox.checked;
});

btnConsentNext.addEventListener('click', () => {
    showScreen('screen-demo');
});

// 2. DEMOGRAFİK FORM MANTIĞI
document.querySelectorAll('input[name="psych_dx"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        document.getElementById('psych-dx-sub').classList.toggle('active', e.target.value === 'Evet');
    });
});

document.querySelectorAll('input[name="neuro_dx"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        document.getElementById('neuro-dx-sub').classList.toggle('active', e.target.value === 'Evet');
    });
});

document.querySelectorAll('input[name="prev_exp_6m"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        document.getElementById('prev-exp-6m-sub').classList.toggle('active', e.target.value === 'Evet');
    });
});

btnDemoNext.addEventListener('click', () => {
    // Verileri Topla
    const genderRadio = document.querySelector('input[name="gender"]:checked');
    state.responses.demographics = {
        age: document.getElementById('age').value,
        gender: genderRadio ? genderRadio.value : '',
        genderOther: document.getElementById('gender-other').value,
        education: document.getElementById('education').value,
        occupation: document.getElementById('occupation').value,
        prevExp6m: document.querySelector('input[name="prev_exp_6m"]:checked')?.value,
        prevExp6mDetail: document.getElementById('prev-exp-6m-detail').value,
        psychDx: document.querySelector('input[name="psych_dx"]:checked')?.value,
        neuroDx: document.querySelector('input[name="neuro_dx"]:checked')?.value,
        headTrauma: document.querySelector('input[name="head_trauma"]:checked')?.value,
        vision: document.querySelector('input[name="vision"]:checked')?.value
    };

    // Basit Doğrulama
    if (!state.responses.demographics.age || !state.responses.demographics.gender) {
        alert("Lütfen zorunlu alanları (*) doldurunuz.");
        return;
    }

    showScreen('screen-instructions');
});

// 3. YÖNERGELER
btnTaskStart.addEventListener('click', () => {
    shuffle(state.faceTask.images); // Resimleri karıştır
    initFaceTask();
    showScreen('screen-face-task');
});

// 4. YÜZ PUANLAMA GÖREVİ
function initFaceTask() {
    state.faceTask.currentIndex = 0;
    updateFaceTrial();
}

function updateFaceTrial() {
    const trial = state.faceTask.currentIndex;
    const total = state.faceTask.images.length;

    if (trial >= total) {
        showScreen('screen-rsq');
        initRSQ();
        return;
    }

    document.getElementById('stimulus-image').src = state.faceTask.images[trial].url;

    // Buton seçimlerini sıfırla
    document.querySelectorAll('#sam-rating-row .rating-btn-sam').forEach(btn => btn.classList.remove('selected'));
}

let isProcessingClick = false;

document.querySelectorAll('#sam-rating-row .rating-btn-sam').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (isProcessingClick) return; // Çift tıklama / hızlı tıklama koruması
        
        const value = e.target.getAttribute('data-value');
        if (!value) return; 
        
        isProcessingClick = true; // Kilitlendi
        const imgId = state.faceTask.images[state.faceTask.currentIndex].id;

        state.responses.faceTask.push({
            imageId: imgId,
            rating: value,
            timestamp: new Date().toISOString()
        });

        // Seçimi görselleştir
        document.querySelectorAll('#sam-rating-row .rating-btn-sam').forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');

        // Kısa bir bekleme sonrası sonraki görsele geç
        setTimeout(() => {
            state.faceTask.currentIndex++;
            isProcessingClick = false; // Kilidi aç
            updateFaceTrial();
        }, 300);
    });
});

// 5. RSQ ANKETİ
function initRSQ() {
    const container = document.getElementById('rsq-items-container');
    container.innerHTML = '';

    state.rsqItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'rsq-item-card';
        itemDiv.innerHTML = `
            <div class="rsq-scenario"><i>${index + 1}. ${item.scenario}</i></div>
            
            <div class="rsq-question">
                <div class="rsq-question-text">S1: ${item.questionA}</div>
                <div class="rsq-scale-row">
                    <div class="rsq-label-side left">Hiç endişelenmem / kaygı duymam</div>
                    <div class="rsq-rating-btn-group rsq-scale-a" data-item-id="${item.id}">
                        ${[1, 2, 3, 4, 5, 6].map(v => `<button class="rsq-btn" data-value="${v}">${v}</button>`).join('')}
                    </div>
                    <div class="rsq-label-side right">Çok endişelenirim / kaygı duyarım</div>
                </div>
            </div>

            <div class="rsq-question">
                <div class="rsq-question-text">S2: ${item.questionB}</div>
                <div class="rsq-scale-row">
                    <div class="rsq-label-side left">Çok küçük ihtimalle</div>
                    <div class="rsq-rating-btn-group rsq-scale-b" data-item-id="${item.id}">
                        ${[1, 2, 3, 4, 5, 6].map(v => `<button class="rsq-btn" data-value="${v}">${v}</button>`).join('')}
                    </div>
                    <div class="rsq-label-side right">Çok büyük ihtimalle</div>
                </div>
            </div>
        `;
        container.appendChild(itemDiv);
    });

    // Rating butonları için event listenerlar (rsq-btn sınıfını dinle)
    container.querySelectorAll('.rsq-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.parentElement;
            parent.querySelectorAll('.rsq-btn').forEach(b => b.classList.remove('selected'));
            e.target.classList.add('selected');
        });
    });
}

btnRSQFinish.addEventListener('click', () => {
    // RSQ Verilerini Topla (Sınıf isimlerini rsq-scale-a/b olarak güncelledik)
    const rsqResults = [];
    let allAnswered = true;

    state.rsqItems.forEach(item => {
        const valA = document.querySelector(`.rsq-scale-a[data-item-id="${item.id}"] .rsq-btn.selected`)?.getAttribute('data-value');
        const valB = document.querySelector(`.rsq-scale-b[data-item-id="${item.id}"] .rsq-btn.selected`)?.getAttribute('data-value');

        if (!valA || !valB) allAnswered = false;

        rsqResults.push({
            itemId: item.id,
            anxiety: valA,
            expectancy: valB
        });
    });

    if (!allAnswered) {
        alert("Lütfen anketteki tüm soruları yanıtlayınız.");
        return;
    }

    state.responses.rsq = rsqResults;
    finishExperiment();
});

// 6. DENEY BİTİMİ VE VERİ AKTARIMI
function finishExperiment() {
    showScreen('thankyou-screen');
    
    // Create Fixed and Organized Headers for SPSS/Analysis (English)
    const flatData = {};
    
    // A. Demographic Information (English/SPSS-Friendly)
    const demo = state.responses.demographics;
    flatData["Timestamp"] = new Date().toLocaleString('tr-TR');
    flatData["Age"] = demo.age;
    flatData["Gender"] = demo.gender;
    flatData["Gender_Other"] = demo.genderOther;
    flatData["Education"] = demo.education;
    flatData["Occupation"] = demo.occupation;
    flatData["Previous_Experiment"] = "";
    flatData["Previous_Experiment_Detail"] = "";
    flatData["Previous_Expt_6m"] = demo.prevExp6m;
    flatData["Previous_Expt_6m_Detail"] = demo.prevExp6mDetail;
    flatData["Psychiatric_Diagnosis"] = demo.psychDx;
    flatData["Psychiatric_Diagnosis_Detail"] = document.getElementById('psych_dx_extra')?.value || "";
    flatData["Psychiatric_Medication"] = document.querySelector('input[name="psych_med"]:checked')?.value || "";
    flatData["Neurological_Diagnosis"] = demo.neuroDx;
    flatData["Neurological_Diagnosis_Detail"] = document.getElementById('neuro_dx_extra')?.value || "";
    flatData["Neurological_Ilac"] = document.querySelector('input[name="neuro_med"]:checked')?.value || "";
    flatData["Head_Trauma"] = demo.headTrauma;
    flatData["Vision_Problem"] = demo.vision;

    // B. Face Task Ratings (FIXED ORDER - By ID)
    // Regardless of shuffle, entries appear in the same alphabetical order in the sheet.
    const sortedImages = [...state.faceTask.images].sort((a, b) => a.id.localeCompare(b.id));
    
    sortedImages.forEach(img => {
        // Beautify ID for SPSS (English)
        let spssId = img.id.replace('angry', 'Angry').replace('happy', 'Happy').replace('notr', 'Neutral');
        spssId = "Face_" + spssId.charAt(0).toUpperCase() + spssId.slice(1);
        
        // Find user response for this image
        const response = state.responses.faceTask.find(r => r.imageId === img.id);
        flatData[spssId] = response ? response.rating : "";
    });

    // C. RSQ Ratings (FIXED ORDER - By Question No)
    for (let i = 1; i <= 26; i++) {
        const itemResponse = state.responses.rsq.find(r => r.itemId === i);
        const seq = i.toString().padStart(2, '0');
        flatData[`RSQ_${seq}_Anxiety`] = itemResponse ? itemResponse.anxiety : "";
        flatData[`RSQ_${seq}_Expectancy`] = itemResponse ? itemResponse.expectancy : "";
    }

    console.log("SPSS-Friendly Data (English):", flatData);

    // Send Data to Google Sheets
    if (state.scriptURL) {
        fetch(state.scriptURL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(flatData)
        })
        .then(() => console.log("Data successfully sent."))
        .catch(err => console.error("Error:", err));
    }
}
