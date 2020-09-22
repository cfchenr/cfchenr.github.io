import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 10%;

  width: 100vw;
  /* height: 100vh; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: var(--primary);
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
  span {
    color: var(--primary);
  }

  .section {
    padding: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100vh;
  }

  :root {
    --primary: #8257e6;
  }
`
