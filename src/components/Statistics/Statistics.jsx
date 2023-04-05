import PropTypes from 'prop-types';
import { filterStats } from 'utils';
import * as S from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const filteredStats = filterStats(stats);

  return (
    <S.Section>
      {title && <S.Title>{title}</S.Title>}
      <S.List>
        {filteredStats.map(({ id, label, percentage }) => {
          return (
            <S.Item key={id}>
              <S.Label>{label}</S.Label>
              <S.Percentage>{percentage}%</S.Percentage>
            </S.Item>
          );
        })}
      </S.List>
    </S.Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
