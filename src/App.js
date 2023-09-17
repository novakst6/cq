import './App.css';
import Ship from "./component/Ship";

function App() {
  return (
    <div className="App">
        <div className="layout-m">
            <div className="layout-1">
                <div className="l-row">
                    <div className="l-frame"><Ship/></div>
                    <div className="l-frame"><Ship/></div>
                </div>
                <div className="l-row">
                    <div className="l-frame"><Ship/></div>
                </div>
                <div className="l-row">
                    <div className="l-frame"><Ship/></div>
                    <div className="l-frame"><Ship/></div>
                    <div className="l-frame"><Ship/></div>
                    <div className="l-frame"><Ship/></div>
                </div>
            </div>
            <div className="layout-2">
                <div className="l-frame"><Ship/></div>
            </div>
        </div>

    </div>
  );
}

export default App;
