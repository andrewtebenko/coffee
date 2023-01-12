import NavBar from '../navbar/navbar';

const Header = ({background, title}) => {

    const backgroundStyles = {
        backgroundImage: `url(${background})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    }
    
    return (
        <header className="header" style={backgroundStyles}>
            <div className="container">
                <div className="header-wrapper" style={{padding: '30px 0px 100px 0px'}}>
                    <NavBar margin={{marginBottom: "60px"}} 
                            transform={{transform: "translateY(0px)"}} 
                            img={"./img/component-images/logo-white.png"} 
                            color={{color: "#ffffff"}} 
                    />
                    <h1 className="offset-2 col-8 offset-2 title-header">{title}</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;