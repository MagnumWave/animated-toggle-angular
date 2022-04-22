import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alt-toggle',
  templateUrl: './alt-toggle.component.html',
  styleUrls: ['./alt-toggle.component.css']
})


export class AltToggleComponent implements OnInit {

  @Input() size = 0;

  transformExpression1 = '';
  transformExpression2 = '';
  isTogglado = true;
  fadeToggle = true;
  toggleWord = "sim";

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.size)
    this.transformExpression1 = "width: "+ this.size + "px; height: "+this.size+"px;"
    let conversion = this.size / 100;
    console.log(conversion);

    this.transformExpression2 = "font-size: "+conversion*130+"%;";

  }


  toggleHandle(){
    this.fadeToggle = !this.fadeToggle;
    this.isTogglado = !this.isTogglado;
    this.isTogglado ? this.toggleWord = "sim" : this.toggleWord = "não";
    setTimeout(() => {
      this.fadeToggle = !this.fadeToggle;
    }, 200);
    console.log(this.isTogglado);

  }

}
