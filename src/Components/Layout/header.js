import classes from './header.module.css'
import image1 from '../../Assets/1.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header=()=>{
   return(
    <>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={image1} alt="Lets go" />
      </div>
    </>
   )
}

export default Header;