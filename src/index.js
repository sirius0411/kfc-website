const motto = document.getElementById('motto')

motto.addEventListener('mouseenter', () => {
    motto.src = 'assets/kfc-true.png'
})

motto.addEventListener('mouseleave', () => {
    motto.src = 'assets/kfc.png'
})

const logo = document.getElementById('logo')
logo.addEventListener('click', () => {
    let audio = new Audio('assets/kfc.mp3')
    audio.currentTime = 0
    audio.play()
})

const ad = document.getElementById('ad')
ad.addEventListener('click', () => {
    document.getElementById('adContainer').focus()
    return true
})