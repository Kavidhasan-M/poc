import logo from './logo.svg';
import './App.css';
import { Button } from './components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea"



function App() {
  return (
    <div className="App">
      <Button variant="primary">hello</Button>

      <Card className="card-cont">
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent>
          <Input className="email-field" placeholder="Email" />
          <Textarea className="textarea" placeholder="Your feedback..." />
        </CardContent>
        <CardFooter>
          <Button variant="primary" className="form-btn">Send</Button>
        </CardFooter>
      </Card>

      <nav>
        <img src="./" alt="logo" />

        <div className='links-cont'>
          <Button variant="link">Product</Button>
          <Button variant="link">About</Button>
          <Button variant="link">Contact</Button>
        </div>

        <Button variant="primary">Signup</Button>
      </nav>

    </div>
  );
}

export default App;
