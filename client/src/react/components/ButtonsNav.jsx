import logoRecortado from "../../images/logoRecortado.jpg";
import "../styles/Buttons.css";

export const ButtonsNav = () => {
  return (
    <>
      <header>
        <a href='/home' className='logo'>
          <img src={logoRecortado} alt='logo' />
        </a>
        <ul className='navigation'>
          <li>
            <a href='/'>Landing page</a>
          </li>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/home/form'>Create breed</a>
          </li>
        </ul>

        <div className='search'>
          <input type='text' placeholder='Search' />
          <i className='iconSearch'></i>
        </div>
      </header>
    </>
  );
};
