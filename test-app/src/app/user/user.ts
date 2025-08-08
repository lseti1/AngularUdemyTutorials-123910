import { Component, EventEmitter, Input, Output} from '@angular/core';

// type UserObject = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface UserInterface {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!: UserInterface;
  
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
