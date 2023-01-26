import logoRecortado from "../../images/logoRecortado.jpg";

export const Buttons = () => {
  return (
    <>
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
    </>
  );
};
