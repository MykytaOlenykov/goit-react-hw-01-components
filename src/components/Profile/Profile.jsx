import PropTypes from 'prop-types';
import * as S from './Profile.styled';
import { toCapitalLetter } from 'utils';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <S.UserCard>
      <S.Description>
        <S.Avatar
          src={
            avatar ?? 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
          }
          alt={username}
        />
        <S.Name>{username}</S.Name>
        <S.Tag>@{tag}</S.Tag>
        <S.Location>{location}</S.Location>
      </S.Description>

      <S.StatsList>
        {Object.keys(stats).map(keyStat => {
          const labelStat = toCapitalLetter(keyStat);
          const quantityStat = stats[keyStat];

          return (
            <S.Item key={keyStat}>
              <S.Label>{labelStat}</S.Label>
              <S.Quantity>{quantityStat}</S.Quantity>
            </S.Item>
          );
        })}
        {/* <S.Item>
          <S.Label>Followers</S.Label>
          <S.Quantity>{stats.followers}</S.Quantity>
        </S.Item>
        <S.Item>
          <S.Label>Views</S.Label>
          <S.Quantity>{stats.views}</S.Quantity>
        </S.Item>
        <S.Item>
          <S.Label>Likes</S.Label>
          <S.Quantity>{stats.likes}</S.Quantity>
        </S.Item> */}
      </S.StatsList>
    </S.UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
