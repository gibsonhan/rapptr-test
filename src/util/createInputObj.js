//Depending on what form state is selected
//create an object with respective inputs
export default function createInputObj(state) {
    const signUpInputs = ['username', 'email', 'password']
    const loginInputs = ['email', 'password']

    const arrInput = state === 'signUp' ? signUpInputs : loginInputs

    return arrInput.reduce((acc, cur) => {
        acc[cur] = document.getElementById('Input__' + cur).value
        return acc
    }, {})
}