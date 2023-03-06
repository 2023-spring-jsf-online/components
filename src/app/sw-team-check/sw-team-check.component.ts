import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-team-check',
  templateUrl: './sw-team-check.component.html',
  styleUrls: ['./sw-team-check.component.css']
})
export class SwTeamCheckComponent {

  constructor() {

  }

  ngOnInit(): void {

  }

  teamNames = [
    "green bay packers"
    , "packers"
    , "green bay"
    , "gbp"
    , "greenbaypackers"
  ];

  userInput = "".toLocaleLowerCase();

  result = "";


  checkTeamNames = () => {

    const userInputLower = this.userInput.toLocaleLowerCase();

    if (this.teamNames.includes(userInputLower)) {
      this.result = ("You have chosen wisely! Go Pack Go!");
    }
    else {
      this.result = ("You chose poorly!");
    }

    // this.userInput = "";

    };

  }
