import { useHistory } from 'react-router-dom';

export const OnClickRouterHandler = () => {
  const history = useHistory('');

  history.push(
    '/learn_more/hackerthons'
  );
  history.go('/learn_more/hackerthons');
};
