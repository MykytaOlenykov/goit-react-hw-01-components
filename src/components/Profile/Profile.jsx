import PropTypes from 'prop-types';
import { toCapitalLetter } from 'utils';
import * as S from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  const labelsStat = Object.keys(stats);

  return (
    <S.UserCard>
      <S.Description>
        <S.Avatar src={avatar} alt={username} />
        <S.Name>{username}</S.Name>
        <S.Tag>@{tag}</S.Tag>
        <S.Location>{location}</S.Location>
      </S.Description>

      <S.StatsList>
        {labelsStat.map(keyStat => {
          const labelStat = toCapitalLetter(keyStat);
          const quantityStat = stats[keyStat];

          return (
            <S.Item key={keyStat}>
              <S.Label>{labelStat}</S.Label>
              <S.Quantity>{quantityStat}</S.Quantity>
            </S.Item>
          );
        })}
      </S.StatsList>
    </S.UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
