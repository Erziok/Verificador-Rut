class RutValidador {
    constructor(rut) {
        this.rut = rut;
        // Obtenemos el ultimo caracter ingresado del rut
        this.dv = this.rut.substring(this.rut.length - 1);
        // limpiar el rut dejando solamente los números
        this.rut = this.rut.substring(0, this.rut.length - 1).replace(/\D/g, ''); 
        // replace() está reemplazando por un string vacío los datos que no son nros (puntos y guión)
        this.esValido = this.validarRut();
    }

    validarRut() {
        let numerosArray = this.rut.split('').reverse()
        // reverse() permite invertir el orden del array
        let acumulador = 0;
        let multiplicador = 2;
        for(let numero of numerosArray) {
            acumulador += parseInt(numero) * multiplicador; // Hasta ahora se tenía un array de string, debemos convertirlo a números mediante parseInt()
            multiplicador++;
            if(multiplicador == 8) {
                multiplicador = 2;
            }
        }

        let dv = 11 - (acumulador % 11);

        if(dv == 11)
            dv = '0'
        if(dv == 10)
            dv = 'k';

        return dv == this.dv.toLowerCase();;
    }

    formato() {
        if(!this.esValido) return '';

        return (this.rut.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')) + '-' + this.dv
    }

}


