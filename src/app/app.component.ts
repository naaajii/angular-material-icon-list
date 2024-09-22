import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { IconCategories } from './shared/icons/data';
import { IconNameToTitlePipe } from './shared/pipes/icon-name-to-title.pipe';
import { FontSetURLPipe } from './shared/pipes/font-set-url.pipe';
import { FontSets } from './shared/fontsets/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule,
    IconNameToTitlePipe,
    FontSetURLPipe,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = `Angular Material Icon List`;

  snackbar = inject(MatSnackBar);
  clipboard = inject(Clipboard);

  categories = IconCategories;
  freeSearchControl = new FormControl<string>('');
  filterWith: string[] = [];

  colorCodeToFilterURL = `https://codepen.io/sosuke/pen/Pjoqqp`;
  twoToneStackoverflowAnswerURL = `https://stackoverflow.com/a/60821004`;

  fontSet = 'material-icons';
  fontSets = FontSets;


  copyIcon(icon: string) {
    const attributes = [];
    const segments = [];
    const defaultSet = this.fontSet !== 'material-icons' ? false : true;

    if (!defaultSet) {
      attributes.push(`fontSet="${this.fontSet}"`);
    }

    if (attributes.length) {
      segments.push(`<mat-icon ${attributes.join(" ").trim()}>`);
      segments.push(icon);
      segments.push(`</mat-icon>`);
    } else {
      segments.push(`<mat-icon>`);
      segments.push(icon);
      segments.push(`</mat-icon>`);
    }
    
    this.clipboard.copy(`${segments.join("")}`);

    this.snackbar.open("Successfully copied icon!");
  }

  copyFontSetURL(url: string) {
    this.clipboard.copy(url);

    this.snackbar.open("Successfully copied font set URL!");
  }
}
