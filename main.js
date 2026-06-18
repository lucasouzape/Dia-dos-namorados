document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona a opção "Sim" pelo ID
    const opcaoSim = document.getElementById('isim');
    
    // Seleciona todos os inputs que estão dentro das divs com a classe "armadilha"
    const opcoesNegativas = document.querySelectorAll('.armadilha input');

    // Para cada opção negativa, adiciona um evento que escuta o clique
    opcoesNegativas.forEach(function(checkboxNegativo) {
        checkboxNegativo.addEventListener('click', function(event) {
            
            // Impede que a caixinha negativa seja marcada
            event.preventDefault(); 
            
            // Marca a opção "Sim" instantaneamente
            opcaoSim.checked = true; 
            
        });
    });
});