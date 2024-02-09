const messageWindow = document.getElementById('message');
const chatWindow = document.getElementById('chat');
const openChat = document.querySelector('.message-time img');
const closeChat = document.getElementById('left-arrow');
const animation = document.getElementById('switch-input');
const background = document.getElementById('switch-background');
const container = document.getElementById('switch-button');

openChat.addEventListener('click', () => {
        messageWindow.style.display = "none";
        chatWindow.style.display = "flex";
});
closeChat.addEventListener('click', () => {
        messageWindow.style.display = "block";
        chatWindow.style.display = "none";
});

animation.addEventListener('click', (e) => {

    console.log("worked");
    if(animation.checked){
        animation.classList.add('active');
        container.classList.add('active');
        background.style.display = "none";
    }else{
        animation.classList.remove('active');
        container.classList.remove('active');
        background.style.display = "block";
    }

});