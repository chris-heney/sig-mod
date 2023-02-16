import Mods from './mods'
import AuthCheck from './lib/AuthCheck'
import ModSettingsControllerFactory from './lib/ModSettingsControllerFactory'



const init = async () => {

	if (await AuthCheck() === false){ return }

	const ModEngine = document.createElement('div')

	ModEngine.setAttribute('id', 'mod-wrap')

	const ModStyle = document.createElement('link')

	ModStyle.type = 'text/css'
	ModStyle.rel = 'stylesheet'
	ModStyle.href = 'https://chrisheney.com/sigmally-mod.css?seed='+Math.random()

	// Mod ModSettingsControllerFactory Settings
	const ModSettingsController = ModSettingsControllerFactory()
	
	document.head.prepend(ModStyle)
	document.body.prepend(ModSettingsController.getSettingsForm())
	
	const chatBlock = document.getElementById('#chat-block')

	if (chatBlock !== null){
		chatBlock.appendChild(ModSettingsController.getSettingsButton())
		// chatBlock.insertAdjacentHTML('beforeend', ModSettingsController.getSettingsButton())
	}

	document.body.prepend(ModSettingsController.getSettingsForm())

	// Load Modules
	Mods.forEach( ( mod, i) => {

		console.log(`Loading Module #${i}: ${mod.name}`)
		console.log('Mod Description: : ' + mod.description)

		if (mod.mount !== undefined ){

			const mountPoint = document.querySelector(mod.mount.selector)

			if (mountPoint !== null){

				const el = mod.mount.getElement()
				el.setAttribute('class', el.getAttribute('class') + ' sig-mod-module module-enabled')

				mountPoint.insertAdjacentHTML(
					mod.mount.position,
					el.outerHTML
				)
			}
		}

		mod.load()
	})

}

init()

// Credits (c) 2021 RingZer0 (Don't Remove)
console.log('%c                                                   \r\n\u2588\u2584\u2584\u2584\u2584 \u2584\u2588    \u2584     \u2584\u2580  \u2584\u2584\u2584\u2584\u2584\u2584   \u2584\u2588\u2588\u2588\u2584   \u2588\u2584\u2584\u2584\u2584 \u2588\u2588\u2588\u2588\u2584 \r\n\u2588  \u2584\u2580 \u2588\u2588     \u2588  \u2584\u2580   \u2580   \u2584\u2584\u2580   \u2588\u2580   \u2580  \u2588  \u2584\u2580 \u2588   \u2588 \r\n\u2588\u2580\u2580\u258C  \u2588\u2588 \u2588\u2588   \u2588 \u2588 \u2580\u2584  \u2584\u2580\u2580   \u2584\u2580 \u2588\u2588\u2584\u2584    \u2588\u2580\u2580\u258C  \u2588   \u2588 \r\n\u2588  \u2588  \u2590\u2588 \u2588 \u2588  \u2588 \u2588   \u2588 \u2580\u2580\u2580\u2580\u2580\u2580   \u2588\u2584   \u2584\u2580 \u2588  \u2588  \u2580\u2588\u2588\u2588\u2588 \r\n  \u2588    \u2590 \u2588  \u2588 \u2588  \u2588\u2588\u2588           \u2580\u2588\u2588\u2588\u2580     \u2588         \r\n \u2580       \u2588   \u2588\u2588                         \u2580          \r\n                                             ᵀ丂   \r\n                                                   ', 'background-color: black; color: green')