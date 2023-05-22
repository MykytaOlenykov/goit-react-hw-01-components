import { GlobalStyles } from 'components/GlobalStyles';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';
import user from 'user';
import data from 'data';
import friends from 'friends';
import transactions from 'transactions';
import * as S from './App.styled';

export const App = () => (
  <S.Container>
    <GlobalStyles />
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </S.Container>
);
