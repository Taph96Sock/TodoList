import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tache à faire';

  errorText = '';

list:any[]=[];

  addTask(item:string){
    if(item == ""){return;}
    
    if(this.list.indexOf(item == "") == -1){
      this.list.push({id:this.list.length, name:item});
    }else{
      this.errorText = "Cette tache existe déjà !";
    }

  }

  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }

}
