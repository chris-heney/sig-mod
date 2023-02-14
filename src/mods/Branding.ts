import { IModule } from '../../@types/index';



const Branding: IModule = {
	name: 'Branding',
	description: 'Adds R҉i҉n҉g҉Z҉e҉r҉O҉ Brand.',
	load: () => {
		const gameTitle = document.getElementById('title')
        if (gameTitle === null) return
		gameTitle.innerHTML = 'R҉i҉n҉g҉Z҉e҉r҉O҉\'s<br/>Sig Mod<span style="display:block;font-size: 14px;font-style:italic;">To Unrealm whom we all pay tribute!</span>'
	}
}

export default Branding