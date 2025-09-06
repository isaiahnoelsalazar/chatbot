const generateBtn = document.getElementById('generateBtn');
const textInput = document.getElementById('textInput');
const generatedTextContainer = document.getElementById('generatedTextContainer');

generateBtn.addEventListener('click', () => {
    generatedTextContainer.children.array.forEach(child => {
        generatedTextContainer.removeChild(child);
    });
    let requestPost = new XMLHttpRequest();
    requestPost.open("POST", `https://sasasaia.pythonanywhere.com/chatbot?message=${textInput.value}`);
    requestPost.onreadystatechange = function (){
        if (requestPost.status == 200 && requestPost.readyState == 4){
            let response = requestPost.responseText;
            let p = document.createElement('p');
            p.innerHTML = response;
            generatedTextContainer.appendChild(p);
        }
    }
    requestPost.send();
});