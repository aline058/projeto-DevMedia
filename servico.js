import fatos from "./fatos.js";



function retornaFato (ano){
    for(const fato of fatos){
        if(fato.Ano == ano){
            return fato.Fato;
        }
        }
    }
    

function verificaAno (ano){
    if(ano >= 1920 && ano <= 2020){
        return true
    }
}


export {retornaFato, verificaAno};