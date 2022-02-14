import CardActivity from "../../molecules/CardActivity"
import Person from '../../assets/person.png'
import CardChart from '../../molecules/CardChart'

import * as S from './styles'

const ProductStats = () => {
    return (
        <S.Container>
          <CardActivity />
          <CardChart />
          <img src={Person} alt="Uma mulher fazendo uma pesquisa" />
        </S.Container>
    )
}

export default ProductStats