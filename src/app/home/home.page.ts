import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf] // 👈 IMPORTANTE
})
export class HomePage implements OnInit {

  jhin: any = null;
  splashUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.cargarDatosJhin();
  }

  cargarDatosJhin() {
    this.http.get('https://ddragon.leagueoflegends.com/cdn/14.6.1/data/es_ES/champion/Jhin.json')
      .subscribe((response: any) => {
        this.jhin = response.data.Jhin;
      });
  }

  verHabilidades() {
    this.router.navigate(['/habilidades']);
  }

}
