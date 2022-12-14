import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomListComponent} from "./room-list/room-list.component";

const routes: Routes = [
  {path: 'rooms', component: RoomListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
