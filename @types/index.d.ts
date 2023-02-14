/*
 * @Author: Chris Heney
 * @Date: 2020-02-05 15:00:00
 * @Last Modified by: Chris Heney
 * @Last Modified time: 2020-02-05 15:00:00
 * @Description: This file is the entry point for the Sigmally library.
 * It contains the main Sigmally class and the ISigmallyModule interface.
 * The Sigmally class is the main class for the library and is used to
 * create a new instance of the library. The ISigmallyModule interface
 * is used to define the structure of a module.
 * @see
 */

declare global {
    interface Window {
        uData: Record<any,any>
    }
}

export interface IModEngine {
    call: Function
}

export interface IModSettingsController {
    config: Record<string,any>
    getConfig: () => Record<any,any>
    setConfig: (config: Record<any,any>) => void
    saveConfig: () => void
    getSettingsForm: () => HTMLFormElement
    getSettingsButton: () => HTMLButtonElement
}

export interface IModSettingsControllerFactory {
    (): IModSettingsController
}

export interface ISkin {
	level: number | null
	cost: number | null
	_id: string
	domain?: string
	name: string
	category: string
	visible: boolean
	createTime: Date | string
	updateTime: Date | string
	__v: number
}

export interface IModule {
	name: string
	description: string
    mount?: {
        selector: string
        position: 'beforebegin' 
        | 'afterbegin'
        | 'beforeend'
        | 'afterend'
        getElement: () => HTMLElement
    }
	load: () => void
    // @TODO: Add: moduleSettings?: IModuleSettings
}

export interface IModuleSettings {
}