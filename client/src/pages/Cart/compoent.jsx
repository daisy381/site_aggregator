import {IconSelector} from "../../shared/IconSelector";
import {Input} from "../../shared/components/Input";
import {Button} from "../../shared/components/Button";
import {CartCard} from "../../components/Card";
import {EmptyBlock} from "../../shared/components/EmptyBlock/component";
import {useAppContext} from "../../context";
import {useCart} from "../../hooks";

export const Cart = () => {
  const {cartProducts, setModal} = useAppContext()
  if (cartProducts.length === 0) {
    return <EmptyBlock title='Корзина пуста' iconId='cart' description='Воспользуйтесь поиском, чтобы найти всё что нужно.'/>
  }

  const checkoutProduct = () => {
    setModal({title: "Оформление товара", description: 'Вы уверены что хотите оформить заказ?', isShow: true})
  }

  return <div className='my-[30px] grid'>
    <div className="container max-w-[1180px] mx-auto">
      <div className='space-x-2 flex justify-center items-center'>
        <IconSelector id='cart' fill='#000' size={[50, 50]}/>
        <h1 className='text-[30px] uppercase font-bold'>Коризна</h1>
      </div>
      <div className='my-[16px]'>
        <Input id='all' type='checkbox' title='Выбрать все'/>
      </div>
      <div className="flex space-x-2">
        <div className='flex flex-col flex-1 gap-y-5'>
          {cartProducts.map(item => (
              <CartCard key={item.id} {...item}/>
          ))}
        </div>
        <div className='bg-white self-start px-[40px] w-[350px] py-[25px]'>
          <h1 className='text-[20px] font-bold'> Ваша Корзина </h1>
          <ul className='flex flex-col gap-y-5 mt-[25px]'>
            <li className='flex flex-1 items-center justify-between'>
              <span>Вес заказ</span>
              <span className='opacity-50'>5 кг</span>
            </li>
            <li className='flex flex-1 items-center justify-between'>
              <span>Товары (2)</span>
              <span className='opacity-50'>100 000</span>
            </li>
            <li className='flex flex-1 items-center justify-between'>
              <span>Скидка</span>
              <span className='opacity-50'>-80 000</span>
            </li>
          </ul>
          <div className='mt-[25px] bg-gray-400 h-[2px] w-full'/>
          <div className='flex justify-between items-center mt-[31px]'>
            <span className='text-[20px] font-bold'>Общая стоймость</span>
            <span>20 000</span>
          </div>
          <div className='mt-[25px]'>
            <Button onClick={checkoutProduct} className='text-white bg-secondary p-2 rounded font-bold'>
              Офромить
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
}