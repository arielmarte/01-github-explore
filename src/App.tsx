import { Counter } from './components/Counter';
import { RespositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App(){
    return (
        <> 
            <RespositoryList/>
            <Counter/>
        </>
    );

}