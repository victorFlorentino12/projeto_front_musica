function playSound(idElementAudio){
    document.querySelector(idElementAudio).play();
}

const listOfButton = document.querySelectorAll('.tecla');

//let counter = 0

//while ( counter < listOfButton.length){
   // const list = listOfButton[counter];
   // const instrument = list.classList[1];
  //  const audio = `#som_${instrument}`;
    
   // counter = counter + 1;
    //list.onclick = function(){
      //  playSound(audio)
   // };
for(let i = 0; i < listOfButton.length; i++){
    const list = listOfButton[i];
    const instrument = list.classList[1];
    const audio = `#som_${instrument}`;
    
    list.onclick = function(){
        playSound(audio);
    }
    list.onkeydown = function(event){
        if(event.code === 'KeyA' || event.code === 'Enter'){
            list.classList.add('ativa');
        }
    
    }
    list.onkeyup = function(){
        list.classList.remove('ativa')
    }
}