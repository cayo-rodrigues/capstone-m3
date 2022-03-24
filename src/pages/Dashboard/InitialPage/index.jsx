import { Link } from 'react-router-dom'
import { DashboardContainer } from './style';

const DashboardHomePage = ()=>{

    const profile = JSON.parse(localStorage.getItem("@ProWorking:user"));
    console.log(profile)

    return (
        <DashboardContainer>
            <h1>{profile.name} </h1>

            <Link to={'/dashboard/service-register'}>Cadastrar serviço</Link>
        </DashboardContainer>
    )
}
export default DashboardHomePage