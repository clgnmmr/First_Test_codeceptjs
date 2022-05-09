Feature('login');

Scenario('Yanlış kullanıcı adı @testcase1', ({ I }) => {
    I.amOnPage('http://amazon.com')
    // dil secimini kapatmak icin 


 I.waitForElement('span.a-size-base')
    I.seeElement('span.a-size-base')
 I.waitForElement('//span[@class="a-button-inner"]')
    I.click('//span[@class="a-button-inner"]')

    // burdada giriş butonuna bastırılıyor
I.waitForElement('//span[@id="nav-link-accountList-nav-line-1"]')
    I.click('//span[@id="nav-link-accountList-nav-line-1"]')

    // yanlıs kullanıcı adı girdiriliyor 
    I.waitForElement('//input[@id="ap_email"]')
    I.fillField('//input[@id="ap_email"]',"dddd")

   // continue buttonuna tıklandı
    I.waitForElement('//input[@id="continue"]')
    I.click('//input[@id="continue"]')

     // yanlış kullaıcı adına verilen mesaj gösteriliyor 
    I.seeElement("//*[contains(text(),'We cannot find an account with that email address')]")
});






Scenario('dogru kullanıcı adı dogru şifre @testcase3', ({ I }) => {
    I.amOnPage('http://amazon.com')
    // dil secimini kapatmak icin 


 I.waitForElement('span.a-size-base')
    I.seeElement('span.a-size-base')
 I.waitForElement('//span[@class="a-button-inner"]')
    I.click('//span[@class="a-button-inner"]')

    // burdada giriş butonuna bastırılıyor
I.waitForElement('//span[@id="nav-link-accountList-nav-line-1"]')
    I.click('//span[@id="nav-link-accountList-nav-line-1"]')

    // dogru kullanıcı adı girdiriliyor 
    I.waitForElement('//input[@id="ap_email"]')
    I.fillField('//input[@id="ap_email"]',"kadir_tepecik1903@hotmail.com")

   // continue buttonuna tıklandı
    I.waitForElement('//input[@id="continue"]')
    I.click('//input[@id="continue"]')

    //yanlıs sifre girdiriliyor 
    I.waitForElement('//input[@id="ap_password"]')
    I.fillField('//input[@id="ap_password"]',"apx")
    //sig in tılatıldı
  
    I.waitForElement('//input[@id="signInSubmit"]')
    I.click('//input[@id="signInSubmit"]')

// yanlış şifre hata mesajı gösterildi
    I.seeElement('div.a-box-inner.a-alert-container>.a-alert-heading')
});


Scenario('dogru kullanıcı adı yanlış şifre @testcase2', ({ I }) => {
    I.amOnPage('http://amazon.com')
    // dil secimini kapatmak icin 


 I.waitForElement('span.a-size-base')
    I.seeElement('span.a-size-base')
 I.waitForElement('//span[@class="a-button-inner"]')
    I.click('//span[@class="a-button-inner"]')

    // burdada giriş butonuna bastırılıyor
I.waitForElement('//span[@id="nav-link-accountList-nav-line-1"]')
    I.click('//span[@id="nav-link-accountList-nav-line-1"]')

    // dogru kullanıcı adı girdiriliyor 
    I.waitForElement('//input[@id="ap_email"]')
    I.fillField('//input[@id="ap_email"]',"kadir_tepecik1903@hotmail.com")

   // continue buttonuna tıklandı
    I.waitForElement('//input[@id="continue"]')
    I.click('//input[@id="continue"]')

    //dogru sifre girdiriliyor 
    I.waitForElement('//input[@id="ap_password"]')
    I.fillField('//input[@id="ap_password"]',"kadirtepecik58.")
    
    //sign in tıklatıldı
  
    I.waitForElement('//input[@id="signInSubmit"]')
    I.click('//input[@id="signInSubmit"]')

// giriş yapıldı mesajı görülecek
    I.seeElement('//*[contains(text(),"Hello Kadir")]')
});
