import { IModule } from '../../@types/index';
import ModSettingsControllerFactory from '../lib/ModSettingsControllerFactory';



const ModSettingsController = ModSettingsControllerFactory()
const ModSettingsData = ModSettingsController.getConfig()


const KEY_FEED = {
	key: 'w',
	keyCode: 32,
	which: 32
}

const KEY_SPLIT = { 
	keyCode: 32, 
	code: 'Space',
	cancelable: true,
	composed: true,
	isTrusted: true,
	which: 32
}

const Macros: IModule = {
	name: 'Macros',
	description: 'Keyboard shortcuts for the rich and famous.',
	load: () => {

		// TODO: Add these to settings/configuration pane
		let modTimeouts: number[] = []
		const amount = 10

		window.addEventListener('keyup', e => {
			if (e.key == ModSettingsData.keyBindingsRapidFeed){
				for (var i = 0; i < modTimeouts.length; i++){
					clearTimeout(modTimeouts[i])
				}
			}
		})

		/*
		 * Keyboard Overrides
		 */
		window.addEventListener('keydown', e => {

			if (e.key == ModSettingsData.keyBindingsRapidFeed){

				// kickstart first one
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ))

				for (var i = 0; i < amount; ++i) {
					modTimeouts.push(setTimeout(function() {
						window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ))
						window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ))
					}, i ))
				}

				return
			}

			if (e.key == ModSettingsData.keyBindingsDoubleSplit){
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				return
			}

			if (e.key == ModSettingsData.keyBindingsTripleSplit){
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				return
			}

			if (e.key == ModSettingsData.keyBindingsQuadSplit){
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				return
			}

		})
	}
}

export default Macros