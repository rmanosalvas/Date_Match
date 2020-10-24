import React, { Component } from 'react';
import Image1 from '../assets/images/image1.jpg';
import Image2 from '../assets/images/image2.jpg';
import Image3 from '../assets/images/image3.jpg';
import Image4 from '../assets/images/image4.jpg';
import Image5 from '../assets/images/image5.jpg';
import Slider from '../components/Slider';

// const images = [Image1, Image2, Image3, Image4, Image5];

    // Setting initial state
    const [users, setUsers] = useState([]);

    // Load all matches and store them with setMatches
    useEffect(() => {
        loadUsers()
    }, [])

    // Loads all matches and sets them to matches
    function loadUsers() {
        API.getAllUsers()
            .then(res => {
                console.log("getAllUsers");
                setUsers(res.data);
                console.log(res)
            })
            .catch(err => console.log(err));
    };

export default class Home extends Component {    


  render() {
    return (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} />
          <Slider
            options={{
              autoPlay: 4000,
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              adaptiveHeight: true,
            }}
          >
            {users.map((user, index) => (
              <div style={{ width: '80%', height: '400px', margin: '0 0.5em' }} key={user.id}>
                <img src={user.avatar} alt="" />
              </div>
            ))}
          </Slider>
        </div>
    );
  }
}