import { 
    IModSettingsController,
    IModSettingsControllerFactory
} from '../../@types/index';




/*
 * @TODO:
 * - Add SelectedModules
 * - Add settings for each module
 * - Create IModuleSettings interface
 *   - label: string
 *   - tooltip: string
 *   - fields: IModuleSettingsField[]
 * - Create IModuleSettingsField interface
 *   - type: 'text' | 'number' | 'checkbox' | 'select'
 *   - name: string
 *   - label: string
 *   - tooltip: string
 *   - options?: IModuleSettingsFieldOption[]
 * - Loop through each module and create settings for each module
 * - Add enabled | disabled to each module
 */

const ModSettingsControllerFactory: IModSettingsControllerFactory = function(){

    const init = () => {

        window.addEventListener('keydown', e => {

			if (e.key == 'Escape'){
                const ModSettingsForm = document.getElementById('mod-settings')
                if ( ModSettingsForm){ 
                    ModSettingsForm.classList.add('hidden')
                }
			}
        });


        let LSconfig = localStorage.getItem('ModSettingsConfig') ?? false
        let config = LSconfig ? JSON.parse(LSconfig) : false

        if (!config){
            config = {
                keyBindingsRapidFeed: 'q',
                keyBindingsdoubleSplit: 'd',
                keyBindingsTripleSplit: 'f',
                keyBindingsQuadSplit: 'g',
                skinUnlockKey: 'p4ssw0rd',
                customSkin: 'default'
            }
        } 
        
        return config
    }

    const config = init()

    return {
        config,
        getConfig: function() {
            return this.config
        },
        setConfig: function(config: Record<string,any>) {
            this.config = config
        },
        saveConfig: function() {
            localStorage.setItem('ModSettingsConfig', JSON.stringify(this.config))
        },
        getSettingsForm: function(){
            const ModSettingsForm = document.createElement('form')

            ModSettingsForm.setAttribute('id', 'mod-settings')
            ModSettingsForm.classList.add('hidden')

            ModSettingsForm.onsubmit = (e) => {
                ModSettingsForm.classList.toggle('hidden')
                e.preventDefault()

                let options = new FormData(ModSettingsForm)

                let ModSettingsConfig: Record<string,any> = {}
                for (var key of options.keys()) {
                    ModSettingsConfig[key] = options.get(key)
                }

                this.setConfig(ModSettingsConfig)
                this.saveConfig()

                return false
            }

            ModSettingsForm.append(
                '<h4>R҉i҉n҉g҉Z҉e҉r҉O҉\'s Mod Settings</h4>' +
                '<hr/>' +
                '<h5>Key Mappings</h5>' +
                '<label class="flex">' +
                    '<input type="text" name="keyBindingsRapidFeed" class="keybinding" value="' + this.config.keyBindingsRapidFeed + '" maxlength="1" onfocus="this.select()">' +
                    '<span class="text">Rapid Feed</span>' +
                '</label>' +
                '<label class="flex">' +
                    '<input type="text" name="keyBindingsDoubleSplit" class="keybinding" value="' + this.config.keyBindingsDoubleSplit + '" maxlength="1" onfocus="this.select()">' +
                    '<span class="text">Double Split</span>' +
                '</label>' +
                '<label class="flex">' +
                    '<input type="text" name="keyBindingsTripleSplit" class="keybinding" value="' + this.config.keyBindingsTripleSplit + '" maxlength="1" onfocus="this.select()">' +
                    '<span class="text">Triple Split</span>' +
                '</label>' +
                '<label class="flex">' +
                    '<input type="text" name="keyBindingsQuadSplit" class="keybinding" value="' + this.config.keyBindingsQuadSplit + '" maxlength="1" onfocus="this.select()">' +
                    '<span class="text">Quad Split</span>' +
                '</label>' +
                '<hr/>' +
                '<h5>Custom Skin</h5>' +
                '<label class="flex">' +
                    '<input type="radio" name="customSkin" value="default"' + (this.config.customSkin === 'default' ? ' checked="checked"' : '') + '>' +
                    '<span class="text">Default</span>' +
                '</label>' +
                '<label class="flex">' +
                    '<input type="radio" name="customSkin" value="Zero_Two"' + (this.config.customSkin === 'Zero_Two' ? ' checked="checked"' : '') + '>' +
                    '<span class="text">Zero_Two</span>' +
                '</label>' +
                '<input type="submit" value="Save &amp Close"/>'
            )

            return ModSettingsForm
        },
        getSettingsButton: function(){
            const ModSettingsButton = document.createElement('button')

            ModSettingsButton.setAttribute('id', 'mod-settings-button')
            ModSettingsButton.classList.add('hidden')
            ModSettingsButton.innerText = 'Mod Settings'

            ModSettingsButton.onclick = () => {
                const ModSettingsForm = document.getElementById('mod-settings')
                if (ModSettingsForm === null) { return }
                ModSettingsForm.classList.toggle('hidden')
            }

            return ModSettingsButton
        }
    }
}

export default ModSettingsControllerFactory