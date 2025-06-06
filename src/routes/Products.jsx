import galería1 from '../assets/gallito_rojo.jpg';
import galería2 from '../assets/hojadejabillo145.jpg';
import galería3 from '../assets/masconpared1-1.jpg';
import galería4 from '../assets/naciendo-brote.jpg';
import galería5 from '../assets/pano123.jpg';
import galería6 from '../assets/anuncio.jpg';
const Products = () => {
    return (
        <div className="min-h-screen bg-slate-50 w-full flex flex-col items-center justify-center gap-5">
            <h1 className="text-6xl font-bold text-black text-center mt-30">Products</h1>
            <div className="grid grid-cols-3 gap-3 px-7">
                <img src={galería1} alt="f1" />
                <img src={galería2} alt="f2" />
                <img src={galería3} alt="f3" />
                <img src={galería4} alt="f4" />
                <img src={galería5} alt="f5" />
                <img src={galería6} alt="f6" />
            </div>

            <p className='max-w-4xl text-slate-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur repellat eos, atque nisi facere. Voluptatem ab dolore omnis harum eligendi iure nulla consequatur modi laboriosam vitae repellendus, laborum corporis quod dolorum, molestias illum officia ullam eaque necessitatibus incidunt praesentium expedita totam qui. Ad perferendis accusamus ullam provident officia illum? Veniam animi dolorem consequatur deleniti quis ut voluptatem harum eligendi possimus accusamus laudantium quia autem assumenda explicabo, reiciendis velit nesciunt accusantium nobis illum. Commodi, rerum! Minus, dolore?</p>
        </div>
    )
}

export default Products