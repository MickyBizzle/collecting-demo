import { Button } from '../../Button';

export const NavButtons = () => (
  <>
    <Button
      label="sell with us"
      variant="primary"
      onClick={() => console.log('sell button')}
    />
    <Button
      label="Login"
      variant="secondary"
      onClick={() => console.log('login')}
    />
  </>
);
