function valueButton(angka){
    formkalkulator.scree.value += angka.value;
}

function Reset(){
    formkalkulator.screen.value =null;
}

function Hitung(){
    formkalkulator.screen.value =eval (formkalkulator .screen.value);
}