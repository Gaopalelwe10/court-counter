import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  teamA = 0;
  teamB = 0;
  totalA=0;
  totalB=0;
  constructor() {}

  buttonA(teamA){
    this.totalA +=teamA
  }

  button_A(teamA){
    this.totalA +=teamA
    if(this.totalA<0){
      this.totalA = 0
    }
  }

  buttonB(teamB){
    this.totalB +=teamB
  }

  button_B(teamB){
    this.totalB +=teamB
    if(this.totalB<0){
      this.totalB = 0
    }
  }
  
  reset(){
    this.totalA = 0
    this.totalB = 0
   
  }
}
