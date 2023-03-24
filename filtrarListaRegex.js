var texto = this.template.querySelector('[data-id = "searchValue"]').value;

if (texto) {
    var results = [];
    var listaAuxiliar = JSON.parse(JSON.stringify(this.listAux));
    var regex;

    try {
        regex = new RegExp(texto, "i");
        results = listaAuxiliar.filter( row => regex.test(row.nameBank) || regex.test(row.numberBank) );
    
    } catch(e) {
        console.log("ERRO >>> " + e);
        results = listaAuxiliar;
    }

    this.list = results;
}
else
    this.list = this.listAux;