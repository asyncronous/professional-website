// // import { Link } from 'react-router-dom'
import './Component.css'; 

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
  bottom: "0",
  // height: "60px",
  width: "100%",
}

var phantom = {
  display: 'block',
  // padding: '20px',
  // height: '60px',
  width: '100%',
}

function Footer({ children }) {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
            <footer className="ComponentFooter">
              <h4>Benjamin Wakefield; ©</h4>
            </footer></div>
      </div>
  )
}

export default Footer
