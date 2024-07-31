import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton,IonButtons, IonGrid, IonRow, IonCol, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {cartOutline} from 'ionicons/icons';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonLabel, IonCol, IonRow, IonGrid, IonBackButton, RouterLink,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons]
})
export class IndexPage implements OnInit {

  constructor() {
    addIcons({cartOutline})
   }

  ngOnInit() {
  }

}
