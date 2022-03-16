import Button from '../Button'
import Input from '../Input/index.jsx'



const Form = ({isLogin,isRegister,handleSubmitCallBack})=>{

    return(
        <form>
        {isLogin && (
            <div>
                <Input label='Email' placeholder='Email' />
                <Input label='Senha' placeholder='Senha' type={'password'} />
                <Button>Logar</Button>
            </div>
        )}
        {isRegister && (
            <div>
                <Input label='Nome' placeholder='Nome' />
                <Input label='Email' placeholder='Email' />
                <Input label='Senha' placeholder='Senha' type={'password'} />
                <Input label='Confirmar Senha' placeholder='Confirmar Senha' type={'password'} />

                <Button>Cadastrar</Button>
            </div>
        )}
        </form>
    )
}
export default Form