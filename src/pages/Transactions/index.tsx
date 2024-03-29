import { Header } from '../../components/Header';
import Summary from '../../components/Summary';
import { PriceHightlight, TransactionsContainer, TransactionsTable } from './styles';

export function Transactions () {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Web page development</td>
              <td>
                <PriceHightlight variant="income">
                  $12 000.00

                </PriceHightlight>
              </td>
              <td>Sale</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Fast Food</td>
              <td>
                <PriceHightlight variant="outcome">
                  - $15.00
                </PriceHightlight>
                </td>
              <td>Food</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}