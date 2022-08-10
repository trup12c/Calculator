let input = document.getElementById('input');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', function(event) {
        
       try {
        switch (event.target.textContent) {
            case 'AC':                    
                input.textContent = '';
                break;
            case 'DEL':
                if(input.textContent){
                    input.textContent = input.textContent.slice(0,-1);
                }
                break;
            case '=':
                if(input.textContent) {
                    input.textContent = eval(input.textContent);
                }
                break;
            default: 
                input.textContent += event.target.textContent;
        }
       } catch (error) {
            alert('there is an error');
       }
    });
});


/**
 * TODO: 
 */