import React from 'react';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="navfont">
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="/" >{props.title}</a>
          <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} id="modeText" htmlFor="flexSwitchCheckDefault">{props.text}</label>
</div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active mx-2" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/">Features</a>
              </li>

            </ul>
            

          </div>

        </div>

      </nav>

    </>
  );
}
