/*import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-punto1completo',
  templateUrl: './punto1completo.component.html',
  styleUrls: ['./punto1completo.component.css']
})

export class Punto1Component implements OnInit{

  productos:Array<Producto> = [
    {
      nombre: 'NOTEBOOK HP 245 G8 AMD ATHLON 3020E 1TB 4GB 14 FREE',
      descripcion:'La laptop HP 245 sigue el ritmo de estilos de trabajo móviles gracias a un diseño delgado y ligero. La hermosa pantalla con su angosto borde y relación de pantalla y cuerpo grande brinda amplio espacio para trabajar o reproducir contenido.',
      imagen:'hp245.jpg',
      precio: 180169
    },
    {
      nombre: 'NOTEBOOK DELL INSPIRON 3511 I3 1115G4 4GB SSD 256GB 15.6 FREE',
      descripcion:'Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.',
      imagen:'inspiron3511.jpg',
      precio:269990
    },
    {
      nombre: 'NOTEBOOK LENOVO THINKPAD E15 G3 RYZEN 5 5500U SSD 256GB 8GB 15.6 FREE',
      descripcion:'Las laptops ThinkPad E5 se han probado con 12 especificaciones de nivel militar y se han sometido a más de 200 pruebas de calidad para asegurarnos de que funcionan en condiciones extremas.',
      imagen:'lenovoe15.jpg',
      precio:498949
    },
    {
      nombre: 'NOTEBOOK GIGABYTE AERO 5 XE4 I7 12700H 16GB SSD 1TB RTX 3070TI 15.6 W11',
      descripcion:'Inspirada en el diseño aerodinámico de la automoción, la fórmula estética de AERO 5 consiste en potencia y elegancia; la eficiencia de estilo hipercoche se transmite a través de los contornos que encarnan la necesidad de velocidad y ofrecen durabilidad con estilo.',
      imagen:'aero5.png',
      precio:1099999
    },
    {
      nombre: 'NOTEBOOK XPG XENIA 15 I5 1135G7 IRIS XE SSD 512GB NVME 16GB 14 W10',
      descripcion:'Diseñado conjuntamente con Intel para un rendimiento óptimo, el nuevo XPG XENIA 14 ofrece el  último Intel i5 1135G7 junto con una serie de características para mejorar todos los aspectos de la experiencia del usuario.',
      imagen:'xenia15.jpg',
      precio:436579
    },
    {
      nombre: 'NOTEBOOK ASUS X515EA I3 115G4 4GB SSD 256GB 15.6 W11',
      descripcion:'Ya sea para trabajar o jugar, el ASUS X515 es el computador portátil que ofrece un potente rendimiento y efectos visuales envolventes. Su pantalla NanoEdge cuenta con amplios ángulos de visión de 178° y un recubrimiento antirreflejos mate para tener una experiencia verdaderamente atractiva.',
      imagen:'asus.jpg',
      precio:199990
    }
  ];

  carrito: Array<Producto> = [];
  total:number = 0;
  cantidad!:number;


  constructor(){

  }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
    this.total += producto.precio;
    console.log(this.total);
  }

  mostrarCarrito(){
    return this.carrito;
  }

  cantidadCarrito(){
    return this.carrito.length;
  }


}*/