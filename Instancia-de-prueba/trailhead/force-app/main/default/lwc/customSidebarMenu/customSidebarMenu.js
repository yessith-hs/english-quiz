import { LightningElement, api } from 'lwc';

export default class CustomSidebarMenu extends LightningElement {
  closeMenu () {
    this.template.querySelector('.navmenu_background').classList.remove('show')
  }
}

export function activeSidebarMenu () {
  console.log( this.template.querySelector('#nav'))
  console.log( this.template.querySelector('nav'))
  console.log( this.template)
  console.log( 'hola')
}