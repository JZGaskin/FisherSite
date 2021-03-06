import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`


:root {
  --clr-green: #2f3b28;
  --clr-oldgold: #9d7f39;
  --clr-gold: #c5a65e; /*#cfb53b*/
  --clr-white: #f2f2f2;
  --clr-gray: #191506;
  --clr-green: #2d372e;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
   --ff-slogan: 'Roboto', serif;
  --transition: all 0.3s linear;
  --spacing: 0.25rem;
  --radius: 0.5rem;
  --fixed-width: 620px;
}

*,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
html {
    font-size: 80%;
  }
body {
  background: #edeae9;
  color: var(--clr-grey-1);
  line-height: 1.8;
  font-size: 0.875rem;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: var(--clr-grey-1);
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-slogan);
}
h1 {
  font-size: 1.7rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 0.875;
}
p {
  margin-bottom: 1.25rem;
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 2.5rem;
  }
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
  body {
    font-size: 1rem;
  }
}
ul {
  list-style-type: none;
}


.btn {
  text-transform: uppercase;
  letter-spacing: var(--spacing);
  color: var(--clr-white);
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius);
  display: inline-block;
  transition: var(--transition);
  cursor: pointer;
  font-size: 1rem;
  background: var(--clr-primary);
  font-weight: 400;
}
.btn:hover {
  background: var(--clr-primary-light);
  color: var(--clr-primary);
}
.youtube-icon {
  color: #c4302b;
}
.twitter-icon {
  color: #1dcaff;
}
.github-icon {
  color: #fff;
}
.background {
  min-height: calc(100vh - 5rem);
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(34, 34, 34, 0.6);
}
.center-div {
  text-align: center;
}
.gatsby-image-wrapper {
  height: 12.93rem;
}
.center {
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto 2rem auto;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
}
@media screen and (min-width: 576px) {
  .center {
    grid-template-columns: repeat(auto-fill, minmax(358px, 1fr));
  }
  .container {
    grid-template-areas:
      "bioimage"
      "bio"
      "job1"
      "job2"
      "job3";
  }
}
@media screen and (min-width: 992px) {
  .center {
    width: 95vw;
  }
}
`

export default GlobalStyles
