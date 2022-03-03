import './header.css';
import img from '../../assests/img.png';
import image from '../../assests/image.png';
function Header() {
    return (
        <div className="topnav">
            <div style={{display: "inline"}}>
                <img src={image} style={{margin: "20px", marginLeft: "113px", height: "41px", width: "124px"}} />   
            </div>
            <div style={{display: "inline",  color: "white", marginLeft: "880px", width: "35px"}}>
                <img src={img} height="40px" width="30px" />   
            </div>   
            <div style={{float: "right", padding: "14px"}}>
                <div style={{fontFamily: "monospace", color:"white", marginRight: "20px", display: "-webkit-inline-box"}}>
                    Help | Support
                </div>
                <button type="button" class="btn btn-primary shadow mb-1 bg-d rounded" style={{marginRight: "70px", boxShadow: "9px 9px 7px grey", marginTop: "5px"}}>Primary</button>
            </div>
        </div>
    );
}

export default Header;