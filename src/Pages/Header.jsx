import logo from '../assets/logo.png';

export function Header(props){
  return (
    <>
      <header id="header">
        <img className="m-4" src={logo}
              alt="Investment App Logo"/>
        <h1 className="text-5xl font-bold text-white mb-4">{props.PageTitle}</h1> 
        <p className="text-lg text-gray-300">{props.Subtitle}</p>     
      </header>
    </>
  )
}


