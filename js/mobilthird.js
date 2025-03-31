
const menuItems2 = [
    { id: 'mobilthird1', contentKey: 'kartlar' },
    { id: 'mobilthird2', contentKey: 'kreditler' },
    { id: 'mobilthird3', contentKey: 'onlaynXidmetler' },
    { id: 'mobilthird4', contentKey: 'keshbek' },
    { id: 'mobilthird5', contentKey: 'emanetler' },
    { id: 'mobilthird6', contentKey: 'pulKochurmeleri' },
    { id: 'mobilthird7', contentKey: 'cariHesab' },
    { id: 'mobilthird8', contentKey: 'odenisler' }
];

const menuContent2 = {
    kartlar: `
<div class="showmenu2">
        <div class="side">
           <div class="bl">
<ul>
<li><a href="#">Debet kartlarık</a></li>
<li><a href="#">Adsız debet kartlar üzrə</br> rəsmiləşdirmə prosesi</a></li>
<li><a href="#">Kredit kartları</a></li>
</ul>
</div>

        </div>
 `,
    kreditler: `
<div class="showmenu2">
        <div class="side">
           <div class="bl">
<ul>
<li><a href="#">Online kredit al</a></li>
<li><a href="#">Nağd kredit</a></li>
<li><a href="#">Əmanətçi kredit limiti</a></li>
<li><a href="#">Xidmətinizdəyik!</a></li>
<li><a href="#">Kart üzrə kredit limiti</a></li>
<li><a href="#">Avans kredit xətti</a></li>
<li><a href="#">Avtomobil krediti</a></li>
<li><a href="#">Əmanətçi nağd krediti</a></li>
</ul>
</div>

        </div>
        </div>
    </div>`,
    onlaynXidmetler: `
<div class="showmenu2">
        <div class="side">
           <div class="bl">
<ul>
<li><a href="#">ABB mobile - Mobil Bank</a></li>
<li><a href="#">R@ndevu</a></li>
<li><a href="#">Kredit ödəyin</a></li>
<li><a href="#">Xidmətinizdəyik!</a></li>
<li><a href="#">Cash-In ATM-i</a></li>
<li><a href="#">FAQ</a></li>
<li><a href="#">ABB Business Internet Bank</a></li>
<li><a href="#">Arayış sifariş edin</a></li>
<li><a href="#">ATM</a></li>
<li><a href="#">Ödəniş terminalı</a></li>
<li><a href="#">Məlumat Mərkəzi 24/7</a></li>
<li><a href="#">İanə et</a></li>
</ul>
</div>

        </div>
        </div>
    </div>`,
    keshbek: `
<div class="showmenu2">
        <div class="side">
           <div class="bl">
<ul>
<li><a href="#">ABB mobile - Mobil Bank</a></li>
<li><a href="#">R@ndevu</a></li>
<li><a href="#">Kredit ödəyin</a></li>
<li><a href="#">Xidmətinizdəyik!</a></li>
<li><a href="#">Cash-In ATM-i</a></li>
<li><a href="#">FAQ</a></li>
<li><a href="#">ABB Business Internet Bank</a></li>
<li><a href="#">Arayış sifariş edin</a></li>
<li><a href="#">ATM</a></li>
<li><a href="#">Ödəniş terminalı</a></li>
<li><a href="#">Məlumat Mərkəzi 24/7</a></li>
<li><a href="#">İanə et</a></li>
</ul>
</div>

        </div>
        </div>
    </div>`,
    emanetler: `
<div class="showmenu2">
        <div class="side">
           <div class="bl">
<ul>
<li><a href="#">"Klassik" əmanəti</a></li>
<li><a href="#">Əmanətlərin sığortalanması</a></li>
<li><a href="#">Depozit seyfi</a></li>
<li><a href="#">DigiDeposit</a></li>
<li><a href="#">Əmanətli ipoteka krediti</a></li>
</ul>
</div>

        </div>
        
        </div>
    </div>`,
    pulKochurmeleri: `
<div class="showmenu2">
        <div class="side">
           <div class="bl">
<ul>
<li><a href="#">Valyuta tənzimlənməsi</a></li>
<li><a href="#">Təcili pul köçürmələri</a></li>
<li><a href="#">Hesabdan köçürmələr</a></li>
</ul>
</div>

        </div>
        
        </div>
    </div>`,
    cariHesab: `
<div class="showmenu2">
        <div class="side">
           <div class="bl">

<ul>
<li><a href="#">DigiHesab Max açın</a></li>
<li><a href="#">Cari hesab açın</a></li>
<li><a href="#">Hesabınıza nəzarət edin</a></li>
<li><a href="#">Mübadilə əməliyyatları</a></li>
<li><a href="#">DigiHesab açın</a></li>
<li><a href="#">Kassa əməliyyatları</a></li>
<li><a href="#">Arayış sifariş edin</a></li>
</ul>
</div>
        </div>
        
        </div>
    </div>`,
    odenisler: `
<div class="showmenu2">
        <div class="side">
           <div class="bl">
<ul>

<li><a href="#">Telefon</a></li>
<li><a href="#">Kommunal</a></li>
<li><a href="#">Mobil</a></li>
</ul>
</div>
        </div>
       
        </div>
    </div>`
};


const toggle = document.getElementsByClassName('caret');
for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function () {
        const contentKey = menuItems2[i].contentKey;
        const contentDiv = document.getElementById(contentKey + 'Content');

        // Toggle visibility
        if (contentDiv.innerHTML) {
            contentDiv.innerHTML = ''; // Clear the content
        } else {
            contentDiv.innerHTML = menuContent2[contentKey]; // Add content
        }

        // Toggle caret and active class for dropdown
        this.classList.toggle('caret-down');
        contentDiv.classList.toggle("active");

    });


}
