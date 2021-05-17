import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  tabs: any[] = [
    { 
      title: 'home', 
      path: 'home',
    },
    { 
      title: 'stagiaire', 
      path: 'stagiaire',
    },
    { 
      title: 'adresse', 
      path: 'adresse',
    },
    { 
      title: 'template-form', 
      path: 'template-form',
    },
    { 
      title: 'reactive-form', 
      path: 'reactive-form',
    },
    { 
      title: 'calculette', 
      path: 'calculette',
    },
    { 
      title: 'tp-form', 
      path: 'tp-form',
    },
    { 
      title: 'personne', 
      path: 'personne',
    },
    { 
      title: 'rocket', 
      path: 'rocket',
    }

  ];
}
