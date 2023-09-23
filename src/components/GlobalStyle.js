import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
p {
  margin: 0px;
  padding: 5px;
}

ul {
  margin: 0;
  padding: 0;
  }

a {
  display: block;
  color: currentColor;
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
}

img {
  display: block;
}
h1,h2 {
  margin-bottom: 10px;
  }

#root {
  margin: 30px;
  padding: 30px;
  background-color: #b5e6ac;
  width: 500px;
  display: block;
  border-radius: 8px;
  box-shadow: 1px 1px 8px 0px #000000;  
}
`;
