import '../assets/css/Banner.scss'
function Banner() {
    return (
      <div className="banner">
        <div className="banner_image">
            <img className='image-overlay' src={require("../assets/images/fappy.png")} alt="fappy"/>
        </div>
        <div className="banner_text">
            <h2 className='text-title'>Concours des associations 2023</h2>
            <p className='text-content'>du 1er au 30 septembre</p>
            <p className='text-content'>FAP EFREI participe à un concours pour la meilleure association de France alors n'hésite pas à faire plaisir à Fappy en votant pour nous.</p>
            <p className='text-content'>Merci pour ton soutien !</p>
        </div>
        <div className="banner_button">
            <a href="https://vote.le-classement.fr/concours/2023/participations/153">Voter maintenant</a>
        </div>
      </div>
    );
  }
  
  export default Banner;