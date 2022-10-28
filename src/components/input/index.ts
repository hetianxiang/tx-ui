import HInput from './src/input'
import { App } from 'vue'
HInput.install = (app: App) => {
    app.component(HInput.name, HInput)
}
export {
    HInput
}
export default {
    title: 'Tree 树',
    category: '数据展示',
    status: '20%',
    install(app: App): void {
        app.use(HInput as any)
    }
}