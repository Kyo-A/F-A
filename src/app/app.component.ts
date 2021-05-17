import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  // Injection de la dependance router pour la navigation entre composants
  constructor(private router: Router) { }

  // Declaration d'un tableau de routes utilsées dans le .html
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
    },
    { 
      title: 'table', 
      path: 'table',
    },
    { 
      title: 'tree', 
      path: 'tree',
    },
    { 
      title: 'address-form', 
      path: 'address-form',
    }

  ];
  // Se deconnecte en supprimant la propriete isConnected du localStorage
  logOut(){
    // Pour supprimer une variable de localStorage
    localStorage.removeItem('isConnected');
    this.router.navigateByUrl('/home');
  }

  // Methode retournant true/false si un utilisateur est connecte
  isConnected(){
    if (Boolean(localStorage.getItem('isConnected')))
      return true;
    return false;
  }
}
