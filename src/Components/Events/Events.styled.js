import styled, { ThemeProvider } from "styled-components";


export const theme = {
  font: "sans-serif",
  primary: "#333",
  secondary: "#999",
};

export const Card = styled.div`


  max-width: 350px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
  img {
    max-width: 100%;
    max-height: 50%;
    background-size: cover;
  }
  > div {
    padding: 10px 20px;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: bold;
        span {
          display: block;
          padding: 5px;
          font-weight: 300;
          font-size: 0.8rem;
          color: ${(props) => props.theme.secondary};
        }
      }
      img {
        max-width: 50px;
        border-radius: 100%;
      }
    }
  }
`;



export const GlobalStyles = styled.div`
	font-family: ${(props) => props.theme.font};
	color: ${(props) => props.theme.primary};
  
`;