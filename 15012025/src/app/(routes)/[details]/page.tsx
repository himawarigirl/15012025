import Footer from '@/app/components/hoc/Footer';

export default function productDetails({params} : {params:any}) {
  return (
    <div>
      <p>{params.details}</p> 
      <Footer />
    </div>
  );
}
