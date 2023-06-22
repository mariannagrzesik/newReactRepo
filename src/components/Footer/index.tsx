import './Footer.scss'
type FooterProps = {
    list: string[];
  }

export const Footer = ({list}: FooterProps)=>{
    return(
        <footer>
            <ul className="footer-list">
            {list.map((item, index)=><li key={index}>{item}</li>)}
          </ul>
        
        </footer>
    )
}