import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  quantity:number;
  strength:number;
  pg:number;
  vg:number;
  nicStrength:number;
  nicPG:number;
  nicVG:number;
  flavor:number;
  recipe:Recipe;
  flavorShow:boolean=false;
  validQnt:boolean=true;
  validStr:boolean=true;
  validPg:boolean=true;
  validVg:boolean=true;
  validNicStr:boolean=true;
  validNicPg:boolean=true;
  validNicVg:boolean=true;
  validFlv:boolean=true;



  constructor() { }

  ngOnInit() {
    this.quantity=10;
    this.strength=6;
    this.pg=30;
    this.vg=70;
    this.nicStrength=100;
    this.nicPG=100;
    this.nicVG=0;
    this.flavor=0;
    this.recipe={
      nicBase:0,
      pgBase:0,
      vgBase:0,
      flavorQnt:0
    }
    var progress = document.getElementById("recipeProgress");
    progress.style.display="none";

    var table = document.getElementById("recipeTable");
    table.style.display="none";
  }

  toggleFlavor(){
    this.flavorShow=!this.flavorShow;
    var btn = document.getElementById("flavorBtn");
    if(this.flavorShow) {
      //btn.textContent = "Remove Flavor";
      btn.style.display="none";
    }else{
      btn.textContent = "Add Flavor";
      this.flavor=0;
    }
  }

  calculateNicJuice(){
    if(this.quantity <0){
      alert("Amount to make should be positive number");
      this.quantity = 10;
      this.validQnt=false;
    }else{
      this.validQnt=true;
    }
    if(this.strength <0 ){
      alert("Desired strength should be positive number");
      this.strength=6;
      this.validStr=false;
    }else{
      this.validStr=true;
    }
    if(this.pg <0 || this.pg >100){
      alert("Desired PG persentage should be between 0 and 100 %");
      this.pg = 30;
      this.validPg=false;
    }else{
      this.validPg=true;
    }
    if(this.vg <0 || this.vg >100){
      alert("Desired VG persentage should be between 0 and 100 %");
      this.vg = 30;
      this.validVg=false;
    }
    else{
      this.validVg=true;
    }
    if(this.nicStrength <0){
      alert("Nicotine strength should be positive number");
      this.nicStrength = 100;
      this.validNicStr=false;
    }else{
      this.validNicStr=true;
    }
    if(this.nicPG <0 || this.nicPG >100){
      alert("PG-content of nicotine percentage should be between 0 and 100%");
      this.nicPG =100;
      this.validNicPg=false;
    }
    else{
      this.validNicPg=true;
    }
    if(this.nicVG <0 || this.nicVG >100){
      alert("VG-content of nicotine percentage should be between 0 and 100%");
      this.nicVG =0;
      this.validNicVg=false;
    }else{
      this.validNicVg=true;
    }
    if(this.flavor <0 || this.flavor >100){
      alert("Flavor percentage should be between 0 and 100 %");
      this.flavor=0;
      this.validFlv=false;
    }
    else{
      this.validFlv=true;
    }
    if(this.validQnt && this.validStr && this.validPg && this.validVg && this.validNicStr && this.validNicPg && this.validNicVg && this.validFlv){
      this.recipe.nicBase = parseFloat(((this.strength * this.quantity) / this.nicStrength).toFixed(2));
      this.recipe.pgBase = parseFloat(((this.pg/100)*this.quantity -(this.flavor/100)*this.quantity - (this.nicPG/100)*((this.strength*this.quantity)/this.nicStrength)).toFixed(2));
      this.recipe.vgBase = parseFloat(((this.vg / 100) * this.quantity - (this.nicVG / 100) * ((this.strength * this.quantity) / this.nicStrength)).toFixed(2));
      this.recipe.flavorQnt = parseFloat(((this.flavor / 100) * this.quantity).toFixed(2));
      if(this.recipe.nicBase<0 || this.recipe.pgBase<0 || this.recipe.vgBase<0 || this.recipe.flavorQnt<0){
        alert("Please check again your inputs");
        this.recipe.nicBase=this.recipe.pgBase=this.recipe.vgBase=this.recipe.flavorQnt=0;
      }
    }
  }

  calculateVGleft(){
    this.vg = 100-this.pg;
    this.nicVG = 100-this.nicPG;
  }

  calculatePGleft(){
    this.pg=100-this.vg;
    this.nicPG=100-this.nicVG;
  }

  conv(){
    this.pg=this.pg*1.04;
  }

  hideTable(){
    var table = document.getElementById("recipeTable");
    table.style.display="block";
  }

  progressBars(){
    var progress = document.getElementById("recipeProgress");
    progress.style.display="block";

    var nic = document.getElementById("nicProgress");
    var vg = document.getElementById("vgProgress");
    var pg = document.getElementById("pgProgress");
    var fl = document.getElementById("flProgress");

    nic.style.width= (this.recipe.nicBase*100)/this.quantity +'%';
    vg.style.width = (this.recipe.vgBase*100)/this.quantity +'%';
    pg.style.width=(this.recipe.pgBase*100)/this.quantity +'%';
    fl.style.width=(this.recipe.flavorQnt*100)/this.quantity +'%';


  }

}

interface Recipe{
  nicBase:number,
  pgBase:number,
  vgBase:number,
  flavorQnt:number
}
