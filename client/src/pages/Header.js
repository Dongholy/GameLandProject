import { useRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  Headercontainer,
  Logo,
  Logoimg,
  Gnb,
  Gnbul,
  ButtonContainer,
  LoginButton,
  SignUpButton,
} from '../style/Style';

function Header() {
  const navigate = useNavigate();
  const handleMain = () => {
    navigate('/');
  };
  const handleMmorpg = () => {
    navigate('/mmorpg');
  };

  const handleFps = () => {
    navigate('/fps');
  };

  const handleMusic = () => {
    navigate('/music');
  };

  const handleSports = () => {
    navigate('/sports');
  };
  const handleAction = () => {
    navigate('/action');
  };

  const handlePlash = () => {
    navigate('/plash');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };
  return (
    <HeaderContainer>
      <Headercontainer>
        <Logo>
          <Logoimg onClick={handleMain} src="logo.jpg" alt="logo" />
        </Logo>
        <Gnb>
          <Gnbul onClick={handleMmorpg}>MO/MMORPG</Gnbul>
          <Gnbul onClick={handleFps}>FPS/RTS/TPS</Gnbul>
          <Gnbul onClick={handleMusic}>뮤직/퍼즐/보드</Gnbul>
          <Gnbul onClick={handleSports}>스포츠/슈팅/레이싱</Gnbul>
          <Gnbul onClick={handleAction}>액션/웹게임</Gnbul>
          <Gnbul onClick={handlePlash}>플래시게임</Gnbul>
        </Gnb>
        <ButtonContainer>
          <LoginButton onClick={handleLogin}>Log in</LoginButton>
          <SignUpButton onClick={handleSignup}>Sign Up</SignUpButton>
        </ButtonContainer>
      </Headercontainer>
    </HeaderContainer>
  );
}

export default Header;
