class matriz{
    
    constructor(){
      this.arrayLinhas = 0;
      this.arrayColunas = 0;
    }
    
    //start
    init() {
      const botaoGerar = document.getElementById('gerar');
      const botaoresetar = document.getElementById('resetar');
      const aplicar_cor = document.getElementById('aplicar_cor')

      botaoGerar.addEventListener('click',()=>{
        this.criarMatriz()
      })
      botaoresetar.addEventListener('click', ()=>{
        this.limparArrays()
      })

      aplicar_cor.addEventListener('click', () => {
        this.aplicarCor(0)
      })
    }

    alimentarTamanhoMatriz(){
      this.arrayLinhas  = Number(document.getElementById('linhas').value);
      this.arrayColunas = Number(document.getElementById('colunas').value);

      console.log('tamanho da linha no alimentarMatriz: '+ this.arrayLinhas);
      console.log(`tamanho da linha: ${this.arrayLinhas} : tamanho col: ${this.arrayColunas}`);    
    }

    criarMatriz(principal, secundaria){
      const tbody = document.getElementById('tbody');

      this.limparTabela()
      this.alimentarTamanhoMatriz()
      this.verificaQuadrado()

      for (let i = 0; i<this.arrayLinhas; i++){
        var tr = tbody.insertRow();

        for(let j = 0; j<this.arrayColunas; j++){
          let td = tr.insertCell();  

          let first = i + 1 == j + 1 && principal
          let second = i + 1 + j + 1 == this.arrayColunas + 1 && secundaria

          if(i < this.arrayColunas){
            td.innerText = `${i+1}${j+1}`;
            if(first) td.style.backgroundColor = principal
            if(second) td.style.backgroundColor = secundaria

            console.log(td)
          }     

        }
      }     
    }

    limparArrays(){
      document.getElementById('linhas').value = ''
      document.getElementById('colunas').value = ''

      this.arrayLinhas  = 0;
      this.arrayColunas = 0;

      console.log('removendo...');
      console.log(`tamanho da array linha: ${this.arrayLinhas} tamanho da arrya coluna: ${this.arrayColunas}`);
    }

    limparTabela(){
      tbody.innerHTML = ''
    }

    verificaQuadrado(){
      const Campodestacar = document.getElementById('campoDestacar');
      const destDiag = document.getElementById('destaqueDiagonal');//CampoDasCores
      
      if(this.arrayLinhas == this.arrayColunas){
        console.log(`verifica quad ${this.arrayLinhas} ${this.arrayColunas}`);

        Campodestacar.style.display='block';
        if(!destacar.checked) {
          destDiag.style.display='none';
        }

        destacar.removeEventListener('change', this.checkboxToggle)
        destacar.addEventListener('change', this.checkboxToggle)

      } else {
        Campodestacar.style.display='none';
        destDiag.style.display='none';
      }

    }

    checkboxToggle(e) {
      const destDiag = document.getElementById('destaqueDiagonal');//CampoDasCores
      if(e.target.checked){
        console.log('check esta marcado!');
        destDiag.style.display='block';
      } else {
        console.log('check esta desmarcado');
        destDiag.style.display='none';
      }
    }

    aplicarCor() {
      let principal = document.getElementById('principal')
      let secundaria = document.getElementById('secundaria')

      if(principal.value && secundaria.value) {
        // se houver cor, então eu crio a matriz novamente passando as cores como parâmetro!
        this.criarMatriz(principal.value, secundaria.value)
      }
    }
}

let Matriz = new matriz();
    Matriz.init();

