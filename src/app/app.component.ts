import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from './Show'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  showCollection: AngularFirestoreCollection<Show>;
  showList: Observable<Show[]>;
  name = 'Angular';

  constructor(private db: AngularFirestore) {
    this.showCollection = db.collection('edison_shows');
    this.showList = this.showCollection.valueChanges();
  }

  add() {
    const id = this.db.createId();
    const picture = this.getRandomPicture();
    const name = '';
    this.showCollection
      .doc(id)
      .set({ name, picture, id });
  }

  getRandomPicture() {
    const randomNumber = Math.round(Math.random() * 20);
    return 'https://picsum.photos/100/100?image=' + randomNumber;
  }
}
