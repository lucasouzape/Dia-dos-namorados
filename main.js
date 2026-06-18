
document.addEventListener("DOMContentLoaded", function() {
    
    
    const opcaoComCerteza = document.getElementById('icomctz');
    
   
    const opcoesNegativas = document.querySelectorAll('.armadilha input');

    
    opcoesNegativas.forEach(function(checkboxNegativo) {
        checkboxNegativo.addEventListener('click', function(event) {
            
           
            event.preventDefault(); 
            
            
            opcaoComCerteza.checked = true; 
            
        });
    });
});