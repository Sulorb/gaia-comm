import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // Oiseaux qui passent et trépassent
  birds = [];
  intervalBirds;
  counter = 0;
  texte = "clic"
  constructor() {
  }
  ionViewWillEnter() {


    console.log('test')

    // BIRDS
    clearInterval(this.intervalBirds);
    this.intervalBirds = setInterval(() => {

      var x = Math.floor(Math.random() * 85) + 5;
      // this.birds = [];
      this.birds.push({ left: x + '%', width: '50px', killed: false, pause: 'running' })

      // Des oisals non killed
      setTimeout(() => {
        //si dernier n'a pas été tué
        if (this.birds.slice(-1)[0].killed == false) {
          // on le vire de l'array (pour éviter de le surcharger avec le temps)
          this.birds.splice(this.birds.lastIndexOf(this.birds.slice(-1)[0]), 1);
          // on remet compteur à 0
          this.counter = 0;
        }
        // else {
        //   // s'il a été tué
        //   this.birds.splice(this.birds.lastIndexOf(this.birds.slice(-1)[0]), 1);
        // }
      }, 4000);

    }, 5000);
  }


  // BIRDS_____________
  birdImage(bird) {
    // console.log(bird)
    if (bird.killed == false) {
      return 'https://recollect-images.global.ssl.fastly.net/api/image/500/material.default.plastic_bags.png';
    } else {
      return 'https://www.larbrenomade.com/wp-content/uploads/elementor/thumbs/Larbre-Nomade-dessin-seulGIMP.jpeg-min-nngfd5hf1w2lni1y3ulfom7kk4lhigcrcelztv609c.png';
    }
  }

  kill(bird) {
    bird.pause = 'paused';
    if (bird.killed == false) {
      this.counter++;
    }
    bird.killed = true;
    // bird.width = '40px';

    console.log(this.counter)
    if (this.counter == 0) {
      this.texte = "encore un effort"
    } else if (this.counter == 1) {
      this.texte = "pousse plus fort"
    } else if (this.counter == 2) {
      this.texte = "ouiiii"
    }else if (this.counter == 3) {
      this.texte = "c'est çaaa"
    }else if (this.counter == 4) {
      this.texte = "mashallah"
    }


  }

  randTime;


  ionViewWillLeave() {
    clearInterval(this.intervalBirds);
  }

}
