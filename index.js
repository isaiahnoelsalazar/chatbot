const generateBtn = document.getElementById('generateBtn');
const textInput = document.getElementById('textInput');
const generatedTextContainer = document.getElementById('generatedTextContainer');

generateBtn.addEventListener('click', () => {
    generateBtn.innerHTML = "Generating...";
    generateBtn.disabled = true;
    let requestPost = new XMLHttpRequest();
    requestPost.open("POST", `https://sharenetarchive1.pythonanywhere.com/chatbot?message=${textInput.value}`);
    requestPost.onreadystatechange = function (){
        if (requestPost.status == 200 && requestPost.readyState == 4){
            while (generatedTextContainer.firstChild){
                generatedTextContainer.removeChild(generatedTextContainer.firstChild);
            }
            generateBtn.innerHTML = "Chat";
            generateBtn.disabled = false;
            let response = requestPost.responseText;
            let p = document.createElement('p');
            p.innerHTML = response;
            generatedTextContainer.appendChild(p);
        }
    }
    requestPost.send();
});