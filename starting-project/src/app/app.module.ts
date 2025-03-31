import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // UserComponent,
    // TasksComponent,
    // TaskComponent,
    // NewTaskComponent,
    // CardComponent
  ],
  bootstrap: [
    AppComponent
  ],

  // imports: [
  //   DatePipe,
  //   FormsModule
  // ]
})
export class AppModule {}
