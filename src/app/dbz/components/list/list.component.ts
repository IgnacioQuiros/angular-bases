import { Component, Output,EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html'
})

export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];

@Output()
 public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
    //Emitir el Id del personaje
    if(!id) return;
    console.log({id});

    this.onDelete.emit(id);

  };
}
