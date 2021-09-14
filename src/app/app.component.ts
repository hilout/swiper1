import { Component, ViewEncapsulation } from "@angular/core";
import { ModalController } from "@ionic/angular";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import { AddPostModal } from "./add-post.modal";

SwiperCore.use([EffectFade, Navigation, Pagination]);

@Component({
  selector: "app-swiper-example",
  template: `<button (click)="openModal()"><span>Open modal</span></button>
    <swiper
      [spaceBetween]="30"
      [effect]="'fade'"
      [navigation]="false"
      [pagination]="{ clickable: true, type: 'bullets' }"
      class="mySwiper"
      ><ng-template swiperSlide *ngFor="let pic of selectedPicturesURI"
        ><img [src]="pic" /></ng-template
    ></swiper>`,
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
