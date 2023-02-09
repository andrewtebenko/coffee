import NavBar from '../navbar/navbar';

const Header = ({background, title}) => {

    const backgroundStyles = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
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
                    <h1 className="text-center mx-auto col-8 title-header">{title}</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;