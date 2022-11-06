import { LightningElement } from 'lwc';
import {activeSidebarMenu} from 'c/customSidebarMenu'

export default class CustomLogo extends LightningElement {
  // active = activeSidebarMenu.bind(this)
  activeMenu () {
    // this.active()
    activeSidebarMenu.call(this)
  }
}