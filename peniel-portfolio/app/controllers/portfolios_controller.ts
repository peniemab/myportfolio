import type { HttpContext } from '@adonisjs/core/http'
// import View from '@adonisjs/view'

export default class portfolios_controller {
    async index({ view }: HttpContext) {
        return view.render('pages/home')
    }
}

