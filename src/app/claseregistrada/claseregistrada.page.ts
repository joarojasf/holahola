import { Component, OnInit } from '@angular/core';
import { AppStorageService } from '../services/app-storage.service';

@Component({
  selector: 'app-claseregistrada',
  templateUrl: './claseregistrada.page.html',
  styleUrls: ['./claseregistrada.page.scss'],
})
export class ClaseregistradaPage implements OnInit {

  constructor(private storage: Storage) {
  }

  async ngOnInit() {

}
}