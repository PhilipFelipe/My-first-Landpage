import Frontend from '../templates/Frontend'
import * as S from './styles'
import ProductInfo from '../organisms/ProductInfo'
import ProductStats from '../organisms/ProductStats'

function Main() {
  return (
    <Frontend>
      <S.Container>
        <ProductInfo />
        <ProductStats /> 
      </S.Container>

    </Frontend>
  )

}

export default Main;
