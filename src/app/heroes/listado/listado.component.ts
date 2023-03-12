import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes:string[]=['Spiderman','Hulk','Thor','Ironman'];
  eliminado:string = '';
  // noBorrado:string = '';

  
  borrarHeroe(){
    this.eliminado = this.heroes?.pop() || "";
    console.log(this.eliminado);
    
  }
}
