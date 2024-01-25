import { ProductType } from "../types/product";

interface CardProps {
  product: ProductType;
}

const Card = (product: CardProps) => {
  function calculateSalePrice(price: number, sale: number): number {
    return Math.floor(price - (sale / 100) * price);
  }
  return (
    <div className="group my-10 max-w-xl flex w-full flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
      <a className="relative flex h-60 overflow-hidden max-w-xl" href="#">
        <img
          className="absolute top-0 right-0 h-full w-full object-cover"
          src={product.product.image}
          alt="product image"
        />
        <div className="absolute bottom-0 mb-4 flex w-full justify-center items-center space-x-4">
          <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
          <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
          <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
        </div>
        <div className="absolute -right-32 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
          <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </a>
      <div className="mt-4 px-5 text-left pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900 text-left pr-32">
            {product.product.name}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${calculateSalePrice(product.product.price, product.product.sale)}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${product.product.price}
            </span>
          </p>
        </div>
        <button className="flex items-center justify-center bg-green-800 px-2 w-full py-1 text-sm text-white transition hover:bg-green-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
