Feature: Akses ke Web Clio

  Scenario: User melakukan akses ke Web Clio
    given User membuka halaman utama Clio
    when User klik tombol "Try Clio Free"
    and User mengisi field First Name dengan "testttt"
    and User mengisi field Last Name dengan "afrilatestadassdasyah"
    and User mengisi field Email dengan "hanafhari123123@gmail.com"
    and User mengisi field Phone Number dengan "081319823232"
    and User memilih Firm Size
    and User klik tombol "Get Started"
    then User menunggu selama 2 detik
