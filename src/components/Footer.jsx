import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer  style={{backgroundColor: 'black', padding: '10px', textAlign: 'center' }}>
        <div>
            <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: ''}}>
                <p style={{color:'white',marginBottom: '10px'}}>© 2023 My Website. All rights reserved.</p>
            <p style={{marginBottom: '10px', color: 'white'}}>Contact us: <a href="mailto:info@safiri@gmail.com">info@safiri@gmail.com</a></p>      
            <p style={{marginBottom: '10px', color:'white'}}>Follow us:</p>
            <ul style={{listStyleType: 'none', padding: 0, margin: 0, display: 'inline-block', marginRight: '10px'}}>
                <li>
                <a href="" style={{textDecoration: 'none', color: 'whitesmoke'}}>Facebook</a>
                </li>
                <li>
                <a href="" style={{textDecoration: 'none', color: 'whitesmoke'}}>Twitter</a>
                </li>
            </ul>
            </div>
        </div>
    </footer>
  )
}
export default Footer;