import { IModule } from '../../@types/index';

const LongNicknames: IModule = {
	name: 'Long Nicknames',
	description: 'Allows for longer nicknames.',
	load: () => {
		const nickName = document.getElementById('nick')
        if (nickName) {
            nickName.setAttribute('maxlength', '90')
        }
	}
}

export default LongNicknames