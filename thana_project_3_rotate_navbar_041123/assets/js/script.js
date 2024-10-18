// const open = document.getElementById('open');
// const close = document.getElementById('close');
// const container = document.querySelector('.container');
 
// open.addEventListener('click', () => container.classList.add('rotate'));
// close.addEventListener('click', () => container.classList.remove('rotate'))

// ------------------jquery--------------------------

$(document).ready(()=>{
        const open=$("#open")
        const close=$("#close")
        const container=$(".container")
        open.click(()=>container.addClass('rotate'));
        close.click(()=>container.removeClass('rotate'));
    });

