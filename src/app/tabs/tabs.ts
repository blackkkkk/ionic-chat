import { Component } from '@angular/core';
import {ChatListPage} from "../chat/chat-list/chat-list";
import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'ChatListPage';
  tab2Root = 'ChatListPage';
  tab3Root = 'UserPage';

  constructor() {

  }
}
