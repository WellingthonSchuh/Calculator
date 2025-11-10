/*function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        
        inicia(){
            this.clickButton();
            this.pressionaEnter();
            this.pressionaBackspace(); 
        },
    
        pressionaEnter(){
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },
        pressionaBackspace() {
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 8) {
                    this.deleteOne();
                }
            })
        }, 
        clickButton(){
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
                this.display.focus();
            });        
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        },
        clearDisplay(){
            this.display.value = '';
        },
        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta invalida');
                    return;
                }
                this.display.value = conta;
            }catch(e){
                alert('Conta invalida');
                return;
            }
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();*/

function Calculadora(){
    this.display = document.querySelector('.display');
        
    this.inicia = () => {
        this.clickButton();
        this.pressionaEnter();
        this.pressionaBackspace(); 
    };
    
    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if(e.keyCode === 13){
                this.realizaConta();
            }
        });
    };
    this.pressionaBackspace = () => {
        this.display.addEventListener('keypress', e => {
            if(e.keyCode === 8) {
            this.deleteOne();
            }
        })
    }; 
    this.clickButton = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clear')){
                this.clearDisplay();
            }
            if (el.classList.contains('btn-del')){
                this.deleteOne();
            }
            if (el.classList.contains('btn-eq')){
                this.realizaConta();
            }
            this.display.focus();
        });        
    };
    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };
    this.clearDisplay = () => {
        this.display.value = '';
    };
    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    };
    this.realizaConta = () => {
        let conta = this.display.value;
        try{
            conta = eval(conta);
            if(!conta){
                alert('Conta invalida');
                return;
            }
            this.display.value = conta;
            }catch(e){
            alert('Conta invalida');
            return;
        }
    };

};

const calculadora = new Calculadora();
calculadora.inicia();
