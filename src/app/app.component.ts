import { Component, ViewEncapsulation } from "@angular/core";
import { ModalController } from "@ionic/angular";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import {AddPostModal} from "./add-post-modal/add-post.modal";


SwiperCore.use([EffectFade, Navigation, Pagination]);

@Component({
  selector: "app-root",
  templateUrl: 'app.html',
  styleUrls: ["./app.components.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  selectedPicturesURI: Array<string> = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg"
  ];
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: AddPostModal,
      componentProps: { selectedPicturesURI: this.selectedPicturesURI }
    });
    modal.onDidDismiss().then((resp) => {
      if (resp !== null && resp.data != null) {
      }
    });
    return await modal.present();
  }
}
