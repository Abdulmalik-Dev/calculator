let // Variables 
    previousNum = document.querySelector('.previousNum'),
    ourInput = document.querySelector('.container input'),
    numContainer = document.querySelector('.numbers'),
    numbers = document.querySelectorAll('[data-type]');

// The Math 
function math(operatore){
    // The math 
    let theSum = 0;
    // To Check If The Now Started The Math Add The Input Field Value On It,
        //  Else Make Math On The Values
    if(previousNum.textContent == ''){
        previousNum.textContent = ourInput.value;
    }else{
        if(operatore == '+'){
            theSum = parseFloat(previousNum.innerHTML) + parseFloat(ourInput.value);
        }
        else if(operatore == '-'){
            theSum = parseFloat(previousNum.innerHTML) - parseFloat(ourInput.value);
        }
        else if(operatore == 'X'){
            theSum = parseFloat(previousNum.innerHTML) * parseFloat(ourInput.value);
        }
        else if(operatore == '/'){
            theSum = parseFloat(previousNum.innerHTML) / parseFloat(ourInput.value);
        }
        previousNum.textContent = theSum;
    }
}
// The previousNum Action 
function previousNumActoin(theOp){
    math(theOp);

    ourInput.value = '';

    // To Add The Opertions On Previous Number Container 
    let operatorPlace = document.createElement('span');
    operatorPlace.appendChild(document.createTextNode(theOp));
    previousNum.appendChild(operatorPlace);
}

// The Equals Action 
function equalAction(){
    // To Make Math And Add Values 
    math(previousNum.children[0].textContent);

    ourInput.value = parseFloat(previousNum.innerHTML);

    previousNum.textContent = '';
}

// To Delete Last Number 
function deleteLastNumber(){
    // To Make The inout field Value As Array 
    newValue = ourInput.value.split('');
    // Delete Last Number 
    newValue.pop();
    // Add The Numbers To Input Field Value 
    ourInput.value = newValue.join('');
}

// Dot Action 
function dotAction(){
    // To Check If There Is Dot Or Not 
    if(ourInput.value.indexOf('.') == -1){
        ourInput.value += '.';
    }
}

numbers.forEach(e => {

    // To Ckeck From The Operatores 
    e.addEventListener('click', () => {
        // The NUmbers 
        if(e.dataset.type === 'num')
            ourInput.value += e.textContent;
            // The Operators 
        else if(e.dataset.type === 'op'){
            if(ourInput.value == ''){
                console.error("Eneter a Valid Value");
            }else{
                previousNumActoin(e.textContent);
            }
        }
        // The Equal Operatore 
        else if(e.dataset.type === 'equal'){
            if(ourInput.value == ''){
                console.error("Eneter a Valid Value");
            }else{
                equalAction();
            }
        }
            // The Delete Last Number Operatore 
        else if(e.dataset.type === 'deleteLast')
            deleteLastNumber();
            // The Delete All BUttom 
        else if(e.dataset.type === 'deleteAll'){
            ourInput.value = '';
            previousNum.innerHTML = '';
        }
        // The Dot Button 
        else if(e.dataset.type === 'dot')
        if(ourInput.value == ''){
            console.error("Eneter a Valid Value");
        }else{
            dotAction();
        }
    });
});