import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Titulo de slide 1",
      icon: "body-outline",
      avatar: "https://static.vecteezy.com/system/resources/previews/004/819/327/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
      image: "https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2020/03/11/hombre-correr.jpeg",
      description: "Soy una persona corriendo al aire libre"
    },
    {
      title: "Titulo de slide 2",
      icon: "bicycle-outline",
      avatar: "https://static.vecteezy.com/system/resources/previews/002/027/555/non_2x/young-man-riding-a-bicycle-avatar-character-vector.jpg",
      image: "https://www.gentedehoy.es/wp-content/uploads/2020/04/pasata_a_la_bicicleta-810x540.jpg",
      description: "Soy una persona montando bicicleta"
    },
    {
      title: "Titulo de slide 3",
      icon: "barbell-outline",
      avatar: "https://img.freepik.com/vector-premium/ilustracion-joven-entrenando-pesas-gimnasio-o-casa_181313-950.jpg?w=740",
      image: "https://i.blogs.es/18ff13/istock-655781960/1024_2000.webp",
      description: "Soy una persona en el gym"
    },
    {
      title: "Titulo de slide 4",
      icon: "home-outline",
      avatar: "https://img.freepik.com/vector-premium/fit-hombre-practicando-yoga_24640-29973.jpg?w=740",
      image: "https://s3.abcstatics.com/media/bienestar/2020/03/23/deporte-en-casa-k02C--1248x698@abc.jpg",
      description: "Soy una persona haciendo ejercicio en casa"
    }
  ]

  constructor(private router: Router, private storage: Storage) { }


  ngOnInit() {
  }


  close(){
    //console.log("Estoy intentando cerrar la intro")
    this.storage.set("isIntroShowed", true)
    this.router.navigateByUrl("/home")
  }


}
