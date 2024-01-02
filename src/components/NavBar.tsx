import "./NavBar.css";
const NavBar = () => {
  var x = 0;
  const SideNav = () => {
    if (x === 0) {
      document.getElementById("mysidebar")!.style.width = "250px";
      x = 1;
    } else {
      document.getElementById("mysidebar")!.style.width = "0";
      x = 0;
    }
  };
  return (
    <body className="NavBody">
      <div className="header">
        <div className="left-header">Logo</div>
        <div className="right-header">
          <input
            type="image"
            onClick={SideNav}
            src="src/assets/List1.png"
            style={{ width: "2em", height: "2em" }}
          ></input>
        </div>
      </div>
      <div id="mysidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={SideNav}>
          <img
            src="src/assets/List2.png"
            style={{ width: "1em", height: "1em" }}
          ></img>
        </a>
        <a href="/dashboard">My Dashboard</a>
        <a href="/EnergyAnalysis">Energy Analysis</a>
        <a href="/load-management">Load Management</a>
        <a href="/schedule">Schedule</a>
        <a href="/profile">Profile</a>
        <a href="/" className="exitbtn" onClick={SideNav}>
          <img
            src="src/assets/Exit.png"
            style={{ width: "1em", height: "1em" }}
          ></img>
        </a>
      </div>
    </body>
  );
};
export default NavBar;
