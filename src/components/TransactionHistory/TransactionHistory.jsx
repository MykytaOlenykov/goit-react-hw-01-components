import PropTypes from 'prop-types';
import { toCapitalLetter } from 'utils';
import * as S from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <S.Table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        const transactionType = toCapitalLetter(type);

        return (
          <tr key={id}>
            <td>{transactionType}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        );
      })}
    </tbody>
  </S.Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
