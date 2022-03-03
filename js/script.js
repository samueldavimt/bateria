let soundsBattery = {
    chimbal:'./sounds/keye.wav',
    caixa: './sounds/keyz.wav',
    tom1: './sounds/keyq.wav',
    tom2:'./sounds/keyc.wav',
    prato:'./sounds/keys.wav',
    surdo:'./sounds/keyc.wav',
    bumbo:'./sounds/keya.wav'
}

let handleDrum = {
    touchDrum(){
        let soundName = this.dataset.name;
        handleDrum.playSound(soundName)
    },

    playSound(soundName){
        let sound = soundsBattery[soundName]
        let music = new Audio(sound)
        music.play()
    }

}

document.querySelectorAll('.battery_part').forEach(element=>{
    
    element.addEventListener('click',handleDrum.touchDrum)
})

window.addEventListener('keyup',function(e){
    
    switch(e.key){
        case 'd':
            handleDrum.playSound('chimbal')
            break
        case 'q':
            handleDrum.playSound('caixa')
            break
        case 'e':
            handleDrum.playSound('tom1')
            break
        case 'w':
            handleDrum.playSound('tom2')
            break
        case 'r':
            handleDrum.playSound('surdo')
            break
        case 't':
            handleDrum.playSound('prato')
            break
        case 'f':
            handleDrum.playSound('bumbo')
            break
    }
})

