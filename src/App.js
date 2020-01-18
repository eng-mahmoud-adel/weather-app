import React, {Component} from 'react';
import Form from './components/form';
import Weather from './components/weather';

class App extends Component {

  state= {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    desciption: "",
    error: ""
  }

  submitting = async (e) => {
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const API_KEY= "e36ed364400282e43250b6c4c0274d44";
    const dataInApi= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const jsonData = await dataInApi.json();
    if (city && country){
      this.setState({
        tempreature: jsonData.main.temp,
        city: jsonData.sys.name,
        country: jsonData.sys.country,
        humidity: jsonData.main.humidity,
        desciption: jsonData.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        desciption: "",
        error: "Please Enter Data"
      })
    }
  }

  render () {
    return (
      <div className="App">
        <Form submitting= {this.submitting}/>
        <Weather
          tempreature= {this.state.tempreature}
          city= {this.state.city}
          country= {this.state.country}
          humidity= {this.state.humidity}
          desciption= {this.state.desciption}
          error= {this.state.error}
        />
      </div>
    );
  }
}

export default App;
