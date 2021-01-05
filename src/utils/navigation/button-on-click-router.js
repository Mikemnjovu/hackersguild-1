import { useHistory } from 'react-router-dom';

export const OnClickRouter = ({
  url,
}) => {
  const history = useHistory('');

  history.push(`${url}`);
  history.go(`${url}`);
};
