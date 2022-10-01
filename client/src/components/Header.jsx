// // import { Link } from 'react-router-dom'
import './Component.css'; 

// export default function Header(props) {
//     return (
//         <header className="Component"> Header </header>
//     );
// }

// // import { Link } from 'react-router-dom'
// import './Component.css'; 

// export default function Footer(props) {
//   return (
//     <footer className="Component"> Footer </footer>
//   );
// }

var style = {
    backgroundColor: "#F8F8F8",
    // borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    // padding: "20px",
    position: "fixed",
    // left: "0",
    zIndex: "5",
    top: "0",
    // height: "60px",
    width: "100%",
  }
  
  var phantom = {
    display: 'block',
    // padding: '20px',
    // height: '60px',
    width: '100%',
  }
  
  function Header({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
              <header className="Component">
                <h3>bwake.dev</h3>
              </header>
            </div>
        </div>
    )
  }
  
  export default Header
  