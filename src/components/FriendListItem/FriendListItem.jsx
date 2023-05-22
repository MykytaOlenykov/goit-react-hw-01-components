import PropTypes from 'prop-types';
import * as S from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => (
  <S.Item>
    <S.Status status={status}></S.Status>
    <S.Avatar src={avatar} alt={name} width="48" />
    <S.Name>{name}</S.Name>
  </S.Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
