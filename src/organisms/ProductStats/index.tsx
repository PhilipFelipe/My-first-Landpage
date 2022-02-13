import CardActivity from "../../molecules/CardActivity"

import * as S from './styles'
import Person from '../../assets/person.png'

const ProductStats = () => {
    return (
        <S.Container>
          <CardActivity />
          <img src={Person} alt="Uma mulher fazendo uma pesquisa" />
        </S.Container>
    )
}

export default ProductStats