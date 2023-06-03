import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1090px) {
    display: block;
  }
`;

export const LeftContainer = styled.div`
  width: 400px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  height: 100vh;
  @media screen and (max-width: 1090px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  width: 78vw;
  height: 100vh;

  @media screen and (max-width: 1090px) {
    width: 100%;
    height: 100vh;

    ::before {
      content: "";
      background-color: ${(props) => props.theme.colors.primaryColor};
      max-width: 100vh;
      min-width: 100%;
      height: 33px;
      display: block;
    }
  }
`;

export const FormStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-container {
    display: flex;
    flex-direction: column;
    // background-color: blue;
    width: 80%;
    height: 80%;
  }

  .form-container .header {
    font-size: 20px;
    margin: -1vh 0 2vh 8vw;
    font-weight: 600;
    max-width: 796px;
  }

  .form-container .body {
    height: 68vh;
  }

  .sign-up-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sign-up-container input {
    margin: 5px;
    width: 200px;
    height: 40px;
    padding-left: 5px;
    font-size: 20px;
  }

  .personal-info-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .personal-info-container input {
    margin: 5px;
    width: 200px;
    height: 40px;
    padding-left: 5px;
    font-size: 20px;
  }

  .other-info-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .other-info-container input {
    margin: 5px;
    width: 200px;
    height: 40px;
    padding-left: 5px;
    font-size: 20px;
  }

  input {
    border: 2px solid rgb(98, 0, 255);
    border-radius: 5px;
  }

  input:focus {
    border: 3px solid rgb(98, 0, 255);
  }

  @media screen and (max-width: 1090px) {
    .form-container {
      width: 100%;
      margin: 0 auto;
    }

    .form-container .header {
      font-size: 13.5px;
      font-weight: 600;
      margin: -4vh 0 2vh 8vw;
    }

    .form-container .body {
      width: 100%;
      overflow: scroll;
    }
  }
`;

export const NavStyled = styled.nav`
  margin-top: 70px;
  margin-left: 185px;

  ul {
    position: relative;
    list-style: none;
  }

  ul li {
    padding: 35px 0;
    padding-left: 10px;
  }

  ul li a {
    text-decoration: none;
    position: relative;
    color: #fff;
    font-size: 18px;
    line-height: 1rem;
    font-weight: 600;
  }

  ul li a:before {
    content: "";
    position: absolute;
    background: ${(props) => props.theme.colors.primaryColor};
    width: 18px;
    height: 18px;
    left: -2vw;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50px;
    border: 1px solid #fff;
    transition: background 250ms;
  }

  ul li a.act {
    font-weight: 700;
  }

  ul li a.act::before {
    background: #fff;
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 4vh;
  margin-right: 14vw;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 1090px) {
    flex-direction: column-reverse;
    margin: 4vh 6vw 0 6vw;
  }
`;

export const ButtonPrev = styled.button`
  color: ${(props) => props.theme.colors.primaryColor};
  border: none;
  background-color: white;
  padding: 16px;
  width: 12vw;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1090px) {
    width: 100%;
  }
`;

export const ButtonNext = styled.button`
  color: white;
  border: none;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 16px;
  width: 12vw;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: #277567;
  }

  @media screen and (max-width: 1090px) {
    width: 100%;
  }
`;
