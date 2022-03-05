import Tasks from "./tasks";
import Icon from './components/icon';
import colors from './components/colors';

function App() {
  return (
          <section  className="App">
                <a target='blank' href="https://github.com/jomsey/task-manager" style={iconStyle}><Icon iconImage="code" iconColor={colors.tertiary}/></a>
                <div className="overlay">
                    <Tasks/>
                </div>
          </section>
  );

 
}

 const iconStyle = {
   zIndex:40,
   position:'absolute',
   margin:10,
   textDecoration:'none',
   top:'90vh'
  }

export default App;
