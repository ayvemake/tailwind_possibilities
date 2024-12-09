import { Controller } from "@hotwired/stimulus"

// from terminal: bin/importmap pin stimulus-use
import { useClickOutside } from 'stimulus-use'
// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["content"]
  connect() {
    useClickOutside(this) // from stimulus-use
    //this.close() consider hidden in html when refreshing
  }

  clickOutside(event){
    this.close()   
  }
  

  // press escape to close the navbar
  closeWithKeyboard(event) {
    if(event.key === "Escape"){
      this.close()
    }
  }

  closeOnBigScreen(event) {
    if(window.innerWidth >760){
      this.close()
      console.log('closeOnBigScreen')
    }
  }

  toggle() {
    if(this.contentTarget.classList.contains('hidden')){
      this.open()
    } else {
      this.close()
    }

  }

  open() {
    this.contentTarget.classList.remove('hidden')
    let main = document.querySelector('main')
    main.classList.add('blur')
    document.body.classList.add('overflow-hidden')

    // for all the background hidden and not blurred
    // main.classList.add('hidden')
  }
  close() {
    this.contentTarget.classList.add('hidden')
    let main = document.querySelector('main')
    main.classList.remove('blur')
    document.body.classList.remove('overflow-hidden')

    // for all the background hidden and not blurred
    // main.classList.remove('hidden')
  }
}
