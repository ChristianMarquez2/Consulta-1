import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, NgFor] // 👈 IMPORTANTE
})
export class HabilidadesPage implements OnInit {

  habilidades: any[] = [];
  pasiva: any = null;
  version = '14.6.1';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.http.get(`https://ddragon.leagueoflegends.com/cdn/${this.version}/data/es_ES/champion/Jhin.json`)
      .subscribe((res: any) => {
        const data = res.data.Jhin;
        this.pasiva = data.passive;
        this.habilidades = data.spells; // Q W E R
      });
  }

  getIconPassive() {
    return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/passive/${this.pasiva.image.full}`;
  }

  getIconSpell(spell: any) {
    return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/spell/${spell.image.full}`;
  }

}
