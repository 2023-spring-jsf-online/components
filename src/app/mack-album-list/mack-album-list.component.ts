import { Component, OnInit } from '@angular/core';

interface AlbumDisplay {
  name: string;
  amount: number;
  checked: boolean;
}

@Component({
  selector: 'app-mack-album-list',
  templateUrl: './mack-album-list.component.html',
  styleUrls: ['./mack-album-list.component.css']
})
export class MackAlbumListComponent implements OnInit {

  constructor() { }

  albumGeneratedList() {
    const albumList = [
      {
        name: 'Flower Boy, Tyler, the Creator'
        , amount: 1
      }
      , {
        name: 'OK Computer, Radiohead'
        , amount: 2
      }
      , {
        name: 'Because the Internet, Childish Gambino'
        , amount: 3
      }
      , {
        name: 'Blonde, Frank Ocean'
        , amount: 4
      }
      , {
        name: 'Melt My Eyez See Your Future, Denzel Curry'
        , amount: 5
      }
    ];

    return albumList;
  }

  albumsToBeDisplayed: AlbumDisplay[] = [];

  ngOnInit(): void {
    const albumDisplay = this.albumGeneratedList();
    console.log(albumDisplay);

    this.albumsToBeDisplayed = albumDisplay.map(
      x => ({
        ...x
        , checked: false
      })
    );

    console.log(this.albumsToBeDisplayed);
  }

// get albumsListened() {
//   return this.albumsToBeDisplayed
//     .filter(
//       x => x.checked
//     ).length
// };

  albumsListened = 0;

  albumsChecked = () => {
    this.albumsListened = this.albumsToBeDisplayed
      .filter(x => x.checked).length
  }

  clearList = () => {
    this.albumsToBeDisplayed = this.albumsToBeDisplayed
      .map(
        x => ({
          ...x
          , checked: false
        })
      );
    this.albumsListened = this.albumsToBeDisplayed
      .filter(x => x.checked).length
  }
}
