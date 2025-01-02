import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1680981142116-1166871fe581?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8";

  const COLD_URL = "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbnRlcnxlbnwwfHwwfHx8Mg%3D%3D";
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8Mg%3D%3D"
  const RAIN_URL = "https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnl8ZW58MHx8MHx8fDI%3D";

  return (
    <div className="InfoBox">
      <div className="cardConatiner">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          sx = {{height: 140}}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 20
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;
              {info.humidity > 80 ? (
                <BeachAccessIcon/>
              ) : info.temp > 20 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
              &nbsp;
              {info.temp}&deg;C
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>
                Feels Like: <b>{info.feelsLike}&deg;C</b> with{" "}
                <i>
                  <b>{info.weather}</b>
                </i>
              </p>
              <p>
                Time: <b>{new Date().toString().slice(0, 21)}</b>
              </p>
              <p>
                Humidity: <b>{info.humidity}</b>
              </p>
              <p>
                Min Temperature: <b>{info.tempMin}&deg;C</b>
              </p>
              <p>
                Max Temperature: <b>{info.tempMax}&deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}