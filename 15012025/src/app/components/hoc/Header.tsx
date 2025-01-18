import classes from '../../styles/components/hoc/Header.module.scss';

const Header = () => {
  return (
    <div className={classes['header']}>
      <div>
        <img src="/Logo_Dark.svg" alt="" />
      </div>
      <div className={classes['search']}>
        <img src="/Search.svg" alt="" />
        <input type="text" className={classes['search-input']} placeholder='Search' />
      </div>
      <div className={classes['header-icons']}>
        <a href="">
          <img src="/Favorites.svg" alt="" />
        </a>
        <a href="/cart">
          <img src="/Cart.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
