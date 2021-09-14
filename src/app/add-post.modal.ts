import { Component, Input, ViewEncapsulation } from "@angular/core";
import { ModalController } from "@ionic/angular";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination]);
@Component({
  selector: "add-post-modal",
  template: `<button (click)="dismiss()"><span>cancel</span></button>
    <swiper
      [spaceBetween]="30"
      [effect]="'fade'"
      [navigation]="false"
      [pagination]="{ clickable: true, type: 'bullets' }"
      class="mySwiper"
      ><ng-template swiperSlide *ngFor="let pic of selectedPicturesURI"
        ><img [src]="pic" /></ng-template
    ></swiper>`,
  styleUrls: ["add-post.modal.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AddPostModal {
  @Input()
  selectedPicturesURI: Array<string>;

  constructor(private modalController: ModalController) {}

  async dismiss() {
    await this.modalController.dismiss({});
  }
}
