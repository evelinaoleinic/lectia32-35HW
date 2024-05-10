import Typography from "../typography"
import './style.css'


const Footer = () => {

    return (
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section" >
          <Typography className='h2'tag='h2' title='Despre noi'/>
          <p className="p">Magazinul nostru online oferă cele mai proaspete și delicioase produse alimentare, direct la ușa ta. Descoperă calitatea și gustul autentic al produselor noastre!</p>
        </div>
        <div className="links">
            <Typography className='h2' tag='h2' title='Linkuri utile' />
            <ul>
             <li className='li'><a href="#">Termeni și condiții</a></li>
             <li className='li'><a href="#">Politica de confidențialitate</a></li>
             <li className='li'><a href="#">Galerie Foto</a></li>
             </ul>
                </div>
                </div>
        </footer>
   
    )
}
export default Footer