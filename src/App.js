import logo from './logo.svg';
import './App.css';

function App() {
  return (
<body>
  
  <div class="main-container">
    <div class="header">
      <img src="logo.png" alt="Logo del sitio" class="logo" />
      <h1>El Beso del Búho</h1>
    </div>

    <div class="movie-container">
      <label> Elige una película</label>
      <select id="movie">
        <option value="70">Grand Hotel Budapest ($70)</option>
        <option value="60">Rostros y lugares ($60)</option>
        <option value="70">Todo en todas partes al mismo tiempo ($70)</option>
        <option value="60">Thelma y Louise ($60)</option>
      </select>
    </div>

    <ul class="showcase">
      <li>
        <div class="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div class="seat selected"></div>
        <small>Seleccionado</small>
      </li>
      <li>
        <div class="seat occupied"></div>
        <small>Ocupado</small>
      </li>
    </ul>

    <div class="container">
      <div class="screen"></div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
      </div>
    </div>
    </div>

    <p class="text">
      Has seleccionado <span id="count">0</span> asientos por un total de $<span id="total">0</span>
    </p>
    <button id="reserveButton" disabled>Reservar</button>

    <div class="video-link">
      <p>Ver el <a href="https://www.youtube.com/watch?v=1Fg5iWmQjwk" target="_blank">tráiler</a></p>
    </div>

    <div class="footer">
      <p>Nombre del curso: Conceptualización de servicios en la nube</p>
      <p>Nombre: Yeshua Vazquez Chavez</p>
      <p>Código: 2223853</p>
      <p>Correo: Yeshua.Vazquez.Chavez@gmail.com</p>
    </div>

</body>
  );
}

export default App;
