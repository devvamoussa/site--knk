import { Provider } from 'react-redux';
import { stores } from './Redux/stores/Stores'
import App from './App';




export const AppWrapper = () => {


  return (
    <>
    <div>
         <Provider store={stores}> 
            <App /> 
        </Provider>
    </div>
       
    </>
    
  )
}
