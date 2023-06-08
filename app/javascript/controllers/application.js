import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

// importando con importmap component de alerta para el flash  alert || notice
import { Alert } from "tailwindcss-stimulus-components"
application.register('alert', Alert )

export { application }
