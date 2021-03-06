import Head from 'next/head'
import { useRouter } from 'next/router'

import styled from 'styled-components'
import db from '../db.json'

import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubConer'
import Footer from '../src/components/Footer'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {

  const router = useRouter();
  const [name, setName] = React.useState('')
  return (
  
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Dragon Ball - Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissão por meio do react');
              }}
              >
                <input
                  onChange={function (infosDoEvento) {
                    console.log(infosDoEvento.target.value);
                    // State
                    // name = infosDoEvento.target.value;
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Diz aí seu nome"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                </button>
              </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/leosantosx" />
    </QuizBackground>
    ) 
    
}
