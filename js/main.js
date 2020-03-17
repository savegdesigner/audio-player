const sample_cover = document.querySelector('.sample-cover-image')
const sample_name = document.querySelector('.sample-name')
const sample_category = document.querySelector('.sample-category')

const play_pause_button = document.querySelector('.play-pause-button')
const play_pause_button_icon = document.querySelector('.play-pause-button-icon')

const favorite_button = document.querySelector('.favorite-button')
const favorite_button_icon = document.querySelector('.favorite-button-icon')

const volume_button = document.querySelector('.volume-button')
const volume_button_icon = document.querySelector('.volume-button-icon')

const sample = new Audio('./assets/audio/sample-beat.mp3')

play_pause_button.addEventListener('click', () => {

    if(play_pause_button.id == 'paused'){
        play_pause_button_icon.src = './assets/icons/pause-icon.svg'
        play_pause_button.id = 'playing'
        sample.play()

    }else{
        play_pause_button_icon.src = './assets/icons/play-icon.svg'
        play_pause_button.id = 'paused'
        sample.pause()

    }

})

favorite_button.addEventListener('click', () => {

    if(favorite_button.id != 'favorite'){
        favorite_button.id = 'favorite'
        favorite_button_icon.src = './assets/icons/heart-icon-full.svg'

    }else{
        favorite_button.id = ''
        favorite_button_icon.src = './assets/icons/heart-icon.svg'
    }

})

volume_button.addEventListener('click', () => {

    if(volume_button.id != 'muted'){
        sample.muted = true
        volume_button.id = 'muted'
        volume_button_icon.src = './assets/icons/audio-icon-muted.svg'

    }else{
        sample.muted = false
        volume_button.id = ''
        volume_button_icon.src = './assets/icons/audio-icon.svg'
    }

})