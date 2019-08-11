import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Show } from '../Show'

@Component({
  selector: 'app-tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['./tv-show-card.component.css']
})
export class TvShowCardComponent implements OnInit {

  @Input() showCollection: AngularFirestoreCollection<Show>;
  @Input() showList: Observable<Show[]>;

  constructor() { }

  ngOnInit() {
  }

  updatePicture(id: string) {
    const picture = prompt('Please enter an image URL:');
    if (picture) {
      this.showCollection.doc(id).update({ picture });
    }
  }

  updateName(id: string, name: string) {
    this.showCollection.doc(id).update({ name });
  }

  remove(id: string) {
    if(confirm('Are you sure to delete the show from your list?')){
      this.showCollection.doc(id).delete();
    }
  }
}