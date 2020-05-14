window.onload = () => {

const sample_cover = document.querySelector('.sample-cover-image')
const sample_name = document.querySelector('.sample-name')
const sample_category = document.querySelector('.sample-category')

const play_pause_button = document.querySelector('.play-pause-button')
const play_pause_button_icon = document.querySelector('.play-pause-button-icon')

const favorite_button = document.querySelector('.favorite-button')
const favorite_button_icon = document.querySelector('.favorite-button-icon')

const volume_button = document.querySelector('.volume-button')
const volume_button_icon = document.querySelector('.volume-button-icon')

const sample_current_duration = document.querySelector('#current-duration')
const seekbar = document.querySelector('#seekbar')
const sample_total_duration = document.querySelector('.total-duration')

const sample = document.querySelector('.sample-audio')
sample_current_duration.innerHTML = "0:" + sample.currentTime.toFixed(0)

seekbar.max = sample.duration.toFixed()
sample_total_duration.innerHTML = "0:" + sample.duration.toFixed(0)

var playing = false

setInterval(function() {
    setSeekbar()
}, 1000)

play_pause_button.addEventListener('click', () => {

    if(play_pause_button.id == 'paused'){
        play_pause_button_icon.src = './assets/icons/pause-icon.svg'
        play_pause_button.id = 'playing'
        sample.play()

        playing = true

    }else{
        play_pause_button_icon.src = './assets/icons/play-icon.svg'
        play_pause_button.id = 'paused'
        sample.pause()

        playing = false

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



// Seekbar
function setSeekbar(){
    seekbar.value = Math.round(sample.currentTime)
    sample_current_duration.innerHTML = "0:" + sample.currentTime.toFixed(0)
    console.log(seekbar.value)
}

seekbar.addEventListener('change', (e) => {
    sample.currentTime = e.target.value
    sample_current_duration.innerHTML = "0:" + sample.currentTime.toFixed(0)
})

}