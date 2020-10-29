//Given the state of form.
//Select proper service to send dat
import { login, signUp } from './service'
export default function handleMainFormSubmit(state) {
    return state === 'signUp' ? signUp : login
}