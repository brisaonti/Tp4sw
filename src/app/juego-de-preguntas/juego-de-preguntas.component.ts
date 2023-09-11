/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-de-preguntas',
  templateUrl: './juego-de-preguntas.component.html',
  styleUrls: ['./juego-de-preguntas.component.css']
})
export class JuegoDePreguntasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
----*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-de-preguntas',
  templateUrl: './juego-de-preguntas.component.html',
  styleUrls: ['./juego-de-preguntas.component.css']
})
export class JuegoDePreguntasComponent implements OnInit {

  palabras: string[] = ['casa', 'perro', 'gato', 'ratón', 'arbol', 'verde', 'avión', 'flor'];
  caracteristicas: string[] = ['vocales', 'consonantes', 'letras', 'sílabas'];
  respuestas: number[] = [2, 3, 4, 2, 4, 5, 2, 3];

  iteracion: number = 1;
  aciertos: number = 0;
  errores: number = 0;
  palabra: string = this.palabras[0];
  caracteristica: string = this.caracteristicas[0];
  opcion1 = 2;
  opcion2 = 3;
  opcion3 = 4;
  opcion4 = 5;
  opcionprueba = 2;
  palabra1: string = '';
    respuesta: string = '';
    resultado: string = '';
  ngOnInit(): void {
    this.generarOpciones();
  }
  generarOpciones() {
    throw new Error('Method not implemented.');
  }

  responder(opcion: number) {
   
    if (this.respuestas[this.iteracion - 1] == opcion) {
      this.aciertos++;
    } else {
      this.errores++;
    }
    if (this.iteracion < 8) {
      this.iteracion++;
      this.palabra = this.palabras[this.iteracion - 1];
      this.caracteristica = this.caracteristicas[Math.floor(Math.random() * this.caracteristicas.length)];
      this.generarOpciones();
    } else {
      // Mostrar resultados en un modal
      alert('Juego terminado.\nA');
    }
    }
    /*
    if (this.respuestas[this.iteracion - 1] == opcion) {
      this.aciertos++;
    } else {
      this.errores++;
    }
    if (this.iteracion < 8) {
      this.iteracion++;
      this.palabra = this.palabras[this.iteracion - 1];
      this.caracteristica = this.caracteristicas[Math.floor(Math.random() * this.caracteristicas.length)];
      this.generarOpciones();
    } else {
      // Mostrar resultados en un modal
      alert('Juego terminado.\nA');
    }
  }*/

    
  /* COdigo para saber si hay vocales
    verificar() {
      let numVocales = 0;
      for (let letra of this.palabra1.toLowerCase()) {
        if (['a', 'e', 'i', 'o', 'u'].indexOf(letra) !== -1) {
          numVocales++;
        }
      }
  
      if (numVocales.toString() === this.respuesta) {
        this.resultado = numVocales.toString();
      } else {
        this.resultado = 'incorrecto';
      }
    }*/
  
  }
  
