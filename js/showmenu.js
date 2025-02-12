const menuItems = [
    { id: 'third1', contentKey: 'kartlar' },
    { id: 'third2', contentKey: 'kreditler' },
    { id: 'third3', contentKey: 'onlaynXidmetler' },
    { id: 'third4', contentKey: 'keshbek' },
    { id: 'third5', contentKey: 'emanetler' },
    { id: 'third6', contentKey: 'pulKochurmeleri' },
    { id: 'third7', contentKey: 'cariHesab' },
    { id: 'third8', contentKey: 'odenisler' }
];

const menuContent = {
    kartlar: `
<div class="showmenu">
        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="side">
           <div class="block">
<ul>
<li><a href="#">Debet kartlarık</a></li>
<li><a href="#">Adsız debet kartlar üzrə</br> rəsmiləşdirmə prosesi</a></li>
</ul>
</div>
<div class="block">
<ul>
<li><a href="#">Kredit kartları</a></li>
</ul>
</div>
        </div>
 `,
    kreditler: `
<div class="showmenu">
        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="side">
           <div class="block">
<ul>
<li><a href="#">Online kredit al</a></li>
<li><a href="#">Nağd kredit</a></li>
<li><a href="#">Əmanətçi kredit limiti</a></li>
<li><a href="#">Xidmətinizdəyik!</a></li>
<li><a href="#">Kart üzrə kredit limiti</a></li>
</ul>
</div>
<div class="block">
<ul>
<li><a href="#">Avans kredit xətti</a></li>
<li><a href="#">Avtomobil krediti</a></li>
<li><a href="#">Əmanətçi nağd krediti</a></li>
</ul>
</div>
        </div>
        <div class="side2">
            
            <div class="side2-img"><img src="img/show1.webp" alt=""></div>
           <div class="side-left">
            <div class="side2-text">
                <h3>Onlayn kredit sifarişi</h3>
                <p>Bütün ehtiyaclarınız üçün nağd pul krediti</p>
            </div>
            <div class="side2-button">
                <button>Daha ətraflı</button>
            </div>
        </div>
        </div>
    </div>`,
    onlaynXidmetler: `
<div class="showmenu">
        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="side">
           <div class="block">
<ul>
<li><a href="#">ABB mobile - Mobil Bank</a></li>
<li><a href="#">R@ndevu</a></li>
<li><a href="#">Kredit ödəyin</a></li>
<li><a href="#">Xidmətinizdəyik!</a></li>
<li><a href="#">Cash-In ATM-i</a></li>
<li><a href="#">FAQ</a></li>
</ul>
</div>
<div class="block">
<ul>
<li><a href="#">ABB Business Internet Bank</a></li>
<li><a href="#">Arayış sifariş edin</a></li>
<li><a href="#">ATM</a></li>
<li><a href="#">Ödəniş terminalı</a></li>
<li><a href="#">Məlumat Mərkəzi 24/7</a></li>
<li><a href="#">İanə et</a></li>
</ul>
</div>
        </div>
        <div class="side2">
            
            <div class="side2-img"><img src="img/show2.webp" alt=""></div>
           <div class="side-left">
            <div class="side2-text">
                <h3>ABB mobile ilə İnvestisiya Hamıya rahat gəlir!</h3>
                <p>Yatırım imkanlarından faydalanın</p>
            </div>
            <div class="side2-button">
                <button>Daha ətraflı</button>
            </div>
        </div>
        </div>
    </div>`,
    keshbek: `
<div class="showmenu">
        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="side">
           <div class="block">
<ul>
<li><a href="#">ABB mobile - Mobil Bank</a></li>
<li><a href="#">R@ndevu</a></li>
<li><a href="#">Kredit ödəyin</a></li>
<li><a href="#">Xidmətinizdəyik!</a></li>
<li><a href="#">Cash-In ATM-i</a></li>
<li><a href="#">FAQ</a></li>
</ul>
</div>
<div class="block">
<ul>
<li><a href="#">ABB Business Internet Bank</a></li>
<li><a href="#">Arayış sifariş edin</a></li>
<li><a href="#">ATM</a></li>
<li><a href="#">Ödəniş terminalı</a></li>
<li><a href="#">Məlumat Mərkəzi 24/7</a></li>
<li><a href="#">İanə et</a></li>
</ul>
</div>
        </div>
        <div class="side2">
            
            <div class="side2-img"><img src="img/show3.webp" alt=""></div>
           <div class="side-left">
            <div class="side2-text">
                <h3>Fayda Max oyunun qaydalarını</br> dəyişir!</h3>
                <p>Aktivləşdirin, hədəfləri tamamlayın, mükafatlardan</br> faydalanın.</p>
            </div>
            <div class="side2-button">
                <button>Daha ətraflı</button>
            </div>
        </div>
        </div>
    </div>`,
    emanetler: `
<div class="showmenu">
        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="side">
           <div class="block">
<ul>
<li><a href="#">"Klassik" əmanəti</a></li>
<li><a href="#">Əmanətlərin sığortalanması</a></li>
<li><a href="#">Depozit seyfi</a></li>
</ul>
</div>
<div class="block">
<ul>
<li><a href="#">DigiDeposit</a></li>
<li><a href="#">Əmanətli ipoteka krediti</a></li>
</ul>
</div>
        </div>
        
        </div>
    </div>`,
    pulKochurmeleri: `
<div class="showmenu">
        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="side">
           <div class="block">
<ul>
<li><a href="#">Valyuta tənzimlənməsi</a></li>
<li><a href="#">Təcili pul köçürmələri</a></li>
</ul>
</div>
<div class="block">
<ul>
<li><a href="#">Hesabdan köçürmələr</a></li>
</ul>
</div>
        </div>
        
        </div>
    </div>`,
    cariHesab: `
<div class="showmenu">
        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="side">
           <div class="block">

<ul>
<li><a href="#">DigiHesab Max açın</a></li>
<li><a href="#">Cari hesab açın</a></li>
<li><a href="#">Hesabınıza nəzarət edin</a></li>
<li><a href="#">Mübadilə əməliyyatları</a></li>
</ul>
</div>
<div class="block">
<ul>
<li><a href="#">DigiHesab açın</a></li>
<li><a href="#">Kassa əməliyyatları</a></li>
<li><a href="#">Arayış sifariş edin</a></li>
</ul>
</div>
        </div>
        
        </div>
    </div>`,
    odenisler: `
<div class="showmenu">
        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="side">
           <div class="block">
<ul>

<li><a href="#">Telefon</a></li>
<li><a href="#">Kommunal</a></li>
</ul>
</div>
<div class="block">
<ul>
<li><a href="#">Mobil</a></li>
</ul>
</div>
        </div>
       
        </div>
    </div>`
};
function hideMenu() {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = '';
}
menuItems.forEach(item => {
    const element = document.getElementById(item.id);
    element.addEventListener('mouseover', () => showMenu(item.contentKey));
});

function showMenu(contentKey) {
    const content = menuContent[contentKey] || '';
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = content;
    const close = menuContainer.querySelector('.close');
    if (close) {
        close.addEventListener('click', hideMenu);
    }
}
