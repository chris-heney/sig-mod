import { IModule, ISkin } from '../../@types/index';
import allSkins from '../skins'



const uData = window.uData;

const AllSkins: IModule = {
	name: 'AllSkin',
	description: 'All available skins.',
    mount: {
        selector: '#js-skin-select',
        position: 'afterend',
        getElement: () => {
            const ModElement = document.createElement('div')

            ModElement.setAttribute('id', 'mod-wrap')

            let skinSelect = '<input type="text" placeholder="skin-unlock-key" id="skin-unlock-key" style="background: #3f3f3f color: #dfdfdf"><select id="allSkinSelect" style="margin:2pxcolor:#6f6f6f">'

            for (let i = 0; i < allSkins.length; i++){
                let selected = ''

                console.log(allSkins[i])
                if ( allSkins[i]._id === uData.lastSkinUsed[0] ){
                    selected = ' selected="selected"'
                }

                skinSelect += '<option value=\'' + JSON.stringify(allSkins[i]) + '\'' + selected + '>' + allSkins[i].name.replace(/\.[^/.]+$/, "") + '</option>'
            }

            skinSelect += '</select>'

            ModElement.innerHTML = skinSelect

            return ModElement
        },
    },
	load: () => {
        const skinSelect = document.getElementById('allSkinSelect')
        if (!skinSelect) return

        skinSelect.addEventListener('change', e => {
            const t = e.target as HTMLSelectElement
            const skin: ISkin = JSON.parse(t.value)
            const skinDomain = (typeof skin.domain === 'undefined') ? 'https://u0.sigmally.com/server/skin' : skin.domain

            console.log(typeof skin.domain)

            const skinImage = document.getElementById('skin-image')
            if (!skinImage) return
            skinImage.style.backgroundImage = 'url("' + skinDomain + '/' + skin.category + '/' + skin.name + '")'
        })

		return skinSelect
	}
}

export default AllSkins