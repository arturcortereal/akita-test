import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app-routes';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  declarations: [AppComponent, HomeComponent, AddTodoComponent],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
