let textoCripto;    
    
    function criptografar(){
        let texto = document.getElementById("texto").value
        let tituloMensagem = document.getElementById("titulo-mensagem")
        let paragrafo = document.getElementById("paragrafo-mensagem")
        let boneco = document.getElementById("boneco")

        textoCripto = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat")
        
        if (texto.length != 0){
            document.getElementById("texto").value = textoCripto
            tituloMensagem.textContent = "Texto criptografado com sucesso!"
            paragrafo.textContent = ""
            boneco.src = "./img/lock.svg"
            document.getElementById("copiar").hidden = false
            document.getElementById("copiar").disabled = false
        } else{
            tituloMensagem.textContent = "Nenhuma mensagem encontrada"
            paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar."
            boneco.src = "img/main-img.svg"
            alert("Deve inserir algum texto")
        }
    }
        
    function descriptografar(){
        let texto = document.getElementById("texto").value
        let tituloMensagem = document.getElementById("titulo-mensagem")
        let paragrafo = document.getElementById("paragrafo-mensagem")
        
        let textoCripto = texto 
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u")

            if (texto.length != 0){
                document.getElementById("texto").value = textoCripto
                boneco.src = "./img/lock-unlocked.svg"
                tituloMensagem.textContent = "Texto descriptografado com sucesso!"
                paragrafo.textContent = ""
            } else{
                tituloMensagem.textContent = "Nenhuma mensagem encontrada"
                boneco.src = "img/main-img.svg"
                paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar."
                alert("Deve inserir algum texto")  
            }
    }
    
    function copy() {
        // Seleciona o texto
        document.querySelector("#texto").select();
    
        // Copia o texto selecionado para a área de transferência
        document.execCommand("copy");
    
        // Mostra uma mensagem de alerta informando que o texto foi copiado
        alert('Texto copiado para a área de trabalho');
    }
    
    // Adiciona um ouvinte de evento ao botão "copiar" para chamar a função copy quando o botão for clicado
    document.getElementById("copiar").addEventListener('click', copy);
