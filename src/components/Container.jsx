import styled from "styled-components"

const Container = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0 auto;
  padding: 1.5rem;
`

export default Container