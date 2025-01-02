import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonresponse = await response.json();
      let result = {
        city: jsonresponse.name,
        temp: jsonresponse.main.temp,
        feelsLike: jsonresponse.main.feels_like,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        weather: jsonresponse.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          id="city"
          size="small"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button type="submit" variant="contained" size="medium">
          Search
        </Button>
        {error && (
          <Alert severity="error" style={{ marginTop: "25px" }}>
            No such place found.
          </Alert>
        )}
      </form>
    </div>
  );
}