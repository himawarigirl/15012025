import classes from '../../styles/components/hoc/Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes['footer']}>
      <div className={classes['footer__wrapper']}>
        <div className={classes['footer__info']}>
          <img src="/Logo_Light.svg" alt="logo" />
          <p className={classes['footer__text_italic']}>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </div>
        <div className={classes['footer__list']}>
          <p className={classes['footer__subtitle']}>Services</p>
          <a href="" className={classes['footer__text']}>Bonus program</a>
          <a href="" className={classes['footer__text']}>Gift cards</a>
          <a href="" className={classes['footer__text']}>Credit and payment</a>
          <a href="" className={classes['footer__text']}>Service contracts</a>
          <a href="" className={classes['footer__text']}>Non-cash account</a>
          <a href="" className={classes['footer__text']}>Payment</a>
        </div>
        <div className={classes['footer__list']}>
          <p className={classes['footer__subtitle']}>Assistance to the buyer</p>
          <a href="" className={classes['footer__text']}>Find an order</a>
          <a href="" className={classes['footer__text']}>Terms of delivery</a>
          <a href="" className={classes['footer__text']}>Exchange and return of goods</a>
          <a href="" className={classes['footer__text']}>Guarantee</a>
          <a href="" className={classes['footer__text']}>Frequently asked questions</a>
          <a href="" className={classes['footer__text']}>Terms of use of the site</a>
        </div>
      </div>
      <div className={classes['footer__icons']}>
        <img src="/Twitter.svg" alt="twitter" />
        <img src="/Facebook.svg" alt="facebook" />
        <img src="/Tiktok.svg" alt="tiktok" />
        <img src="/Instagram.svg" alt="instagram" />
      </div>
    </div>
  );
};

export default Footer;
