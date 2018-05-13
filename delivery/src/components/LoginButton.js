import Button from './Button';

const LoginButton = Button.extend`
  margin-top: 63px;

  @media (max-width: 1200px) {
    margin-top: 16px;
  }
`;

export default LoginButton;