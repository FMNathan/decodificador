    function criptografar(){
        let texto = document.getElementById("texto").value
        let tituloMensagem = document.getElementById("titulo-mensagem")
        let paragrafo = document.getElementById("paragrafo-mensagem")
        

        let textoCripto = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat")
        
        if (texto.length != 0){
            document.getElementById("texto").value = textoCripto
            tituloMensagem.textContent = "Texto criptografado com sucesso!"
            paragrafo.textContent = ""
        } else{
            tituloMensagem.textContent = "Nenhuma mensagem encontrada"
            paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar."
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
                tituloMensagem.textContent = "Texto descriptografado com sucesso!"
                paragrafo.textContent = ""
            } else{
                tituloMensagem.textContent = "Nenhuma mensagem encontrada"
                paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar."
                alert("Deve inserir algum texto")  
            }
    }   

    function copy(){
        document.getElementById("copy").addEventListener('click', copy)
        document.querySelector("#texto").select()
        document.execCommand("copy")
        alert('Texto copiado para a área de trabalho.')
    }