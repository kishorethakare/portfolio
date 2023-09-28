let menubtn =document.getElementById('menubtn')

menubtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input',{
    strings: ['Software Developer!','Web-Developer!','AI/ML Engineer'],
    typespeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
})