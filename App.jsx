// Function Component
function TitleComponent() {
    return (
        <div className="title">
           <h1>
               SERVICES
           </h1>
           <div className="titleText">
                Our vision is simple.
                We want to create websites and application 
                with both high quality design and east-to-access content.
                The finished product will be totly unique and representive.
           </div>
        </div>
    )
}


/* ServicesComponent delivers the props(properties) values to the inner CardComponent 
    ***https://reactjs.org/docs/components-and-props.html***
*/
function ServicesComponent(){
    return(
        <div>
            <TitleComponent/>
            <div className="row justify-content-md-center services">
                <div className="col-md-auto">
                    <CardComponent 
                        image="images/image1.GIF" 
                        imageAlt="UI design"
                        title="User Interface Design"  
                        text="Prototyping" />
                </div>
                <div className="col-md-auto">
                <CardComponent 
                        image="images/image2.GIF" 
                        imageAlt="Ideas"
                        title="Concept and Ideas"  
                        text="Digital branding" />
                </div>
                <div className="col-md-auto">
                <CardComponent 
                        image="images/image3.GIF" 
                        imageAlt="Design"
                        title="Design and branding"  
                        text="Graphic Design" />
                </div>
            </div>
        </div>
    )
}

 
function CardComponent(props){
    function addBorder(e){
        e.target.className += " addBorder";
    }

    function removeBorder(e){
        e.target.className ="card-text";
    }

    return(
        <div className="card">
            <img src={props.image} className="card-img-top imgCard" alt={props.imageAlt} />
            <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-text" onMouseOver={addBorder} onMouseOut={removeBorder} >{props.text}</p>
            </div>
        </div>
    )
}


function HoursComponent(){
    return(
        <div>
            <div className="title">
                <h1>HOURS</h1>
                <div className="titleText">
                    From 09:00 to 17:00
                    <br/>
                    Between Sunday to Thursday
                </div>    
            </div>
        </div>
    )
}


function WorkComponent(){
    return(
        <div>
           <div className="title">
                <h1>WORK</h1>
                <div className="titleText">
                    This is only a small demo for the use of singe page application and
                    how it should act.
                    Since it's only a practical demo there is not much of a text here.
                    This page was built using React functional component using conditional rendering
                    to change the section when the user clicks the menu navigation.
                </div>    
            </div>
        </div>
    )
}




function MainComponent({section}) {
   // console.log(" MainComponent =" + section); 

    if (section == 'services'){

        return (
            <section className="services container boxContainer">
                <ServicesComponent/>
            </section>
        )
    }

    else if ( section == 'hours'){
        return (
            <section className="hours container boxContainer">
                <HoursComponent/>
            </section>
        )

    }

    else {
        return (
            <section className="work container boxContainer">
                <WorkComponent/>
            </section>
        )


    }
}





function App(){
    const [section, setSection] = React.useState("services"); 

    function changeLogo(e){
        e.target.src = "images/logo-pic.png";
    }

    function origLogo(e){
        e.target.src = "images/logo-pic.GIF";
    }


    console.log(section); 

    return(
        <div>
            <div className="container">
                <nav className="container navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" id="logoMobile"> 
                            <img src="images/logo-pic.GIF" alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#navbarTogglerDemo02" 
                                aria-controls="navbarTogglerDemo02" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={section == 'services' ?  'nav-link changeToBold' : 'nav-link' }    id="Services" aria-current="page" 
                                    href="#" onClick={(e) =>  {
                                        //changeNavB(e);
                                        setSection('services');
                                    }}>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className={section == 'work' ?  'nav-link changeToBold' : 'nav-link' }  id="Work" 
                                    href="#" onClick={(e) =>  {
                                        //changeNavB(e);
                                        setSection('work');
                                    }}>Work</a>
                            </li>
                            <li className="nav-item">
                                <a className={section == 'hours' ?  'nav-link changeToBold' : 'nav-link' } id="Hours" 
                                    href="#" onClick={(e) =>  {
                                    // changeNavB(e);
                                        setSection('hours');
                                    }}>Hours</a>
                            </li>
                            </ul>
                            <div className="d-flex">
                                <a className="navbar-brand" id="logoDesktop" href="#">  
                                <img src="images/logo-pic.GIF" alt="logo" 
                                        onMouseOver={changeLogo} 
                                        onMouseOut={origLogo} />
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            
            
            
            <div>
                <MainComponent section={section} />
            </div>
        </div>
    );
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);