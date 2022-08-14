let input = document.getElementById('input');
let buttons = Array.from(document.getElementsByClassName('button'));
let operators = ['+','-', '%', '/', '*', '.'];

buttons.map( button => {
    button.addEventListener('click', function(event) {
        
       try {
        switch (event.target.textContent) {
            case 'AC':                    
                input.value = '';
                break;
            case 'DEL':
                if(typeof input.value === 'string'){
                    input.value = input.value.slice(0,-1);
                }
                break;
            case '=':
                if(typeof input.value === 'string') {
                    input.value = eval(input.value);
                }
                break;
            default: 
                input.value += event.target.textContent;
        }

       } catch (error) {
        
        alert('there is an error');

       }
    });
});

document.addEventListener('keypress', (event) => {


    try {
        if(event.key === 'Enter') {
            input.value = eval(input.value); 
         }
         else{
         input.value += event.key; 
         }

        
    } catch (error) {
        alert('there is an error'); 
    }
    
});


/**
 * TODO: 
 * Avoiding first operator
 * Input through keyboard
 * 
 */