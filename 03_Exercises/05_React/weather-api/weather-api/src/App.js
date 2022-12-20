import logo from './logo.svg';
import './App.css';
import mostcloud from './weather-icons/mostlycloudy.svg';
import sunclear from './weather-icons/clear.svg';
function App() {
  return (
    <div className="App">

<form className='form1'>
        <input type="text" placeholder="Type in a city name" className="text-city"/>
        <input type="submit" value="FIND WEATHER" className="button"/>
     </form>
     
    
<div className="cloud">
     <img src={mostcloud} alt='mostly-clouded' className='svg'/>

          <h3>overcast clouds</h3>
          <h2>
            Temperature <span> 10 &deg; to 11 &deg; C</span>
          </h2>
          <p>
          <strong>  Humidity </strong><span> 78% </span>{" "}
           <strong> Pressure</strong>
            <span> 1008.48</span>
          </p>
  </div>

  <div className="small">
          <div class="time">
            <div>
              <div>03:00</div>
              <div>
              <img src={mostcloud} alt='mostly-clouded' className='svg1'/>
              </div>

              <div>8&deg;C</div>
            </div>
           

            <div>
              <div>06:00</div>
              <div>
              <img src={mostcloud} alt='mostly-clouded' className='svg1'/>
              </div>

              <div>9&deg;C</div>
            </div>

            <div>
              <div>09:00</div>
              <div>
              <img src={sunclear} alt='clear' className='svg1'/>
              </div>

              <div>14 &deg; C</div>
            </div>

            <div>
              <div>12:00</div>
              <div>
              <img src={sunclear} alt='clear' className='svg1'/>
              </div>

              <div>17 &deg; C</div>
            </div>

            <div>
              <div>15:00</div>
              <div>
              <img src={sunclear} alt='clear' className='svg1'/>
              </div>

              <div>18 &deg; C</div>
            </div>
            <div>
              <div>18:00</div>

              <div>
              <img src={sunclear} alt='clear' className='svg1'/>
              </div>

              <div>16 &deg; C</div>
            </div>
            <div>
              <div>21:00</div>
              <div>
              <img src={mostcloud} alt='mostly-clouded' className='svg1'/>
              </div>

              <div>13 &deg; C</div>
            </div>

            </div>
            </div>
     
    </div>
  ); 
}

export default App;